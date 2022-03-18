import Layout from "../../components/Layout";
import Link from "next/link";
import styles from './Menu.module.css'

export default function MenuAdd(){
    return(
        <>
        <Layout title={"know.ly || Home"}>
            <nav className={styles.nav}>
                <Link href="/historia/add">
                <a><button className={styles.button}>Historia</button></a>
                </Link>
                <Link href="/historia">
                <a><button className={styles.button}>Religion</button></a>
                </Link>
                <Link href="/historia">
                <a><button className={styles.button}>Matematica</button></a>
                </Link>
                <Link href="/historia">
                <a><button className={styles.button}>Personajes</button></a>
                </Link>
            </nav>
        </Layout>
        </>
    )
}