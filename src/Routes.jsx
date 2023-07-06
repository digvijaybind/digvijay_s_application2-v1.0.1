import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const NameyourStore = React.lazy(() => import("pages/NameyourStore"));
const LoginScreenOne = React.lazy(() => import("pages/LoginScreenOne"));
const LoginScreenTwo = React.lazy(() => import("pages/LoginScreenTwo"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<LoginScreenOne />} />
          <Route path="/loginsscreentwo" element={<LoginScreenTwo />} />
          <Route path="/nameyourstore" element={<NameyourStore />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
