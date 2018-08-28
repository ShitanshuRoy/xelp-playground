import React, { Component } from "react";
import ControlInput from "./ControlInput";
import "./Input.css";
class Input extends Component {
  onChange(val) {
    if (this.props.onChange) {
      this.props.onChange(val);
    }
  }
  render() {
    return (
      <div className="Input">
        <ControlInput
          value={this.props.value}
          validator={this.props.validator}
          onChange={val => this.onChange(val)}
          render={handleInputValues => {
            return (
              <div
                className={this.props.disabled ? "disabled" : "base"}
                style={{ height: this.props.height }}
              >
                <input
                  type={this.props.type}
                  placeholder={this.props.placeholder}
                  maxLength={this.props.maxLength}
                  autoFocus={this.props.autoFocus}
                  onChange={event => handleInputValues.handleChange(event)}
                  value={handleInputValues.value ? handleInputValues.value : ""}
                  onFocus={event => handleInputValues.handleFocus(event)}
                  onBlur={event => handleInputValues.handleBlur(event)}
                />
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default Input;
