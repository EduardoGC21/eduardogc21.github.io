// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about-me",
    title: "About me",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Collection of projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-how-to-start-on-hindu-mythology",
        
          title: "How to start on Hindu mythology",
        
        description: "Introduction to Hindu mythology books.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/How-to-start-on-Hindu-Mithology/";
          
        },
      },{id: "post-determinism",
        
          title: "Determinism",
        
        description: "Opinion on Robert Sapolsky book on determinism",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/book-of-the-month/";
          
        },
      },{id: "post-listening-to-brahms-in-sala-nezahualcóyotl",
        
          title: "Listening to Brahms in Sala Nezahualcóyotl",
        
        description: "Musical experience",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/listening-to-brahms-in-sala-nezahualcoyotl/";
          
        },
      },{id: "projects-crito-videogame",
          title: 'Crito Videogame',
          description: "Plato dialogue turned into a videogame",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project_Crito/";
            },},{id: "projects-analysis-of-national-fishing-industry-in-mexico",
          title: 'Analysis of National Fishing Industry in Mexico',
          description: "Analyzing fishing trends in Mexico",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project_pesca/";
            },},{id: "projects-sustainable-spare-parts",
          title: 'Sustainable spare parts',
          description: "A project that tries to find equivalences in spare parts to recycle them.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project_piezas/";
            },},{id: "projects-analyzing-my-library",
          title: 'Analyzing my library',
          description: "A project to analyze the books I have read with embbedings and clusters.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project_libros/";
            },},{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/D3D4#5249", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%64%75%61%72%64%6F%67%63%32%32%32%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/EduardoGC21", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/eduardogc21", "_blank");
        },
      },{
        id: 'social-spotify',
        title: 'Spotify',
        section: 'Socials',
        handler: () => {
          window.open("https://open.spotify.com/user/ii0kqaeqt6fdksnmtqen3ce9j?si=f4a0d3f933d943fd", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
