import { Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Events from "./pages/Events";
import Faq from "./pages/Faq";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faq" element={<Faq />} />

        {/* Redirect legacy .html URLs → new paths */}
        <Route path="/about.html" element={<Navigate to="/about" replace />} />
        <Route
          path="/events.html"
          element={<Navigate to="/events" replace />}
        />
        <Route
          path="/resources.html"
          element={<Navigate to="/resources" replace />}
        />
        <Route path="/faq.html" element={<Navigate to="/faq" replace />} />

        {/* Catch-all → home or a NotFound page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
