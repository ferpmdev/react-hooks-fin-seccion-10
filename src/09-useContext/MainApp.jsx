import { Link, Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";

export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <Navbar />
      <hr />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<Navigate to={"/about"} />} />
      </Routes>
    </>
  );
};
