import { useLoaderData, useNavigate } from "react-router-dom";

const RandomMeal = () => {
  const randomMeal = useLoaderData();
  const random = randomMeal.meals[0];
  console.log(random);
  const navigate = useNavigate();
  const handleExploreCategory = (categoryName) => {
    navigate(`/meal-categories/${categoryName}`);
    console.log(categoryName);
  };
  const {
    strMeal,
    strCategory,
    strArea,
    strMealThumb,
    strInstructions,
    strYoutube,
  } = random;
  return (
    <div className="my-10 space-y-5 container mx-auto">
      <h1 className="text-4xl font-semibold text-center">
        Get A Random Meal Idea
      </h1>
      <div className="border-2 border-rose-400 rounded-lg p-5 lg:max-w-[350px] w-[90%] bg-pink-100 cursor-pointer hover:bg-pink-300 duration-500 text-center mx-auto space-y-4">
        <div>
          <img className="mx-auto rounded-lg" src={strMealThumb} alt="" />
        </div>
        <h2 className="text-[32px] font-medium text-rose-700">{strMeal}</h2>
        <div className="flex justify-between">
          <p className="font-medium text-rose-700 content text-[22px]">
            Category: {strCategory}
          </p>
          <p className="font-medium text-rose-700 content text-[22px]">
            Origin: {strArea}
          </p>
        </div>
        <div>
          <h4 className="font-medium text-rose-900 content text-[22px]">
            How to Cook this Meal?
          </h4>
          <p className="font-medium text-rose-900 content">{strInstructions}</p>
        </div>
        <button
          onClick={() => {
            handleExploreCategory(strCategory);
          }}
          className="font-medium text-[18px] bg-rose-300 text-pink-800 px-5 py-2 rounded-full mt-5 hover:bg-white duration-500"
        >
          Explore More <span className="text-rose-600">{strCategory}</span>{" "}
          Meals
        </button>
      </div>
    </div>
  );
};

export default RandomMeal;
