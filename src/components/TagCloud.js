import React, { Component } from "react";
import ControlTagCloud from "../functionalComponent/ControlTagCloud";
import "./TagCloud.css";
export default class TagCloud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  onEnter = (event, addTagFunction) => {
    if (event.key === "Enter") {
      addTagFunction(this.state.value);
    }
  };
  onSubmit = addTagFunction => {
    addTagFunction(this.state.value);
  };
  render() {
    return (
      <div className="Input">
        <ControlTagCloud
          value={this.props.value}
          render={controlTagCloudValues => {
            return (
              <React.Fragment>
                <div
                  className={"button"}
                  onClick={() => this.onSubmit(controlTagCloudValues.addTag)}
                >
                  Done
                </div>
                <div className={"base"}>
                  <input
                    placeholder={this.props.placeholder}
                    onChange={event => this.handleChange(event)}
                    value={controlTagCloudValues.value}
                    onKeyUp={event => {
                      this.onEnter(event, controlTagCloudValues.addTag);
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
