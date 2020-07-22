import React from 'react'
import styles from './Home.module.css';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className={styles.container}>
            <h1>Welcome to Shoeper</h1>
            <br/>
            <button className={styles.btn}><Link to="/launch">Enter</Link></button>
            <div className={styles.linearWipe} id={styles.credit}>Made with ❤ by <a href="https://github.com/hasanza/shoe-store" alt="github link">Hasan Raza</a></div>
        </div>
    )
}

export default Home;
