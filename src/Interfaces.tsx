type Answer = {
    id: number,
    correctAnswer: number,
    answerString1: string,
    answerString2: string,
    answerString3?: string,
    answer1CorrectPercentage: number,
    answer2CorrectPercentage: number
    answer3CorrectPercentage: number
};


export interface questionSet {
    Question: string,
    AnswerSet: Array<Answer>
};

export interface questionStatusProps {
    questionStatusString: string
}