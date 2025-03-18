import React from "react";
import { useParams } from "react-router-dom";
import { boosterPumps, cabinets, connectors, filters, housing, membranes, mineralsAndAlkaline, others, smps, switchesAndValves, uv } from "../../utils/StaticData";
import { Button, Tag } from "antd";
import { CALL_BACK_FORM, CONTACT_NUMBER } from "../../utils/StringConstants";
import "./categoryItems.css";

const CategoryItems = () => {
  const {category} = useParams();
  
  const getCategoryItems = () => {
    switch (category) {
      case "cabinets":
        return cabinets;
      case "filters":
        return filters;
      case "booster-pumps":
        return boosterPumps;
      case "switches-and-valves":
        return switchesAndValves;
      case "smps":
        return smps;
      case "housing":
        return housing;
      case "minerals-alkaline":
        return mineralsAndAlkaline;
      case "uv":
        return uv;
      case "connectors":
        return connectors;
      case "membranes":
        return membranes;
      case "others":
        return others;
      default:
        return [];
    }
  }

  const makeCall = () => {
    window.location.href = `tel:${CONTACT_NUMBER}`;
  };

  return (
    <section>
      <article className="category-item-card">
        {getCategoryItems()?.map((item, index) => (
          <div key={index} className="flex-row">
            <div className="category-item-image-container">
              <img
                src={item?.src}
                alt={item?.model}
                className="category-item-image"
              />
            </div>
            <div className="flex-column category-item-content">
              <span>
                <b>{item?.model}</b>
              </span>
              <span>{item?.description}</span>
              <span>
                <Tag className="green-color">Available at Best Price</Tag>
              </span>
              <div className="flex-row">
                <Button
                  type="primary"
                  className="margin-right"
                  onClick={makeCall}
                >
                  Call
                </Button>
                <a
                  href={CALL_BACK_FORM}
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
        {getCategoryItems()?.length === 0 && (
          <p className="green-color">Items for this category will be added soon.</p>
        )}
      </article>
    </section>
  );
};

export default CategoryItems;
