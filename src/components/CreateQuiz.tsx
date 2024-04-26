import Button from "./Button";
import { MouseEventHandler, useEffect, useState } from "react";
import { Categories } from "../interfaces/categories";
import { QuizCreatedData } from "../interfaces/quizCreatedData";

interface ChildProps {
  createQuizDataProp: QuizCreatedData;
  setQuizCreatedData: Function;
  fetchQuestions: MouseEventHandler<HTMLButtonElement>;
  error: string | null;
}

const CreateQuiz = ({
  createQuizDataProp,
  setQuizCreatedData,
  fetchQuestions,
  error,
}: ChildProps) => {
  const [categories, setCategories] = useState<Categories[]>();
  const urlCategory = "https://opentdb.com/api_category.php";

  const fetchCategory = async () => {
    try {
      const res = await fetch(urlCategory);
      if (!res.ok) {
        throw new Error(
          `Failed to fetch data ${res.status} ${res.statusText}`
        );
      }
      const data = await res.json();
      setCategories(data.trivia_categories);
    } catch (err) {
      throw (err as Error).message;
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleSelectCategories = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const proprety = e.currentTarget.name;
    const value = e.currentTarget.value;
    setQuizCreatedData({ ...createQuizDataProp, [proprety]: value });
  };

  return (
    <>
      <section className="w-full flex justify-between gap-4">
        <select
          className="w-2/5 rounded-lg px-3 py-2 mt-1 mb-1 text-sm text-white"
          value={createQuizDataProp.categoryId}
          onChange={handleSelectCategories}
          name="categoryId"
          id="categorySelect"
        >
          {categories?.map((category: Categories) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <select
          className="w-2/5 rounded-lg px-3 py-2 mt-1 mb-1 text-sm text-white"
          value={createQuizDataProp.difficulty}
          onChange={handleSelectCategories}
          name="difficulty"
          id="difficultySelect"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <Button
          style={"border-cyan-600"}
          text={"Create"}
          onClick={fetchQuestions}
          id={"createBtn"}
          status={false}
        />
      </section>
      {error && (
        <span className="w-full px-6 py-2 rounded bg-zinc-950 text-red-500">
          An error occurred while creating the quiz: {error} please try again.
        </span>
      )}
    </>
  );
};

export default CreateQuiz;
