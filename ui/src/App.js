import Search from "./components/search/Search";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages/home/Home";

function App() {
  return (
    <>
     <Router>
     <Search/>
      <Routes>
        <Route exact path="/search" element={<Home/>}></Route>
      </Routes>
     </Router>
    </>
  );
}

export default App;
