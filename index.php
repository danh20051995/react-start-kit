<?php

function console_log($message)
{
  $out = fopen('php://stdout', 'w'); //stdout handler
  fputs($out, "$message\n"); //writing stdout operation
  fclose($out); //closing handler
}

function join_paths()
{
  $paths = array();

  foreach (func_get_args() as $arg) {
    if ($arg !== '') {
      $paths[] = $arg;
    }
  }

  return preg_replace('#/+#', '/', join('/', $paths));
}

function mimeType($path)
{
  preg_match("|\.([a-z0-9]{2,4})$|i", $path, $fileSuffix);

  switch (strtolower($fileSuffix[1])) {
    case 'js':
      return 'application/javascript';
    case 'json':
      return 'application/json';
    case 'jpg':
    case 'jpeg':
    case 'jpe':
      return 'image/jpg';
    case 'png':
    case 'gif':
    case 'bmp':
    case 'tiff':
      return 'image/' . strtolower($fileSuffix[1]);
    case 'css':
      return 'text/css';
    case 'xml':
      return 'application/xml';
    case 'doc':
    case 'docx':
      return 'application/msword';
    case 'xls':
    case 'xlt':
    case 'xlm':
    case 'xld':
    case 'xla':
    case 'xlc':
    case 'xlw':
    case 'xll':
      return 'application/vnd.ms-excel';
    case 'ppt':
    case 'pps':
      return 'application/vnd.ms-powerpoint';
    case 'rtf':
      return 'application/rtf';
    case 'pdf':
      return 'application/pdf';
    case 'html':
    case 'htm':
    case 'php':
      return 'text/html';
    case 'txt':
      return 'text/plain';
    case 'mpeg':
    case 'mpg':
    case 'mpe':
      return 'video/mpeg';
    case 'mp3':
      return 'audio/mpeg3';
    case 'wav':
      return 'audio/wav';
    case 'aiff':
    case 'aif':
      return 'audio/aiff';
    case 'avi':
      return 'video/msvideo';
    case 'wmv':
      return 'video/x-ms-wmv';
    case 'mov':
      return 'video/quicktime';
    case 'zip':
      return 'application/zip';
    case 'tar':
      return 'application/x-tar';
    case 'swf':
      return 'application/x-shockwave-flash';
    default:
      if (function_exists('mime_content_type')) {
        $fileSuffix = mime_content_type($path);
      }
      return 'unknown/' . trim($fileSuffix[0], '.');
  }
}

class Request
{
  static function method()
  {
    return $_SERVER['REQUEST_METHOD'];
  }

  static function uri()
  {
    return $_SERVER['REQUEST_URI'];
  }

  static function path()
  {
    $paths = explode('?', Request::uri());
    return array_shift($paths);
  }

  static function isAccept($type)
  {
    if (!isset($_SERVER['HTTP_ACCEPT_ENCODING'])) {
      return false;
    }

    return strpos($_SERVER['HTTP_ACCEPT_ENCODING'], $type) !== false;
  }
}

function response($file)
{
  if (Request::isAccept('gzip') && file_exists("$file.gz")) {
    $file = "$file.gz";
  }

  preg_match("|\.([a-z0-9]{2,4})$|i", $file, $fileSuffix);
  if (strtolower($fileSuffix[1]) === 'gz') {
    header("Content-Encoding: gzip");
  }

  header($_SERVER["SERVER_PROTOCOL"] . " 200 OK");
  header("Cache-Control: public"); // needed for internet explorer
  header("Content-Type: " . mimeType(preg_replace('/.gz$/', '', $file)));
  header("Content-Length: " . filesize($file));
  // header("Content-Disposition: attachment; filename=" . basename($file)); // in-case download file
  readfile($file);
  exit();
}

$_METHOD = Request::method();
$_PATHNAME = Request::path();

$CURRENT_DIR = dirname(__FILE__);
$BUILD_DIR = join_paths($CURRENT_DIR, 'build');
$FILE_DEFAULT = join_paths($BUILD_DIR, 'index.html');
$FILE_PATH = join_paths($BUILD_DIR, Request::path());

if (is_dir($FILE_PATH) || !file_exists($FILE_PATH)) {
  return response($FILE_DEFAULT);
}

return response($FILE_PATH);
