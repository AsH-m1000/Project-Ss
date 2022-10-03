import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";
import Signin from "./components/Signin"; // v2
import Signup from "./components/Signup"; // v2
import Account from "./components/Account"; // v2
import { AuthContextProvider } from "./context/AuthContext"; // v2
import ProtectedRoute from "./components/ProtectedRoute"; // v2

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="*" element={<Error />}></Route>
          {/* <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Home />
                <Account />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
