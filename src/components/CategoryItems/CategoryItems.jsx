import React from "react";
import { useParams } from "react-router-dom";
import { cabinets } from "../../utils/StaticData";
import { Button } from "antd";
import { CONTACT_NUMBER } from "../../utils/StringConstants";

const CategoryItems = () => {
  const params = useParams();
  let categoryItems;
  switch (params?.id) {
    case "cabinets":
      categoryItems = cabinets;
      break;
    default:
      categoryItems = [];
      break;
  }
  const makeCall = () => {
    window.location.href = `tel:${CONTACT_NUMBER}`;
  };
  return (
    <section>
      <article className="category-item-card">
        {categoryItems?.map((item, index) => (
          <div key={index} className="flex-row">
            <img
              src={item?.src}
              alt={item?.model}
              className="category-item-image"
            />
            <div className="flex-column">
              <span>
                <b>{item?.model}</b>
              </span>
              <span>{item?.description}</span>
              <span>
                <b>Rs.{item?.price}/-</b>
              </span>
              <div className="flex-row">
                <Button type="primary" className="side-margins" onClick={makeCall}>
                  Call
                </Button>
                <a
                  href="https://forms.gle/CcH4SqVYJcHNzt5A6"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="side-margins"
                >
                  Request Callback
                </a>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default CategoryItems;
