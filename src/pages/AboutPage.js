import React from 'react'
import HomeTitle from '../components/HomeTitle'
import Content from '../components/Content'
import '../styles/about.css'
// import MyImage from '../assets/images/hlelazepeto1.png'

function AboutPage(props) {
  return (
    <div>
      <HomeTitle title={props.title} />
      {/* 
      <div className="header-image d-flex justify-content-center mt-5">
        <img src={MyImage} alt="my-image">
          {' '}
          {props.children}
        </img>
      </div> */}

      <Content>
        <p>
          <p> Hey there, </p> I'm Hlela Maqoqa , also known as
          <a
            style={{ color: 'black' }}
            href="https://www.instagram.com/pram_heda_dev/"
          >
            {' '}
            pram_heda_dev{' '}
          </a>{' '}
          on Instagram. I'm a fullstack developer in the motherland of South
          Africa , Cape Town.
          <p>
            I'm passionate about designing and building and I am currently using
            Reactjs as my front-end framework.
          </p>
          <h2> My Skills </h2>
          <div className="skills-container">
            <ul>
              <div className="skills-column">
                <li>HTML5/CSS5 </li>
                <li>Bootstrap </li>

                <li> AdobeXD</li>
              </div>
              <div className="skills-column">
                <li>JavaScript </li>

                <li>Java </li>

                <li> TypeScript</li>
              </div>
              <div className="skills-column">
                <li>React.js </li>
                <li> Angular.js</li>
                <li>SQL </li>
              </div>
              <div className="skills-column">
                <li>Firebase </li>
                <li>Express</li>
                <li> Git</li>
              </div>
            </ul>
          </div>
        </p>
      </Content>
    </div>
  )
}

export default AboutPage
