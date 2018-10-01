import React from "react";
import PropTypes from "prop-types";
import Scroller from "./Scroller";
import "./Scroller.css";
export default class ScrollDetector extends React.Component {
  static propTypes = {
    onScrollTop: PropTypes.func,
    onScrollBottom: PropTypes.func,
    debounceTime: PropTypes.number
  };

  static defaultProps = {
    onScrollTop: () => {},
    onScrollBottom: () => {},
    debounceTime: 500
  };

  constructor(props) {
    super(props);
    this.state = {
      LastScroll: 0
    };
  }

  onScroll(position, ScrollView) {
    ScrollView.setScrollDefault();
    const { onScrollBottom, onScrollTop } = this.props;
    const top = position.scrollTop;
    const end = position.scrollHeight - position.offsetHeight;
    if (top >= end) {
      return ScrollView.setScrollBottom(), onScrollBottom();
    }
    if (top == this.state.LastScroll) {
      return ScrollView.setScrollTop(), onScrollTop();
    }
  }

  render() {
    return (
      <Scroller
        render={ScrollView => {
          ScrollView.scrollTop = false;
          ScrollView.scrollBottom = false;
          return (
            <div
              className={"container"}
              onFocus={() => ScrollView.setScrollDefault()}
              onScroll={position => this.onScroll(position.target, ScrollView)}
            >
              {this.props.children}
            </div>
          );
        }}
      />
    );
  }
}
//clientHight:-returns the inner height of an element in pixels, including padding but not the horizontal scrollbar height, border, or margin
//offsetHight:-is a measurement which includes the element borders, the element vertical padding, the element horizontal scrollbar (if present, if rendered) and the element CSS height.
//scrollHeight:-is a measurement of the height of an element's content including content not visible on the screen due to overflow
