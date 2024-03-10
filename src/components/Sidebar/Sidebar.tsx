"use client"
import React, { useMemo, useState } from 'react'
import styles from './Sidebar.module.scss'
import HamburgerIcon from '@/lib/svg/SidebarSvg/HamburgerIcon'
import DashboardIcon from '@/lib/svg/SidebarSvg/DashboardIcon'
import TrackingMapIcon from '@/lib/svg/SidebarSvg/TrackingMapIcon'
import NewsIcon from '@/lib/svg/SidebarSvg/NewsIcon'
import SettingsIconSvg from '@/lib/svg/SidebarSvg/SettingsIconSvg'

const Sidebar = () => {
    const [sideBarOpen, setSideBarOpen] = useState<boolean>(true)
    const handleSidebarOpen = (): void => {
        setSideBarOpen((prev) => !prev)
    }
    const styling = useMemo(() => {
        const sidebarCSS: React.CSSProperties = {
            position: sideBarOpen ? 'sticky' : 'absolute',
            height: sideBarOpen ? '100%' : '60px'
        }
        return sidebarCSS
    }, [sideBarOpen])
    
    return (
        <div className={styles.Wrapper} style={styling}>
            <div className={styles.logo} onClick={handleSidebarOpen}>
                <HamburgerIcon fill='white' />
            </div>
            <div className={styles.sideBtnsWrapper}>
                <div>
                    <DashboardIcon fill='white' />
                </div>
                <div>
                    <TrackingMapIcon fill='white' />
                </div>
                <div>
                    <NewsIcon fill='white' />
                </div>
            </div>
            <div>
                <div>
                    <SettingsIconSvg fill='white' />
                </div>
            </div>

        </div>
    )
}

export default Sidebar