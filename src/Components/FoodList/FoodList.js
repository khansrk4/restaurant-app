import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

function FoodList({ foods, addToCart }) {
  return (
    <List>
      {foods.map((food) => (
        <ListItem key={food.id}>
          <ListItemText primary={food.name} />
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={() => addToCart(food)}>
              <AddShoppingCart />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default FoodList;
