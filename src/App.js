import React, { Component } from "react";
import "antd/dist/antd.css"
import "./App.css";
import About from "./Components/About.js"
import Projects from "./Components/Projects.js"
import Resume from "./Components/Resume.js"
import Footer from "./Components/Footer.js"
import { Button } from "antd"
import ScrollableAnchor from "react-scrollable-anchor"

const projects = [
    { id: 1,
      name: "Travel Squad",
      description: "The group travel app that allows you to streamline your group travel plans. Invite trip-mates to your page to weigh in on travel dates, lodging, activities, and chat.",
      githubRepo: "https://github.com/epancake/travel-squad",
      deployedLink: "https://travel-squad.club",
      image: "/travelSquadFull.png",
      tech: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io", "Nodemailer", "Knex.js", "Heroku"],
      thumbnail: "/travelsquad.png",
      display: "wide"
    },
    { id: 2,
      name: "Planet Wager",
      description: "The betting app that allows you to bet with your friends and keep track of who's losing spacebucks and who is raking them in. Users can define their own bet, and invite their friends to accept the bet. After all, gambling is not regulated in space! This is a group project developed with Agile methodologies. More details in the Github repo Readme.",
      githubRepo: "https://github.com/Space-Team/Space-Betting",
      deployedLink: "https://planetwager.herokuapp.com/",
      image: "/planetwager.png",
      tech: ["React", "AntDesign", "Node.js", "Express", "PostgreSQL", "Knex.js", "Heroku"],
      thumbnail: "/planetWagerSquare.png",
      display: "tall"
    },
    { id: 3,
      name: "The Tipping Point",
      description: "A series of d3 visualizations created to tell the story of the Port Arthur Massacre in Australia, and the impacts of the legislative changes made after the massacre. This was a group project.",
      githubRepo: "https://github.com/collinsbj/D3-Gun-Data",
      deployedLink: "https://the-tipping-point-d3.firebaseapp.com/",
      image: "/tippingPoint.png",
      tech: ["JavaScript", "d3.js", "Leaflet", "CSS"],
      thumbnail: "/tippingSquare.png",
      display: "wide"
    },
    { id: 4,
      name: "SeekEasy",
      description: "A happy hour locator for my Denver neighborhood, Baker. Users can search for happy hours by day of the week, and add new happy hours to the dataset.",
      githubRepo: "https://github.com/epancake/SeekEasy",
      deployedLink: "https://seekeasybaker.firebaseapp.com",
      image: "/seekeasy.png",
      tech: ["JavaScript", "HTML", "CSS", "Express", "Node.js"],
      thumbnail: "/seekeasySquare-03.png",
      display: "tall"
    },
    { id: 5,
      name: "Beer Boarding",
      description: "As co-chair of a meetup at Galvanize called Beer-Boarding, I identified a need to organize and track JavaScript white boarding questions. I created this full-stack application to empower students and champions to practice white boarding skills. More details are available on the Github Repo Readme.",
      githubRepo: "https://github.com/epancake/Beer-Boarding-frontend",
      deployedLink: "https://beerboardingg70.firebaseapp.com/",
      image: "/beerboarding.png",
      tech: ["React", "AntDesign", "Node.js", "Express", "PostgreSQL", "Knex.js", "Heroku", "Firebase"],
      thumbnail: "/beerBoardSquare.png",
      display: "wide"
    },
    { id: 6,
      name: "Women's March Site",
      description: "I was honored to make the Website for the 2018 Denver Womens's March. I worked with multiple stakeholders to create and design content according to the branding from the national March On organization. The organizers requested I use Wix so that they could make changes as needed.",
      githubRepo: null,
      deployedLink: "https://www.marchoncolorado.org/",
      image: "/womensmarch.png",
      tech: ["Wix", "HTML"],
      thumbnail: "/womensMarchSquare.png",
      display: "wide"
    }
]

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      jokeText: "",
      typewriter: "joke",
      ghost: "ghost"
    }

  }

  componentDidMount(){
    setTimeout(()=>
    { this.setState({jokeText: "and yes... that's really my last name.", typewriter: "typewriter joke"})}, 3000);
    setTimeout(()=>
    { this.setState({ghost: "ghost hidden"})}, 8000);
  }

  showSettings (event) {
  event.preventDefault();
  }


  render() {

    return (
      <div className="App">
        <div id="background">
          <div className="header">
            <div className="logobox">
              <img className="logo" src="/eplogo.png" alt="logo"/>
            </div>

            <nav className="nav">
              <a className="navitem" href="#projects">
                <p>Projects</p>
              </a>
              <a className="navitem" href="#about">
                <p>About</p>
              </a>
              <a className="navitem" href="#resume">
                <p>Resume</p>
              </a>
              <a className="navitem" href="#contact">
                <p>Contact</p>
              </a>
            </nav>
          </div>
          <header className="heading">
            <a className="name" href="/">
                <h1 className="App-title">Emily Pancake</h1>
            </a>
            <h2 className="tagline" >Web Developer and Design Enthusiast</h2>
            <div className={this.state.ghost}>
              <p className={this.state.typewriter}>{this.state.jokeText}</p>
            </div>
            <a className="arrowDown" href="#projects" rel="noopener noreferrer"><Button shape="circle" icon="down" /></a>
          <ScrollableAnchor id={'projects'}>
            <h2 className="sectionTitle notop">Projects</h2>
          </ScrollableAnchor>
          </header>
          <section className="projectList">
            <Projects projects={projects} key="2" />
          </section>
          <ScrollableAnchor id={"about"} name="about">
            <About key="1"/>
          </ScrollableAnchor>
          <ScrollableAnchor id={"resume"} name="resume">
            <h2 className="placeholder-for-scroll"></h2>
          </ScrollableAnchor>
            <Resume key="3"/>
          <ScrollableAnchor id={"contact"} name="contact">
            <h2 className="placeholder-for-scroll"></h2>
          </ScrollableAnchor>
            <Footer key="4"/>
        </div>

      </div>
    );
  }
}

export default App;
