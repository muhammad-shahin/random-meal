import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MealCategories from "./components/MealCategories/MealCategories.jsx";
import RandomMeal from "./components/RandomMeal/RandomMeal.jsx";
import AllCategories from "./components/AllCategories/AllCategories";
import Root from "./components/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
        element: <AllCategories></AllCategories>,
      },
      {
        path: "/meal-categories/:categoryName",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryName}`
          ),
        element: <MealCategories></MealCategories>,
      },
      {
        path: "/random-meal",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/random.php"),
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
