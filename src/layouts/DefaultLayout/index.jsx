import Header from "../Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
function DefaultLayout() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <header className="">
        <div className=" bg-gray-900">
          <Header isShow={false} />
        </div>
      </header>
      <div className="  ">
        <div className="">
          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
