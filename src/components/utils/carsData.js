const cars = [

    {
        id: "7736h2",
        anio: "1943",
        marca: "BMW",
        img: "/img/img-20231201-wa0043.webp"
    },
    {
        id: "7736i2",
        anio: "1943",
        marca: "BMW",
        img: "/img/img-20231201-wa0043.webp"
    },
    {
        id: "773t2",
        anio: "1943",
        marca: "BMW",
        img: "/img/img-20231201-wa0043.webp"
    },
    {
        id: "78362",
        anio: "1943",
        marca: "BMW",
        img: "/img/img-20231201-wa0043.webp"
    },
    {
        id: "7736v2",
        anio: "1943",
        marca: "BMW",
        img: "/img/img-20231201-wa0043.webp"
    },
    {
        id: "7736vv2",
        anio: "1943",
        marca: "BMW",
        img: "/img/img-20231201-wa0043.webp"
    },
]
    const request = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(cars)
        }, 2000);
    })

export default request;