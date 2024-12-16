import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Reservations from "../pages/Reservations";
import Order from "../pages/Order";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

function Main() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} /> {/* Ruta 404 */}
      </Routes>
  );
}

export default Main;
