import Button from "./Button";

const Result = () => {
  return (
    <div>
      <h1>RESULTS</h1>
      {/* <section className="flex flex-col border border-cyan-700 rounded-lg p-6 gap-4">
        {quizQuestionData?.map((item: Question, i: number) => (
          <div key={i}>
            <p className="text-start">{item.question}</p>
            <div className="w-full flex flex-wrap gap-3">
              {item.combinedAnswers?.map((answer: string, j: number) => (
                <Button
                  key={j}
                  style={`"border-orange-700" + ${
                    answerIndex === j &&
                    rowIndex === i &&
                    (buttonColors.green
                      ? "bg-green-700"
                      : buttonColors.red
                      ? "bg-red-500"
                      : "")
                  }`}
                  text={answer}
                  onClick={() => handleButtonClick(item, i, answer, j)}
                />
              ))}
            </div>
          </div>
        ))}
      </section> */}
      <Button style={'bg-cyan-600'}  text={'Creat a new quiz'} onClick={() => console.log('')} />
    </div>
  );
};

Result.propTypes = {};

export default Result;
