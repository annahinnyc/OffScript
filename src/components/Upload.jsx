import React from "react";
import ReactQuill from "react-quill";
import { Link, Route } from "react-router-dom";
import FileUpload from "./FileUpload";

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      script: "",
      username: ""
    };
    this.reactQuillRef = null;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clear = this.clear.bind(this);
    this.lineReader = this.lineReader.bind(this);
  }

  componentWillMount() {
    let user = this.props.user;
    if (user) {
      this.setState({
        username: user.username
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.fileLoaded && this.state.script.length > 50) {
      this.props.setscript(this.state.script);
    } else {
      let editor = this.reactQuillRef.getEditor();
      if(editor.getText().length > 50) {
        let script = editor.getText();
        this.setState({script});
        this.props.setscript(script);
        this.clear();
      } else {
        Materialize.toast("For best results, script must be 50 characters or more", 2000);
      }
    }
  }

  lineReader(e) {
    e.preventDefault();
    if(this.state.fileLoaded && this.state.script.length > 50) {
      this.props.setlines(this.state.script);
    } else {
      let editor = this.reactQuillRef.getEditor();
      if(editor.getText().length > 50) {
        let script = editor.getText();
        this.setState({script});
        this.props.setlines(script);
        this.clear();
      } else {
        Materialize.toast("For best results, script must be 50 characters or more", 2000);
      }
    }
  }

  readFile() {
    let fileToLoad = document.getElementById("fileToLoad").files[0];
    let fileReader = new FileReader();
    fileReader.onload = (fileToLoad) => {
      let textFromFileLoaded = fileToLoad.target.result;
      this.setState({
        script: textFromFileLoaded,
        fileLoaded: true
      });
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
  }

  clear() {
    this.setState({
      script: ""
    });
  }

  render() {
    return (
      <div className="container">
        <div className="card upload-card">
          <div className="card-tabs">
            <ul className="tabs tabs-fixed-width grey lighten-3">
              <li className="tab">
                <a className="cyan-text" href="#type">
                  Type a script
                </a>
              </li>
              <li className="tab">
                <a className="cyan-text" href="#upload">
                  Upload a script
                </a>
              </li>
            </ul>
          </div>
          <div id="type" className="input-field upload">
            <ReactQuill 
              ref={(el) => { this.reactQuillRef = el; }}
              theme="snow"
              value={this.state.script} 
            />
          </div>
          <div id="upload" className="upload">
            <FileUpload onChange={this.readFile.bind(this)}/>
          </div>
        </div>
        <button className="waves-effect btn cyan accent-4 hoverable" onClick={this.handleSubmit}>
          <i className="material-icons left">file_upload</i>Memorize Speech
        </button>
        <button className="waves-effect btn cyan accent-4 hoverable" onClick={this.lineReader}>
          <i className="material-icons left">tag_faces</i>Run Lines
        </button>
      </div>
    );
  }
}

module.exports = Upload;