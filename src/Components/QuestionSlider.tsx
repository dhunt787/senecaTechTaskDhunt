import React from "react";
import { questionSet1, questionSet2 } from "../Data/questionSets";
import { questionSet } from "../Interfaces";
import Box, { BoxProps } from '@mui/material/Box';
import { Button } from "@mui/material";
import Divider from '@mui/material/Divider';
import { NullLiteral } from "typescript";
import { useEffect } from "react";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";


// write a function to return a divider element for each set of questions
// https://mui.com/material-ui/react-divider/
//and a function to see if the answer is correct or not.
//a function to jumble the answers

const answers: questionSet["AnswerSet"] = [...questionSet1.AnswerSet];

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
  console.log('answers in jumbeleAnswers', jumbleAnswers);
  return answers;
};

const checkAnswers = (answerString1: String | null, answerString2: String | null, correctAnswerPercentage: Number) => {
  console.log('answerString1', answerString1, 'answerString2', answerString2, 'correctAnswerPercentage', correctAnswerPercentage);
};

//TODO: render a third optional answer

const RenderAnswers: Function = () => {
  console.log('answers in RenderAnswers', answers, typeof answers);
    var jumbledAnswers = jumbleAnswers(answers);
    console.log('jumbledAnswers', jumbledAnswers);

    return(jumbledAnswers.map((answer, i) => {
      console.log('answer', answer, 'i', i);
      return(   
        <Box sx={{ flexGrow: 1 }} key={i}>
        <Grid container spacing={2}>
          <Grid item xs={4} >
          <Item><Button type="submit" onClick={() => {checkAnswers(answer.answerString1, null, answer.correctAnswerPercentage)}}>{answer.answerString1}</Button></Item> 
          </Grid>
          {<Grid item xs={4}>
            <Item ><Button type="submit" onClick={() => {checkAnswers(null, answer.answerString2, answer.correctAnswerPercentage)}}>{answer.answerString2}</Button></Item>
          </Grid>}
        </Grid>
      </Box>)
    })  
    )
};

const QuestionSlider: React.FunctionComponent = () => {
  // setup state here. 

  //When component mounts, jumber the answers.
  // useEffect(() => {
  //   jumbleAnswers(answers);
  // }, []);

const calculateAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
}

    return (
        <><p>{questionSet1.Question}</p>
        <React.Fragment>
            <RenderAnswers/>
            <div>
                <Button type="submit"
                onClick={() => calculateAnswer}>
                    Check Answer
                </Button>
            </div>
        </React.Fragment></>

    )
}

export default QuestionSlider;