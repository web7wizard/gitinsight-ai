import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

function DashboardLayout({ children }) {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Sidebar />

      <div className="ml-72">
        <Navbar />

        <main className="p-10">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;