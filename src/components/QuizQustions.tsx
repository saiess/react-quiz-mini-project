import { useState } from "react";
import { Question } from "../interfaces/question";
import Button from "./Button";
import { incorrectAnswerData } from "../interfaces/incorrectAnswerData";
import { QuestionProps } from "../interfaces/selectedAnswers";

interface SelectedAnswers {
  rowId: null | number;
  correct: null | number;
  incorrect?: number | null;
}

const QuizQustions = ({
  quizQuestionData,
  isTestComplete,
  incorrectAnswers,
}: QuestionProps) => {
  const [saveCorrectAnswer, setSaveCorrectAnswer] = useState<SelectedAnswers[]>(
    []
  );

  const handleCorrectAnswer = (
    id: number,
    choosenAnswer: string,
    btnId: number
  ) => {
    const isCorrect = quizQuestionData[id].correct_answer === choosenAnswer;

    const rowSelectedIndex = saveCorrectAnswer.findIndex(
      (el) => el.rowId === id
    );

    let stateOfSaveCorrectAnswer = [...saveCorrectAnswer];

    // is this row selected before
    if (rowSelectedIndex !== -1) {
      isCorrect
        ? ((stateOfSaveCorrectAnswer[rowSelectedIndex].correct = btnId),
          (stateOfSaveCorrectAnswer[rowSelectedIndex].incorrect = null))
        : ((stateOfSaveCorrectAnswer[rowSelectedIndex].correct = null),
          (stateOfSaveCorrectAnswer[rowSelectedIndex].incorrect = btnId));
    } else {
      isCorrect
        ? (stateOfSaveCorrectAnswer = [
            ...saveCorrectAnswer,
            {
              rowId: id,
              correct: btnId,
              incorrect: null,
            },
          ])
        : (stateOfSaveCorrectAnswer = [
            ...saveCorrectAnswer,
            {
              rowId: id,
              correct: null,
              incorrect: btnId,
            },
          ]);
    }
    setSaveCorrectAnswer(stateOfSaveCorrectAnswer);
    stateOfSaveCorrectAnswer.length === 5 && isTestComplete(true);
    let arrOfIncorrect: incorrectAnswerData[] = [];
    stateOfSaveCorrectAnswer.filter((el: SelectedAnswers) => {
      el.incorrect != null &&
        arrOfIncorrect.push({ incorrect: el.incorrect, rowId: el.rowId });
    });
    incorrectAnswers(arrOfIncorrect);
  };

  return (
    <section className="flex flex-col border border-cyan-700 rounded-lg p-6 gap-4">
      {quizQuestionData?.map((item: Question, i: number) => (
        <div key={i}>
          <p className="text-start">{item.question}</p>
          <div className="w-full flex flex-wrap gap-3">
            {item.combinedAnswers?.map((answer: string, j: number) => (
              <Button
                key={j}
                style={`${
                  (saveCorrectAnswer.find((el) => el?.rowId === i)?.correct === j || saveCorrectAnswer.find((el) => el?.rowId === i)?.incorrect === j )
                    && "bg-green-700"
                }`}
                text={answer}
                onClick={() => handleCorrectAnswer(i, answer, j)}
                id={`${j}`}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default QuizQustions;
