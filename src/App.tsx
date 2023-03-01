import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Movie Search App</h1>
      <Outlet />
    </div>
  );
}

export default App;
