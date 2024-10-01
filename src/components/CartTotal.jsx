import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartTotal = () => {
  const { totalPrice } = useContext(CartContext);

  return (
    <div>
      <p>Total: ${totalPrice}</p>
    </div>
  );
};

export default CartTotal;
