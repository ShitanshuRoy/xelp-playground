import React, { Component } from "react";

export default class ViewSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: false,
      scrollBottom: false
    };
  }
  setScrollBottom = () => {
    console.log("scrollBottom");
    this.setState({
      scrollBottom: true,
      scrollTop: false
    });
  };
  setScrollTop = () => {
    console.log("scrollTop");
    this.setState({
      scrollBottom: false,
      scrollTop: true
    });
  };
  setScrollDefault = () => {
    this.setState({
      scrollBottom: false,
      scrollTop: false
    });
  };
  render() {
    return (
      <React.Fragment>
        {this.props.render({
          scrollBottom: this.state.scrollBottom,
          scrollTop: this.state.scrollTop,
          setScrollBottom: this.setScrollBottom,
          setScrollTop: this.setScrollTop,
          setScrollDefault: this.setScrollDefault
        })}
      </React.Fragment>
    );
  }
}
