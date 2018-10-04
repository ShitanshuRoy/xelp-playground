import React from "react";
import "./ScrollDetect.css";
import Scroller from "./Scroller";
export default class ScrollDetector extends React.Component {
  state = {
    log: ""
  };

  handleScrollBottom = () => {
    this.addLog("Scrolled to Bottom !");
  };
  handleScrollTop = () => {
    this.addLog("Scrolled to Top !");
  };

  addLog = text => {
    this.setState({
      log: text
    });
  };

  render() {
    return (
      <div>
        <Scroller
          onScrollBottom={() => this.handleScrollBottom()}
          onScrollTop={() => this.handleScrollTop()}
          render={scrollView => (
            <div>
              <div className="row">
                <p>status:</p>
                <div>
                  scrollPosition:
                  {scrollView.scrollPosition}
                </div>
                <div>{this.state.log}</div>
              </div>

              <div className="outer" ref="scroll">
                {Array.from({ length: 30 }, (_, index) => (
                  <div key={index} className="item">
                    Item {index + 1}
                  </div>
                ))}
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}
