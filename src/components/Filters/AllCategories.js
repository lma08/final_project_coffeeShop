import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div className="block1">
            <h2>Start your day right!</h2>
            {['All Menu', 'Hot Coffee', 'Iced Coffee', 'Hot Tea', 'Bakery', 'Sandwiches'].map (
                (category, id) => <Filter category={category} key={id}/>
            )}
        </div>
    )
}
export default AllCategories;