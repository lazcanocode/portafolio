import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

import '../assets/styles/App.scss';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
      </>
    );
  }
}

export default App;
