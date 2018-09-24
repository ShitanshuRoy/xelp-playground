import React, { Component } from "react";

export default class View extends Component {
  render() {
    const { offset } = this.props;

    const styles = ["ViewSwitcher-View"];

    if (offset > 0) {
      styles.push("ahead");
    } else if (offset < 0) {
      styles.push("behind");
    } else {
      styles.push("current");
    }

    return <div className={styles.join(" ")}>{this.props.children}</div>;
  }
}
