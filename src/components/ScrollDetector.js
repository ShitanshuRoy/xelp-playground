import React from "react";
import Scroller from "./Scroller";
export default class ScrollDetector extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Scroller
          onScrollBottom={() => this.props.onScrollBottom()}
          onScrollTop={() => this.props.onScrollTop()}
          render={scrollView => (
            <React.Fragment>
              {this.props.children}
              {scrollView.scrollPosition}
            </React.Fragment>
          )}
        />
      </React.Fragment>
    );
  }
}
