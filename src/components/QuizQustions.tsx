import Button from "./Button";


const QuizQustions = () => {
    return (
        <section className='flex flex-col border border-cyan-700 rounded-lg p-6 gap-4'>
        <p>Display a 5-question quiz based on the selected category/difficulty ?</p>
        <div className='w-full flex justify-center gap-3'>
            <Button style={'border-orange-600'}  text={'answer'} onClick={function (): void {
            throw new Error('Function not implemented.')
          } }/>
        </div>
    </section>
    );
};

export default QuizQustions;