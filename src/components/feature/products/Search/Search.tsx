import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import useDropDown from 'hooks/useDropDown'
import { useAppSelector } from 'store/store'
import S from './Search.module.scss'
import DropDown from 'components/shared/DropDown/DropDown'
import { SEARCH_NAME, SEARCH_TYPE } from 'constants/search'

const Search = () => {
    const selector = useAppSelector((state) => state.optionReducer)
    const { type, keyword } = selector
    const [keywordInput, setKeywordInput] = useState(keyword)
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
                <form className={S.search_form} onSubmit={handleSearchSubmit}>
                    <input
                        className={S.search_input}
                        value={keywordInput}
                        onChange={handleKeywordChange}
                    />
                    <button type="submit" className={S.search_btn}>
                        조회
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Search
