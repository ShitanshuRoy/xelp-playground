import React, { Component } from "react";
import ControlTagCloud from "./ControlTagCloud";
import "./TagCloud.css";

export default class TagCloud extends Component {
  render() {
    return (
      <div className="Input">
        <ControlTagCloud
          render={controlTagCloudValues => {
            return (
              <React.Fragment>
                <div
                  className={"button"}
                  onClick={controlTagCloudValues.submitButton}
                >
                  Done
                </div>
                <div className={"base"}>
                  <input
                    placeholder={this.props.placeholder}
                    onChange={event =>
                      controlTagCloudValues.handleChange(event)
                    }
                    value={controlTagCloudValues.value}
                    onKeyUp={event => {
                      controlTagCloudValues.addTag(event);
                    }}
                  />
                </div>
                <div className="nameListBase">
                  {controlTagCloudValues.nameList &&
                    controlTagCloudValues.nameList.map((nameList, i) => {
                      return (
                        <div className="nameListWithCross">
                          <div className="nameList">{nameList}</div>
                          <div
                            className="crossIcon"
                            onClick={val =>
                              controlTagCloudValues.removeTag(nameList)
                            }
                          />
                        </div>
                      );
                    })}
                </div>
              </React.Fragment>
            );
          }}
        />
      </div>
    );
  }
}
