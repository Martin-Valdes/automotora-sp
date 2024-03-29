import Item from "../Item/Item"
import "./ItemList.scss"

const ItemList = ({cars}) =>{
    
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