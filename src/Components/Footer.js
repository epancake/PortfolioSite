import React from 'react'

export default function Footer() {
    return  (
      <div className="footer">
        <img className="icon gridcol1 gridrow1" src="/icons/location.png"/>
        <p className="ftext gridcol2 gridrow1">Denver, Colorado</p>
        <img className="icon gridcol3 gridrow1" src="/icons/email.png"/>
        <p className="ftext gridcol4 gridrow1">epancake24@gmail.com</p>
        <img className="icon gridcol5 gridrow1" src="/icons/phone.png"/>
        <p className="ftext gridcol6 gridrow1">303-888-3074</p>
        <img className="icon gridcol1 gridrow2" src="/icons/linkedin.png"/>
        <p className="ftext gridcol2 gridrow2">/in/emilypancake</p>
        <p className="copy gridcol34 gridrow2">&copy; 2018, Emily Pancake</p>
        <img className="icon gridcol5 gridrow2" src="/icons/github.png"/>
        <p className="ftext gridcol6 gridrow2">/epancake</p>
      </div>
    )
}
