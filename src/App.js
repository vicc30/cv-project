import React from 'react';
import General from './components/General';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>CV App with React</h1>
        </header>
        <main className="container app">
          <General />
        </main>
      </div>
    );
  }
}

export default App;
