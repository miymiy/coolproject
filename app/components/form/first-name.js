// @flow

import React from 'react'
import FormControl, { FORM_CONTROL_TYPES } from './form-control'

class FirstNameField extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const elem = document.getElementById('fname');
      if (elem) elem.focus();
    }, 0);
  }

  render() {
    return (
      <FormControl
        id='firstName'
        label='First Name'
        required
        placeholder='First Name'
        type={FORM_CONTROL_TYPES.TEXT}
      />
    )
  }
}

export default FirstNameField