import { Outlet } from "react-router-dom";
import Navbar from "./components/ui/organisms/Navbar";
import Footer from "./components/ui/organisms/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="overflow-x-hidden">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}