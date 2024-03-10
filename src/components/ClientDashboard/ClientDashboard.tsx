import React from 'react'
import styles from './ClientDashboard.module.scss'

const ClientDashboard = () => {
    return (
        <main className={styles.container}>
            <section className={styles.row1}>
                <article className={styles.column1}>Column 1</article>
                <article className={styles.column2}>Column 2</article>
                <article className={styles.column3}>Column 3</article>
            </section>
            <section className={styles.row2}>
                <article className={styles.column4}>Column 4</article>
                <article className={styles.column5}>Column 5</article>
            </section>
        </main>
    )
}

export default ClientDashboard