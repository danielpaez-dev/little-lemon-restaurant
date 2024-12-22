import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Booking from "../pages/Booking";
import Order from "../pages/Order";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

function Main() {
  return (
    <main role="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} /> {/* Ruta 404 */}
      </Routes>
    </main>
  );
}

export default Main;
