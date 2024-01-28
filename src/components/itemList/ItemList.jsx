import Item from "../item/Item"
import "./ItemList.scss"

const ItemList = ({cars}) =>{
    console.log(cars)
    return (
        <div className="itemList">
            {
                cars.map((car) =>(
                    
                    <Item car = {car} key={car.id}/>
                ))
                
            }
        </div>
    )
}

export default ItemList