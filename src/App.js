import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css'
import './App.css';
import About from './Components/About.js'
import Projects from './Components/Projects.js'
import Resume from './Components/Resume.js'

const projects = [
    { id: 1,
      name: "Planet Wager",
      description: "Space betting App",
      githubRepo: "https://github.com/Space-Team/Space-Betting",
      deployedLink: "https://planetwager.herokuapp.com/",
      image: "/planetwager.png",
      tech: "React, AntDesign React Component Library, Node.js, Express, PostgreSQL, Knex.js, Heroku",
      thumbnail: "/planetWagerSquare.png",
    },
    { id: 2,
      name: "SeekEasy",
      description: "Happy hour locator",
      githubRepo: "https://github.com/epancake/SeekEasy",
      deployedLink: "https://seekeasybaker.firebaseapp.com",
      image: "/seekeasy.png",
      tech: "JavaScript, HTML, CSS, Express, Node.js",
      thumbnail: "/seekeasySquare-03.png",
    },
    { id: 2,
      name: "Women's March Site",
      description: "Website for the 2018 Denver womens's march",
      githubRepo: null,
      deployedLink: "https://www.marchoncolorado.org/",
      image: "/womensmarch.png",
      tech: "Wix",
      thumbnail: "/womensMarchSquare.png",
    },
]

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      jokeText: "",
      typewriter: "",
      ghost: ""
    }

  }

  componentDidMount(){
    setTimeout(()=>
    { this.setState({jokeText: "and yes... that's really my last name.", typewriter: "typewriter"})}, 3000);
    setTimeout(()=>
    { this.setState({ghost: "hidden"})}, 8000);
  }


  render() {

    return (
      <div className="App">
        <div>
          <div className="header">
            <div className="logobox">
              <img className="logo" src="/eplogo.png"/>
            </div>
            <nav className="nav">
              <a className="navitem" href="#about">
                <p>About</p>
              </a>
              <a className="navitem" href="#projects">
                <p>Projects</p>
              </a>
              <a className="navitem" href="#resume">
                <p>Resume</p>
              </a>
            </nav>
          </div>
          <header className="heading">
            <a className="name" href="/">
                <h1 className="App-title">Emily Pancake</h1>
            </a>
            <h2 className="tagline" >Web Developer and Design Dork</h2>
            <div className={this.state.ghost}>
              <p className={this.state.typewriter}>{this.state.jokeText}</p>
            </div>
          </header>
          <a name="about"></a>
          <About key="1"/>
          <a name="projects"></a>
          <div className="projectList">
            <Projects projects={projects} key="2" />
          </div>
          <a name="resume"></a>
          <Resume key="3"/>
        <div className='routes'>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
