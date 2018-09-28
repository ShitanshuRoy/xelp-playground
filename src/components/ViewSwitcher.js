import React, { Component } from "react";

export default class ViewSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeView: " "
    };
  }
  displayView = child => {
    this.setState({ activeView: child });
  };
  render() {
    return (
      <React.Fragment>
        {this.props.render({
          activeView: this.state.activeView,
          displayView: this.displayView
        })}
      </React.Fragment>
    );
  }
}
