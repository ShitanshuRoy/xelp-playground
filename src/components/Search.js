import React, { Component } from "react";
import ControlSearch from "../functionalComponent/ControlSearch";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleChange = val => {
    this.setState({ value: val });
  };
  render() {
    return (
      <div>
        <ControlSearch
          keyName={this.props.keyName}
          searchString={this.state.value}
          data={this.props.data}
          render={search => {
           
            return (
              <div>
                <div>
                  <input
                    type="text"
                    onChange={event => this.handleChange(event.target.value)}
                    value={this.state.value}
                  />
                </div>
                <div>
                  {search &&
                    search.filterItems &&
                    search.filterItems.map((val, i) => {
                      return <div key={i}>{val.name}</div>;
                    })}
                  {!search.filterItems &&
                    this.props.data.map((val, j) => {
                      return <div key={j}>{val.name}</div>;
                    })}
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}
