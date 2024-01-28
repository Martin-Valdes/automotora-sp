
const Item = ({car}) =>{
    console.log(car.marca)
    return(
        <div>
            <img src={car.img} alt=""/>
            <p>{car.marca}</p>

        </div>
    )
}
export default Item