import React, { Component } from "react";
import Uploader from "./Uploader";
export default class FileUploader extends Component {
  constructor(props) {
    super(props);
  }

  async handleFileChange(event, fileUpload, handlechange) {
    handlechange(event);
    this.props.handleFileChanges(fileUpload);
  }

  render() {
    return (
      <div>
        <Uploader
          render={fileUpload => {
            return (
              <div>
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={event => {
                    this.handleFileChange(
                      event,
                      fileUpload,
                      fileUpload.fileChangedHandler
                    );
                  }}
                  ref={fileInput => (this.fileInput = fileInput)}
                  multiple={this.props.multiple ? this.props.multiple : false}
                />
                <div
                  onClick={() => this.fileInput.click()}
                  onChange={() => this.fileInput}
                  onDrop={event => {
                    this.handleFileChange(
                      event,
                      fileUpload,
                      fileUpload.fileChangedHandler
                    );
                  }}
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
