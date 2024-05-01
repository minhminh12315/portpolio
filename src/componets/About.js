import React from 'react'
import avatar from '../images/valorantHN.JPG'
const About = () => {
  return (
    <div class="about" id="about">
      <center>
        <h1 class="uppercase title-about">About</h1>
      </center>
      <div class="container pb-3">
        <div class="uppercase about-content line-1">
          hi, i'm Do Dung Quang Minh,
        </div>
        <div class="uppercase about-content pt-3">fullstack developer</div>
        <div class="uppercase about-content pt-3">of website and app.</div>
        <div class="d-flex pt-5">
          <div class="ms-auto avatar">
            <img class="avatar" src={avatar} alt="" />
          </div>
        </div>
      </div>
      <div class="something">
        <div class="something-small">Something about me</div>
        <div class="something-big">
          I'm newbie in IT and I'm learning something about programming. IDK
          I'll go with Front-End or Back-End Developer so right now I'm just try
          my self to create something new. Hopefully you feel good with this! :3
        </div>
      </div>
    </div>
  )
}

export default About