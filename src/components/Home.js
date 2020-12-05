import React, { Component } from "react"
import { motion } from "framer-motion"
import styles from "../styles/Home.module.css"

const blinkStyle = {
  paddingRight: "0.83vw",
  borderRight: "0.20vw solid var(--primary)",
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "#11111100",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "#111111ff",
  },
}

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { blink: false }
  }

  componentDidMount() {
    this.type()
  }

  type() {
    const dev = document.getElementById("dev")
    const currStr = dev.textContent
    const currLength = currStr.length
    const finalStr = "Developer."

    setTimeout(() => {
      if (currStr !== finalStr) {
        dev.textContent = currStr + finalStr.charAt(currLength)
        this.type()
      } else {
        this.setState({ blink: true })
      }
    }, 75)
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <motion.svg
            className={styles.svg}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="100" height="100" fill="#111111" />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
              d="M42.88 56.836H58.252V57.7H43.888V68.968H54.796V69.832H43.888V82H42.88V56.836Z"
            />
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
              d="M49.204 17.836H49.996L60.04 43H59.032L55.936 35.26H43.264L40.168 43H39.16L49.204 17.836ZM55.576 34.396L49.6 19.348L43.624 34.396H55.576Z"
            />
          </motion.svg>
          <h1 className={styles.mainText}>Amiel Filarca,</h1>
          <h1 className={styles.mainText}>
            Software{" "}
            <span
              id="dev"
              style={blinkStyle}
              className={this.state.blink ? styles.typed : null}
            ></span>
          </h1>
        </div>
        <nav className={styles.nav}>
          <motion.a
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className={styles.navItems}
            href="#about"
          >
            About
          </motion.a>
          <motion.a
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            className={styles.navItems}
            href="#projects"
          >
            Projects
          </motion.a>
          <motion.a
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
            className={styles.navItems}
            href="#contact"
          >
            Contact
          </motion.a>
        </nav>
      </div>
    )
  }
}

export default Home
