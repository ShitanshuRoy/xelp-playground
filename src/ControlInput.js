import React, { Component } from "react";
import { onlyAlphabet, onlyNumber } from "./utils/utils";
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
    if (this.props.onlyNumber) {
      if (this.props.onlyNumberFunction(event.target.value)) {
        this.setState({ value: event.target.value }, () => {
          if (this.props.onChange) {
            this.props.onChange(this.state.value);
          }
        });
      }
    }
    if (this.props.onlyAlphabet) {
      if (this.props.onlyAlphabetFunction(event.target.value)) {
        this.setState({ value: event.target.value }, () => {
          if (this.props.onChange) {
            this.props.onChange(this.state.value);
          }
        });
      }
    }
    if (!this.props.onlyAlphabet && !this.props.onlyNumber) {
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
          handleBlur: this.handleBlur,
          onlyAlphabet: this.onlyAlphabet,
          onlyNumber: this.onlyNumber
        })}
      </React.Fragment>
    );
  }
}
