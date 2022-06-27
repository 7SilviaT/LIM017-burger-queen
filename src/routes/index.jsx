import { BrowserRouter, Routes, Route } from "react-router-dom";

import { listRoute } from "./data";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {listRoute.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
