import React, { Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/nav-bar/nav-bar";
import Footer from "./components/footer/footer";
import Login from "./components/modals/login";
import Loading from "./pages/loading/loading";

// Lazy load pages
const MainPage = React.lazy(() => import("./pages/main-page/main-page"));
const Cart = React.lazy(() => import("./pages/cart/cart"));
const Wishes = React.lazy(() => import("./pages/wishes/wishes"));
const Checkout = React.lazy(() => import("./pages/checkout/checkout"));

function App() {
  const [activeModal, setActiveModal] = useState(false);
  const [activeSecondNav, setActiveSecondNav] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/checkout") {
      setActiveSecondNav(true);
    } else {
      setActiveSecondNav(false);
    }
  }, [location.pathname]);
  return (
    <>
      <NavBar
        setActiveModal={setActiveModal}
        activeSecondNav={activeSecondNav}
      />

      <div className="app_content">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/wishes"
              element={<Wishes setActiveModal={setActiveModal} />}
            />
            <Route
              path="/checkout"
              element={<Checkout setActiveModal={setActiveModal} />}
            />

            {/* <Route path="/about-item/:name" element={<AboutItem />} />
         
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </div>
      {activeModal ? <Login setActiveModal={setActiveModal} /> : ""}
      <Footer />
    </>
  );
}

export default App;
