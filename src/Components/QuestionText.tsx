import React from "react";
import { questionSet1, questionSet2 } from "../Data/questionSets";

// const quesitionSetArray: Array<object> = [...questionSet1, questionSet2, questionSet3];

const QuestionText: React.FunctionComponent  = ({}) => {
    return (
        <>
        <p>{questionSet1.Question}</p>
       </>
    )
}

export default QuestionText;