// type de los productos
export type Product = {
    id: number,
    name: string,
    imageSrc: string,
    imageAlt: string,
    price: number,
    color: string,
}

// agregamos otro type pero con la cantidad
export type ProductItem = Product & {
    quantity: number
}