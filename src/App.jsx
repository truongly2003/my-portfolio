import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import DetailProject from "./Pages/Project/DetailProject";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<DetailProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
