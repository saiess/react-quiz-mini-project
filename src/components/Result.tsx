import { Link, useLocation } from "react-router-dom";
import { Question } from "../interfaces/question";
import { incorrectAnswerData } from "../interfaces/incorrectAnswerData";

const Result = () => {
  const quizResult = useLocation();
  let score = 5 - quizResult.state?.incorrectAnswer.length;

  return (
    <div>
      {quizResult.state?.questions && (
        <>
          <section className="flex flex-col border mb-4 border-cyan-700 rounded-lg p-6 gap-4">
            {quizResult.state &&
              quizResult.state?.questions?.map((item: Question, i: number) => (
                <div key={i}>
                  <p className="text-start">{item.question}</p>
                  <div className="w-full flex flex-wrap gap-3">
                    {item.combinedAnswers?.map((answer: string, j: number) => (
                      <span
                        key={j}
                        className={`px-3 py-2 mt-1 mb-1 rounded-lg border border-slate-700 ${
                          item.correct_answer === answer
                            ? "bg-green-700"
                            : quizResult.state.incorrectAnswer.find(
                                (el: incorrectAnswerData) =>
                                  el.incorrect === j && el.rowId === i
                              ) &&
                              item.correct_answer != answer &&
                              "bg-red-500"
                        }`}
                      >
                        {answer}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

            <div className="flex justify-center">
              <span
                className={`text-center w-3/5 px-3 py-2 m-1 rounded ${
                  score <= 1
                    ? "bg-red-500"
                    : score >= 2 && score < 4
                    ? "bg-yellow-500"
                    : score >= 4 && "bg-green-500"
                }`}
              >
                You scored {score} out of 5
              </span>
            </div>
          </section>

          <Link className="w-80 px-6 py-2 rounded bg-cyan-600" to={"/"}>
            Create new Quiz
          </Link>
        </>
      )}
      {!quizResult.state?.questions && <span className="text-9xl">404</span>}
    </div>
  );
};

Result.propTypes = {};

export default Result;
