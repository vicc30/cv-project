import React from 'react';
import uniqid from 'uniqid';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      education: [],
      experience: []
    }

    this.handleNew = this.handleNew.bind(this);
  }

  handleNew(type) {
    this.setState((prevState) => {
      return {
        [type]: [...prevState[type], uniqid()],
      };
    });
  }

  render() {

    const { education, experience } = this.state;

    const educationList = education.map((id) => {
      return <Education key={id} id={id} />
    });

    const experienceList = experience.map((id) => {
      return <Experience key={id} id={id} />
    });

    return (
      <div className="App">
        <header>
          <h1>CV App with React</h1>
        </header>
        <main className="container app">
          <General />
          <h2>Education Section</h2>
          {educationList}
          <button onClick={() => this.handleNew('education')}>New Education Section</button>
          <h2>Experience Section</h2>
          <button onClick={() => this.handleNew('experience')}>New Experience Section</button>
          {experienceList}
        </main>
      </div>
    );
  }
}

export default App;
