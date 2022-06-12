import React from "react";
import { questionSet1, questionSet2 } from "../Data/questionSets";
import { questionSet } from "../Interfaces";
import Box, { BoxProps } from '@mui/material/Box';
import { Button } from "@mui/material";
import Divider from '@mui/material/Divider';

// write a function to return a divider element for each set of questions
// https://mui.com/material-ui/react-divider/
//and a function to see if the answer is correct or not.
//a function to jumble the answers

const answers = [...questionSet1.AnswerSet];

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

const RenderAnswers: Function = (questionSet1: questionSet) => {
    return(answers.map((answer) => {
        return(   
        <div style={{ width: '100%' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <Item>{answer.answerString1}</Item>
            <Item>{answer.answerString2}</Item>
            </Box>
      </div>)
    })  
    )
};

const jumbleAnswers: Function = () => {};

const checkAnsers: Function = () => {};

const QuestionSlider: React.FunctionComponent = () => {

const calculateAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
}

    return (
        <><p>{questionSet1.Question}</p><React.Fragment>
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