import React, {Component} from 'react'
import { ToastContainer } from 'react-toastify';


class Notification extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ToastContainer/>
      </div>
    )
  }
}

export default Notification;
