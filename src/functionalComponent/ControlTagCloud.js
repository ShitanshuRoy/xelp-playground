import React, { Component } from "react";

export default class ControlTagCloud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameList: []
    };
  }
  addTag = value => {
    this.state.nameList.push(value);
    this.setState({ nameList: this.state.nameList });
  };
  removeTag = removeNameList => {
    var array = this.state.nameList;
    var index = array.indexOf(removeNameList);
    array.splice(index, 1);
    this.state.nameList = array;
    this.setState({ nameList: this.state.nameList });
  };
  render() {
    return (
      <React.Fragment>
        {this.props.render({
          nameList: this.state.nameList,
          addTag: this.addTag,
          removeTag: this.removeTag
        })}
      </React.Fragment>
    );
  }
}
