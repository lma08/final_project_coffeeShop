import { useDispatch } from "react-redux";
import DataItems from "../../data/DataItems";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {

    const elements = DataItems.find(element => element.id === cartItem.itemId);
    const dispatch = useDispatch();

    return (
        <div>
            <p>{elements.itemName} 
                <span>
                    <img className="deleteIcon" alt="delete" 
                        onClick={() => (dispatch(removeItemFromCart({cartItemId: cartItem.id})))} 
                        src="https://img.icons8.com/ios/50/000000/delete--v1.png"/>
                </span>
            </p>
            <p>{cartItem.quantity} item(s):
                <span> $ {(elements.price * cartItem.quantity).toFixed(2)}</span>
            </p>
        </div>
    )
}

export default CartItem;