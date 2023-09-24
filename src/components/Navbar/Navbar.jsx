import { NavLink } from "react-router-dom";
import "./NavBar.css";
const Navbar = () => {
  return (
    <nav className="flex justify-center items-center py-8">
      <NavLink
        className="text-[18px] font-medium mr-5 hover:text-rose-500"
        to="/"
      >
        All Meals
      </NavLink>
      <NavLink
        className="text-[18px] font-medium mr-5 hover:text-rose-500"
        to="/meal-categories/Chicken"
      >
        Meal Categories
      </NavLink>
      <NavLink
        className="text-[18px] font-medium mr-5 hover:text-rose-500"
        to="/random-meal"
      >
        Random Meal
      </NavLink>
    </nav>
  );
};

export default Navbar;
