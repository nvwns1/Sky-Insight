import React from 'react'
import styles from './ClientDashboard.module.scss'
import { Column1, Column2, Column3, Column4, Column5 } from './helper'

const ClientDashboard = () => {
    return (
        <main className={styles.container}>
            <section className={styles.row1}>
                <article className={styles.column1}><Column1 /></article>
                <article className={styles.column2}><Column2 /></article>
                <article className={styles.column3}><Column3 /></article>
            </section>
            <section className={styles.row2}>
                <article className={styles.column4}><Column4 /></article>
                <article className={styles.column5}><Column5 /></article>
            </section>
        </main>
    )
}

export default ClientDashboard