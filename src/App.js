import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar/nav-bar";
import Footer from "./components/footer/footer";
import Cart from "./pages/cart/cart";
import Wishes from "./pages/wishes/wishes";

// Lazy load pages
const MainPage = React.lazy(() => import("./pages/main-page/main-page"));

function App() {
  return (
    <>
      <NavBar />

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
      <Footer />
    </>
  );
}

export default App;
