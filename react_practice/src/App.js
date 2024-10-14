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
  return (
    <div className="App">
      <Hello name={'hems'} studyNow={'diploma 3rd year'} />
    </div>
  );
}

export default App;
