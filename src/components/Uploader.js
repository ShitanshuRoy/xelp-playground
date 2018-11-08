import React, { Component } from "react";
export default class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFileName: null,
      selectedFile: null
    };
  }
  handleFileChanges = file => {
    if (this.props.handleChange) {
      this.props.handleChange(file);
    }
  };
  fileChangedHandler = event => {
    if (event.target.files == null || event.target.files == undefined) {
      const file =
        event &&
        event.nativeEvent &&
        event.nativeEvent.dataTransfer &&
        event.nativeEvent.dataTransfer.files &&
        event.nativeEvent.dataTransfer.files[0];
      this.setState({ selectedFileName: file.name, selectedFile: file }, () =>
        this.handleFileChanges(this.state)
      );
      return true;
    } else {
      const file =
        event && event.target && event.target.files && event.target.files[0];
      this.setState({ selectedFileName: file.name, selectedFile: file }, () =>
        this.handleFileChanges(this.state)
      );
      return true;
    }
  };
  componentDidMount() {
    window.addEventListener(
      "dragover",
      function(e) {
        e.preventDefault();
      },
      false
    );
    window.addEventListener(
      "drop",
      function(e) {
        e.preventDefault();
      },
      false
    );
  }
  render() {
    return (
      <React.Fragment>
        {this.props.render({
          selectedFileName: this.state.selectedFileName,
          selectedFile: this.state.selectedFile,
          fileChangedHandler: this.fileChangedHandler
        })}
      </React.Fragment>
    );
  }
}
