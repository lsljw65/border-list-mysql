// import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import BoardList from "./component/BoardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [movieList, setMovieList] = useState([]);
  //componentDidMount
  useEffect(() => {
    getMovieData();
  }, []);

  const getMovieData = async () => {
    const result = await axios("/movies");
    console.log(result);
    console.log(result.data);
    setMovieList(result.data);
  };

  return (
    <div className="App">
      <h1>Board List</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoardList movieList={movieList} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
