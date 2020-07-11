import React from 'react'
import Link from '../link'

import styles from './index.module.css'


const Header = () =>{
    return (
        <header className={styles.navigation}>
            <ul>
                <Link href='#' title='Coing to 1'/>
                <Link href='#' title='Coing to 2'/>
                <Link href='#' title='Coing to 3'/>
                
            </ul>
        </header>
    )
}

export default Header