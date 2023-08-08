import React, { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar/nav-bar";
import Footer from "./components/footer/footer";
import Login from "./components/modals/login";

// Lazy load pages
const MainPage = React.lazy(() => import("./pages/main-page/main-page"));
const Cart = React.lazy(() => import("./pages/cart/cart"));
const Wishes = React.lazy(() => import("./pages/wishes/wishes"));

function App() {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <>
      <NavBar setActiveModal={setActiveModal} />

      <div className="app_content">
        <Suspense fallback={".....Loading"}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishes" element={<Wishes />} />

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
