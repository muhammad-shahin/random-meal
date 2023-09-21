import { useNavigate } from "react-router-dom";
import "./ShowCategories.css";
import PropTypes from "prop-types";



const ShowCategories = ({ category }) => {
  const {  strCategory, strCategoryDescription, strCategoryThumb } = category;
  const navigate = useNavigate();
  const handleExploreCategory = (categoryName) => {
    navigate(`/meal-categories/${categoryName}`);
    console.log(categoryName);
  };
  return (
    <div className="border-2 border-rose-400 rounded-lg p-5 w-[350px] h-[450px] bg-pink-100 cursor-pointer hover:bg-pink-300 duration-500 text-center ">
      <div>
        <img className="mx-auto rounded-lg" src={strCategoryThumb} alt="" />
      </div>
      <h2 className="text-[32px] font-medium text-rose-700">{strCategory}</h2>
      <p className="font-medium text-rose-900 content">
        {strCategoryDescription}
      </p>
      <button
        onClick={() => {
          handleExploreCategory(strCategory);
        }}
        className="font-medium text-[18px] bg-rose-300 text-pink-800 px-5 py-2 rounded-full mt-5 hover:bg-white duration-500"
      >
        Explore More <span className="text-rose-600">{strCategory}</span> Meals
      </button>
    </div>
  );
};

ShowCategories.propTypes = {
  category: PropTypes.object.isRequired,
};

export default ShowCategories;
