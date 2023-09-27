import "./App.css";
import * as React from "react";
import MenuItems from "./Components/MenuItems/MenuItems";
import CartCard from "./Components/CartCard/CartCard";
import store from "./utils/store";
import { Provider } from "react-redux";
import { createMulitSelect } from "./utils/helper";
import {
  COLD_APPETIZERS,
  HOT_APPETIZERS,
  SANDWICH,
  PLATE_ON_OVEN,
  SOUP,
  SHAWARMA,
  GRILLED,
} from "./data/restaurantData";

function App() {
  const [selectedCard, setSelectedCard] = React.useState(
    createMulitSelect([
      ...COLD_APPETIZERS,
      ...HOT_APPETIZERS,
      ...SANDWICH,
      ...PLATE_ON_OVEN,
      ...SOUP,
      ...SHAWARMA,
      ...GRILLED,
    ])
  );
  return (
    <Provider store={store}>
      <div className="App">
        <div className="Container">
          <div className="Container1">
            <MenuItems
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          </div>
          <div className="Container2">
            <CartCard
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
