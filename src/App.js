import "./App.css";
import Button from "@mui/material/Button";
import MediaCard from "./MediaCard";
import { StyledEngineProvider } from "@mui/material/styles";
import ScrollableButtons from "./Buttons/ScrollableButtons";
import Card from "@mui/material/Card";
import CartCard from "./CartCard";
import store from "./utils/store";
import { Provider, useSelector } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="Container">
          <div className="Container1">
            <MediaCard />
          </div>
          <div className="Container2">
            <CartCard />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
