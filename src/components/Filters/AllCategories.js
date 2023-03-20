import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div className="block1">
            <h2>Start your day right!</h2>
            {['All Menu', 'Hot Coffee', 'Iced Coffee', 'Hot Tea', 'Bakery', 'Sandwiches'].map (
                (category, index) => <Filter category={category} key={index}/>
            )}
        </div>
    )
}
export default AllCategories;