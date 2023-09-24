import { useLoaderData, useParams } from "react-router-dom";
import ShowMealCategories from "./ShowMealCategories";

const MealCategories = () => {
  const category = useLoaderData();
  const { categoryName } = useParams();
  const meals = category.meals;
  console.log(meals);

  return (
    <div className="my-10 space-y-5 container mx-auto">
      <h1 className="text-4xl font-semibold text-center">
        Meals for <span className="text-rose-500">{categoryName} </span>
        Categories
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-5 grid-flow-row">
        {meals.map((meal) => (
          <ShowMealCategories
            key={meal.idMeal}
            meal={meal}
          ></ShowMealCategories>
        ))}
      </div>
    </div>
  );
};

export default MealCategories;
