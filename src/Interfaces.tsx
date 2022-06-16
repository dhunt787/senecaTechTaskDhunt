type Answer = {
    id: number,
    correctAnswer: Number,
    answerString1: String,
    answerString2: String,
    answerString3?: String,
    correctAnswerPercentage: Number
};


export interface questionSet {
    Question: String,
    AnswerSet: Array<Answer>
};