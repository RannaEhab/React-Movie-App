import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("../pages/JavaScript/Home"));
const WatchList = React.lazy(() => import("../pages/JavaScript/WatchList"));
const Details = React.lazy(() => import("../pages/JavaScript/Details"));
const NotFound = React.lazy(() => import("../pages/JavaScript/NotFound"));
const Search = React.lazy(() => import("../pages/JavaScript/Search"));
const Registertion = React.lazy(() =>
  import("../pages/JavaScript/Registertion")
);
const User = React.lazy(() => import("../pages/JavaScript/User"));

function RoutesConfig() {
  return (
    <Suspense fallback={<h3>Please wait while loading the page...</h3>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchList" element={<WatchList />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Registertion />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default RoutesConfig;
