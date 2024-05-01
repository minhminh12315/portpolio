import React from 'react'

const Header = () => {
  return (
    <div class="header d-flex justify-content-between mt-3">
      <div class="name uppercase bold">Quang Minh</div>
      <ul class="nav-links d-flex justify-content-around" id="home">
        <li class="nav-link uppercase me-3">
          <a href="#home">Home</a>
        </li>
        <li class="nav-link uppercase me-3">
          <a href="#about">About</a>
        </li>
        <li class="nav-link uppercase me-3">
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </div>
  )
}

export default Header