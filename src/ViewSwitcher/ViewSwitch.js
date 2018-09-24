import React, { Component } from "react";
import styles from "./ViewSwitch.module.css";
import p1 from "./img/p1.jpeg";
import p2 from "./img/p2.jpeg";
import p3 from "./img/p3.jpeg";

import ViewSwitcher from "./ViewSwitcher";

class ViewSwitch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeState: 0
    };
  }

  skip(offset) {
    this.setState(prevState => {
      return {
        activeState: prevState.activeState + offset
      };
    });
  }

  prev = () => {
    this.state.activeState > 0 && this.skip(-1);
  };

  next = () => {
    this.state.activeState < 5 && this.skip(1);
  };

  render() {
    const { activeState } = this.state;

    return (
      <div className={styles.header}>
        <div className={styles.buttonHolder}>
          <button onClick={this.prev}>Prev</button>
          <button onClick={this.next}>Next</button>
        </div>

        <ViewSwitcher activeState={activeState} count={6}>
          <div>
            <h1>hi</h1>
            <h1>hello hello hello hello hello hello</h1>
          </div>
          <p>hhghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhggg</p>
          <h3>nyc</h3>
          <img src={p1} />
          <img src={p2} />
          <img src={p3} />
        </ViewSwitcher>
      </div>
    );
  }
}

export default ViewSwitch;
