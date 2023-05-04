import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/home/Home";
import Explore from "./pages/explore/Explore";
import Center from "./pages/center/Center";
import Profile from "./pages/profile/Profile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/explore" element={<Explore />}/>
        <Route path="/center" element={<Center />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
