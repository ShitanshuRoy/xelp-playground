import React from "react";
import styles from "./CheckBox.module.css";
export default class CheckBox extends React.Component {
  render() {
    let className = styles.base;
    if (this.props.selected && this.props.selected.length > 0) {
      className = styles.selected;
    }
    return <div className={className} />;
  }
}
