import PropTypes from "prop-types";
const ShowMealCategories = ({ meal }) => {
  const { strMeal, strMealThumb } = meal;
  return (
    <div className="w-[350px] border-2 border-rose-400 rounded-lg p-5 bg-pink-100 cursor-pointer hover:bg-pink-300 duration-500 text-center ">
      <div>
        <img className="mx-auto rounded-lg object-cover" src={strMealThumb} />
      </div>
      <div className="h-[180px] flex flex-col justify-end">
      <h2 className="text-[32px] font-medium text-rose-700 ">{strMeal}</h2>
      <button
        // onClick={() => {
        //   handleExploreCategory(strCategory);
        // }}
        className="font-medium text-[18px] bg-rose-300 text-pink-800 px-5 py-2 rounded-full mt-5 hover:bg-white duration-500"
      >
        How to Cook This Meal?
      </button>
      </div>
    </div>
  );
};

ShowMealCategories.propTypes = {
  meal: PropTypes.object.isRequired,
};

export default ShowMealCategories;
