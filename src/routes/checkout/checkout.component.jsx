import { useContext } from 'react';
import './checkout.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import CheckOutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="hader-block">
          <span>Product</span>
        </div>
        <div className="hader-block">
          <span>Description</span>
        </div>
        <div className="hader-block">
          <span>Quantity</span>
        </div>
        <div className="hader-block">
          <span>Price</span>
        </div>
        <div className="hader-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((item) => (
        <CheckOutItem cartItem={item} key={item.id} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
