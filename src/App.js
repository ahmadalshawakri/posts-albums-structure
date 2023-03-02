import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import Layouts from "./Layouts";
import "./App.css";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

function App() {
  return (
    <BrowserRouter>
      <Layouts />
    </BrowserRouter>
  );
}

export default App;
