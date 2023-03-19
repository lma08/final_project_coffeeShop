const ChangeQuantity = ({quantity, setQuantity}) => {

    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    return(
        <div>
            <button className="btnQuantity" onClick={removeQuantity}>-1</button>
            <span> <strong> {quantity}</strong> </span>
            <button className="btnQuantity" onClick={addQuantity}>+1</button>
        </div>
    )
}

export default ChangeQuantity;