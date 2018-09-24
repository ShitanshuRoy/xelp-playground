import React, { Component } from "react";
import "./ViewSwitcher.css";
import View from "./View";
export default class ViewSwitcher extends Component {
  render() {
    const { activeState } = this.props;
    return (
      <div className={"ViewSwitcher"}>
        {this.props.children &&
          this.props.children.map((child, index) => {
            return (
              <View key={index} offset={index - activeState}>
                {child}
              </View>
            );
          })}
      </div>
    );
  }
}
