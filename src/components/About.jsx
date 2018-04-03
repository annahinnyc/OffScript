import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="about wow fadeInUp">
        <div className="container">
          <div className="card medium about-card grey lighten-4">
            <div className="card-content">
              <h5>About Us</h5>
            </div>
            <div className="card-tabs">
              <ul className="tabs grey lighten-3">
                <li className="tab"><a href="#annah" className="cyan-text">Annah Patterson</a></li>
                <li className="tab"><a href="#ryan" className="active cyan-text">Ryan Morrow</a></li>
                <li className="tab"><a href="#yufan" className="cyan-text">Yufan Wang</a></li>
              </ul>
            </div>
            <div className="card-content">
              <div id="ryan" className="row">
                <div className="col s12 m6">
                  <img className="responsive-img z-depth-2 avatar" src="https://avatars1.githubusercontent.com/u/4923066?s=400&v=4"/>
                </div>
                <div className="col s12 m6">
                  <h5>Product Owner</h5>
                  <div>
                    <a href="https://github.com/rhmorrow" target="_blank"><img className="logo-link" src="media/github.png"/></a>
                    <a href="https://www.linkedin.com/in/rhmorrow" target="_blank"><img className="logo-link" src="media/linkedin.png"/></a>
                  </div>
                  <p className="flow-text thin-text about-quote">We're actors! We're the OPPOSITE of people! - Tom Stoppard</p>
                </div>
              </div>
              <div id="annah" className="row">
                <div className="col s12 m6">
                  <img className="responsive-img z-depth-2 avatar" src="https://avatars3.githubusercontent.com/u/22921336?s=460&v=4"/>
                </div>
                <div className="col s12 m6">
                  <h5>Lead Software Engineer</h5>
                  <div>
                    <a href="https://github.com/annahinnyc" target="_blank"><img className="logo-link" src="media/github.png"/></a>
                    <a href="https://www.linkedin.com/in/annahpatterson" target="_blank"><img className="logo-link" src="media/linkedin.png"/></a>
                  </div>
                  <p className="flow-text thin-text about-quote">The most damaging phrase in any language is: 'It's always been done that way.' - Grace Hopper</p>
                </div>
              </div>
              <div id="yufan" className="row">
                <div className="col s12 m6">
                  <img className="responsive-img z-depth-2 avatar" src="https://avatars2.githubusercontent.com/u/31011353?s=400&u=4"/>
                </div>
                <div className="col s12 m6">
                  <h5>Scrum Master</h5>
                  <div>
                    <a href="https://github.com/yufanw" target="_blank"><img className="logo-link" src="media/github.png"/></a>
                    <a href="https://www.linkedin.com/in/yufan-wang-web" target="_blank"><img className="logo-link" src="media/linkedin.png"/></a>
                  </div>
                  <p className="flow-text thin-text about-quote">Your time is limited, so don't waste it living someone else's life. - Steve Jobs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = About;