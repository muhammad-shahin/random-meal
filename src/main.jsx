import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MealCategories from "./components/MealCategories/MealCategories.jsx";
import RandomMeal from "./components/RandomMeal/RandomMeal.jsx";
import Navbar from "./components/Navbar/Navbar";
import AllCategories from "./components/AllCategories/AllCategories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: "/all-categories",
        loader: () => fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element: <AllCategories></AllCategories>,
      },
      {
        path: "/meal-categories",
        element: <MealCategories></MealCategories>,
      },
      {
        path: "/random-meal",
        element: <RandomMeal></RandomMeal>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
