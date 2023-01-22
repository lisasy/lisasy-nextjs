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
              <span className={styles.roleSubtitle}><a href="https://www.daybreaksupply.co/" target="_blank" rel="noreferrer">Daybreak Supply Co.</a></span>
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
          <div >
            <ul className={styles.selectedList}>
              <li>
                <article>
                  <h4>Actus</h4>
                  <p className={styles.itemDescription}>
                    At Meta’s NPE, I led the design from 0-to-1 and brought to
                    market a modern volunteering platform to bridge
                    change-makers and community organizers.
                  </p>
                  <p className={styles.itemDate}>
                    2022
                  </p>
                </article>
                <Image className={styles.selectedImage} src="/thumbnail-actus@2x.png" alt="me" width={1920} height={1080} loading="lazy" />
              </li>
              <li>
                <article>
                  <h4>Move</h4>
                  <p className={styles.itemDescription}>
                    At Meta's NPE, I brought to market Move, an social
                    productivity app for empower community organizers and
                    everyone alike to create tasks and stay organized.
                  </p>
                  <p className={styles.itemDate}>
                    2021
                  </p>
                </article>
                <Image className={styles.selectedImage} src="/thumbnail-move@2x.png" alt="me" width={1920} height={1080} loading="lazy" />
              </li>
              <li>
                <article>
                  <h4>The Shape of the End</h4>
                  <p className={styles.itemDescription}>
                    During the COVID-19 pandemic lockdown, I created a comic to
                  capture the pivotal moment and present a case for optimism
                  looking ahead.
                  </p>
                  <p className={styles.itemDate}>
                    2021
                  </p>
                </article>
                <Image className={styles.selectedImage} src="/thumbnail-ashapeoftheend@2x.png" alt="me" width={1920} height={1080} loading="lazy" />
              </li>
              <li>
                <article>
                  <h4>
                    Facebook Live Reporting Experience
                  </h4>
                  <p className={styles.itemDescription}>
                    I led design to release Live Video reporting from 0 to full release in 1 month. I coordinated with cross-functional partners in product, engineering, legal, and communications, across our Menlo Park and London timezones. Launched on Android, iOS, and web.
                  </p>
                  <p className={styles.itemDate}>
                    2021
                  </p>
                </article>
                <Image className={styles.selectedImage} src="/thumbnail-fbreporting@2x.png" alt="me" width={1920} height={1080} loading="lazy" />
              </li>
              <li>
                <article>
                  <h4>Tall Poppy</h4>
                  <p className={styles.itemDescription}>
                    I supported Tall Poppy in revamping their product to help people proactively protect their online security and safety. I led research and design to improve new user onboarding and help people track the progress on actions they take to safeguard themselves.
                  </p>
                  <p className={styles.itemDate}>
                    2019
                  </p>
                </article>
                <Image className={styles.selectedImage} src="/thumbnail-tallpoppy@2x.png" alt="me" width={1920} height={1080} loading="lazy" />
              </li>
            </ul>
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
        <div className={styles.footerCredits}>
          <p>
            Made with <a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a> and <a href="https://vercel.com/" target="_blank" rel="noreferrer">Vercel</a>. View my <a href="https://github.com/lisasy/lisasy-nextjs" target="_blank" rel="noreferrer">source code on Github</a>.
          </p>
          <p>
            Typeface: Unbounded and DM Sans on Google Fonts.
          </p>
        </div>
      </footer>
    </div>
  )
}
