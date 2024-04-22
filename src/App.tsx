import './App.css'
import Button from './components/Button'
import ButtonTypes from './enum/buttonTypes'
import CreateQuiz from './components/createQuiz'
import QuizQustions from './components/QuizQustions'

function App() {

  return (
    <>
    <main className='w-3/5 flex flex-col gap-4 mt-20'>
      <CreateQuiz/>
      <QuizQustions/>
      <Button type={ButtonTypes.PRIMARY} value={''} onClick={function (): void {
          throw new Error('Function not implemented.')
        } }/>
    </main>
    </>
  )
}

export default App
