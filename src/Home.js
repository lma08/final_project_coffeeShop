import Cart from './components/Cart/Cart';
import AllCategories from './components/Filters/AllCategories';
import Items from './components/ItemsComponent/Items';

function Home() {
    return (
    <div className='App'>
        <div className='block block1'>
            <AllCategories/>
            <Cart/>
        </div>
        <div className='block'>
            <Items/>
        </div>
    </div>
    );
}

export default Home;