import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return (
        <div>
            <h2>Your Cart</h2>
            <h3>Total: $ {totalPrice.toFixed(2)}</h3>
            {cartItems.map ((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
        </div>
    )
}
export default Cart;