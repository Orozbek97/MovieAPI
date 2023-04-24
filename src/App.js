import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import FilmDetails from "./components/FilmDetals/FilmDetails";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<MainPage />}></Route>
                <Route path={'/film/id/:id'} element={<FilmDetails />}></Route>

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
