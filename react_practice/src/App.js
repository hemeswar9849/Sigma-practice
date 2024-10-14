import logo from './logo.svg';
import './App.css';

const Hello = ({ name, studyNow }) => {
  return (
    <div class='a-student-data'>
      <p>Hi I'm {name}</p>
      <p>And he is studying {studyNow}</p>
    </div>
  );
}

function App() {
  const students = ['hemes', 'mohan sai', 'Jagadheesh', 'manish'];
  return (
    <div className="App">
      {students.map((student, index) => {
        return <Hello key={index} name={student} studyNow={'diploma 3rd year'} />
      })}
    </div>
  );
}

export default App;
