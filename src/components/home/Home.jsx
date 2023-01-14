import React, { Fragment } from 'react';
import Header from '../header/Header';
import HeroSlider from '../heroSlider/HeroSlider';
import Menu from '../menu/Menu'

const Home = () => {
  return (
    <Fragment>
        <Header/>
        <HeroSlider/>
        <Menu/>
    </Fragment>
  )
}

export default Home
