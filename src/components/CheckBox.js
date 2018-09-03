import React from "react";
import "./CheckBox.css";
export default class CheckBox extends React.Component {
  render() {
    let className = "base";
    if (this.props.selected && this.props.selected.length > 0) {
      className = "selected";
    }
    return <div className={className} />;
  }
}
