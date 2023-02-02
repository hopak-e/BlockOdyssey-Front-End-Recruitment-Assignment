import React from 'react'

import arrow from 'assets/arrow.png'
import S from './DropDown.module.scss'

interface Props {
    isState: boolean
    selectedOption: string
    handleDropDownClick: () => void
    handleSelectClick: (e: React.MouseEvent<HTMLLIElement>) => void
    options: string[]
    markArr: Record<string, string>
}

const DropDown = ({ ...props }: Props) => {
    return (
        <div className={S.classification} onClick={props.handleDropDownClick}>
            <div>{props.selectedOption}</div>
            <img src={arrow} />
            {props.isState && (
                <ul className={S.toggled_list}>
                    {props.options.map((option) => (
                        <li
                            className={S.toggled_option}
                            onClick={props.handleSelectClick}
                            key={option}
                        >
                            {props.markArr[option]}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DropDown
