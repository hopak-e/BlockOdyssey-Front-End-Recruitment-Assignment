import React from 'react'
import { uid } from 'react-uid'
import { useSearchParams } from 'react-router-dom'

import { useAppSelector } from 'store/store'
import useDropDown from 'hooks/useDropDown'
import DropDown from 'components/shared/DropDown/DropDown'
import S from './Pagination.module.scss'
import { ELLIPSIS, PAGINATION_LIMIT, PAGINATION_LIMIT_OBJ } from 'constants/pagination'
import { Products } from 'types/products'
import usePagination from 'hooks/usePagination'

interface Props {
    newList: Products[]
}

const Pagination = ({ newList }: Props) => {
    const selector = useAppSelector((state) => state.optionReducer)
    const { page, limit } = selector
    const totalPage = Math.ceil(newList.length / parseInt(limit))

    const [searchParams, setSearchParams] = useSearchParams()
    const { isShow: isShowLimit, handleDropDownClick, handleSelectClick } = useDropDown(selector)
    const filteredPagination = usePagination({ totalPage, page })

    const handlePageBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const target = e.target as HTMLButtonElement
        setSearchParams({ ...selector, page: target.innerText })
    }

    const handlePrevBtnClick = () => {
        setSearchParams({ ...selector, page: String(parseInt(page) - 1) })
    }

    const handleNextBtnClick = () => {
        setSearchParams({ ...selector, page: String(parseInt(page) + 1) })
    }

    return (
        <div className={S.container}>
            <div className={S.dropdown}>
                <p className={S.limit}>페이지 당 행 : &nbsp;</p>
                <DropDown
                    isState={isShowLimit}
                    selectedOption={limit}
                    handleDropDownClick={handleDropDownClick}
                    handleSelectClick={handleSelectClick}
                    options={PAGINATION_LIMIT}
                    markObj={PAGINATION_LIMIT_OBJ}
                />
            </div>
            <button disabled={page === '1'} onClick={handlePrevBtnClick}>
                &#60;
            </button>
            {filteredPagination?.map((page, idx) =>
                page === ELLIPSIS ? (
                    <button className={S.page_btn} disabled key={uid(idx)}>
                        {page}
                    </button>
                ) : (
                    <button className={S.page_btn} key={uid(idx)} onClick={handlePageBtnClick}>
                        {page}
                    </button>
                )
            )}
            <button
                className={S.page_btn}
                disabled={parseInt(page) === totalPage}
                onClick={handleNextBtnClick}
            >
                &#62;
            </button>
        </div>
    )
}

export default Pagination
