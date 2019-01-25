import React, { Component } from 'react'
import { Button, Modal } from 'antd';

class About extends Component {

  constructor(props) {
  super(props);

  this.state = {
    tldrModalIsOpen: false,
    toggleClass: true
  };

  this.openTldrModal = this.openTldrModal.bind(this);
  this.closeTldrModal = this.closeTldrModal.bind(this);

  }

  componentDidMount () {
  }

  toggleFunction = () => {
    this.setState({toggleClass: !this.state.toggleClass})
  }

  openTldrModal() {
    this.setState({tldrModalIsOpen: true});
  }

  closeTldrModal() {
    this.setState({tldrModalIsOpen: false});
  }

  render() {


    return (
      <div className="about">
          <h2 className="sectionTitle">About</h2>
          <p>As a full stack web developer, I'm dedicated to building amazing user experiences and solving interesting problems. I'm happiest when focused on the front-end, coding user experiences that will have an impact. My background in technical writing for the medical industry, coupled with my education in library and information science make me an asset to any team.</p>
          <ul className="strengths">
            <li><strong>My strengths:</strong> I have a willingness to learn new technologies and jump into whatever language or framework is best for the job, and demonstrated success working with teams.</li>
            <li><strong>Most successful project:</strong> I worked on an Angular web app for worker's compensation policy holders, which was essentially a form with over 60 fields used to file a worker's compensation claim. My colleagues and I implemented Material Design elements throughout the app to make it easier to navigate and cleaner and faster for users. It turned out so well that we layered an internal layer over it, so that internal insurance processors could use our app to enter info instead of their current systems.</li>
            <li><strong>Currently:</strong> Working as a software developer on the Injured Worker User Journey team at Pinnacol Assurance in Denver, Colorado.</li>
          </ul>
          <p>My interests include my dog Pete Pancake, news about the wild growth of my hometown of Denver, state and local politics, Pokémon Go, Japanese culture, traveling with my dear sweet husband, and cool sneakers.</p>
          <Button className="tldr-btn" onClick={this.openTldrModal}>TLDR for Developers</Button>

        <Modal
          title="Me, as an object"
          contentLabel="About Modal"
          visible={this.state.tldrModalIsOpen}
          onRequestClose={this.closeTldrModal}
          onCancel={this.closeTldrModal}
          footer={null}
        >
        <pre><code className="html">
          me = {"{"}<br/>
          {"   "}name: "Emily Pancake", <br/>
          {"   "}fullStackDev: true, <br/>
          {"   "}focus: "Front-End", <br/>
          {"   "}stack: ["Angular", "Rails", "PostgreSQL", "Express", "React", "Node.js"], <br/>
          {"   "}background: ["Technical Writing", "Library Science", "Elections"], <br/>
          {"   "}values: ["adaptability", "inclusivity", "learning everything all the time"], <br/>
          {"   "}favoriteLanguage: "JavaScript", <br/>  
          {"   "}co-founder: "Beer Boarding JavaScript Practice For Champions meetup", <br/>  
          {"   "}dogs: 1 <br/>{"}"}
        </code></pre>
        </Modal>
      </div>
    );
  }
}

export default About;
