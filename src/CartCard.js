import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { RESTAURANT_DETAILS } from "./data/restaurantData";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";

export default function CartCard() {
  const data = useSelector((store) => store.cart);
  console.log(data);

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
      <span>{RESTAURANT_DETAILS.type}</span>
      <Card>
        {data.items.map((item) => (
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
                    sx={{ marginLeft: "34px" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {/* <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": { borderRadius: "50% " },
                  }}
                  checked={selectedCard === item.id ? check : false}
                  onClick={() => handleCheckClick(item)}
                /> */}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </Card>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            $2,900
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          Explore
        </Button>
      </CardContent>
    </Card>
  );
}
