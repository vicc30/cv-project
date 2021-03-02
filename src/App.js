import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>CV App with React</h1>
        </header>
        <main className="container app">
          <General />
          <Education />
          <Experience />
        </main>
      </div>
    );
  }
}

export default App;
