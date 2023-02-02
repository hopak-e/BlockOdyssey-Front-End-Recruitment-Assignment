export interface Products {
    [key: string]: any
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
}

export interface Pagination {
    totalPage: number
    page: string
}
