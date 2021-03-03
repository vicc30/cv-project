import React, { useState } from 'react';
import uniqid from 'uniqid';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const handleDelete = (type, id) => {
    if (type === 'education') {
      setEducation((prevEdu) => {
        return prevEdu.filter((key) => key !== id);
      });
    } else {
      setExperience((prevExp) => {
        return prevExp.filter((key) => key !== id);
      });
    }
  };

  const handleNew = (type) => {
    if (type === 'education') {
      setEducation((prevEdu) => [...prevEdu, uniqid()]);
    } else {
      setExperience((prevExp) => [...prevExp, uniqid()]);
    }
  }

  const educationList = education.map((id) => {
    return <Education key={id} id={id} handleDelete={handleDelete} />
  });

  const experienceList = experience.map((id) => {
    return <Experience key={id} id={id} handleDelete={handleDelete} />
  });

  return (
    <div className="App">
      <header>
        <h1>CV App with React</h1>
      </header>
      <main className="container app">
        <div className="section">
          <General />
        </div>
        <div className="section">
          <h2>Education Section</h2>
          {educationList}
          <button onClick={() => handleNew('education')}>New</button>
        </div>
        <div className="section">
          <h2>Experience Section</h2>
          {experienceList}
          <button onClick={() => handleNew('experience')}>New</button>
        </div>
      </main>
    </div>
  );

}

export default App;
