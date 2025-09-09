import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages2/Home";
import { Contact } from "./pages2/Contact";
import { NotFound } from "./pages2/NotFound";
import { About } from "./pages2/About";
import { Login } from "./pages2/Login";
import { Register } from "./pages2/Register";
import { Header } from "./pages2/Header";
import { Product } from "./pages2/Product";
import { Details } from "./pages2/Details";
import { Home2 } from "./pages2/Home2";
import { CustomLink } from "./pages2/CustomLink";
import { Homepage } from "./pages2/Homepage";
import { ListUser } from "./pages2/ListUser";
import { UserDetails } from "./pages2/UserDetails";
function App() {
  // bai 7 truy cap /custom
  //8 /ListUser
  return (
    <>
      <Routes>
        {" "}
        <Route path="/" element={<Header />}>
          <Route index element={<Home2 />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Details" element={<Details />} />
        </Route>
        <Route path="/ListUser" element={<ListUser />} />
        <Route path="/user-details/:id" element={<UserDetails />} />
        <Route path="/custom" element={<CustomLink />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home-page" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
