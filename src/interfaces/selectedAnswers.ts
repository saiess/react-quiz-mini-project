import { Question } from "./question";

export interface QuestionProps {
    quizQuestionData: Question[];
    isTestComplete: Function;
    incorrectAnswers: Function;
  }