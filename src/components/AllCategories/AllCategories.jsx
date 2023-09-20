import { useLoaderData } from "react-router-dom";
import ShowCategories from "./ShowCategories";

const AllCategories = () => {
  const allCategories = useLoaderData();
  console.log(allCategories.categories);
  return (
    <div className="my-10 space-y-5 container mx-auto">
      <h1 className="text-4xl font-semibold text-center">All Categories</h1>
      <div className="grid grid-cols-3 justify-center items-center gap-5 grid-flow-row">
      {allCategories.categories.map((category) => (
        <ShowCategories
          key={category.idCategory}
          category={category}
        ></ShowCategories>
      ))}
      </div>
    </div>
  );
};

export default AllCategories;
