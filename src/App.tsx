import './App.css'
import Button from './components/Button'
import CreateQuiz from './components/createQuiz'
import QuizQustions from './components/QuizQustions'
import { useState } from 'react'
import { QuizCreatedData } from './interfaces/quizCreatedData'
import { Question } from './interfaces/question'

function App() {
  const [quizCreatedData, setQuizCreatedData] = useState<QuizCreatedData>({ categoryId: 0, difficulty: "easy" });
  const [questions, setQuestions] = useState<Question[]>();
  const [error, setError] = useState<string | null>(null);
  let isComplete = false;
  let questionURL = `https://opentdb.com/api.php?amount=5&category=${quizCreatedData.categoryId}&difficulty=${quizCreatedData.difficulty}&type=multiple`;

  const createQuizQuestions = async () => {
    console.log("innnnnn");
    
      try{
        const res = await fetch(questionURL);
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      data.results.forEach((item: Question) => {
        item.incorrect_answers.push(item.correct_answer)
        item.combinedAnswers = item.incorrect_answers;
      })

      console.log(data.results, "modif");
      
      setQuestions(data.results);
      setError(null);
      } catch(err){
        setError(`Error fetching data: ${err}`);
      }
      console.log(questions, "okokoko");
  }

  
  return (
    <>
      <main className='w-3/5 flex flex-col gap-4 mt-20'>
        <CreateQuiz quizCreatedData={quizCreatedData} setQuizCreatedData={setQuizCreatedData} fetchQuestions={createQuizQuestions} />
        {questions && (
          <QuizQustions quizQuestionData={questions}/>
        )}

        {isComplete && (
          <Button style={'bg-cyan-600'}  text={'Submit'} onClick={createQuizQuestions} />
        )}
      </main>
    </>
  )
}

export default App
