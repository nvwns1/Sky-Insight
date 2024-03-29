import ISvgIconProps from '@/Interfaces/IsvgProps'
import React from 'react'

const DashboardIcon = (props: ISvgIconProps) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48" width="24" height="24" {...props}>
            <path d="M6 26h16V6H6v20zm0 16h16V30H6v12zm20 0h16V22H26v20zm0-36v12h16V6H26z" />
        </svg>
    )
}

export default DashboardIcon