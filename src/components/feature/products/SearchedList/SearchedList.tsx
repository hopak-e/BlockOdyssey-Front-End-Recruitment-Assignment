import { useQuery } from '@tanstack/react-query'

import S from './SearchedList.module.scss'
import { useAppSelector } from 'store/store'
import { getTotalProducts } from 'apis/ProductList'
import { Products } from 'types/products'
import filterProducts from 'utils/filterProducts'
import Pagination from '../Pagination/Pagination'

const SearchedList = () => {
    const { type, keyword, page, limit } = useAppSelector((state) => state.optionReducer)
    const { data } = useQuery(['getTotalProducts'], getTotalProducts)
    const offset = (parseInt(page) - 1) * parseInt(limit)
    const newList = filterProducts(data, type, keyword)

    if (!newList) return <div>로딩중...</div>
    return (
        <div className={S.container}>
            <p className={S.count}>{`검색된 데이터 : ${newList?.length}건`}</p>
            <div className={S.list}>
                <div className={S.list_title}>
                    <p className={S.number}>상품번호</p>
                    <p className={S.name}>상품명</p>
                    <p className={S.brand}>브랜드</p>
                    <p className={S.content}>상품내용</p>
                    <p className={S.price}>가격</p>
                    <p className={S.grade}>평점</p>
                    <p className={S.stock}>재고</p>
                </div>
                <ul>
                    {newList &&
                        newList
                            .slice(offset, offset + parseInt(limit))
                            .map((products: Products) => (
                                <li className={S.list_title} key={products.id}>
                                    <p className={S.number}>{products.id}</p>
                                    <p className={S.name}>{products.title}</p>
                                    <p className={S.brand}>{products.brand}</p>
                                    <p className={S.content}>
                                        {products.description.length > 40
                                            ? `${products.description.slice(0, 41)}...`
                                            : products.description}
                                    </p>
                                    <p className={S.price}>{`$${products.price}`}</p>
                                    <p className={S.grade}>{products.rating}</p>
                                    <p className={S.stock}>{products.stock}</p>
                                </li>
                            ))}
                </ul>
            </div>
            <Pagination newList={newList} />
        </div>
    )
}

export default SearchedList
