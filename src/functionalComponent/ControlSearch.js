import React, { Component } from "react";
export default class ControlSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      value: ""
    };
  }
  filterItems = () => {
    if (this.props.searchString) {
      return (
        this.props.data &&
        this.props.data.filter(el =>
          el[this.props.keyName].includes(this.props.searchString)
        )
      );
    } else {
      return "";
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.props.render({
          filterItems: this.filterItems()
        })}
      </React.Fragment>
    );
  }
}
