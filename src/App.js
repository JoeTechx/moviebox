import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="movie/:id" element={<Movies />} />
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
