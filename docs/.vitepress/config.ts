import { defineConfig } from 'vitepress'
// vite.config.js

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "Fury Romania - The Wiki",
  description: "FiveM Roleplay Server",
  lastUpdated: true,

  appearance: 'dark',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'About Us', link: '/informatii/about' },
      { text: 'Autentificare', link: '/informatii/auth' },
      { text: 'FAQ', link: '/informatii/intrebari' },
      {
        text: 'Regulament',
        items: [
          { text: 'Regulament General', link: '/informatii/regulament' },
          { text: 'Regulament Business', link: '/informatii/regulamentbiz' }
        ]
      },
      {
        text: 'Updates',
        items: [
          { text: 'Updates Server', link: '/informatii/updatesv' },
          { text: 'Update Regulament', link: '/informatii/updatereg' }
        ]
      },
      { text: 'Zone', link: '/informatii/map' },
      { text: 'Locații jobs', link: '/jobs/locatii' },
      { text: 'Ilegale', link: '/jobs/ilegale' },

    ], 

    logo: './fury-logo.svg',

    outline: "deep",
    outlineTitle: "Cuprins",

    editLink: {
      pattern: 'https://github.com/plesalex100/furywiki/edit/main/docs/:path',
      text: 'Editează această pagină pe GitHub',
    },

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Informații utile',
        items: [
          { text: "Despre noi", link: '/informatii/about' },
          { text: "Autentificare", link: '/informatii/auth' },
          { text: "Regulament General", link: '/informatii/regulament' },
          { text: "Regulament Business", link: '/informatii/regulamentbiz' },
          { text: 'Zone Publice/Rău Famate/Retrase', link: '/informatii/map' },
          { text: "Întrebări frecvente", link: '/informatii/intrebari' }, 
          { text: "Comenzi des folosite", link: '/informatii/comenzi' },
          { text: "Afaceri cu Firecoins", link: '/informatii/afacerifc' },
          { text: "Panel", link: '/informatii/panel' },
        ]
      },

      {
        text: 'Istoric Update-uri',
        items: [
          { text: "Update-uri server", link: '/informatii/updatesv' },
          { text: "Update-uri regulament", link: '/informatii/updatereg' },
        ]
      },

      {
        text: 'General',
        items: [
          { text: "Inventar", link: '/general/inventar' },
          { text: "Telefon", link: '/general/telefon' },
          // { text: "Garaje & Parcări", link: '/general/garaje'}, -- removed for now
          { text: "Bancomate", link: '/general/atm'},
          { text: "Asigurare medicală", link: '/general/asigurare' },
          { text: "Școala de șoferi", link: '/general/scoala' },
          { text: "Depozit Paleto", link: '/general/depozit' },
          { text: "Biroul de Licențe", link: '/general/licente' },
          { text: "CNN (Anunțuri)", link: '/general/cnn' },
          { text: "Sala de forță", link: '/general/sala' },
          // { text: "Spălătorii auto", link: '/general/spalatorii' }, -- not really necesarry
          { text: "Magazin de arme", link: '/general/gunshop' },
          { text: "Rockstar Editor", link: '/general/rockstareditor' },
        ]
      },

      {
        text: 'Activități legale/ilegale',
        items: [
          { text: 'Unde se află fiecare job?', link: '/jobs/locatii' },
          {
            text: "Joburi legale",
            collapsed: true,
            items: [ 
              // in ordinea numarului de ore necesare - low to high

              // { text: "Spalator de geamuri", link: '/jobs/windowcleaner' }, -- removed
              { text: "Curier", link: '/jobs/curier' },
              { text: "Pescar", link: '/jobs/fisher' },
              { text: "Șofer de autobuz", link: '/jobs/busdriver' },
              { text: "Miner", link: '/jobs/miner' },
              { text: "Gunoier", link: '/jobs/gunoier' }, 
              { text: "Vatman", link: '/jobs/vatman' },
              { text: "Măcelar", link: '/jobs/butcher' }, 
              { text: "McDonald's", link: '/jobs/mcds' },
              { text: "Tirist", link: '/jobs/trucker' },
              { text: "Electrician", link: '/jobs/electrician' },
              { text: "Stivuitorist", link: '/jobs/forklift' },
              { text: "Petrolist", link: '/jobs/petrolist' },
              { text: "Farmacist", link: '/jobs/farmacist' },
              { text: "Tăietor de lemne", link: '/jobs/lumberjack' },
              { text: "Vânător", link: '/jobs/hunter' },
              { text: "Pilot", link: '/jobs/pilot' },
              { text: "Scafandru", link: '/jobs/diver' },
              { text:"Pescar Oceanic", link: '/jobs/fisherv2' },
              { text:"Muncitor la Carieră", link: '/jobs/minerv2' }
            ]
          },
          { text: 'Activități ilegale', link: '/jobs/ilegale' },
        ]
      },

      {
        text: 'Economie',
        items: [
          { text: "Spălarea Banilor", link: '/economie/spalare' },
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
        items: [
          { text: "Cum licitez o proprietate?", link: '/proprietati/auction' },
          { text: "Case", link: '/proprietati/case' },
          { text: "Magazine", link: '/proprietati/magazine' },
          { text: "Benzinarii", link: '/proprietati/benzinarii' },
          { text: "Tarabă la portbagajul dubei", link: '/proprietati/taraba' },
        ]
      },

      {
        text: 'Instituții publice',
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
