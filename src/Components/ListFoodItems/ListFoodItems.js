import React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { DESCRIPTION } from "../../data/restaurantData";
import { Checkbox } from "@mui/material";

const selectedStyle = {
  border: "3px solid #410deb",
  borderRadius: "12px",
};
function ListFoodItems({ item, selectedCard, handleCheckClick }) {
  return (
    <>
      <ListItem
        alignItems="flex-start"
        sx={selectedCard[item.id] ? selectedStyle : null}
      >
        <ListItemAvatar>
          <Avatar
            alt="No image found"
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
          />
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
                  src={require("../../assets/images/star.png")}
                  style={{
                    marginLeft: "5px",
                    width: "15px",
                    height: "15px",
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
                sx={{ marginLeft: "300px" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": {
                      borderRadius: "50%",
                    },
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
  );
}

export default ListFoodItems;
