import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
function HomeLayout() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <header className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-20 flex items-center">
        <div className="  w-full max-w-6xl mx-auto px-4">
          <Header isShow={false} />
        </div>
      </header>
      <div className="min-h-screen">
        <div className=" ">
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomeLayout;
