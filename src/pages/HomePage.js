import React from 'react'

import HomeTitle from '../components/HomeTitle'
import Carousel from '../components/Carousel'

function HomePage(props) {
  return (
    <div>
      <HomeTitle
        title={props.title}
        subTitle={props.subTitle}
        text={props.text}
      />
      <Carousel />
    </div>
  )
}
export default HomePage
