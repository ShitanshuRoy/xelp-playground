import React, { Component } from "react";
export default class Uploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: []
    };
  }
  handleFileChanges = file => {
    if (this.props.handleChange) {
      this.props.handleChange(file);
    }
  };
  fileChangedHandler = event => {
    let file = null;
    if (event.target.files == null || event.target.files == undefined) {
      file =
        event &&
        event.nativeEvent &&
        event.nativeEvent.dataTransfer &&
        event.nativeEvent.dataTransfer.files;
    } else {
      file = file = event && event.target && event.target.files;
    }
    if (this.props.multiple && file != null && file != undefined) {
      this.setState(
        {
          selectedFile: [...file]
        },
        () => this.handleFileChanges(this.state)
      );
    } else {
      this.setState(
        {
          selectedFile: [file]
        },
        () => this.handleFileChanges(this.state)
      );
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
