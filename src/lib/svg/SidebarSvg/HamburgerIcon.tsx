import ISvgIconProps from '@/Interfaces/IsvgProps'
import React from 'react'

const HamburgerIcon = (props: ISvgIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" {...props}>
            <path d="M1 2h14v2H1zm0 5h14v2H1zm0 5h14v2H1z"/>
        </svg>
    )
}

export default HamburgerIcon