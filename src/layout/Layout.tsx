import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/Common/NavBar";
import Footer from "../components/Common/Footer";
import { HashLoader } from "react-spinners";
import { useEffect, useState } from "react";

const Layout = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="flex min-h-screen flex-col">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-md">
          <HashLoader size={50} color="#001779" speedMultiplier={1.2} />
        </div>
      )}

      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      {/* Page Content */}
      <main className="mt-[66px] sm:mt-[82px]">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
