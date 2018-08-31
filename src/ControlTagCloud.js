import React, { Component } from "react";

export default class ControlTagCloud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.nameList = [];
  }
  addTag = event => {
    if (event.key === "Enter") {
      this.nameList.push(this.state.value);
      this.setState({ value: "" });
    }
  };
  submitButton = () => {
    if (this.state.value) {
      this.nameList.push(this.state.value);
      this.setState({ value: "" });
    }
  };
  removeTag = removeNameList => {
    var array = this.nameList;
    var index = array.indexOf(removeNameList);
    array.splice(index, 1);
    this.nameList = array;
    this.setState({ value: "" });
  };
  handleChange = event => {
    this.setState({ value: event.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state.value);
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.props.render({
          value: this.state.value,
          nameList: this.nameList,
          addTag: this.addTag,
          submitButton: this.submitButton,
          removeTag: this.removeTag,
          handleChange: this.handleChange
        })}
      </React.Fragment>
    );
  }
}
