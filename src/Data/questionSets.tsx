import { questionSet } from "../Interfaces";

const questionSet1: questionSet = {
    Question: "Identify organs of the body?",
    AnswerSet: [
        {
            id: 1,
            correctAnswer: 1,
            answerString1: "Teeth",
            answerString2: "Stomach",
            answerString3: "FingerNails",
            answer1CorrectPercentage: 0,
            answer2CorrectPercentage: 0.3333,
            answer3CorrectPercentage: 0
        },
        {
            id: 2,
            correctAnswer: 1,
            answerString1: "Lungs",
            answerString2: "Toes",
            answerString3: "Knees",
            answer1CorrectPercentage: 0.3333,
            answer2CorrectPercentage: 0,
            answer3CorrectPercentage: 0
        },
        {
            id: 3,
            correctAnswer: 0,
            answerString1: "Finger",
            answerString2: "Ears",
            answerString3: "Shins",
            answer1CorrectPercentage: 0,
            answer2CorrectPercentage: 0,
            answer3CorrectPercentage: 0
        },
        {
            id: 4,
            correctAnswer: 1,
            answerString1: "Heart",
            answerString2: "Hair",
            answerString3: "Brain",
            answer1CorrectPercentage: 0.3333,
            answer2CorrectPercentage: 0,
            answer3CorrectPercentage: 0.3333
        }
    ]

}

// const questionSet2: questionSet = {
//     Question: "Identify former presidents of the united States",
//     AnswerSet: [
//         {
//             id: 1,
//             correctAnswer: 1,
//             answerString1: "George Washington",
//             answerString2: "Michael Jordan",
//             correctAnswerPercentage: 0.5
//         },
//         {
//             id: 2,
//             correctAnswer: 0,
//             answerString1: "Chuck Norris",
//             answerString2: "Tom Hanks",
//             correctAnswerPercentage: 0

//         },
//         {
//             id: 3,
//             correctAnswer: 1,
//             answerString1: "Abraham Lincoln",
//             answerString2: "Kamala Harris",
//             correctAnswerPercentage: 0.5

//         }
//     ]
// }

// const questionSet3: questionSet = {
//     Question: "Identify which of the answers below are a type of bacteria?",
//     AnswerSet: [
//         {
//             id: 1,
//             answerString: "Escherichia coli",
//             correctAnswerPercentage: 0.5
//         },
//         {
//             id: 2,
//             answerString: "Covid",
//             correctAnswerPercentage: 0
//         },
//         {
//             id: 3,
//             answerString: "staphylococcus",
//             correctAnswerPercentage: 0.5
//         }
//     ]
// }

export {questionSet1};