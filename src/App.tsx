import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./signup";
import SignIn from "./login";
import NoPage from "./nopage";
import DashBoard from "./dashboard";
import Home from "./home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
