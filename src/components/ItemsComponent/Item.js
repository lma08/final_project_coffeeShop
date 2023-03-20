import { useState } from "react";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuntity";
import { useDispatch } from "react-redux";

const Item = ({element}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const [showText, setShowText] = useState(false);
    
    const showTextBtn = (element) => {
    element.showMore =! element.showMore;
    setShowText(!showText);
}

    return (
        <div className="blockOneItem">
            <img src={`./${element.image}.jpg`} alt='food' className="itemImg"/>
            <h3>{element.itemName}</h3>
            <p className="description">
                {element.showMore ? element.description: element.description.substring(0,25)+'...'} 
                <button className='btn_more' onClick={()=> showTextBtn(element)}>
                {element.showMore ? 'show less' : 'show more'}</button>
            </p>
            <p><strong>$ {element.price.toFixed(2)}</strong></p>
            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
            <button className="btnAddItem" onClick={() => dispatch(addItemToCart({element, quantity}))}>Add To Cart</button>
        </div>
    )
}

export default Item;