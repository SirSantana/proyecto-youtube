import Layout from '../../components/Layout'
import styles from '../menu/Menu.module.css'
import Link from 'next/link'

export default function ModalErr(){
    return(
        <Layout>
            <div>
                <h2 className={styles.error}>Ups, esa no es</h2>
                <Link href="/">
                <a><button className={styles.button}>Regresar</button></a>
                </Link>
            </div>
        </Layout>
    )
}