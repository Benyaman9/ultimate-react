import data from "../data/productos.json"


const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(data);
        },300)
        

    })

}
export const pedirItemPorId =(id) => {
    return new Promise ((resolve, reject) => {
        const item = data.find((el)=> el.id === id);

        if (item) {
            resolve(item)
        } else {
            reject({
                error: "no se encontro el producto"
            })
        }

    })
}




export default pedirProductos;