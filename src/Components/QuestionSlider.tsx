import React, { useRef, useEffect } from "react";
import { questionSet1 } from "../Data/questionSets";
import { questionSet } from "../Interfaces";
import Box, { BoxProps } from '@mui/material/Box';
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import QuestionStatus from "./QuestionStatus";
import { ContainerProps } from '@mui/material/Container';
import { styled } from '@mui/material/styles';

interface StyledContainerProps extends ContainerProps {
  successStatus?: boolean;
}

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
};

const StyledContainer = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'backgroundColor' && prop !== 'variant' && prop !== 'sx' && prop !== 'successStatus',
  name: 'StyledContainer',
  slot: 'Root',
  overridesResolver: (props, styles) => props.successStatus ? [
    styles.root,
    props.backgroundColor === 'primary' && styles.primary,
  ] : [styles.root,
  props.backgroundColor === 'secondary' && styles.secondary],
})<StyledContainerProps>(({ theme }) => (
  {
    background: 'linear-gradient(to right bottom, #F6B868, #EE6B2D)',
    padding: theme.spacing(1),
  }));


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


//de-structure the answerSet data set. 
const answers: questionSet["AnswerSet"] = [...questionSet1.AnswerSet];

// creating an array for the percent correct data. Adding 0, so the initial concat has a value to concat to.
const percentCorrectArray: Array<number> = [];

/*jumble answer data that is loaded in. Doing this before the functional component
definition stops the function being called again on re-render*/
const jumbledAnswers = jumbleAnswers(answers);

const QuestionSlider: React.FunctionComponent = () => {
  // Initialize state
  const [percentCorrect, setPercentCorrect] = React.useState(0); //using array to push percentage correct values into.
  const [answerStatusString, setAnswerStatusString] = React.useState('The answer is incorrect');
  const [disableButtons, setDisableButtons] = React.useState(false);
  const [successStatus, setSuccessStatus] = React.useState(false);

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

  // if the percentCorrect state variable goes about 0.6, two correct answers were selected. Therefore update answer string 
  // TODO: use this to change the background color
  useEffect(() => {
    if (percentCorrect >= 0.6) {
      setDisableButtons(true);
      setAnswerStatusString('Your answers are correct');
      setSuccessStatus(true);
    }
  }, [percentCorrect]);

  return (
    <>
      <StyledContainer>
        <p>{questionSet1.Question}</p>
        {jumbledAnswers.map((answer, i) => {
          return (
            <Box sx={{ flexGrow: 1 }} key={i}>
              <Grid container spacing={2}>
                <Grid item xs={4} >
                  <Item><Button type="submit" disabled={disableButtons} onClick={() => { pushCorrectPercentage(answer.answer1CorrectPercentage) }}>{answer.answerString1}</Button></Item>
                </Grid>
                <Grid item xs={4}>
                  <Item ><Button type="submit" disabled={disableButtons} onClick={() => { pushCorrectPercentage(answer.answer2CorrectPercentage) }}>{answer.answerString2}</Button></Item>
                </Grid>
                {answer.answerString3 ? <Grid item xs={4}>
                  <Item ><Button type="submit" disabled={disableButtons} onClick={() => { pushCorrectPercentage(answer.answer3CorrectPercentage) }}>{answer.answerString3}</Button></Item>
                </Grid> : <React.Fragment></React.Fragment>}
              </Grid>
            </Box>)
        })
        }
        <QuestionStatus questionStatusString={answerStatusString} />
      </StyledContainer>
    </>
  )
};
export default QuestionSlider;