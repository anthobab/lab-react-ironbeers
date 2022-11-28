import { Route, Routes } from "react-router-dom";
import "./App.css";
import BeerCardDetail from "./pages/BeerCardDetail/BeerCardDetail";
import HomeBar from "./components/HomeBar/HomeBar";
import BeerList from "./pages/BeerList/BeerList";
import HomePage from "./pages/HomePage/HomePage";
import RandomBeer from "./pages/RandomBeer/RandomBeer";
import NewBeer from "./pages/NewBeer/NewBeer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<HomeBar />}>
          <Route path="/beers" element={<BeerList />} />
          <Route path="/beer/:urlid" element={<BeerCardDetail />} />
          <Route path="/random-beer" element={<RandomBeer />} />
          <Route path="/new-beer" element={<NewBeer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
