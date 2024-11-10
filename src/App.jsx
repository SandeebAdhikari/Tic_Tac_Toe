import { Routes, Route } from "react-router-dom";
import Game_Page from "./pages/Game_Page";
import Main_Page from "./pages/Main_Page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main_Page />} />
      <Route path="/game" element={<Game_Page />} />
    </Routes>
  );
}

export default App;
