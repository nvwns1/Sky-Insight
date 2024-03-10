import React from 'react'
import styles from './Navbar.module.scss'
import SearchIconSvg from '@/lib/svg/NavbarSvg/SearchIconSvg'
import ProfileIconSvg from '@/lib/svg/NavbarSvg/ProfileIconSvg'
const Navbar = () => {
    return (
        <nav className={styles.navbarRoot}>
            <div className={styles.searchInput}>
                <SearchIconSvg />
                SearchInput Field
            </div>
            <div className={styles.profileSection}>
                <ProfileIconSvg />
            </div>
        </nav>
    )
}

export default Navbar