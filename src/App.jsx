import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import NotFound from "./pages/NotFound";
import CartProvider from "./context/CartContext";
import PizzaProvider from "./context/PizzaContext";
import { UserContext } from "./context/UserContext";

function App() {
  const {user} = useContext(UserContext);
  return (
    <PizzaProvider>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login"/>}/>
        <Route path="/*" element={<NotFound />} />
   
      </Routes>
      <Footer />
    </CartProvider>
    </PizzaProvider>
  );
}

export default App;
