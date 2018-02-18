import React, { Component } from 'react';
import { Button, Icon, Select, Modal } from 'antd';


class ProjectCard extends Component {

  constructor(props) {
  super(props);

  this.state = {
    projectModalIsOpen: false,
    toggleClass: true
  };

  this.openProjectModal = this.openProjectModal.bind(this);
  this.closeProjectModal = this.closeProjectModal.bind(this);
  this.findGithub = this.findGithub.bind(this);
  this.techUsed = this.techUsed.bind(this);
  }

  componentDidMount () {
    console.log("props", this.props)
  }

  toggleFunction = () => {
    this.setState({toggleClass: !this.state.toggleClass})
  }

  openProjectModal() {
    this.setState({projectModalIsOpen: true});
  }

  closeProjectModal() {
    this.setState({projectModalIsOpen: false});
  }
  
  findGithub() {
    if (this.props.project.githubRepo) {
      return <a className="projectLink" href={this.props.project.githubRepo} >Github Repo</a>
    }
  }
  
  techUsed() {
    return this.props.project.tech.map(item => {
      console.log(item);
      return <li>{item}</li>
    })
  }

  render() {


    return (
      <div className="card">

        <main onClick={this.openProjectModal} className="maincard">
          <h3 className="cardname">{this.props.project.name}</h3>
          <img className="thumbnail" src={this.props.project.thumbnail}/>
        </main>




        <Modal
          contentLabel="Project Modal"
          visible={this.state.projectModalIsOpen}
          onRequestClose={this.closeProjectModal}
          onCancel={this.closeProjectModal}
          title={this.props.project.name}
          footer={null}
          className="bigModal"
        >
        <div className="projectModal">
          <div className="projectText">
            <p className="projectDesc">{this.props.project.description} </p>
            <p>{this.findGithub()}</p>
            <a className="projectLink" href={this.props.project.deployedLink} >Deployed Site</a>
            <p>Technology Used:</p>
            <ul>{this.techUsed()} </ul>
          </div>
          <img className="projectImage" src={this.props.project.image} />
        </div>
        </Modal>
      </div>
    );
  }
}

export default ProjectCard;
