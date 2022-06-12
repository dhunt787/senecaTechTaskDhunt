import React from "react";
import { questionSet1, questionSet2 } from "../Data/questionSets";
import { questionSet } from "../Interfaces";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import Divider from '@mui/material/Divider';

// write a function to return a divider element for each set of questions
// https://mui.com/material-ui/react-divider/
//and a function to see if the answer is correct or not.
//a function to jumble the answers

const answers = [...questionSet1.AnswerSet];
console.log('answers in Divider', answers);

const RenderAnswers: Function = (questionSet1: questionSet) => {
    return(answers.map((answer) => {
        return(<div>
            <Box
            sx={{
            display: 'flex',
            alignItems: 'center',
            width: 'fit',
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 1,
            bgcolor: 'background.paper',
            color: 'text.secondary',
            '& svg': {
                m: 1.5,
            },
            '& hr': {
                mx: 0.5,
            },
            }}
            
      >
          <>{answer.answerString1}</>
          <Divider orientation="vertical" flexItem />
          <>{answer.answerString2}</>
        
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