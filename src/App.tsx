import React from 'react';
import './App.css';

import { Footer, Blog, Possibility, Features, CodeInmersion, Header } from './containers';
import { Cta, Brand, Navbar } from './components';

function App() {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <CodeInmersion />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
