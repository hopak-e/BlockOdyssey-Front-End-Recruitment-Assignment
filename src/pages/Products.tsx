import S from './Products.module.scss'
import Search from 'components/feature/products/Search/Search'
import SearchedList from 'components/feature/products/SearchedList/SearchedList'

const Products = () => {
    return (
        <div className={S.container}>
            <Search />
            <SearchedList />
        </div>
    )
}

export default Products
