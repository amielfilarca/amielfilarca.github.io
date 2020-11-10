module.exports = {
  siteMetadata: {
    title: `Amiel Filarca | Software Developer`,
    description: `The portfolio of Amiel Filarca. Software Developer.`,
    author: `Amiel Filarca`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Amiel Filarca | Software Developer`,
        short_name: `Amiel Filarca | Software Developer`,
        start_url: `/`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.5, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
