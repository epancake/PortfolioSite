import ProjectCard from './ProjectCard.js'

import React, { Component } from 'react';


class Projects extends Component {

  componentDidMount () {
    if (!this.props.projects) {
      return <p>No data yet, one second please!!!</p>
    } else if (this.props.projects) {
      this.props.projects.sort(function (a, b) {return a.id - b.id;})
    }
  }
  
  render() {
    return this.props.projects.map((project) => {
      return (
          <ProjectCard key={project.id}
            project={project}/>
      )
    })
  }
}

export default Projects;
