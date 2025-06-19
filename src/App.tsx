import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import News from "./pages/news";
import About from "./pages/About";
import Layout from "./layout/Layout";
import Career from "./pages/Career";
import Team from "./pages/Team";
import Service from "./pages/Service";
import Research from "./pages/research";
import ApplyNow from "./pages/ApplyNow";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="mx-auto max-w-[1920px] overflow-hidden">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="researches" element={<Research />} />
          <Route path="news" element={<News />} />
          <Route path="aboutus" element={<About />} />
          <Route path="careers" element={<Career />} />
          <Route path="team" element={<Team />} />
          <Route path="services" element={<Service />} />
          <Route path="apply" element={<ApplyNow />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
