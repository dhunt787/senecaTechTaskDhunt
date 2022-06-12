import * as React from 'react'
import './App.css';
import QuestionCard from './Components/QuestionCard';
import QuestionText from './Components/QuestionText';
import QuestionSlider from './Components/QuestionSlider';
import QuestionStatus from './Components/QuestionStatus';


const App: React.FunctionComponent = ()  => {
  return (
    <QuestionSlider></QuestionSlider>
  );
}

export default App;
