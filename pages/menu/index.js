import Layout from "../../components/Layout";
import Link from "next/link";
import styles from './Menu.module.css'

export default function Menu(){
    return(
        <>
        <Layout title={"know.ly || Home"}>
            <nav className={styles.nav}>
                <Link href="/historia">
                <a><button className={styles.button}>Ingles</button></a>
                </Link>
                <Link href="/nextjs">
                <a><button className={styles.button}>Next.Js</button></a>
                </Link>
                <Link href="/matematicas">
                <a><button className={styles.button}>Matematicas</button></a>
                </Link>
                <Link href="/historia">
                <a><button className={styles.button}>Personajes</button></a>
                </Link>
                <Link href="/software">
                <a><button className={styles.button}>Ing.Software</button></a>
                </Link>
            </nav>
        </Layout>
        </>
    )
}