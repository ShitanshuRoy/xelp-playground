import React, { Component } from "react";

export default class ControlInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      focused: false
    };
  }
  handleFocus = event => {
    this.setState({ focused: true });
  };
  handleBlur = event => {
    this.setState({ focused: false });
  };
  handleChange = event => {
    if (this.props.validator) {
      this.setState({ value: this.props.validator(event.target.value) }, () => {
        if (this.props.onChange) {
          this.props.onChange(this.state.value);
        }
      });
    } else {
      this.setState({ value: event.target.value }, () => {
        if (this.props.onChange) {
          this.props.onChange(this.state.value);
        }
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.props.render({
          handleChange: this.handleChange,
          value: this.state.value ? this.state.value : this.props.value,
          focused: this.state.focused,
          handleFocus: this.handleFocus,
          handleBlur: this.handleBlur
        })}
      </React.Fragment>
    );
  }
}
