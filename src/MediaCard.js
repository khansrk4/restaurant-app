import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import ScrollableButtons from "./Buttons/ScrollableButtons";
import {
  COLD_APPETIZERS,
  DESCRIPTION,
  FOOD_CATEGORY,
  HOT_APPETIZERS,
  SOUP,
} from "./data/restaurantData";
import { Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./utils/cartSlice";
import { createMulitSelect } from "./utils/helper";
import { useEffect } from "react";

export default function AlignItemsList() {
  const dispatch = useDispatch();
  const parentRef = React.useRef(null);
  const refOne = React.useRef(null);
  const refTwo = React.useRef(null);
  const refThree = React.useRef(null);

  const selectedType = useSelector((store) => store.cart.selectedButton);

  const [check, setItemCheck] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(
    createMulitSelect(COLD_APPETIZERS)
  );

  const scrollToSpecficElem = (childRef) => {
    if (parentRef.current && childRef.current) {
      const parentElement = parentRef.current;
      const childElement = childRef.current;

      const childElementOffset = childElement.offsetTop;
      const parentElementOffset = parentElement.offsetTop;
      const scrollPosition = childElementOffset - parentElementOffset;
      childElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      // parentElement.scrollTop = scrollPosition;
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
        default:
          break;
      }
    }
  }, [selectedType]);
  const handleCart = (item) => {
    dispatch(addItem(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
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

        <List sx={{ paddingLeft: "66px", paddingTop: "66px" }} ref={refOne}>
          <h2>{FOOD_CATEGORY[0].category}</h2>
          {COLD_APPETIZERS.map((item, index) => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <>
                      <Typography
                        sx={{}}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.price}
                      </Typography>
                      <Typography
                        sx={{
                          marginLeft: "20px",
                          alignItems: "flex-end",
                          color: "#5eac24",
                        }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        4.9
                        {/* {item.ratin} */}
                        <img
                          alt="acb"
                          src={require("./assets/images/star.png")}
                          style={{
                            marginLeft: "5px",
                            width: "15px",
                            height: "15px",
                            position: "absolute",
                            bottom: "17px",
                          }}
                        />
                      </Typography>

                      <Typography
                        sx={{ marginLeft: "34px" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {DESCRIPTION.desc}
                      </Typography>
                      <Typography
                        sx={{ marginLeft: "34px" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        <Checkbox
                          sx={{
                            "& .MuiSvgIcon-root": { borderRadius: "50% " },
                          }}
                          checked={selectedCard[item.id]}
                          onClick={() => handleCheckClick(item)}
                        />
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
        <List sx={{ paddingLeft: "66px" }} ref={refTwo}>
          <h2>{FOOD_CATEGORY[1].category}</h2>
          {HOT_APPETIZERS.map((item, index) => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <>
                      <Typography
                        sx={{}}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.price}
                      </Typography>
                      <Typography
                        sx={{
                          marginLeft: "20px",
                          alignItems: "flex-end",
                          color: "#5eac24",
                        }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        4.9
                        {/* {item.ratin} */}
                        <img
                          alt="acb"
                          src={require("./assets/images/star.png")}
                          style={{
                            marginLeft: "5px",
                            width: "15px",
                            height: "15px",
                            position: "absolute",
                            bottom: "17px",
                          }}
                        />
                      </Typography>

                      <Typography
                        sx={{ marginLeft: "34px" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {DESCRIPTION.desc}
                      </Typography>
                      <Typography
                        sx={{ marginLeft: "34px" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        <Checkbox
                          sx={{
                            "& .MuiSvgIcon-root": { borderRadius: "50% " },
                          }}
                          checked={selectedCard[item.id]}
                          onClick={() => handleCheckClick(item)}
                        />
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
        <List sx={{ paddingLeft: "66px" }} ref={refThree}>
          <h2>{FOOD_CATEGORY[2].category}</h2>
          {SOUP.map((item, index) => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <>
                      <Typography
                        sx={{}}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.price}
                      </Typography>
                      <Typography
                        sx={{
                          marginLeft: "20px",
                          alignItems: "flex-end",
                          color: "#5eac24",
                        }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        4.9
                        {/* {item.ratin} */}
                        <img
                          alt="acb"
                          src={require("./assets/images/star.png")}
                          style={{
                            marginLeft: "5px",
                            width: "15px",
                            height: "15px",
                            position: "absolute",
                            bottom: "17px",
                          }}
                        />
                      </Typography>

                      <Typography
                        sx={{ marginLeft: "34px" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {DESCRIPTION.desc}
                      </Typography>
                      <Typography
                        sx={{ marginLeft: "34px" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        <Checkbox
                          sx={{
                            "& .MuiSvgIcon-root": { borderRadius: "50% " },
                          }}
                          checked={selectedCard[item.id]}
                          onClick={() => handleCheckClick(item)}
                        />
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </Card>
    </>
  );
}
