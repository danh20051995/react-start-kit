import React from 'react'

export default props => (
  <div
    className="app-loading"
    style={{ display: props.show ? '' : 'none' }}
  >
    Loading&#8230;
  </div>
)
