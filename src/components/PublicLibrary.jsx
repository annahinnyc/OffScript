import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LibraryItem from './LibraryItem';

class PersonalLibrary extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      scripts: [],
      transcripts: [],
      selectedScript: '',
      redirectToSpeechPage: false
    }
    this.fetchScripts = this.fetchScripts.bind(this);
    this.useScript = this.useScript.bind(this);
  }

  componentWillMount() {
    this.fetchScripts();
  }

  fetchScripts() {
    console.log('fetching user library now', this.props);
    axios.get('/api/publiclibrary')
    .then((result) => {
      console.log('public library retrieved', result.data);
      this.setState({
        scripts: result.data
      });

    })
    .catch((err) => {
       console.log('error retrieving public library', err.response);
     })
  }

  useScript(e) {
    let index = e.target.value;
    this.props.setscript(this.state.scripts[index].script_text);
  }


  render() {
    let scripts = this.state.scripts || [];
    let transcripts = this.state.transcripts || [];

    return (
      <div>
        <h5>Public Library</h5>
        <hr/>
        <div className="wrapper-lib">
          { scripts.map((script, index) =>
            <div className="card public-card" key={index}>
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="media/theater.png" />
              </div>
              <div className="card-title activator">
                {script.script_name}
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Script Text<i className="material-icons right">close</i></span>
                {script.script_text}
                <span className="card-content grey-text text-darken-4">
                  <button value={index} onClick={this.useScript}>Use Script</button>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

module.exports = PersonalLibrary;


