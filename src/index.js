import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import User from "./User";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path='/user/:id' element={<User />} />
        </Route>
        <Route path="*" element={<p>Oops, Page doesn't exists! Nothing Here</p>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
