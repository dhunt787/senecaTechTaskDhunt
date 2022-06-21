import React, { useRef, useEffect } from "react";
import { questionSet1 } from "../Data/questionSets";
import { questionSet } from "../Interfaces";
import Box, { BoxProps } from '@mui/material/Box';
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import QuestionStatus from "./QuestionStatus";

// write a function to return a divider element for each set of questions
// https://mui.com/material-ui/react-divider/
//and a function to see if the answer is correct or not.
//a function to jumble the answers

const Item: Function = (props: BoxProps) => {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          p: 1,
          m: 1,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }

const jumbleAnswers = (answers: questionSet["AnswerSet"]) => {
  var m = answers.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

      t = answers[m];
      answers[m] = answers[i];
      answers[i] = t;
  }
  return answers;
};

//TODO: render a third optional answer

//de-structure the answerSet data set. 
const answers: questionSet["AnswerSet"] = [...questionSet1.AnswerSet];

// creating an array for the percent correct data. Adding 0, so the initial concat has a value to concat to.
const percentCorrectArray: Array<number> = [];

/*jumble answer data that is loaded in. Doing this before the functional component
definition stops the function being called again on re-render*/
const jumbledAnswers = jumbleAnswers(answers);

const QuestionSlider: React.FunctionComponent = () => {
  // Initialize state
  const correctAnswersSelected = useRef(false); //ensuring the correct answers state is not loaded as true on first render.
  const [percentCorrect, setPercentCorrect] = React.useState(0); //using array to push percentage correct values into.
  const [answerStatusString, setAnswerStatusString] = React.useState('The answer is incorrect');

  console.log('percentCorrect on load', percentCorrect)

  const checkPercentCorrectTotal = (percentCorrect: Array<number>) => {
    const initialValue = 0;
    const sum = percentCorrect.reduce(function (previousAnswerPercentage, currAnswerPercentage) {
      return previousAnswerPercentage + currAnswerPercentage;
      }, initialValue);
      return sum;
  };

  //pushing to the array and using useeffect because .reduce on state causes inconsistences.
  const pushCorrectPercentage: Function = (answerCorrectPercentage: number) => {
    percentCorrectArray.push(answerCorrectPercentage);
    let overPercentCorrect = checkPercentCorrectTotal(percentCorrectArray);
    setPercentCorrect(overPercentCorrect);

  };
  
  // if the percentCorrect state variable goes about 0.6, two correct answers were selected. therefore update answer string 
  // TODO: use this to change the background color
  useEffect(() => {
    if(percentCorrect >= 0.6) {
      setAnswerStatusString('Your answers are correct');
    }
  }, [percentCorrect]);

    return(
      <><p>{questionSet1.Question}</p>
      {jumbledAnswers.map((answer, i) => {
      return(   
        <Box sx={{ flexGrow: 1 }} key={i}>
        <Grid container spacing={2}>
          <Grid item xs={4} >
          <Item><Button type="submit" onClick={() => {pushCorrectPercentage(answer.answer1CorrectPercentage)}}>{answer.answerString1}</Button></Item> 
          </Grid>
          <Grid item xs={4}>
            <Item ><Button type="submit" onClick={() => {console.log('answer.correctAnswerPercentage on the second answer', answer.answer2CorrectPercentage), pushCorrectPercentage(answer.answer2CorrectPercentage)}}>{answer.answerString2}</Button></Item>
          </Grid>
          {answer.answerString3? <Grid item xs={4}>
            <Item ><Button type="submit" onClick={() => {console.log('answer.correctAnswerPercentage on the second answer', answer.answer3CorrectPercentage), pushCorrectPercentage(answer.answer3CorrectPercentage)}}>{answer.answerString3}</Button></Item>
          </Grid> : <React.Fragment></React.Fragment>}
        </Grid>
      </Box>)
    })
    }
    <QuestionStatus questionStatusString={answerStatusString} />
    </>
)
};
export default QuestionSlider;