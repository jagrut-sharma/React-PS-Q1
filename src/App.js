import { Routes, Route } from "react-router-dom";

import ExpandedEmail from "./components/ExpandedEmail";
import Home from "./pages/Home";
import Inbox from "./pages/Inbox";
import Sent from "./pages/Sent";
import SentEmail from "./components/SentEmail";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/sent" element={<Sent />} />
        <Route path="/inbox/:emailID" element={<ExpandedEmail />} />
        <Route path="/sent/:emailID" element={<SentEmail />} />
      </Routes>
    </div>
  );
}
