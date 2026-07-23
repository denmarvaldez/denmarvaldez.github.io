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
      email: "denmarvaldez@gmail.com"
    },
    spotifyPlaylist: "https://open.spotify.com/embed/playlist/37i9dQZF1DX8U2W227P7L0?utm_source=generator&theme=0"
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
      title: "OptiFil Data Pipeline",
      category: "web",
      description: "High-throughput stream processing pipeline built to filter, aggregate, and visualize high-velocity real-time metrics with zero latency.",
      tags: ["Python", "Stream Processing", "Architecture", "Data Pipelines"],
      githubUrl: "https://github.com/denmarvaldez",
      liveUrl: "#",
      featured: true,
      badge: "DATA PIPELINE"
    },
    {
      id: "project-2",
      title: "Sisyphean Pixel Engine",
      category: "web",
      description: "An 8-bit retro HTML5 canvas animation framework demonstrating endless physics simulation of Sisyphus pushing the boulder in dark monochrome.",
      tags: ["JavaScript", "HTML5 Canvas", "8-Bit", "Pixel Art"],
      githubUrl: "https://github.com/denmarvaldez",
      liveUrl: "#",
      featured: true,
      badge: "RETRO ENGINE"
    },
    {
      id: "project-3",
      title: "Absurd NLP Analyzer",
      category: "ai",
      description: "Experimental natural language processing system categorizing existential and absurdist literature, mapping philosophical sentiment.",
      tags: ["Python", "NLP", "Machine Learning", "Philosophy"],
      githubUrl: "https://github.com/denmarvaldez",
      liveUrl: "#",
      featured: false,
      badge: "RESEARCH"
    },
    {
      id: "project-4",
      title: "8-Bit Dark UI System",
      category: "design",
      description: "Ultra-minimalist retro 8-bit design system utilizing pixelated typography, hard shadows, scanlines, and pitch black background tokens.",
      tags: ["CSS Architecture", "Design System", "Pixel Art"],
      githubUrl: "https://github.com/denmarvaldez",
      liveUrl: "#",
      featured: false,
      badge: "DESIGN SYSTEM"
    }
  ],

  blogs: [
    {
      id: "blog-1",
      title: "Coding as a Sisyphean Craft: Finding Joy in the Endless Loop",
      date: "July 2026",
      readTime: "5 min read",
      category: "Absurdism & Tech",
      tags: ["Absurdism", "Albert Camus", "Engineering Mindset"],
      snippet: "Debugging is pushing a boulder up a hill only for edge cases to roll it back down. Why embracing this absurd reality is the key to engineering mastery.",
      content: `
        <p>In <em>The Myth of Sisyphus</em>, Albert Camus presents the ultimate figure of absurdity: a man condemned by the gods to endlessly push a massive boulder up a mountain, only to watch it roll back down to the bottom every time it nears the peak.</p>
        
        <h3>The Debugging Loop</h3>
        <p>As software engineers, our daily workflow bears an unmistakable resemblance to Sisyphus. We solve a complex bug, optimize a pipeline, or refactor a module, only for new requirements, API deprecations, or subtle race conditions to push the boulder back down the hill.</p>
        
        <h3>Defiance & Creation</h3>
        <p>The absurdist response to this endless cycle is neither despair nor resignation—it is <strong>defiance</strong>. We do not write clean code because the universe demands perfection; we write clean code because the act of creation itself bestows purpose onto our effort.</p>
        
        <blockquote style="border-left: 3px solid #ffffff; padding-left: 14px; margin: 16px 0; font-style: italic; color: #e0e0e0;">
          "The struggle itself towards the heights is enough to fill a man's heart. One must imagine Sisyphus happy."
        </blockquote>
        
        <p>When you embrace the absurd, every compile error becomes an invitation to craft, and every refactor becomes a victory over chaos.</p>
      `
    },
    {
      id: "blog-2",
      title: "8-Bit Aesthetic & The Beauty of Extreme Constraints",
      date: "June 2026",
      readTime: "6 min read",
      category: "Design & Philosophy",
      tags: ["Minimalism", "8-Bit", "Design Systems"],
      snippet: "Why limiting resolution to pixels and color palettes forces maximum artistic intention and clarity in modern software design.",
      content: `
        <p>Modern display technology allows millions of colors and ultra-high-density retina displays. Yet, there is an enduring, nostalgic power in 8-bit pixel aesthetics.</p>
        
        <h3>Constraints Drive Intent</h3>
        <p>When you only have a 16x16 grid to draw a character or a monochrome palette to render a world, every single pixel carries weight. Indirection and fluff are impossible. You must decide precisely what matters.</p>
        
        <p>Applying this 8-bit constraint mindset to software design eliminates bloated dependencies, unnecessary UI clutter, and cognitive friction for the user.</p>
      `
    },
    {
      id: "blog-3",
      title: "Nier: Automata & The Philosophy of Meaningful Existential Action",
      date: "May 2026",
      readTime: "7 min read",
      category: "Gaming & Philosophy",
      tags: ["Absurdism", "Nier Automata", "Gaming"],
      snippet: "How Yoko Taro's gaming masterpiece explores the absurd condition and the courage to forge purpose in a world devoid of inherent meaning.",
      content: `
        <p><em>"A future is not given to you. It is something you must take for yourself."</em></p>

        <p><em>Nier: Automata</em> stands as one of the greatest interactive explorations of existentialism and absurdism in modern media. Androids fight an endless war for humanity on an abandoned Earth, only to discover the futility of their objective.</p>

        <p>Yet, in its final revolutionary sequence (Ending E), the game demonstrates that even in a world without preset meaning, human solidarity and persistent struggle create transcendent value.</p>
      `
    }
  ],

  timeline: [
    {
      year: "2026",
      title: "8-Bit Absurdist Sanctum Launch",
      category: "MILESTONE",
      description: "Designed and engineered the 8-bit retro pixel portfolio (`denmarvaldez.github.io`) featuring live Sisyphus canvas physics and absurdism essays."
    },
    {
      year: "2025",
      title: "OptiFil & High-Throughput Engineering",
      category: "RESEARCH",
      description: "Developed stream processing algorithms, thesis research in optimization, and backend data architecture."
    },
    {
      year: "2024",
      title: "Absurdist Literature & Digital Arts",
      category: "PHILOSOPHY",
      description: "Deepened studies in Albert Camus, Stoic resilience, 8-bit pixel art synthesis, and ambient music soundscapes."
    },
    {
      year: "2023",
      title: "First Steps in Software Craft",
      category: "BEGINNING",
      description: "Initiated journey in computer science fundamentals, data structures, algorithms, and web applications."
    }
  ],

  hobbies: {
    music: {
      favoriteGenres: ["8-Bit / Chiptune", "Lofi Synthwave", "Ambient Drone", "Anime OSTs", "Darkwave"],
      recommendedTracks: [
        { title: "Weight of the World (8-Bit Remix)", artist: "Keiichi Okabe", vibe: "Chiptune Melancholy" },
        { title: "Komorebi Sunset", artist: "Lofi Ambient", vibe: "Pixel Focus" },
        { title: "Resonance", artist: "HOME", vibe: "Nostalgic Synth" },
        { title: "Theme of Sisyphus", artist: "8-Bit Retro Sound", vibe: "Endless Struggle" }
      ]
    },
    gaming: [
      {
        title: "Nier: Automata",
        developer: "PlatinumGames / Square Enix",
        badge: "ABSURDIST MASTERPIECE",
        quote: "Everything that lives is designed to end.",
        genre: "Action RPG"
      },
      {
        title: "Elden Ring",
        developer: "FromSoftware",
        badge: "RETRY UNTIL VICTORY",
        quote: "Brave Tarnished, push your boulder.",
        genre: "Dark Action RPG"
      },
      {
        title: "Cyberpunk 2077",
        developer: "CD Projekt Red",
        badge: "RETRO FUTURISM",
        quote: "High tech, low life, infinite grit.",
        genre: "Open World RPG"
      },
      {
        title: "Hollow Knight",
        developer: "Team Cherry",
        badge: "ATMOSPHERIC PIXEL",
        quote: "No cost too great. No mind to think.",
        genre: "Metroidvania"
      }
    ],
    anime: [
      {
        title: "Vinland Saga",
        studio: "MAPPA / WIT",
        tag: "TRUE WARRIOR",
        note: "Thorfinn's transformation: overcoming hatred to embrace true non-violence and absurd purpose."
      },
      {
        title: "Monster",
        studio: "Madhouse",
        tag: "EXISTENTIAL DRAMA",
        note: "Naoki Urasawa's masterwork on the value of life against nihilism and darkness."
      },
      {
        title: "Neon Genesis Evangelion",
        studio: "Gainax",
        tag: "PSYCHOLOGICAL MECHA",
        note: "Shinji's struggle to accept human connection despite pain and isolation."
      },
      {
        title: "Steins;Gate",
        studio: "White Fox",
        tag: "CAUSALITY SCI-FI",
        note: "Okabe Rintaro defying fate through infinite world line loops."
      }
    ]
  }
};
