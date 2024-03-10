import ISvgIconProps from '@/Interfaces/IsvgProps'
import React from 'react'

const SearchIconSvg = (props: ISvgIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 29 29" fill='none' stroke='#000' {...props}>
            <circle cx="11.854" cy="11.854" r="9" strokeMiterlimit="10" strokeWidth="2" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M18.451 18.451l7.695 7.695" />
        </svg>
    )
}

export default SearchIconSvg