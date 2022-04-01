export const siteRoutes = [
  {
    path: "https://docs.google.com/forms/d/e/1FAIpQLScGSAhAADRrNmmuo5Bb_O2wWWlgkkTgMVP8J4lc96T9a55F_g/viewform?vc=0&c=0&w=1&flr=0",
    label: "AB 2246",
  },
  {
    path: "/media-links",
    label: "Media",
    slug: "media-links",
    routes: [
      {
        path: "/media-links",
        label: "Media Links",
        slug: "media-links",
      },
      {
        path: "/in-the-shadow-of-a-pandemic",
        label: "In the Shadow of a Pandemic",
        slug: "in-the-shadow-of-a-pandemic",
      },
      {
        path: "/dead-on-arrival-espanol",
        label: "dead on arrival (en español",
        slug: "dead-on-arrival-espanol",
      },
      {
        path: "/oc-sheriff-fentanyl-psa",
        label: "Fentanyl PSA - OC Sheriff",
        slug: "oc-sheriff-fentanyl-psa",
      },
    ],
  },
  {
    path: "/articles",
    label: "Articles",
    slug: "articles",
  },
  {
    path: "/team",
    label: "Team",
    slug: "team",
  },
];
