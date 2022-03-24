import Link from 'next/link'
import Layout from './Layout'
import styles from '../pages/menu/Menu.module.css'
export default function Correct({pregunta,setVisible, link, description}){
    return(
        <>
        <div className={styles.div1}>

        <h2 className={styles.correct}>Perfecto!</h2>

          
        </div>

        </>
    )
}