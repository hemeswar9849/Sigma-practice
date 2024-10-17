import './App.css';
import NavigationBar from 'components/navbar/navbar';
import greet from 'utils/hi';

const Hello = ({ name, studyNow }) => {
  return (
    <div className='a-student-data'>
      <p>Hi I'm {name}</p>
      <p>And he is studying {studyNow}</p>
    </div>
  );
}

const style = {
  color: 'blue',
  'textAlign':'center'
};

function App() {
  const students = ['hemes', 'mohan sai', 'Jagadheesh', 'manish'];
  return (
    <div className="App" style={style}>
      <NavigationBar/>
      {students.map((student, index) => {
        return <Hello key={index} name={student} studyNow={'diploma 3rd year'} />
      })}
    </div>
  );
}

export default App;
