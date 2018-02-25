import React from 'react'
import { Button } from 'antd'

export default function Resume() {
    return  (
      <div>
        <h2 className="sectionTitle">Resume</h2>
        <div className="resume">
          <img className="resume-png" src="Pancake_Resume.png" alt="resume"/>
          <a href="https://drive.google.com/uc?export=download&id=1cPE1eaKLxYv_dbFCgEd8Ol6IDH9XIz6e"><Button className="download">Download resume</Button></a>
        </div>
      </div>
    )
}
