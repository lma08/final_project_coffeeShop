import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/itemsSlice";

const Filter = ({category}) => {

    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();

    return(
        <div>
            <h3 onClick={() => (dispatch(filterCategory(category)))} 
                className={selectedCategory === category ? 'categorySelectedBtn categoryBtn' : 'categoryBtn'}>{category}</h3>
        </div>
    ) 
}

export default Filter;