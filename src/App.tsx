import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      Movies Search
      <Outlet />
    </div>
  );
}

export default App;
