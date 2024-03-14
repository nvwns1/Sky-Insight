"use client"
import React, { useState } from 'react'
import styles from './Column4.module.scss'
const Column4 = () => {
    const TabEumCol4 = {
        Days7: '7 Days',
        Days30: '30 Days',
    }

    const TabEumCol4Values = Object.values(TabEumCol4);
    const [tabIndex, setTabIndex] = useState(0)
    return (
        <div className={styles.wrapper}>
            <div className={styles.head}>
                <p className={styles.title}>Forecast</p>
                <div className={styles.headTab}>
                    {TabEumCol4Values.map((element, index) => {
                        return <button key={index} onClick={() => setTabIndex(index)}>{element}</button>
                    })}
                </div>
            </div>
            <div className={styles.body}>
                {tabIndex === 0 ? <>This is tabIndex0</> : <>This is tabIndex 1</>}
            </div>
        </div>
    )
}

export default Column4