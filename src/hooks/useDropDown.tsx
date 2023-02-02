import React, { useState } from 'react'

import { PAGINATION_LIMIT_OBJ } from 'constants/pagination'
import { useSearchParams } from 'react-router-dom'

const useDropDown = (selector: Record<string, string>) => {
    const [isShow, setIsShow] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()

    const handleDropDownClick = () => {
        setIsShow(!isShow)
    }
    const handleSelectClick = (e: React.MouseEvent<HTMLLIElement>) => {
        const target = e.target as HTMLLIElement
        if (Object.keys(PAGINATION_LIMIT_OBJ).includes(target.innerText)) {
            setSearchParams({ ...selector, limit: target.innerText, page: String(1) })
        } else {
            setSearchParams({ ...selector, type: target.innerText })
        }
        setIsShow(false)
    }
    return { isShow, handleDropDownClick, handleSelectClick }
}

export default useDropDown
