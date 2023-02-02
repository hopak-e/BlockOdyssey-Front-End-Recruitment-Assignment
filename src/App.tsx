import { useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

import Products from 'pages/Products'
import { options } from 'store/optionReducer'
import { useAppDispatch, useAppSelector } from 'store/store'

function App() {
    const { search } = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()
    const dispatch = useAppDispatch()
    const selector = useAppSelector((state) => state.optionReducer)

    useEffect(() => {
        if (!search) setSearchParams(selector)
        const obj: Record<string, string> = { ...selector }
        for (const [key, value] of searchParams.entries()) {
            obj[key] = value
            dispatch(options({ ...obj }))
        }
    }, [setSearchParams])

    return (
        <>
            <Products />
        </>
    )
}

export default App
