import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import PagFeed from "./PagFeed";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/feed" element={<PagFeed/>}/>
      <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
