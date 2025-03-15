import React from "react";
import { categoryList } from "../../utils/StaticData";
import "./categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      {categoryList?.map((category, index) => (
        <div key={index} className="category-card">
          <Link to={category?.link} className="flex-column-center category-link">
            <img
              src={category?.src}
              alt={category?.category}
              className="category-image-styles"
            />
            <span>{category?.category}</span>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Categories;
