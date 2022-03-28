import Layout from "../../components/Layout";
import Link from "next/link";
import styles from './Menu.module.css'

export default function MenuAdd(){
    return(
        <>
        <Layout title={"know.ly || Home"}>
            <nav className={styles.nav}>
                <Link href="/historia/add">
                <a><button className={styles.button}>Ingles</button></a>
                </Link>
                <Link href="/nextjs/add">
                <a><button className={styles.button}>Next.Js</button></a>
                </Link>
                <Link href="/matematicas/add">
                <a><button className={styles.button}>Matematicas</button></a>
                </Link>
                <Link href="/historia/add">
                <a><button className={styles.button}>Personajes</button></a>
                </Link>
                <Link href="/software/add">
                <a><button className={styles.button}>Ing.Software</button></a>
                </Link>
                <Link href="/javascript/add">
                <a><button className={styles.button}>Javascript</button></a>
                </Link>
            </nav>
        </Layout>
        </>
    )
}