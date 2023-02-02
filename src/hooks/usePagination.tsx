import { ELLIPSIS } from 'constants/pagination'
import { Pagination } from 'types/products'

const usePagination = ({ totalPage, page }: Pagination) => {
    const firstPage = 1
    const currentPage = parseInt(page)
    const prevDot = currentPage - firstPage
    const nextDot = totalPage - currentPage

    const frontBackPage = [currentPage - 1, currentPage, currentPage + 1]

    if (totalPage <= 5)
        return [
            ...Array(totalPage)
                .fill(0)
                .map((_, i) => i + 1),
        ]
    else if (prevDot > 3) {
        if (nextDot > 3) return [1, ELLIPSIS, ...frontBackPage, ELLIPSIS, totalPage]
        else
            return [
                1,
                ELLIPSIS,
                ...Array(5)
                    .fill(0)
                    .map((_, i) => totalPage - 4 + i),
            ]
    } else if (nextDot > 3) {
        return [
            ...Array(5)
                .fill(0)
                .map((_, i) => i + 1),
            ELLIPSIS,
            totalPage,
        ]
    }
}

export default usePagination
