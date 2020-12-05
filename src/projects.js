import instagramClone from "./assets/images/instagram-clone-min.png"
import resumeBuilder from "./assets/images/resume-builder-min.png"
import whereIsWaldo from "./assets/images/where-is-waldo-min.png"
import shoppingCart from "./assets/images/shopping-cart-min.png"

const projects = [
  {
    id: 1,
    image: shoppingCart,
    name: "Core Components",
    description: "E-commerce website for computer hardware.",
    tools: "React",
    link: "https://amielfilarca.github.io/shopping-cart/",
  },
  {
    id: 2,
    image: instagramClone,
    name: "Instagram Clone",
    description:
      "Recreation of the basic functionalities of Instagram with a restructured user interface.",
    tools: "React, Firebase",
    link: "https://amielfilarca.github.io/instagram-clone/",
  },
  {
    id: 3,
    image: whereIsWaldo,
    name: "Where is Waldo",
    description:
      "Image tagging application using the visual puzzle format of the popular book series Where’s Waldo.",
    tools: "React, Material-UI, Firebase",
    link: "https://amielfilarca.github.io/where-is-waldo/",
  },
  {
    id: 4,
    image: resumeBuilder,
    name: "Resume Builder",
    description: "Generates a resume template in PDF format.",
    tools: "React",
    link: "https://amielfilarca.github.io/cv-application/",
  },
]

export default projects
