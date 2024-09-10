// App.tsx
import React from 'react';
import Header from './components/Title';
import Section from './components/Overview';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Section />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
