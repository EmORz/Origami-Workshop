  
import React from 'react'
import Link from '../link'
import logo from '../../images/white-origami-bird.png'
import styles from './index.module.css'


const Header = () =>{
    return (
        <header className={styles.navigation}>
            <ul>
                <img className={styles.logo} src={logo}/>

                <Link href='#' title='Coing to 1' type='header'/>
                <Link href='#' title='Coing to 2' type='header'/>
                <Link href='#' title='Coing to 3' type='header'/>
                
            </ul>
        </header>
    )
}

export default Header