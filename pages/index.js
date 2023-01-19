import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.siteContainer}>
      <Head>
        <title >My name is Lisa.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="navbar">
      <h1 className="title">
          Lisa Sy
        </h1>
        {/* <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
        </ul> */}
      </nav>
      <header className={styles.heroContainer}>
        <h2 className={styles.heroText}>
          Product designer & artist building experiences to enlighten, entertain, and empower.
        </h2>
      </header>

      <main className={styles.contentContainer}>
        <section className={styles.sectionContainer}>
          <h3 className={styles.sectionTitle}>
            Currently
          </h3>
          <ul className={styles.roleList}>
          <li>
              <h4 className={styles.roleTitle}>Staff Product Designer</h4>
              <span className={styles.roleSubtitle}>Meta, New Product Experimentation</span>
            </li>
            <li>
              <h4 className={styles.roleTitle}>Founder & Designer</h4>
              <span className={styles.roleSubtitle}><a href="https://www.daybreaksupply.co/" target="_blank">Daybreak Supply Co.</a></span>
            </li>
            <li>
              <h4 className={styles.roleTitle}>Illustrator & Writer</h4>
              <span className={styles.roleSubtitle}>Featured comic: A Shape of the End</span>
            </li>
          </ul>
        </section>
        <section className={styles.sectionContainerWide}>
          <h3 className={styles.sectionTitle}>
            Selected
          </h3>
          <div className={styles.selectedList}>
          <Image className={styles.selectedImage} src="/thumbnail-actus@2x.png" alt="me" width={1920} height={1080} loading="lazy" />
          <Image className={styles.selectedImage} src="/thumbnail-move@2x.png" alt="me" width={1920} height={1080} loading="lazy" />
          <Image className={styles.selectedImage} src="/thumbnail-ashapeoftheend@2x.png" alt="me" width={1920} height={1080} loading="lazy" />
          <Image className={styles.selectedImage} src="/thumbnail-fbreporting@2x.png" alt="me" width={1920} height={1080} loading="lazy" />
          <Image className={styles.selectedImage} src="/thumbnail-tallpoppy@2x.png" alt="me" width={1920} height={1080} loading="lazy" />
          </div>
        </section>
      </main>
      
      
      {/* Refactor into Footer.module.css */}
      <footer className={styles.sectionContainerWide}>
        <h3 className={styles.sectionTitle}>
            Elsewhere
        </h3>
        <div className="md:mb-4">
          <a className={styles.footerEmail} href="" mailto="hello@lisasy.com">hello@lisasy.com</a>
        </div>
        <ul className={styles.footerList}>
          <li><a href="https://www.instagram.com/lisasyart" target="_blank" rel="noreferrer">Instagram</a></li>
          <li><a href="https://read.cv/lisasy" target="_blank" rel="noreferrer">Read.cv</a></li>
          <li><a href="https://twitter.com/lisasy" target="_blank" rel="noreferrer">Twitter</a></li>
        </ul>
      </footer>
    </div>
  )
}
