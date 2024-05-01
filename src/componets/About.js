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
          I'm an IT newbie and I'm trying to learn about programming. IDK if I'm
          going to go with front-end or back-end developer so I'm just trying to
          create some new projects at the moment.I Hope you gonna like it!
        </div>
      </div>
    </div>
  )
}

export default About