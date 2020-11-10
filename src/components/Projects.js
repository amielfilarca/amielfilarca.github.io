import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import styles from "./Projects.module.css"
import projects from "../projects"

export default function Projects() {
  const [index, setIndex] = useState(0)

  const selectProject = project => {
    setIndex(projects.indexOf(project))
  }

  return (
    <div id="projects" className={styles.container}>
      <div className={styles.repetitionContainer}>
        <div
          style={{
            WebkitTextStroke: "1px rgba(17, 17, 17, 0.1)",
          }}
          className={styles.title}
        >
          Projects
        </div>
        <div
          style={{
            WebkitTextStroke: "1px rgba(17, 17, 17, 0.3)",
          }}
          className={styles.title}
        >
          Projects
        </div>
        <h1 className={styles.title}>Projects</h1>
      </div>
      <div className={styles.projectList}>
        {projects.map(project => (
          <div
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            key={project.id}
          >
            <motion.div
              whileHover={{ x: 10 }}
              className={
                projects.indexOf(project) === index
                  ? styles.selected
                  : styles.projectItem
              }
              onClick={() => selectProject(project)}
            >
              {project.name}
            </motion.div>
          </div>
        ))}
      </div>
      <div
        data-sal="zoom-in"
        data-sal-delay="500"
        data-sal-easing="ease"
        className={styles.main}
        style={{ backgroundImage: `url(${projects[index].image})` }}
      ></div>
      <div
        data-sal="slide-left"
        data-sal-delay="750"
        data-sal-easing="ease"
        className={styles.projectDescription}
      >
        <div>{projects[index].description}</div>
        <br />
        <div>{projects[index].tools}</div>
        <br />
        <AnimatePresence>
          <motion.a
            whileHover={{ scale: 1.1 }}
            className={styles.link}
            href={projects[index].link}
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </motion.a>
        </AnimatePresence>
      </div>
    </div>
  )
}
