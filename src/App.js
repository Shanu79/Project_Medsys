"react-router-dom";

import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Process from "./components/Process";
import PrivacyPolicy from "./components/PrivacyPolicy";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/process" element={<Process />}></Route>
          <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
        </Routes>
        <footer />
      </BrowserRouter>

    </>
  );
}

export default App;