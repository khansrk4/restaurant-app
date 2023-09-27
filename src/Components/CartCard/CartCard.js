import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { RESTAURANT_DETAILS } from "../../data/restaurantData";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { Divider } from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { removeItem, removeAmount } from "../../utils/cartSlice";

export default function CartCard({ selectedCard, setSelectedCard }) {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.cart);
  const amount = useSelector((store) => store.cart.totalAmount);

  const deleteItem = (item) => {
    const res = { ...selectedCard };
    const ls = {
      ...res,
      [item.id]: res[item.id] ? false : true,
    };

    setSelectedCard(ls);
    dispatch(removeItem(item));
    dispatch(removeAmount(25));
  };

  return (
    <Card>
      <div>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <span style={{ fontWeight: "700" }}>{RESTAURANT_DETAILS.name}</span>
      <span>{RESTAURANT_DETAILS.address}</span>
      <span style={{ fontWeight: "bold" }}>{RESTAURANT_DETAILS.type}</span>

      {data.items.map((item, index) => (
        <>
          <ListItem alignItems="flex-start" key={index}>
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
                    sx={{ marginLeft: "34px" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  ></Typography>
                </>
              }
            />
            <div
              onClick={() => {
                deleteItem(item);
              }}
            >
              <DeleteForeverOutlinedIcon />
            </div>
          </ListItem>
          <Divider />
        </>
      ))}

      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">
            Total price:
            <Typography
              fontSize="14px"
              fontWeight="700"
            >{` AED ${amount}`}</Typography>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
