import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import FilmDetails from "./components/FilmDetals/FilmDetails";
import SearchResultPage from "./components/Search";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainPage />}></Route>
                <Route path={'/film/id/:id'} element={<FilmDetails />}></Route>
                <Route path={'/search/results'} element={<SearchResultPage />}></Route>


            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
