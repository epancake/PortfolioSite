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
        >
        <h2>{this.props.project.name}</h2>
        <p>{this.props.project.description} </p>
        <a src={this.props.project.githubRepo} ></a>
        <a src={this.props.project.deployedLink} ></a>
        <p>Technology used: {this.props.project.tech} </p>
        <img className="projectImage" src={this.props.project.image} />

        </Modal>
      </div>
    );
  }
}

export default ProjectCard;
