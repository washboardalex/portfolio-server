import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Particles from 'react-particles-js';

import NavBar from './components/navbar/NavBar';
import ContactForm from './components/contactform/ContactForm';
import './App.css';

import koala from "./static/koala_opt.png";
import cleve from "./static/cleve_opt.png";
import github from "./static/github.png";
import twitter from "./static/twitter.png";

const particlesOptions = {
  // particles: {
  //   number: {
  //     value: 30,
  //     density: {
  //       enable: true,
  //       value_area: 800
  //     }
  //   }
  // }
  "particles": {
          "number": {
              "value": 160,
              "density": {
                  "enable": false
              }
          },
          "size": {
              "value": 3,
              "random": true,
              "anim": {
                  "speed": 4,
                  "size_min": 0.3
              }
          },
          "line_linked": {
              "enable": false
          },
          "move": {
              "random": true,
              "speed": 1,
              "direction": "top",
              "out_mode": "out"
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "bubble"
              },
              "onclick": {
                  "enable": true,
                  "mode": "repulse"
              }
          },
          "modes": {
              "bubble": {
                  "distance": 250,
                  "duration": 2,
                  "size": 0,
                  "opacity": 0
              },
              "repulse": {
                  "distance": 400,
                  "duration": 4
              }
          }
      }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      router:'main'
    }
  }

  connectToServer = () => {
    fetch('/');
  }

  componentDidMount() {
    this.connectToServer();
  }

  navRouter = (e) => {
    this.setState({router: e});
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="landing-container">
      <Particles className="particles"
          params={particlesOptions} />  
      <div className="container">
        <div className="row">
          <div className="col-12">
            <NavBar navRouter={this.navRouter} />
          </div>
          <Fade>
          <div style={{marginBottom:'30px'}} className="col-12">
            <div className="fill-container el-wrap-center flex-column">
              <div style={{marginBottom:"10px"}} className="pic-circle pic-circle-dimsn"></div>
              <div className="flexbox">
                <a href="https://www.github.com/washboardalex" target="_blank" rel="noopener noreferrer"> <img className="img-hover" style={{marginRight:"8px"}} width="45" src={github} alt="github.com/washboardalex" /></a>
                <a href="https://www.twitter.com/AleksandarGuja" target="_blank" rel="noopener noreferrer"><img className="img-hover" style={{marginLeft:"8px"}} width="45" src={twitter} alt="twitter.com/AleksandarGujas" /></a>
              </div>
            </div>
          </div>
          </Fade>
        </div>
        {this.state.router === 'main' && 
          <React.Fragment>
          <Fade>
          <div className="row">
            <div className="col-12">
              <div className="el-wrap-center fill-container">
                 <div className="green-back el-wrap-center intro-text-card">
                  <h1 className="heading">intro</h1>
                  <div style={{backgroundColor:'black'}} >
                    <p>My name is Aleksandar Gujas. I am a freelance web developer based in the Brisbane region.</p>
                    <p>I started learning web development because I believe that internet/browser technology will play an ever greater role in our lives in the years to come. I am passionate about seeking out and applying cutting edge web technologies in new and emerging fields.</p>
                    <p>I have made websites and apps for local businesses, as well as in my own projects. Going forward I will be working on larger scale projects and looking to join a team of developers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop:'60px', marginBottom:'60px'}} className="row">
            <div className="col-12">
              <div className="el-wrap-center fill-container">
                <div className="el-wrap-right purple-back intro-text-card">
                  <h1 className="heading">want to hire me?</h1>
                  <div style={{backgroundColor:'black'}}>
                    <h5 style={{fontWeight:'bold', letterSpacing:'0.2em'}}>Small Businesses</h5>
                    <p>The fact is, if you are a small business you are able to make a great website using the wealth of modern platforms available: Wordpress, Wix, Squarespace, Godaddy, etc.</p>
                    <p>The service I provide is for custom sites and apps: if you have a unique design idea that you want fully fleshed out, or if your product needs a UI that is more complex than your standard static website, I am ready to work with you to make your idea a reality. </p>
                    <p>We will first discuss general aims over email or telephone. I will then prepare a mockup page and meet with you, in person if you are Brisbane based (otherwise via Skype), to discuss your likes and dislikes. We will then stay in contact until the project is completed.</p>
                    <p>If you would like my services, please contact me on 0450 260 650 or email aleksandar.gujas@gmail.com.</p>
                    <h5 style={{fontWeight:'bold', letterSpacing:'0.2em'}}>Team Projects</h5>
                    <p>I utilise a javascript tech stack which is applicable to modern continuous integration/deployment workflows.</p>
                    <p>On the front end I use React + Redux. For styling I use Bootstrap, CSS3 and JS (including React animation libraries) to make sleek designs on a timeframe.</p>
                    <p>On the back end I use Node.js + Express with both SQL and no-SQL databases depending on the application.</p> 
                    <p>For more information on my capabilities please navigate to resume from menu. For contributions to open source projects please see <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/washboardalex">github</a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Fade>
          </React.Fragment>
        }
        {
          this.state.router === 'resume' &&
          <Fade>
          <div className="row">
            <div className="col-12">
              <div className="el-wrap-center fill-container">
                <div className="el-wrap-right intro-text-card">
                  <h1 className="heading">resume</h1>
                  <h5 style={{fontWeight:'bold', letterSpacing:'0.2em',marginTop:'40px'}}>Objective</h5>
                  <div style={{backgroundColor:'black'}}>
                    <p>Full stack JS developer looking to contribute to contribute to high value projects.</p>
                  </div>
                  <h5 style={{fontWeight:'bold', letterSpacing:'0.2em', marginTop:'40px'}}>Tech Stack</h5>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <div className="el-wrap-right intro-text-card">
                        <div style={{backgroundColor:'black'}}>
                          <h5>Primary</h5>
                          <p>Javascript ES2017+</p>
                          <p>React+Redux</p>
                          <p>Bootstrap</p>
                          <p>Node.js</p>
                          <p>Express</p>
                          <p>Next.js</p>
                          <p>Docker</p>
                          <p>Rel dbs - PostgreSQL, MySQL</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="el-wrap-right intro-text-card">
                        <div style={{backgroundColor:'black'}}>
                          <h5>Secondary</h5>
                          <p>Python Quant Libs (Numpy, Scipy, Pandas, Matplotlib)</p>
                          <p>Php Back End Development</p>
                          <p>Java+Xml for Android</p>
                          <p>AWS</p>
                          <p>Typescript</p>
                          <p>NoSQL db - Redis + Mongodb</p>
                          <p>VBA for Office Suite</p>
                          <p>Continuous Integration/Deployment Tools</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    </div>
                  </div>
                  <h5 style={{fontWeight:'bold', letterSpacing:'0.2em', marginBottom:'40px'}}>Education</h5>
                  <div style={{backgroundColor:'black'}} className="flexbox-custom">
                    <div>
                      <p style={{fontWeight:'bold', marginBottom:'0px'}}>Diploma of Science (Math/CS)</p>
                      <p style={{fontSize:'80%'}}>University of Queensland</p>
                    </div>
                    <p>2018-present</p>
                  </div>
                  <div style={{backgroundColor:'black'}} className="flexbox-custom">
                    <div>
                      <p style={{fontWeight:'bold', marginBottom:'0px'}}>Bachelor of Economics/Bachelor of Arts</p>
                      <p style={{fontSize:'80%'}}>University of Queensland</p>
                    </div>
                    <p>2008-2016</p>
                  </div>
                  <h5 style={{fontWeight:'bold', letterSpacing:'0.2em', marginBottom:'40px', marginTop:'40px'}}>Portfolio + Projects</h5>
                  <div className="row">
                    <Fade>
                    <div style={{marginBottom:'20px'}} className="col-lg-6 col-sm-12">
                      <a href="https://www.koalatransfers.com.au" target="_blank" rel="noopener noreferrer"><img className="img-hover portfolio-image" src={koala} alt="koalatransfers.com.au" /></a>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <a href="https://www.clevetooth.com.au" target="_blank" rel="noopener noreferrer"><img className="img-hover portfolio-image" src={cleve} alt="clevetooth.com.au" /></a>
                    </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Fade>
        }
        <div id="contactsection" style={{marginTop:'100px', paddingBottom:'60px'}} className="row">
          <ContactForm />
        </div>
      </div>
      </div>
    );
  }
}

export default App;