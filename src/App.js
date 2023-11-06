import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar /> {/** DONE **/}
    <Header /> {/** DONE **/}
    <AboutUs /> {/** DONE **/}
    <SpecialMenu /> {/** DONE **/}
    <Chef /> {/** DONE **/}
    <Intro /> {/** DONE **/}
    <Laurels /> {/** DONE **/}
    <Gallery /> {/** DONE **/}
    <FindUs /> {/** DONE **/}
    <Footer /> {/** IN PROGRESS ... **/}
  </div>
);

export default App;
