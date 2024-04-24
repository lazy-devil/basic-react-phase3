export type ProductType = {
    id: number,
    name: string,
    image: string,
    price: number,
    quantity: number
}

export type StateType = {
    products: ProductType[],
    total: number,
    amount: number
}