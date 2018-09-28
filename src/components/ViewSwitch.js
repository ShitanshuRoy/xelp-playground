import React, { Component } from "react";
import styles from "./ViewSwitch.module.css";
import ViewSwitcher from "./ViewSwitcher";

class ViewSwitch extends Component {
  render() {
    return (
      <div className={styles.ViewSwitcher}>
        <ViewSwitcher
          render={displayViewData => {
            return (
              <div className={styles.displayView}>
                <div className={styles.buttonHolder}>
                  {this.props.children &&
                    this.props.children.map((child, i) => {
                      return (
                        <button
                          onClick={() =>
                            displayViewData.displayView(this.props.children[i])
                          }
                        >
                          {i + 1}
                        </button>
                      );
                    })}
                </div>
                <div className={styles.activeView}>
                  {displayViewData.activeView}
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default ViewSwitch;
