import './App.css';
import { useReducer } from 'react';
import { developerReducer } from './components/Developer.jsx';
import DeveloperList from './components/DeveloperList.jsx';
import DeveloperForm from './components/DeveloperForm.jsx';

function App() {
  const [ developers, dispatch ] = useReducer ( developerReducer, [] );
  return (  
  <>
    <div class='box'>
      <div class='wave -one'></div>
      <div class='wave -two'></div>
      <div class='wave -three'></div>
    </div>
    
    <div className="App">
        <DeveloperList developers={developers} dispatch={dispatch} />
        <DeveloperForm dispatch={dispatch} />

      </div></>
  );
}

export default App;
