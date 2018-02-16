import React from 'react'
import ProjectCard from './ProjectCard.js'

const Projects = (props) => {

  if (!props.projects) {
    return <p>No data yet, one second please!!!</p>
  } else if (props.projects) {
    props.projects.sort(function (a, b) {return a.id - b.id;})
  }

  return props.projects.map((project) => {
    return (
      <ProjectCard key={project.id}
        project={project}/>
    )
  })
}

export default Projects;
