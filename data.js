/**
 * Personal Portfolio Data Store for Denmar Valdez
 * Theme: 8-Bit Dark Minimalist • Absurdism • Anime • Music
 */

const DATA = {
  profile: {
    name: "Denmar Valdez",
    username: "denmarvaldez",
    title: "Computer Science Student • Aspiring Data Scientist",
    subtitle: "Pushing pixel boulders up digital mountains. Exploring data science, machine learning pipelines, absurdism, and clean code.",
    bio: "Computer Science student and aspiring data scientist navigating the absurd. Engineering data pipelines, exploring machine learning models, Albert Camus' philosophy, 8-bit aesthetic minimalism, and soundscapes.",
    handles: {
      linkedin: "https://www.linkedin.com/in/denmarvaldez/",
      github: "https://github.com/denmarvaldez",
      instagram: "https://www.instagram.com/komorebi.den/",
      email: "denmarvaldez@gmail.com",
      resume: "https://drive.google.com/file/d/1zkQVpFr8ml7LrfEZCIOmK-PqjIBGD9Fh/view?usp=sharing"
    },
    spotifyPlaylist: "https://open.spotify.com/playlist/1SykbLuDSJyDYAwvaWZZsf?si=4e1ceceda0df45e9"
  },

  quotes: [
    {
      text: "The struggle itself towards the heights is enough to fill a man's heart. One must imagine Sisyphus happy.",
      author: "Albert Camus",
      source: "The Myth of Sisyphus"
    },
    {
      text: "In the midst of winter, I found there was within me an invincible summer.",
      author: "Albert Camus",
      source: "Return to Tipasa"
    },
    {
      text: "The absurd is born of this confrontation between the human need and the unreasonable silence of the world.",
      author: "Albert Camus",
      source: "The Myth of Sisyphus"
    },
    {
      text: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
      author: "Albert Camus",
      source: "Resistance, Rebellion, and Death"
    },
    {
      text: "Everything that lives is designed to end. We are perpetually trapped in a never-ending spiral of life and death.",
      author: "2B",
      source: "Nier: Automata"
    },
    {
      text: "You have no enemies. No one in this world is your enemy. There is nobody that it is okay to hurt.",
      author: "Thors Snorresson",
      source: "Vinland Saga"
    },
    {
      text: "Should I kill myself, or have a cup of coffee? But in the end, one must choose to live and create.",
      author: "Albert Camus",
      source: "Essays on Absurdity"
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "TalaSuri – Web-Based Financial Monitoring Platform",
      category: "web",
      description: "Architected a full-stack MVC web application using Laravel 13 to manage small business sales, expense logs, and real-time inventory dashboards. Designed relational MariaDB schema and automated testing with PHPUnit 12 (90%+ code coverage).",
      tags: ["Laravel 13", "MariaDB", "Vite", "Bootstrap", "PHPUnit 12", "MVC"],
      githubUrl: "https://github.com/denmarvaldez/TalaSuri",
      liveUrl: "https://github.com/denmarvaldez/TalaSuri",
      featured: true,
      badge: "FEATURED FULL-STACK"
    }
  ],

  blogs: [],

  hobbies: {
    music: {
      favoriteGenres: ["8-Bit / Chiptune", "Lofi Synthwave", "Ambient Drone", "Anime OSTs", "Darkwave"],
      recommendedTracks: [
        { title: "Ghost in a Flower", artist: "Yorushika", vibe: "J-Pop / Melancholic" },
        { title: "Let You Break My Heart Again", artist: "Laufey", vibe: "Jazz / Orchestral" },
        { title: "Heaven Knows", artist: "Orange and Lemons", vibe: "OPM / Indie Pop" },
        { title: "Remember Summer Days", artist: "Anri", vibe: "City Pop / Retro Waves" }
      ]
    },
    gaming: [
      {
        title: "Clair Obscur: Expedition 33",
        developer: "Sandfall Interactive",
        badge: "TURN-BASED RPG",
        quote: "Paint the world, defy the Paintress.",
        genre: "Turn-Based RPG"
      },
      {
        title: "Minecraft",
        developer: "Mojang Studios",
        badge: "SANDBOX CANVAS",
        quote: "Build your world, pixel by pixel.",
        genre: "Sandbox / Survival"
      },
      {
        title: "Toram Online",
        developer: "Asobimo",
        badge: "CLASSIC MMORPG",
        quote: "Explore a vast world devoid of set classes.",
        genre: "Mobile MMORPG"
      },
      {
        title: "Red Dead Redemption 2",
        developer: "Rockstar Games",
        badge: "CINEMATIC EPIC",
        quote: "Outlaws till the end.",
        genre: "Open World RPG"
      },
      {
        title: "Valorant",
        developer: "Riot Games",
        badge: "TACTICAL FPS",
        quote: "Defy the limits, clutch the round.",
        genre: "Competitive FPS"
      },
      {
        title: "Hades",
        developer: "Supergiant Games",
        badge: "ROGUELIKE ESCAPE",
        quote: "There is no escape.",
        genre: "Action Roguelike"
      },
      {
        title: "The Binding of Isaac",
        developer: "Edmund McMillen",
        badge: "INDIE ROGUELIKE",
        quote: "Into the depths of the basement.",
        genre: "Top-Down Roguelike"
      }
    ],
    anime: [
      {
        title: "Frieren: Beyond Journey's End",
        studio: "Madhouse",
        tag: "FANTASY & TIME",
        note: "A quiet, profound meditation on time, memory, and human connection after the hero's journey."
      },
      {
        title: "Hyouka",
        studio: "Kyoto Animation",
        tag: "EVERYDAY MYSTERY",
        note: "Oreki Houtarou's energy-conserving philosophy meets curiosity and subtle everyday brilliance."
      },
      {
        title: "One Piece",
        studio: "Toei Animation",
        tag: "GRAND ADVENTURE",
        note: "The ultimate epic of freedom, inherited will, and unwavering camaraderie across the seas."
      },
      {
        title: "Bocchi the Rock!",
        studio: "CloverWorks",
        tag: "BAND & INTROVERSION",
        note: "Hitori Gotoh turning social anxiety and internal monologues into explosive rock music."
      },
      {
        title: "Kaguya-sama: Love Is War",
        studio: "A-1 Pictures",
        tag: "INTELLECTUAL COMEDY",
        note: "Masterful psychological warfare, pride, and high-stakes romantic comedy."
      },
      {
        title: "Saga of Tanya the Evil",
        studio: "NUT",
        tag: "MILITARY ISEKAI",
        note: "A cold, hyper-rational pragmatist waging war against Being X in an alternate magic world."
      }
    ]
  }
};
