import { createAxiosInstance } from './Instance'
import { Products } from 'types/products'

const instance = createAxiosInstance()

export const getTotalProducts = async () => {
    try {
        const res = await instance.get('/products', {
            params: { limit: 100 },
        })
        const products: Products[] = res.data.products
        return products
    } catch (error) {
        console.log(error)
    }
}
