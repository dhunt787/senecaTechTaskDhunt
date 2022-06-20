import React from "react";
import { questionStatusProps } from "../Interfaces";

const QuestionStatus: React.FunctionComponent<questionStatusProps> = (props): JSX.Element => {
    return (
        <p>{props.questionStatusString}</p>
    )
}

export default QuestionStatus;