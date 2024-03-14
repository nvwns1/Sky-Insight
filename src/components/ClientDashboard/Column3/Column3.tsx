import React from 'react'
import styles from './Column3.module.scss'
const Column3 = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <p className={styles.title}>Popular Cities</p>
                <p className={styles.subTitle}>Show More</p>
            </div>
            <div className={styles.body}>
                {Array.from({ length: 5 }).map((_, index) => {
                    return <div className={styles.CityRow} key={index}>
                        <div className={styles.CityRowHead}>
                            <p>Icon</p>
                            <p>City name</p>
                        </div>
                        <p>Cloudy</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Column3