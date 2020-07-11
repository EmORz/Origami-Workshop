import React from 'react'
import Link from '../link'

import styles from './index.module.css'


const Header = () =>{
    return (
        <header className={styles.navigation}>
            <ul>
                <Link href='#' title='Coing to 1' type='header'/>
                <Link href='#' title='Coing to 2' type='header'/>
                <Link href='#' title='Coing to 3' type='header'/>
                
            </ul>
        </header>
    )
}

export default Header