import React from 'react'
import styles from './Column1.module.scss'
const Column1 = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <p className={styles.title}>Current Weather</p>
                <span className={styles.subTitle}>8: 00pm</span>
            </div>
            <div className={styles.body}>
                <div className="icon">
                    Icon
                </div>
                <div className="temperature">
                    <p className={styles.headTitle}>24<sup className={styles.superText}>°C</sup></p>
                    <span className={styles.subTitle}>Heavy rain</span>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.iconBox}>Icon 1</div>
                <div className={styles.iconBox}>Icon 1</div>
                <div className={styles.iconBox}>Icon 1</div>
                <div className={styles.iconBox}>Icon 1</div>
            </div>
        </div>
    )
}

export default Column1