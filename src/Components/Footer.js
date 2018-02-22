import React from 'react'

export default function Footer() {
    return  (
      <div className="footerContainer">
      <h2 className="sectionTitle gridcol4 gridrow1">Contact</h2>
      <div className="footer">
        <img className="icon gridcol1 gridrow1" src="/icons/location.png" alt="location icon"/>
        <p className="ftext gridcol2 gridrow1">Denver, Colorado</p>
        <img className="icon gridcol3 gridrow1" src="/icons/email.png" alt="email icon"/>
        <p className="ftext gridcol4 gridrow1">epancake24@gmail.com</p>
        <img className="icon gridcol5 gridrow1" src="/icons/phone.png" alt="phone icon"/>
        <p className="ftext gridcol6 gridrow1">720-295-4496</p>
        <img className="icon gridcol1 gridrow2" src="/icons/linkedin.png" alt="linkedin icon"/>
        <p className="ftext gridcol2 gridrow2">/in/emilypancake</p>
        <p className="icon copy gridcol3 gridrow2">&copy;</p>
        <p className="ftext gridcol4 gridrow2">2018, Emily Pancake</p>
        <img className="icon gridcol5 gridrow2" src="/icons/github.png" alt="github icon"/>
        <p className="ftext gridcol6 gridrow2">/epancake</p>
      </div>
      </div>

    )
}
