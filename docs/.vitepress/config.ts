import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "Fury Romania - The Wiki",
  description: "FiveM Roleplay Server",

  head: [
    ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/android-chrome-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/favicon/android-chrome-512x512.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/favicon/site.webmanifest' }],
  ],
  
  lastUpdated: true,

  appearance: 'dark',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'About Us', link: '/informatii/about' },
      { text: 'Autentificare', link: '/informatii/auth' },
      { text: 'Setări Grafică', link: '/informatii/settings' },
      { text: 'FAQ', link: '/informatii/intrebari' },
      {
        text: 'Regulament',
        items: [
          { text: 'Regulament General', link: '/informatii/regulament' },
          { text: 'Regulament Discord', link: '/informatii/regulamentdiscord' },
          { text: 'Regulament Business', link: '/informatii/regulamentbiz' },
          { text: 'Regulament OOC Mafii/Organizații Ilegale', link: '/informatii/regulamentmafii' },
          { text: 'Regulament War', link: '/informatii/regulamentwar' }
        ]
      },
      // { text: 'Updates Server', link: '/informatii/updatesv' },
      // { text: 'Zone', link: '/informatii/map' },
      // { text: 'Locații jobs', link: '/jobs/locatii' },
      { text: 'Ilegale', link: '/jobs/ilegale' },
      { text: 'Ghid înființare mafie', link: '/informatii/ghidmafie' }
    ], 

    logo: './fury-logo.svg',

    outline: "deep",
    outlineTitle: "Cuprins",

    editLink: {
      pattern: 'https://github.com/plesalex100/furywiki/edit/main/docs/:path',
      text: 'Sugerează modificări acestei pagini!',
    },

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Istoric Update-uri',
        activeMatch: `^/informatii/`,
        items: [
          { text: "Update-uri server", link: '/informatii/updatesv' },
          { text: "Update-uri regulament", link: '/informatii/updatereg' },
        ]
      },

      {
        text: 'Informații utile',
        activeMatch: `^/informatii/`,
        items: [
          { text: "Despre noi", link: '/informatii/about' },
          { text: "Autentificare", link: '/informatii/auth' },
          { text: 'Setări Grafică', link: '/informatii/settings' },
          { text: "Regulament General", link: '/informatii/regulament' },
          { text: "Regulament Discord", link: '/informatii/regulamentdiscord' },
          { text: "Regulament Business", link: '/informatii/regulamentbiz' },
          { text: "Regulament OOC Mafii/Organizații Ilegale", link: '/informatii/regulamentmafii'},
          { text: "Regulament War", link: '/informatii/regulamentwar' },
          { text: "Ghid înființare mafie", link: '/informatii/ghidmafie' },
          { text: 'Zone Publice/Rău Famate/Retrase', link: '/informatii/map' },
          { text: "Întrebări frecvente", link: '/informatii/intrebari' }, 
          { text: "Comenzi des folosite", link: '/informatii/comenzi' },
          { text: "Afaceri cu Firecoins", link: '/informatii/afacerifc' },
          { text: "Panel", link: '/informatii/panel' },
        ]
      },

      {
        text: 'General',
        activeMatch: `^/informatii/`,
        items: [
          { text: "Inventar", link: '/general/inventar' },
          { text: "Telefon", link: '/general/telefon' },
          // { text: "Garaje & Parcări", link: '/general/garaje'}, -- removed for now
          { text: "Bancomate", link: '/general/atm'},
          { text: "Asigurare medicală", link: '/general/asigurare' },
          { text: "Sistemul de dependență", link: '/general/addiction' },
          { text: "Școala de șoferi", link: '/general/scoala' },
          { text: "Depozit Paleto", link: '/general/depozit' },
          { text: "Biroul de Licențe", link: '/general/licente' },
          { text:"Târg Auto", link: '/general/targauto' },
          { text: "CNN (Anunțuri)", link: '/general/cnn' },
          { text: "Sala de forță", link: '/general/sala' },
          // { text: "Spălătorii auto", link: '/general/spalatorii' }, -- not really necessary
          { text: "Magazin de arme", link: '/general/gunshop' },
          { text: "Fury Estates", link: '/general/estates' },
          // { text: "Rockstar Editor", link: '/general/rockstareditor' },
        ]
      },

      {
        text: 'Activități legale/ilegale',
        activeMatch: `^/informatii/`,
        items: [
          { text: 'Unde se află fiecare job?', link: '/jobs/locatii' },
          {
            text: "Joburi legale",
            collapsed: true,
            items: [ 
              // V3 order low-high
              { text: "Apicultor", link: '/jobs/honey' },             // 0h
              { text: "Curier", link: '/jobs/curier' },               // 0h
              { text: "Gunoier", link: '/jobs/gunoier' },             // 0h
              { text: "Pescar", link: '/jobs/fisher' },               // 0h
              { text: "Șofer de autobuz", link: '/jobs/busdriver' },  // 25h
              { text: "McDonald's", link: '/jobs/mcds' },             // 25h
              { text: "Electrician", link: '/jobs/electrician' },     // 25h
              { text: "Vatman", link: '/jobs/vatman' },               // 50h
              { text: "Măcelar", link: '/jobs/butcher' },             // 50h
              { text: "Șofer Bancar", link: '/jobs/bankdriver' },     // 50h
              { text: "Stivuitorist", link: '/jobs/forklift' },       // 75h
              { text: "Tăietor de lemne", link: '/jobs/lumberjack' }, // 75h
              { text: "Petrolist", link: '/jobs/petrolist' },         // 75h
              { text: "Livrator de ziare", link: '/jobs/postman' },   // 100h
              { text: "Miner", link: '/jobs/miner' },                 // 100h
              { text: "Farmacist", link: '/jobs/farmacist' },         // 100h
              { text: "Tirist", link: '/jobs/trucker' },              // 150h
              { text: "Pilot Cargo", link: '/jobs/pilot' },           // 200h
              { text: "Vânător", link: '/jobs/hunter' },              // 300h
              { text: "Scafandru", link: '/jobs/diver' },             // 300h
              { text:"Pescar Oceanic", link: '/jobs/fisherv2' },      // 400h
              { text:"Muncitor la Carieră", link: '/jobs/minerv2' }   // 550h
            ]
          },
          {
            text: "Joburi ilegale", link: '/jobs/ilegale',
            collapsed: true,
            items: [ 
              // in ordinea numarului de ore necesare - low to high
              { text: "Droguri", link: '/jobs/ilegale/drugs' },               
              { text: "Arme", link: '/jobs/ilegale/weapons' },
              { text: "Hacker", link: '/jobs/ilegale/hacker' },            
              { text: "Furt de mașini", link: '/jobs/ilegale/lockpick' }      
            ]
          },
        ]
      },

      {
        text: 'Economie',
        activeMatch: `^/informatii/`,
        items: [
          { text: "Spălarea Banilor", link: '/economie/spalare' },
          { text: "Amanet de obiecte", link: '/economie/amanet' },
          { 
            text: "Business-uri"
            , collapsed: true,
            items: [
              { text: "Mecanici", link: '/economie/mecanici' },
              { text: "Firmă de taxi", link: '/economie/taxi' }
              // { text: "Spălătorie Auto", link: '/economie/spalatorii' }, -- not necesarry
              // { text: "Servicii Medicale Private", link: '/economie/medici' }, -- removed
         ] },
          { text: "Achievements", link: '/economie/achievements' },
          { text: "Investiții", link: '/economie/investitii' },
        ]
      },

      {
        text: 'Proprietăți',
        activeMatch: `^/informatii/`,
        items: [
          { text: "Cum licitez o proprietate?", link: '/proprietati/auction' },
          { text: "Case", link: '/proprietati/case' },
          { text: "Magazine", link: '/proprietati/magazine' },
          { text: "Fury Electronics", link: '/proprietati/electronics' },
          { text: "Benzinarii", link: '/proprietati/benzinarii' },
          { text: "Tarabă la portbagajul dubei", link: '/proprietati/taraba' },
        ]
      },

      {
        text: 'Instituții publice',
        activeMatch: `^/informatii/`,
        items: [
          { text: "Primăria", link: '/factions/primarie' },
          { text: "Poliția", link: '/factions/politie' },
          { text: "Smurd", link: '/factions/smurd' },
          { text: "ANAF", link: '/factions/anaf' },
          { text: "Fury News", link: '/factions/news' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/furyro' },
      { icon: 'youtube', link: 'https://www.youtube.com/@FuryRomaniaRoleplay' },
      { icon: 'instagram', link: 'https://www.instagram.com/furyrp.ro/' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"/></svg>'
        },
        link: 'https://www.tiktok.com/@furyrp.ro'
      },
      // {
      //   icon: {
      //     svg: './fury-logo.svg'
      //   },
      //   link: 'https://panel.furyrp.ro/#/'
      // }
    ],

  }
})
