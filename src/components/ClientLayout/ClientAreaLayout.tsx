import React from 'react'
import Sidebar from '@/components/Sidebar/Sidebar'
import Navbar from '@/components/Navbar/Navbar'
import styles from './ClientAreaLayout.module.scss'

const ClientAreaLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.root}>
            <Sidebar />
            <div className={styles.wrapper}>
                <Navbar />
                {children}
            </div>
        </div>)
}

export default ClientAreaLayout
