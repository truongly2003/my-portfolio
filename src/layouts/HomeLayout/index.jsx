import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
function HomeLayout() {
  return (
    <div className=" ">
      <header className=" w-full h-16 bg-gray-900/90 shadow-md ">
        <div className=" ">
          <Header isShow={false} />
        </div>
      </header>
      <div className="">
        <div className="mt-20">
          <Outlet />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomeLayout;
