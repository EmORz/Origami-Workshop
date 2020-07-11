import React from 'react'
import Link from '../link'
import styles from './index.module.css'


const Aside = ()=>{

    return (
        <aside className={styles.container}>

            <Link href='#' title='Going to 1' type='aside'></Link>
            <Link href='#' title='Going to 2'type='aside'></Link>
            <Link href='#' title='Going to 3' type='aside'></Link>
            <Link href='#' title='Going to 4' type='aside'></Link>

        </aside>
    )

}

export default Aside