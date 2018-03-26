import React from 'react';
import { Link, Route } from 'react-router-dom';
import FileUpload from './FileUpload.jsx';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      script: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleChange(e) {
    this.setState({
      script: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.readFile();
    this.props.setscript(this.state.script);
    this.clear();
  }

  readFile() {
    let fileToLoad = document.getElementById("fileToLoad").files[0];
    let fileReader = new FileReader();
    fileReader.onload = (fileToLoad) => {
      let textFromFileLoaded = fileToLoad.target.result;
      this.setState({
        script: textFromFileLoaded
      });
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
  }

  clear() {
    this.setState({
      script: ''
    });
  }

  render() {
    return (
      <div className="container">
        <div className="card upload-card">
          <div className="card-tabs">
            <ul className="tabs tabs-fixed-width grey lighten-3">
              <li className="tab"><a className="cyan-text" href="#type">Type a script</a></li>
              <li className="tab"><a className="cyan-text" href="#upload">Upload a script</a></li>
            </ul>
          </div>
          <div id="type" className="input-field upload">
            <i className="material-icons prefix">mode_edit</i>
            <textarea autoFocus id="icon_prefix2" className="materialize-textarea" data-length="1000" value={this.state.script} onChange={this.handleChange}></textarea>
            <label for="icon_prefix2">Script</label>
          </div>
          <div id="upload" className="upload">
            <FileUpload onChange={this.readFile.bind(this)}/>
          </div>
        </div>
        <button className="waves-effect btn cyan accent-4 hoverable" onClick={this.handleSubmit}><i className="material-icons left">file_upload</i>Upload</button>
      </div>
    )
  }
}

module.exports = Upload;