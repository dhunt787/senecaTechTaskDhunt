type Answer = {
    id: number,
    correctAnswer: number,
    answerString1: string,
    answerString2: string,
    answerString3?: string,
    correctAnswerPercentage: number
};


export interface questionSet {
    Question: string,
    AnswerSet: Array<Answer>
};

export interface questionStatusProps {
    questionStatusString: string
}