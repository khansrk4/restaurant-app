import React from "react";
import { FOOD_CATEGORY } from "../../data/restaurantData";
import { selectItemType } from "../../utils/cartSlice";
import "./ScrollableButtons.css";
import { useDispatch } from "react-redux";

const ScrollableButtons = () => {
  const [buttonClicked, setButtonClicked] = React.useState(0);
  const dispatch = useDispatch();
  const handleButtonClick = (item) => {
    setButtonClicked(item.id);
    dispatch(selectItemType(item.category));
  };
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
      {FOOD_CATEGORY.map((item, index) => (
        <button
          key={index}
          className={
            item.id === buttonClicked ? "btnContainerClicked" : "btnContainer"
          }
          onClick={() => handleButtonClick(item)}
        >
          <div>{item.category}</div>
        </button>
      ))}
    </div>
  );
};

export default ScrollableButtons;
