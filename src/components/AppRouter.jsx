import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../routers/layouts/Header";
import Content from "../routers/layouts/Content";
import Footer from "../routers/layouts/Footer";

const AppRouter = () => {
  return (
    <Router>
      {/* Header */}
      <Route path="/" component={Header} />
      {/* Content */}
      <Route path="/" component={Content} />
      {/* Footer */}
      <Route path="/" component={Footer} />
    </Router>
  );
};

export default AppRouter;
