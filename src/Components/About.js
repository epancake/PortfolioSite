import React, { Component } from 'react'
import { Button, Icon, Select, Modal } from 'antd';

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
    console.log("props", this.props)
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
          <p>As a full stack web developer, I'm passionate about working on cross-functional teams to bring products to market. I'm happiest when I'm focused on the front-end, coding user eperiences that will have an impact on society by making people's lives better. My background in technical writing in the medical industry, coupled with my education in library and information science make me an asset to any team. I am currently seeking a position as a junior web developer on a team in Denver, Colorado.</p>
          <p>My interests include my dog Pete Pancake, hot gossip about the wild growth of my hometown of Denver, state and local politics, Pokemon Go, Japanese culture, getting tough at the gym, traveling with my dear sweet husband, and cool sneakers.</p>
          <Button className="tldr-btn" onClick={this.openTldrModal}>TLDR for Developers</Button>

        <Modal
          title="Me, as an object"
          contentLabel="About Modal"
          visible={this.state.tldrModalIsOpen}
          onRequestClose={this.closeTldrModal}
          onCancel={this.closeTldrModal}
          footer={null}
        >
        <pre><code class="html">
          me = {"{"}<br/>
          {"   "}name: "Emily Pancake", <br/>
          {"   "}fullStackDev: true, <br/>
          {"   "}focus: "Front-End", <br/>
          {"   "}background: ["Technical Writing", "Library Science", "Elections"], <br/>
          {"   "}values: ["adaptability", "inclusivity", "form follows function"], <br/>
          {"   "}passionate: true, <br/>  
          {"   "}dogs: 1 <br/>{"}"}
        </code></pre>
        </Modal>
      </div>
    );
  }
}

export default About;
