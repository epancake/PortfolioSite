import React, { Component } from 'react';
import { Icon, Modal } from 'antd';


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
  this.getLinks = this.getLinks.bind(this);
  }

  componentDidMount () {
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
      return <li key={item}><span>{item}</span></li>
    })
  }
  
  getLinks() {
    if (this.props.project.githubRepo) {
      return (
        <div className="links">
          <a className="projectLink" href={this.props.project.githubRepo} target="_blank" rel="noopener noreferrer"><Icon type="github" /> Github Repo</a>
          <a className="projectLink" href={this.props.project.deployedLink} target="_blank" rel="noopener noreferrer"><Icon type="link" /> Deployed Site</a>
        </div>
      )
    } else return (<div className="links">
        <a className="projectLink" href={this.props.project.deployedLink} target="_blank" rel="noopener noreferrer"><Icon type="link" /> Deployed Site</a>
      </div>
    )
  }


  render() {


    return (
      <div className="card">

        <main onClick={this.openProjectModal} className="maincard box">
          <h3 className="cardname">{this.props.project.name}</h3>
          <img className="thumbnail" src={this.props.project.thumbnail} alt={this.props.project.name + "thumbnail"}/>
          <div className="content">
             <p className="shortDescription">
              {this.props.project.slider}
              <br></br>
              {this.props.project.slider2}
            </p>
          </div>
        </main>




        <Modal
          contentLabel="Project Modal"
          visible={this.state.projectModalIsOpen}
          onRequestClose={this.closeProjectModal}
          onCancel={this.closeProjectModal}
          title={this.props.project.name}
          footer={null}
        >
        <div className={this.props.project.display}>
          <div className="projectText">
            <h4>Description:</h4>
            <p className="projectDesc">{this.props.project.description} </p>
            <div className="links">{this.getLinks()}</div>
          </div>
          <div className="imageAndTech">
            <img className="projectImage" src={this.props.project.image} alt="screenshot"/>
            <aside className="tech">
              <h4>Technology:</h4>
              <ul className="techlist">{this.techUsed()}</ul>
            </aside>
          </div>
        </div>
        </Modal>
      </div>
    );
  }
}

export default ProjectCard;
