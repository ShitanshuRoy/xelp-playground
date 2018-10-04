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
    this.scrollend = 0;
    this.scrollTop = 0;
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
    ReactDOM.findDOMNode(this.refs.scroll).addEventListener("scroll", e =>
      this.onScroll(e)
    );
  }

  onScroll(position) {
    const { onScrollBottom, onScrollTop } = this.props;
    this.scrollTop = position.target.scrollTop;
    this.scrollend =
      position.target.scrollHeight - position.target.offsetHeight;
    this.setState({ scrollPosition: position.target.scrollTop });
    if (this.scrollTop >= this.scrollend) {
      return this.setScrollBottom(), onScrollBottom();
    }
    if (this.scrollTop == 0) {
      return this.setScrollTop(), onScrollTop();
    }
  }
  render() {
    return <React.Fragment>{this.props.render(this.state)}</React.Fragment>;
  }
}
