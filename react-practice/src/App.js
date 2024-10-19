import './App.css';
import NavigationBar from 'components/navbar/navbar';
import Hooks from 'ForPractice/hooks';
import { useState } from 'react';
import greet from 'utils/hi';

// const Hello = ({ name, studyNow }) => {
//   return (
//     // <div className='a-student-data'>
//     //   <p>Hi I'm {name}</p>
//     //   <p>And he is studying {studyNow}</p>
//     // </div>

//   );
// }

const styleDisplayNone = {
  display: 'none'
};

function App() {
  // const students = ['hemes', 'mohan sai', 'Jagadheesh', 'manish'];
  // const [studentIndex, iterator] = useState(0);
  const [toggler, toggles] = useState(false);
  return (
    <div className="App">
      <Hooks toggler={toggler}/>
      <button onClick={() => toggles(toggler?false:true)}>Click</button>
    </div>
  );
}
// function App() {
//   const students = ['hemes', 'mohan sai', 'Jagadheesh', 'manish'];
//   return (
//     <div className="App" style={style}>
//       <NavigationBar/>
//       {students.map((student, index) => {
//         return <Hello key={index} name={student} studyNow={'diploma 3rd year'} />
//       })}
//     </div>
//   );
// }

export default App;
