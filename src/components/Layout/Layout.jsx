import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
