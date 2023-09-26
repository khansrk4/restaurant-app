// src/components/ScrollableButtons.js
import React from "react";
import { FOOD_CATEGORY } from "../data/restaurantData";
import { selectItemType } from "../utils/cartSlice";
import "./ScrollableButtons.css";
import { useDispatch } from "react-redux";

const ScrollableButtons = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        padding: "25px 66px",
        with: "100%",
        display: "flex",
        justifyContent: "space-between",
        overflowX: "scroll",
        flexWrap: "no-wrap",
        position: "sticky",
        zIndex: 999,
      }}
    >
      {FOOD_CATEGORY.map((item) => (
        <button
          className="btnContainer"
          onClick={() => dispatch(selectItemType(item.category))}
        >
          <div>{item.category}</div>
        </button>
      ))}
    </div>
  );
};

export default ScrollableButtons;
