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

        <main className='maincard'>
          <h2 className='cardname'>{this.props.project.name}</h2>
          <aside className="cardbuttons">
              <button id='ant-btn-primary'onClick={this.openProjectModal}> Details </button>
          </aside>
        </main>




        <Modal
          contentLabel="Project Modal"
          visible={this.state.projectModalIsOpen}
          onRequestClose={this.closeProjectModal}
          onCancel={this.closeProjectModal}
        >
        <h2>{this.props.project.name}</h2>
        </Modal>
      </div>
    );
  }
}

export default ProjectCard;
