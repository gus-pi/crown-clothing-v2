import { useContext } from 'react';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button onClick={handleCheckout}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
