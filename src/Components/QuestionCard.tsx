import React from "react";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import QuestionText from "./QuestionText";





const questionCard: React.FunctionComponent  = ({}) => {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
          <QuestionText></QuestionText>
          
        </Container>
      </React.Fragment>
    )
}

export default questionCard;