import * as React from "react";
import List from "@mui/material/List";
import Card from "@mui/material/Card";
import ScrollableButtons from "../Buttons/ScrollableButtons";
import {
  COLD_APPETIZERS,
  FOOD_CATEGORY,
  HOT_APPETIZERS,
  SOUP,
  SHAWARMA,
  SANDWICH,
  PLATE_ON_OVEN,
} from "../../data/restaurantData";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  addAmount,
  removeAmount,
} from "../../utils/cartSlice";
import { useEffect } from "react";
import ListFoodItems from "../ListFoodItems/ListFoodItems";
import { GRILLED } from "../../data/restaurantData";

export default function MenuItems({ selectedCard, setSelectedCard }) {
  const dispatch = useDispatch();
  const parentRef = React.useRef(null);
  const refOne = React.useRef(null);
  const refTwo = React.useRef(null);
  const refThree = React.useRef(null);
  const refFour = React.useRef(null);
  const refFive = React.useRef(null);
  const refSix = React.useRef(null);
  const refSeven = React.useRef(null);

  const selectedType = useSelector((store) => store.cart.selectedButton);
  const scrollToSpecficElem = (childRef) => {
    if (parentRef.current && childRef.current) {
      const childElement = childRef.current;
      childElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  useEffect(() => {
    if (selectedType) {
      switch (selectedType) {
        case "Cold Apetizers":
          scrollToSpecficElem(refOne);
          return;
        case "Hot Apetizers":
          scrollToSpecficElem(refTwo);
          return;
        case "Soup":
          scrollToSpecficElem(refThree);
          return;
        case "Sandwiches":
          scrollToSpecficElem(refFour);
          return;
        case "Shawarma":
          scrollToSpecficElem(refFive);
          return;
        case "Plates on oven":
          scrollToSpecficElem(refSix);
          return;
        case "Grilled":
          scrollToSpecficElem(refSeven);
          return;
        default:
          break;
      }
    }
  }, [selectedType]);
  const handleCart = (item) => {
    dispatch(addItem(item));
    dispatch(addAmount(25));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
    dispatch(removeAmount(25));
  };

  const handleCheckClick = (item) => {
    const res = { ...selectedCard };
    const ls = {
      ...res,
      [item.id]: res[item.id] ? false : true,
    };

    setSelectedCard(ls);
    if (!selectedCard[item.id]) {
      handleCart(item);
    } else {
      removeItemFromCart(item);
    }
  };

  return (
    <>
      <Card ref={parentRef} sx={{ overflow: "auto", height: "100vh" }}>
        <ScrollableButtons />

        <List sx={{ paddingLeft: "66px" }} ref={refOne}>
          <h2>{FOOD_CATEGORY[0].category}</h2>
          {COLD_APPETIZERS.map((item, index) => (
            <ListFoodItems
              key={index}
              item={item}
              selectedCard={selectedCard}
              handleCheckClick={handleCheckClick}
            />
          ))}
        </List>
        <List sx={{ paddingLeft: "66px" }} ref={refTwo}>
          <h2>{FOOD_CATEGORY[1].category}</h2>
          {HOT_APPETIZERS.map((item, index) => (
            <ListFoodItems
              key={index}
              item={item}
              selectedCard={selectedCard}
              handleCheckClick={handleCheckClick}
            />
          ))}
        </List>
        <List sx={{ paddingLeft: "66px" }} ref={refThree}>
          <h2>{FOOD_CATEGORY[2].category}</h2>
          {SOUP.map((item, index) => (
            <ListFoodItems
              key={index}
              item={item}
              selectedCard={selectedCard}
              handleCheckClick={handleCheckClick}
            />
          ))}
        </List>
        <List sx={{ paddingLeft: "66px" }} ref={refFour}>
          <h2>{FOOD_CATEGORY[3].category}</h2>
          {SANDWICH.map((item, index) => (
            <ListFoodItems
              item={item}
              key={index}
              selectedCard={selectedCard}
              handleCheckClick={handleCheckClick}
            />
          ))}
        </List>
        <List sx={{ paddingLeft: "66px" }} ref={refFive}>
          <h2>{FOOD_CATEGORY[4].category}</h2>
          {SHAWARMA.map((item, index) => (
            <ListFoodItems
              item={item}
              key={index}
              selectedCard={selectedCard}
              handleCheckClick={handleCheckClick}
            />
          ))}
        </List>
        <List sx={{ paddingLeft: "66px" }} ref={refSix}>
          <h2>{FOOD_CATEGORY[5].category}</h2>
          {PLATE_ON_OVEN.map((item, index) => (
            <ListFoodItems
              item={item}
              key={index}
              selectedCard={selectedCard}
              handleCheckClick={handleCheckClick}
            />
          ))}
        </List>
        <List sx={{ paddingLeft: "66px" }} ref={refSeven}>
          <h2>{FOOD_CATEGORY[6].category}</h2>
          {GRILLED.map((item, index) => (
            <ListFoodItems
              item={item}
              key={index}
              selectedCard={selectedCard}
              handleCheckClick={handleCheckClick}
            />
          ))}
        </List>
      </Card>
    </>
  );
}
