import Button from './Button';
import ButtonTypes from '../enum/buttonTypes';

const CreateQuiz = () => {
    return (
        <section className='w-full flex justify-between gap-4'>
            <select className='w-2/5 rounded-lg px-3 py-2 mt-1 mb-1 text-sm text-white focus:border-cyan-700 focus:ring-2 focus:ring-cyan-500' name="" id="">
                <option value="option">option</option>
            </select>

            <select className='w-2/5 rounded-lg px-3 py-2 mt-1 mb-1 text-sm text-white focus:border-cyan-700 focus:ring-2 focus:ring-cyan-500' name="" id="">
                <option value="option">Easy</option>
                <option value="option">Medium</option>
                <option value="option">Hard</option>
            </select>
            <Button type={ButtonTypes.SECONDARY} value={''} onClick={function (): void {
                throw new Error('Function not implemented.')
            }} />
        </section>
    );
};

export default CreateQuiz;