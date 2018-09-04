import React, { Component } from "react";

export default class ControlMultiSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected ? this.props.selected : []
    };
  }
  selectItem = val => {
    let selected = this.state.selected.slice();
    if (selected.includes(val)) {
      selected = selected.filter(label => val !== label);
    } else {
      if (this.props.limit && this.props.limit <= selected.length) {
        selected.shift();
      }
      selected.push(val);
    }
    this.setState({ selected }, () => {
      if (this.props.onSelect) {
        this.props.onSelect(this.state.selected);
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.props.render({
          selected: this.state.selected,
          selectItem: this.selectItem
        })}
      </React.Fragment>
    );
  }
}
