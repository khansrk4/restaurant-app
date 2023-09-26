// src/components/Cart.js
import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

function Cart({ cartItems }) {
  return (
    <List>
      {cartItems.map((item) => (
        <ListItem key={item.id}>
          <ListItemText
            primary={item.name}
            secondary={`Quantity: ${item.quantity}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default Cart;
