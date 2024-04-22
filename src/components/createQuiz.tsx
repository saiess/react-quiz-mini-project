import Button from './Button';
import { useEffect, useState } from 'react';
import { Categories } from '../interfaces/categories';
import { QuizCreatedData } from '../interfaces/quizCreatedData';

interface ChildProps {
    quizCreatedData: QuizCreatedData;
    setQuizCreatedData: Function;

}

const CreateQuiz = ({ quizCreatedData, setQuizCreatedData }: ChildProps) => {

    const [categories, setCategories] = useState<Categories[]>()
    const [error, setError] = useState<string | null>(null);

    const urlCategory = "https://opentdb.com/api_category.php"

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const res = await fetch(urlCategory);
                if (!res.ok) {
                    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
                }
                const data = await res.json();
                setCategories(data.trivia_categories);
                setError(null);

            } catch (error) {
                setError(`Error fetching data: ${(error as Error).message}`);
            }
        }
        fetchCategory()
    }, [])

    const handleSelectCategories = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const proprety = e.currentTarget.name
        const value = e.currentTarget.value
        setQuizCreatedData({ ...quizCreatedData, [proprety]: value })
    }

    return (
        <section className='w-full flex justify-between gap-4'>
            <select className='w-2/5 rounded-lg px-3 py-2 mt-1 mb-1 text-sm text-white focus:border-cyan-700 focus:ring-2 focus:ring-cyan-500'
                value={quizCreatedData.categoryId} onChange={handleSelectCategories} name="categoryId">
                {categories?.map((category: Categories) => (
                    <option key={category.id} value={category.id} >{category.name}</option>
                ))}
            </select>

            <select className='w-2/5 rounded-lg px-3 py-2 mt-1 mb-1 text-sm text-white focus:border-cyan-700 focus:ring-2 focus:ring-cyan-500'
                value={quizCreatedData.difficulty} onChange={handleSelectCategories} name="difficulty">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <Button style={'border-cyan-600'}  text={'Create'} onClick={() => console.log("hi")}
            />
        </section>
    );
};

export default CreateQuiz;