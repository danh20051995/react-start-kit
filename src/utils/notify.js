import { toast } from 'react-toastify'

export const errorNotify = data => {
  toast.error(data.message, {
    position: toast.POSITION.TOP_RIGHT,
    ...data
  })
}

export const successNotify = data => {
  toast.success(data.message, {
    position: toast.POSITION.TOP_RIGHT,
    ...data
  })
}

export const warnNotify = data => {
  toast.warn(data.message, {
    position: toast.POSITION.TOP_RIGHT,
    ...data
  })
}

export const infoNotify = data => {
  toast.info(data.message, {
    position: toast.POSITION.TOP_RIGHT,
    ...data
  })
}

/**
 * Show notify message
 */
export const notify = ({ type = 'success', message = '' } = {}, options = {}) => {
  const types = [ 'info', 'success', 'warning', 'error' ]
  if (!types.includes(type)) {
    throw new Error('Notify type must be one of: [ \'info\', \'success\', \'warning\', \'error\' ]')
  }

  return ({
    info: infoNotify,
    success: successNotify,
    warning: warnNotify,
    error: errorNotify
  })[type]({ message })
}
