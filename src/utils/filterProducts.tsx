import { SEARCH_NAME } from 'constants/search'
import getKeyByValue from './getKeyByValue'
import { Products } from 'types/products'

const filterProducts = (data: Products[] | undefined, type: string, keyword: string) => {
    const key = getKeyByValue(SEARCH_NAME, type)

    if (keyword === '') return data
    if (data && key) {
        if (key === 'all') {
            const allArr = data.filter(
                (items) =>
                    items.title.toLowerCase().includes(keyword.toLowerCase()) ||
                    items.brand.toLowerCase().includes(keyword.toLowerCase()) ||
                    items.description.toLowerCase().includes(keyword.toLowerCase())
            )
            return allArr
        } else {
            const newArr = data.filter((items) =>
                items[key].toLowerCase().includes(keyword.toLowerCase())
            )
            return newArr
        }
    }
}

export default filterProducts
