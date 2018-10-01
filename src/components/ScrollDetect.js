import React from "react";
import "./ScrollDetect.css";
import ScrollDetector from "./ScrollDetector";
class ScrollDetect extends React.Component {
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
        <div className="row">
          <p>status:</p>
          <div>{this.state.log}</div>
        </div>

        <ScrollDetector
          onScrollBottom={() => this.handleScrollBottom()}
          onScrollTop={() => this.handleScrollTop()}
        >
          <div className="outer">
            {Array.from({ length: 30 }, (_, index) => (
              <div key={index} className="item">
                Item {index + 1}
              </div>
            ))}
          </div>
        </ScrollDetector>
      </div>
    );
  }
}

export default ScrollDetect;
