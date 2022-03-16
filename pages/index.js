import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Layout title={"know.ly ||"}>
      <Link href="/menu">
      <a><button className={styles.button}>Aprender</button></a>
      </Link>
      <Link href="/new">
      <a><button className={styles.button}>Crear</button></a>
      </Link>
    </Layout>
    </>
    
  )
}
