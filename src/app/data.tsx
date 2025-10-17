export const projects = [
  {
    title: "Digital Kutab",
    description: "A Learning web platform for Quran with Live classes.",
    longDescription: `A custom web platform built for Kutab Al Nour in Tnin Chtouka (El
              Jadida Province). It supports three user roles — Admin, Teacher,
              and Student. Teachers can be invited by admins to manage
              educational paths or run Hifd circles with live video classes,
              while students track and save their progress digitally.`,

    cardImage: "/projects/kutab.png",

    images: [
      "/projects/kutab1.png",
      "/projects/kutab2.png",
      "/projects/kutab3.png",
    ],
    technologies: [
      {
        name: "Angular",
        svg: "/svgs/angular.svg",
        lightSvg: "/svgs/light/angular.svg",
      },
      {
        name: "Laravel",
        svg: "/svgs/laravel.svg",
        lightSvg: "/svgs/light/laravel.svg",
      },
      {
        name: "Tailwind CSS",
        svg: "/svgs/tailwind.svg",
        lightSvg: "/svgs/light/tailwind.svg",
      },
      {
        name: "Jitsi",
        svg: "/svgs/jitsi.svg",
        lightSvg: "/svgs/light/jitsi.svg",
      },
      {
        name: "MySQL",
        svg: "/svgs/mysql.svg",
        lightSvg: "/svgs/light/mysql.svg",
      },
    ],
    hosting: [
      {
        name: "Ubuntu",
        svg: "/svgs/ubuntu.svg",
        lightSvg: "/svgs/light/ubuntu.svg",
      },
      {
        name: "Hostinger",
        svg: "/svgs/hostinger.svg",
        lightSvg: "/svgs/light/hostinger.svg",
      },
    ],
    githubUrl: "https://github.com/AdamKourchi/Alkutab-FrontEnd",
  },

  {
    title: "Package Management System",
    description: "A PWA for managing packages by a transport company.",
    longDescription: ` A Progressive Web App developed for Dirnia, a Finnish international transport company. The platform streamlines package tracking and delivery management with advanced tabular views, an interactive map for visualizing delivery routes, and WhatsApp integration via Venom Bot to automatically notify clients. It also supports PDF export of organized package lists for administrative use.`,
    cardImage: "/projects/dirnia.png",

    images: [
      "/projects/dirnia.png",

      "/projects/dirnia1.png",
      "/projects/dirnia2.png",
      "/projects/dirnia3.png",
      "/projects/dirnia4.png",
    ],
    technologies: [
      {
        name: "Proggresive Web App",
        svg: "/svgs/pwa.svg",
        lightSvg: "/svgs/light/pwa.svg",
      },
      {
        name: "Laravel",
        svg: "/svgs/laravel.svg",
        lightSvg: "/svgs/light/laravel.svg",
      },
      {
        name: "Bootstrap",
        svg: "/svgs/bootstrap.svg",
        lightSvg: "/svgs/light/bootstrap.svg",
      },
      {
        name: "Venom Bot API",
        svg: "/svgs/venom.svg",
        lightSvg: "/svgs/light/venom.svg",
      },
      {
        name: "MySQL",
        svg: "/svgs/mysql.svg",
        lightSvg: "/svgs/light/mysql.svg",
      },
    ],
    hosting: [
      {
        name: "Ubuntu",
        svg: "/svgs/ubuntu.svg",
        lightSvg: "/svgs/light/ubuntu.svg",
      },
      {
        name: "Hostinger",
        svg: "/svgs/hostinger.svg",
        lightSvg: "/svgs/light/hostinger.svg",
      },
    ],
    githubUrl: "https://github.com/AdamKourchi/DirNia",
  },

  {
    title: "Car Rental Management System",
    description: "A desktop app for managing a car rental agency.",
    longDescription: `A desktop application developed with Electron and SQLite for a car rental agency in Meknes named Mimoza. The system was designed to replace the agency’s Excel based workflow.It allows staff to manage rentals, clients, payments, and overall agency finances in one place.
    As lead developer of a 3-person team, I handled task coordination, code structure, and feature delivery, with deployment on the agency’s Windows 10 system.
`,
    cardImage: "/projects/mimoza.png",

    images: [
      "/projects/mimoza.png",
      "/projects/mimoza1.png",
      "/projects/mimoza2.png",
      "/projects/mimoza3.png",
    ],

    technologies: [
      {
        name: "Electron",
        svg: "/svgs/electron.svg",
        lightSvg: "/svgs/light/electron.svg",
      },
      {
        name: "SQLite",
        svg: "/svgs/sqlite.svg",
        lightSvg: "/svgs/light/sqlite.svg",
      },
      {
        name: "Bootstrap",
        svg: "/svgs/bootstrap.svg",
        lightSvg: "/svgs/light/bootstrap.svg",
      },
      {
        name: "Javascript",
        svg: "/svgs/javascript.svg",
        lightSvg: "/svgs/light/javascript.svg",
      },
    ],

    hosting: [
      {
        name: "Windows 10",
        svg: "/svgs/windows.svg",
        lightSvg: "/svgs/light/windows.svg",
      },
    ],

    githubUrl: "https://github.com/AdamKourchi/Mimoza-Electron", 
  },

  {
    title: "Marriage Match System",
    description: "A desktop application to match marriage candidates.",
    longDescription: `A desktop application developed using PHPNative (the new Laravel framework for desktop apps) and SQLite to assist a local team in managing marriage requests for men and women. The system allows staff to filter potential matches based on the preferences and conditions specified by each candidate, ensuring only compatible profiles are suggested.
I also automated data migration by writing a script that imports form entries from Google Sheets into the SQLite database.`,
    cardImage: "/projects/marriage.png",

    images: [
      "/projects/marriage.png",
      "/projects/marriage1.png",
      "/projects/marriage2.png",
      "/projects/marriage3.png",
    ],

    technologies: [
      {
        name: "PHPNative",
        svg: "/svgs/phpnative.svg",
        lightSvg: "/svgs/light/phpnative.svg",
      },
      {
        name: "SQLite",
        svg: "/svgs/sqlite.svg",
        lightSvg: "/svgs/light/sqlite.svg",
      },
        {
        name: "Angular",
        svg: "/svgs/angular.svg",
        lightSvg: "/svgs/light/angular.svg",
      },
      {
        name: "Tailwind CSS",
        svg: "/svgs/tailwind.svg",
        lightSvg: "/svgs/light/tailwind.svg",
      },
      {
        name: "Ant Design",
        svg: "/svgs/antdesign.svg",
        lightSvg: "/svgs/light/antdesign.svg",
      },
    ],

    hosting: [
      {
        name: "Windows 10",
        svg: "/svgs/windows.svg",
        lightSvg: "/svgs/light/windows.svg",
      },
    ],

    githubUrl: "https://github.com/AdamKourchi/Muahhideen",
  },

  {
    title: "Personal Portfolio Website",
    description: "A modern portfolio website showcasing my work.",
    longDescription: `A fully responsive personal portfolio built with Next.js, React, Tailwind CSS, and shadcn/ui. 
It features a minimal and elegant interface with smooth transitions, a light/dark mode toggle, and a concise about section introducing me and my work. 
The project gallery highlights my key projects with images and descriptions, each linking to detailed pages or repositories. 
The site is deployed on Vercel for fast, globally distributed performance and continuous deployment.`,
    cardImage: "/projects/portfolio.png",

    images: [
      "/projects/portfolio.png",
      "/projects/portfolio1.png",
      "/projects/portfolio2.png",
    ],

    technologies: [
      {
        name: "Next.js",
        svg: "/svgs/nextjs.svg",
        lightSvg: "/svgs/light/nextjs.svg",
      },
      {
        name: "React",
        svg: "/svgs/react.svg",
        lightSvg: "/svgs/light/react.svg",
      },
      {
        name: "Tailwind CSS",
        svg: "/svgs/tailwind.svg",
        lightSvg: "/svgs/light/tailwind.svg",
      },
      {
        name: "shadcn/ui",
        svg: "/svgs/shadcn.svg",
        lightSvg: "/svgs/light/shadcn.svg",
      },
    ],

    hosting: [
      {
        name: "Vercel",
        svg: "/svgs/vercel.svg",
        lightSvg: "/svgs/light/vercel.svg",
      },
    ],

    githubUrl: "https://github.com/AdamKourchi/Portfolio.git",
  },

  {
    title: "Car Obstacle Game",
    description: "A simple JavaScript game made in HTML Canvas.",
    longDescription: `A 2D endless driving game developed using pure JavaScript and the HTML Canvas API. 
The project uses dynamic canvas drawing for real-time rendering and collision detection, providing smooth gameplay entirely within the browser. 
This was a fun and insightful project that deepened my understanding of game loops and physics logic.`,
    cardImage: "/projects/car-game.webp",

    images: [
      "/projects/car-game.webp",
      "/projects/car-game1.webp",
      "/projects/car-game2.webp",
    ],

    technologies: [
      {
        name: "JavaScript",
        svg: "/svgs/javascript.svg",
        lightSvg: "/svgs/light/javascript.svg",
      },
      {
        name: "HTML5 Canvas",
        svg: "/svgs/html.svg",
        lightSvg: "/svgs/light/html.svg",
      },
      {
        name: "CSS3",
        svg: "/svgs/css.svg",
        lightSvg: "/svgs/light/css.svg",
      },
    ],

    hosting: [
      {
        name: "GitHub Pages",
        svg: "/svgs/github.svg",
        lightSvg: "/svgs/light/github.svg",
      },
    ],

    githubUrl: "https://github.com/AdamKourchi/Road-Mania",
  },
];
