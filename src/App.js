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
      tech: "React, AntDesign React Component Library, Node.js, Express, PostgreSQL, Knex.js, Heroku"
    },
    { id: 2,
      name: "SeekEasy",
      description: "Happy hour locator",
      githubRepo: "https://github.com/epancake/SeekEasy",
      deployedLink: "https://seekeasybaker.firebaseapp.com",
      image: "/seekeasy.png",
      tech: "JavaScript, HTML, CSS, Express, Node.js"
    },
    { id: 2,
      name: "Women's March Site",
      description: "Website for the 2018 Denver womens's march",
      githubRepo: null,
      deployedLink: "https://www.marchoncolorado.org/",
      image: "/womensmarch.png",
      tech: "Wix"
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
      <Router >
        <div>
          <nav className="nav">
            <Link className="navitem" to="/about">
              <p>About</p>
            </Link>
            <Link className="navitem" to="/projects">
              <p>Projects</p>
            </Link>
            <Link className="navitem" to="/resume">
              <p>Resume</p>
            </Link>
          </nav>
          <header className="header">
            <Link className="name" to="/">
                <h1 className="App-title">Emily Pancake</h1>
            </Link>
            <h2>Web Developer and Design Dork</h2>
            <div className={this.state.ghost}>
              <p className={this.state.typewriter}>{this.state.jokeText}</p>
            </div>
          </header>
        <div className='routes'>
              <Route path="/about" render={()=><About key="1" />} />
              <Route path="/projects" render={()=><Projects projects={projects} key="2" />} />
              <Route path="/resume" render={()=><Resume key="3" />} />
          </div>
        </div>
      </Router>

      </div>
    );
  }
}

export default App;
