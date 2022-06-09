import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from 'src/components/layout/Layout';
import Home from "src/pages/Home";
import Share from "src/pages/Share";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/share" element={<Share />} />

        </Route>
      </Routes>
    </BrowserRouter>

  );
}
