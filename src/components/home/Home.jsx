import React, { Fragment } from 'react';
import Header from '../header/Header';
import HeroSlider from '../heroSlider/HeroSlider';
import Menu from '../menu/Menu';
import Locations from '../locations/Locations'
import AboutUs from '../aboutUs/AboutUs';

const Home = () => {
  return (
    <Fragment>
        <Header/>
        <HeroSlider/>
        <Menu/>
        {/* <Locations/> */}
        <AboutUs></AboutUs>
    </Fragment>
  )
}

export default Home
