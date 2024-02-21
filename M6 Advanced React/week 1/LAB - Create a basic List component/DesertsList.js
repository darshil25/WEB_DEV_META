function DessertsList(props) {
    // Implement the component here.
    const filteredDesserts = props.data.filter((dessert) => {return dessert.calories < 500});
    const sortedDesserts = filteredDesserts.sort((a, b) => {return a.calories - b.calories});
    const desList = sortedDesserts.map((dessert) => {
        return (
        <li>
            {dessert.name} - {dessert.calories} cal 
        </li>
        )
    });
    return (<ul>{desList}</ul>)
}

export default DessertsList;
