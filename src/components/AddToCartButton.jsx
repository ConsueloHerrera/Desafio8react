import  { useContext } from 'react';
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";

const AddToCartButton = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <Button variant = "dark" onClick={() => addToCart(item)}>
      Agregar 
    </Button>
  );
};

export default AddToCartButton;
