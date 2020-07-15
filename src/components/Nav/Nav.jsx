import React from 'react';
import styles from './Nav.module.css';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <header>
                <Link to="/"><h2>Shoeper</h2></Link>
                <nav>
                    <ul className={styles.navlinks}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="launch">Launch</Link></li>
                    </ul>
                </nav>
                <a className={styles.cta} href="#"><button>Contact</button></a>
            </header>
        </div>
    )
}

export default Nav;
