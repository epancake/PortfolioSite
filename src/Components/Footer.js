import React, { Component } from 'react'

class Footer extends Component {
  
  render() {

    return (
      <div className="footerContainer">
          <h2 className="sectionTitle gridcol4 gridrow1">Contact</h2>
        <div className="footer">
          <img className="icon location-icon" src="/icons/location.png" alt="location icon"/>
          <p className="ftext location-text">Denver, Colorado</p>
          <img className="icon email-icon" src="/icons/email.png" alt="email icon"/>
          <p className="ftext email-text">epancake24@gmail.com</p>
          <img className="icon phone-icon" src="/icons/phone.png" alt="phone icon"/>
          <p className="ftext phone-text">720-295-4496</p>
          <img className="icon linkedin-icon" src="/icons/linkedin.png" alt="linkedin icon"/>
          <p className="ftext linkedin-text"><a href="https://www.linkedin.com/in/emilypancake/" target="_blank" rel="noopener noreferrer">/in/emilypancake</a></p>
          <p className="icon copy copyright-icon">&copy;</p>
          <p className="ftext copyright-text">2018, Emily Pancake</p>
          <img className="icon github-icon" src="/icons/github.png" alt="github icon"/>
          <a className="ftext github-text" href="https://github.com/epancake" target="_blank" rel="noopener noreferrer">/epancake</a>      
        </div>
      </div>
    );
  }
}

export default Footer;
