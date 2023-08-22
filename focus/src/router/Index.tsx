import React from "react";
import { Routes, Route } from "react-router-dom";
import { routeList } from "./routeConfig";

export default function pageRoute() {
  return (
    <Routes>
      {routeList.map((route) => (
        <Route key={route.id} path={route.path} Component={route.Component} />
      ))}
    </Routes>
  );
}
