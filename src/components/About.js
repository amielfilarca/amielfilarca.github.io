import React from "react"
import styles from "./About.module.css"
import Image from "../images/af.jpg"

export default function About() {
  return (
    <section id="about" className={styles.container}>
      <div className={styles.repetitionContainer}>
        <div
          style={{ top: "0", zIndex: "0", opacity: "25%" }}
          className={styles.title}
        >
          About
        </div>
        <div
          style={{
            top: "calc(-6.05vw + -10.76vh)",
            zIndex: "1",
            opacity: "50%",
          }}
          className={styles.title}
        >
          About
        </div>
        <h1 style={{ WebkitTextFillColor: "#111111" }} className={styles.title}>
          About
        </h1>
      </div>
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.about}>
            <p data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
              Hi, my name is Amiel and I’m currently a graduating student at
              Technological Institute of the Philippines pursuing a B.S. in
              Information Technology.
            </p>
            <br />
            <p data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
              Over the past 7 years, technology has developed into a passion of
              mine, specifically, in the realm of software development. I’ve
              dedicated my time to gaining proficiency in the intricacies of
              software development in order to better myself as a developer and
              problem solver.
            </p>
          </div>
          <img
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            className={styles.image}
            alt="Amiel Filarca"
            src={Image}
          />
        </div>
        <div>
          <h2
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            className={styles.h2}
          >
            Competencies
          </h2>
          <b
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            className={styles.b}
          >
            Frontend
          </b>
          <p data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            HTML5, CSS3, JavaScript, JSX, React, Gatsby.js, Vue.js, Nuxt.js,
            Flutter, Dart, JSON, XML, Webpack
          </p>
          <b
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            className={styles.b}
          >
            Backend
          </b>
          <p data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            Firebase, Python, Node.js, Linux, REST, GraphQL, MySQL
          </p>
          <b
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            className={styles.b}
          >
            Development Tools
          </b>
          <p data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            Figma, Git, GitHub, NPM, Visual Studio Code, Android Studio
          </p>
          <b
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            className={styles.b}
          >
            Soft skills
          </b>
          <p data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            Organization, Collaboration, Leadership
          </p>
          <b
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            className={styles.b}
          >
            Other
          </b>
          <p data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            Oracle Database Management, SAP ERP, Cisco Networking (Routing,
            Switching, IoT), Packet Tracer
          </p>
        </div>
      </div>
    </section>
  )
}
