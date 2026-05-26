import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    const timer =
      setTimeout(() => {

        setLoading(false);

      },3000);

    return () =>
      clearTimeout(timer);

  },[]);

  return (

    <BrowserRouter>

      <AnimatePresence mode="wait">

        {loading ? (

          <LoadingScreen />

        ) : (

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

          </Routes>

        )}

      </AnimatePresence>

    </BrowserRouter>

  );

}

export default App;