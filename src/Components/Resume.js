import React from 'react'
import { Button } from 'antd'

export default function Resume() {
    return  (
      <div>
        <h2 className="sectionTitle">Resume</h2>
        <div className="resume">
          <img className="resume-png" src="Pancake_Resume.png" alt="resume"/>
          <a href="https://drive.google.com/uc?export=download&id=1gKzEXzlzwFlkl03m_IZu0vSuuYk-UlGM"><Button className="download">Download resume</Button></a>
        </div>
      </div>
    )
}