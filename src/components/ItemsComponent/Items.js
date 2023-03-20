import { useSelector } from "react-redux";
import DataItems from "../../data/DataItems";
import { getSelectedCategory } from "../../redux/itemsSlice";
import Item from "./Item";

const Items = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div className="blockItems">
            {DataItems
            .filter(element => {
                if (selectedCategory === 'All Menu') return true;
                return selectedCategory === element.category;
            })
            .map((element) => <Item key={element.id} element={element}/>)}
        </div>
    )
}
export default Items;