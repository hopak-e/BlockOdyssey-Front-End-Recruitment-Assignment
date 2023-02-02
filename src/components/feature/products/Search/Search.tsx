import React, { useEffect, useState } from 'react'

import useDropDown from 'hooks/useDropDown'
import S from './Search.module.scss'
import { SEARCH_NAME, SEARCH_TYPE } from 'constants/search'
import DropDown from 'components/shared/DropDown/DropDown'
import { options } from 'store/optionReducer'
import { useAppDispatch, useAppSelector } from 'store/store'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
    const selector = useAppSelector((state) => state.optionReducer)
    const { type, keyword } = selector
    const [keywordInput, setKeywordInput] = useState(selector.keyword)
    const [searchParams, setSearchParams] = useSearchParams()
    const { isShow: isShowType, handleDropDownClick, handleSelectClick } = useDropDown(selector)

    useEffect(() => {
        setKeywordInput(keyword)
    }, [keyword])

    const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setKeywordInput(e.target.value)
    }
    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSearchParams({ ...selector, page: String(1), keyword: keywordInput })
    }

    return (
        <div className={S.container}>
            <div className={S.title}>상품 검색</div>
            <div className={S.search}>
                <p className={S.label}>검색</p>
                <DropDown
                    isState={isShowType}
                    selectedOption={type}
                    handleDropDownClick={handleDropDownClick}
                    handleSelectClick={handleSelectClick}
                    options={SEARCH_TYPE}
                    markArr={SEARCH_NAME}
                />
                <input
                    className={S.search_input}
                    value={keywordInput}
                    onChange={handleKeywordChange}
                />
                <form className={S.search_form} onSubmit={handleSearchSubmit}>
                    <button type="submit" className={S.search_btn}>
                        조회
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Search
