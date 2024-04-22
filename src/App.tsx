import './App.css'
import Button from './components/Button'
import CreateQuiz from './components/createQuiz'
import QuizQustions from './components/QuizQustions'
import { useState } from 'react'
import { QuizCreatedData } from './interfaces/quizCreatedData'

function App() {
  const [quizCreatedData, setQuizCreatedData] = useState<QuizCreatedData>({ categoryId: 0, difficulty: "" })
  let isComplete = true;
  let questions = true;

  console.log(quizCreatedData);

  return (
    <>
      <main className='w-3/5 flex flex-col gap-4 mt-20'>
        <CreateQuiz quizCreatedData={quizCreatedData} setQuizCreatedData={setQuizCreatedData} />
        {questions && (
          <QuizQustions />
        )}

        {isComplete && (
          <Button style={'bg-cyan-600'}  text={'Submit'} onClick={function (): void {
            throw new Error('Function not implemented.')
          }} />
        )}
      </main>
    </>
  )
}

export default App
