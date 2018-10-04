import React, { Component } from "react";
import ReactDOM from "react-dom";
export default class ViewSwitcher extends Component {
  static defaultProps = {
    onScrollTop: () => {},
    onScrollBottom: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      scrollTop: false,
      scrollBottom: false,
      scrollPosition: 0
    };
  }
  setScrollBottom = () => {
    this.setState({
      scrollBottom: true,
      scrollTop: false
    });
  };
  setScrollTop = () => {
    this.setState({
      scrollBottom: false,
      scrollTop: true
    });
  };
  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener("scroll", e =>
      this.onScroll(e)
    );
  }

  onScroll(position) {
    const { onScrollBottom, onScrollTop } = this.props;
    const top = position.target.scrollTop;
    const end = position.target.scrollHeight - position.target.offsetHeight;
    this.setState({ scrollPosition: position.target.scrollTop });
    if (top >= end) {
      return this.setScrollBottom(), onScrollBottom();
    }
    if (top == 0) {
      return this.setScrollTop(), onScrollTop();
    }
  }
  render() {
    return <React.Fragment>{this.props.render(this.state)}</React.Fragment>;
  }
}
