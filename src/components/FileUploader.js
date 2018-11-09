import React, { Component } from "react";
import Uploader from "./Uploader";
export default class FileUploader extends Component {
  handleChange(files) {
    if (this.props.handleFileChanges) {
      this.props.handleFileChanges(files);
    }
  }
  render() {
    return (
      <div>
        <Uploader
          handleChange={data => this.handleChange(data)}
          multiple={this.props.multiple ? this.props.multiple : false}
          render={fileUpload => {
            return (
              <div>
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={fileUpload.fileChangedHandler}
                  ref={fileInput => (this.fileInput = fileInput)}
                  multiple={this.props.multiple ? this.props.multiple : false}
                />
                <div
                  onClick={() => this.fileInput.click()}
                  onDrop={fileUpload.fileChangedHandler}
                >
                  {this.props.children}
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}
