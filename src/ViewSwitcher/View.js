import React, { Component } from "react";
import styles from "./ViewSwitch.module.css";
export default class View extends Component {
  render() {
    return (
      <div className={styles.viewShow}>
        {this.props.children}
      </div>
    );
  }
}
