import { useState } from "react";
import { Question } from "../interfaces/question";
import { QuizCreatedData } from "../interfaces/quizCreatedData";
import Button from "./Button";
import CreateQuiz from "./CreateQuiz";
import QuizQustions from "./QuizQustions";
import { useNavigate } from "react-router-dom";
import { incorrectAnswerData } from "../interfaces/incorrectAnswerData";

function MainPage() {
  const [createQuizData, setCreateQuizData] = useState<QuizCreatedData>({
    categoryId: 0,
    difficulty: "easy",
  });
  const [questions, setQuestions] = useState<Question[]>();
  const [error, setError] = useState<string | null>(null);
  const [testComplete, setTestComplete] = useState<boolean>(false);
  let questionURL = `https://opentdb.com/api.php?amount=5&category=${createQuizData.categoryId}&difficulty=${createQuizData.difficulty}&type=multiple`;
  const seeResult = useNavigate();
  const [idOfIncorrectAnswers, setIdOfIncorrectAnswers] = useState<incorrectAnswerData[]>();

  const createQuizQuestions = async () => {
    try {
      const res = await fetch(questionURL);
      if (!res.ok) {
        throw new Error(
          `Failed to fetch data: ${res.status} ${res.statusText}`
        );
      }
      const data = await res.json();
      data.results.forEach((item: Question) => {
        item.incorrect_answers.push(item.correct_answer);
        item.combinedAnswers = item.incorrect_answers.slice().sort(() => Math.random() - 0.5);
      });
      setQuestions(data.results);
      setError(null);
    } catch (err) {
      setError(`Error fetching data: ${err}`);
    }
  };

  const navigateToResult = () => {
    seeResult('/result',{state:{incorrectAnswer:idOfIncorrectAnswers,questions:questions && questions}});
  }

  return (
    <>
      <main className="w-3/5 flex flex-col gap-4 mt-20">
        {!questions && (
          <CreateQuiz
            createQuizDataProp={createQuizData}
            setQuizCreatedData={setCreateQuizData}
            fetchQuestions={createQuizQuestions}
            error={error}
          />
        )}
        {(questions && !error) && (
          <QuizQustions
            quizQuestionData={questions}
            isTestComplete={setTestComplete}
            incorrectAnswers={setIdOfIncorrectAnswers}
          />
        )}

        {testComplete && (
          <Button
            style={"bg-cyan-600"}
            text={"Submit"}
            onClick={navigateToResult}
            id="Submit"
          />
        )}
        {error && <p className={"bg-cyan-600"} />}
      </main>
    </>
  );
}

export default MainPage;
