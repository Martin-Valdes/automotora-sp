const cars = [

    {
        id: "7736h2",
        anio: "1943",
        marca: "BMW",
        img: "/img/autoprueba.jpg"
    },
    {
        id: "7736i2",
        anio: "1943",
        marca: "BMW",
        img: "/img/autoprueba.jpg"
    },
    {
        id: "773t2",
        anio: "1943",
        marca: "BMW",
        img: "/img/autoprueba.jpg"
    },
    {
        id: "78362",
        anio: "1943",
        marca: "BMW",
        img: "/img/autoprueba.jpg"
    },
    {
        id: "7736v2",
        anio: "1943",
        marca: "BMW",
        img: "/img/autoprueba.jpg"
    },
    {
        id: "7736vv2",
        anio: "1943",
        marca: "BMW",
        img: "/img/autoprueba.jpg"
    },
]
    const request = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(cars)
        }, 2000);
    })

export default request;