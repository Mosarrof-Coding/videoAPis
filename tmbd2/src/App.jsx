import "./App.css";
import Header from "./assets/components/Header";
import Home from "./assets/components/Home";
import Movies from "./assets/components/Movies";
import About from "./assets/components/About";
// import MovieCard from "./assets/components/MovieCard";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header></Header>
      {/* <Movies></Movies> */}
      {/* <MovieCard></MovieCard> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/all-movies" element={<Movies />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
