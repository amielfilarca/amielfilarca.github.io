import instagramClone from "./assets/instagram-clone.png"
import resumeBuilder from "./assets/resume-builder.png"
import whereIsWaldo from "./assets/where-is-waldo.png"
import shoppingCart from "./assets/shopping-cart.png"

const projects = [
  {
    id: 1,
    image: shoppingCart,
    name: "Core Components",
    description: "A simple shopping cart application.",
    tools: "React",
    link: "https://amielfilarca.github.io/shopping-cart/",
  },
  {
    id: 2,
    image: instagramClone,
    name: "Instagram Clone",
    description:
      "A simple recreation of the basic functionalities of Instagram.",
    tools: "React, Firebase",
    link: "https://amielfilarca.github.io/instagram-clone/",
  },
  {
    id: 3,
    image: whereIsWaldo,
    name: "Where is Waldo",
    description:
      'Image tagging app using the visual puzzle format of "Where is Waldo?"',
    tools: "React, Material-UI, Firebase",
    link: "https://amielfilarca.github.io/where-is-waldo/",
  },
  {
    id: 4,
    image: resumeBuilder,
    name: "Resume Builder",
    description: "Generates a resume that is downloadable in PDF format.",
    tools: "React",
    link: "https://amielfilarca.github.io/cv-application/",
  },
]

export default projects
