import React from "react"
import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.repetitionContainer}>
        <div style={{ top: "0", opacity: "25%" }} className={styles.title}>
          Contact
        </div>
        <div className={styles.title2}>Contact</div>
        <h1 style={{ WebkitTextFillColor: "#111111" }} className={styles.title}>
          Contact
        </h1>
      </div>
      <div className={styles.content}>
        <a
          className={styles.resume}
          href="/Amiel Filarca - Resume.pdf"
          download
        >
          Resume
        </a>
        <h2
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          className={styles.h2}
        >
          Feel free to reach out through any platforms below:
        </h2>
        <div className={styles.links}>
          <a
            data-sal="slide-up"
            data-sal-delay="500"
            data-sal-easing="ease"
            className={styles.linkItem}
            href="mailto:amielfilarca@gmail.com"
          >
            Email
          </a>
          <a
            data-sal="slide-up"
            data-sal-delay="700"
            data-sal-easing="ease"
            className={styles.linkItem}
            href="https://github.com/amielfilarca"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            data-sal="slide-up"
            data-sal-delay="900"
            data-sal-easing="ease"
            className={styles.linkItem}
            href="https://www.linkedin.com/in/keaneamielfilarca/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <footer className={styles.footer}>&copy; 2020 Amiel Filarca</footer>
    </div>
  )
}
