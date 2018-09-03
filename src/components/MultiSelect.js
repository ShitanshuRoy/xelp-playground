import React from "react";
import ControlMultiSelect from "../functionalComponent/ControlMultiSelect";
import CheckBox from "./CheckBox";
import "./MultiSelect.css";
export default class MultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: ""
    };
  }
  selectItem(value, selectControlFunction) {
    this.setState({ selectedItems: value });
    selectControlFunction(value);
  }
  render() {
    return (
      <div>
        <ControlMultiSelect
          limit={this.props.limit}
          selected={this.state.selectedItems}
          render={controlMultiSelectValues => {
            return this.props.data.map((val, i) => {
              return (
                <div
                  className={"textWithCheckBox"}
                  onClick={data =>
                    this.selectItem(val, controlMultiSelectValues.selectItem)
                  }
                >
                  <div className={"text"}>{val}</div>
                  <div className={"checkboxHolder"}>
                    {controlMultiSelectValues.selected &&
                    controlMultiSelectValues.selected.length > 0 ? (
                      controlMultiSelectValues.selected.map(
                        (selectedValue, j) => {
                          return (
                            <CheckBox
                              selected={
                                selectedValue === val ? selectedValue : ""
                              }
                            />
                          );
                        }
                      )
                    ) : (
                      <CheckBox />
                    )}
                  </div>
                </div>
              );
            });
          }}
        />
      </div>
    );
  }
}
