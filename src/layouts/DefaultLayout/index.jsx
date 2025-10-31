import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
function DefaultLayout() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <header className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-20 flex items-center">
        <div className="  w-full max-w-6xl mx-auto px-4">
          <Header isShow={false} />
        </div>
      </header>
      <div className="  pt-16 max-w-6xl mx-auto gap-6 px-4 mb-10">
        <div className="">
          <div className=" py-4"><Outlet /></div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default DefaultLayout;
