// src/layouts/MainLayout.jsx
import Navbar from "../components/layout/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/common/BackToTop";
import { Outlet } from "react-router-dom";
// import PropTypes from "prop-types";
export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-950 text-white antialiased">
      <Navbar />
      <main className="pt-16 md:pt-20">
         <Outlet /> </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
// MainLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };
