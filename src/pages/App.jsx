import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Objective from '../components/Objective';
import Experience from '../components/Experience';

import '../assets/styles/App.scss';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <Objective />
        <Experience />
      </>
    );
  }
}

export default App;
