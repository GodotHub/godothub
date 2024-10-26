import { defineConfig } from 'vitepress'

export default defineConfig({
  // base: "/web/",
  base: "/godothub/",
  title: "Godot Hub",
  description: "Advanced Godot Engine Service Platform",

  head: [
    [
      'link',
      { rel: 'icon', href: '/res/icon/icon.png' }
    ]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      link: '/',
      themeConfig: {

        nav: [
          { text: 'Home', link: '/' }
        ],

        sidebar: [
          {
            text: 'Introduce',
            items: [
              { text: 'Software', link: '/software' },
              { text: 'Community', link: '/community' },
              { text: 'Competition', link: '/competition' },
            ]
          }
        ],

        socialLinks: [
          {
            icon: 'github',
            link: 'https://github.com/godothub'
          },
          {
            icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64"> <path fill="#85cbf8" d="M62.34,43.27c-1.09-10.09-3.48-20-6.82-27.5a3.89,3.89,0,0,0-1.7-1.84A44.47,44.47,0,0,0,41.88,9.56,2,2,0,0,0,39.49,11L39,13l.08.72a35.17,35.17,0,0,0-14.16,0L25,13l-.49-2a2,2,0,0,0-2.39-1.47,44.47,44.47,0,0,0-11.94,4.37,3.89,3.89,0,0,0-1.7,1.84c-3.34,7.54-5.73,17.41-6.82,27.5a4,4,0,0,0,1.41,3.47A42.91,42.91,0,0,0,15.9,54.15a2,2,0,0,0,2.51-1L21,48l0-.3A46.94,46.94,0,0,0,43,47.7l0,.3,2.59,5.18a2,2,0,0,0,2.51,1,42.91,42.91,0,0,0,12.83-7.41A4,4,0,0,0,62.34,43.27ZM22.2,40.51c-2.8,0-5.07-2.94-5.07-6.55s2.27-6.55,5.07-6.55,5.07,2.93,5.07,6.55S25,40.51,22.2,40.51Zm20,0c-2.8,0-5.07-2.94-5.07-6.55s2.27-6.55,5.07-6.55,5.07,2.93,5.07,6.55S45,40.51,42.2,40.51Z"></path><path fill="#9fddff" d="M48,19.74l-.11.26a2.54,2.54,0,0,1-3.77,1.1A22.69,22.69,0,0,0,32,18a23,23,0,0,0-11.88,3,2.5,2.5,0,0,1-3.45-.84L16.6,20a2.52,2.52,0,0,1,1.12-3.61A36.35,36.35,0,0,1,32,13c5,0,11.21,2.13,14.55,3.43A2.51,2.51,0,0,1,48,19.74Z"></path><path fill="#9fddff" d="M60.93,46.74A42.91,42.91,0,0,1,48.1,54.15a2,2,0,0,1-2.51-1l0,0a42,42,0,0,0,10.36-6.4,4,4,0,0,0,1.41-3.47c-1.09-10.09-3.48-20-6.82-27.5a3.89,3.89,0,0,0-1.7-1.84,44.21,44.21,0,0,0-9-3.63,2,2,0,0,1,2-.74,44.47,44.47,0,0,1,11.94,4.37,3.89,3.89,0,0,1,1.7,1.84c3.34,7.54,5.73,17.41,6.82,27.5A4,4,0,0,1,60.93,46.74Z"></path><path fill="#7bbeeb" d="M3.28,46.74a42.91,42.91,0,0,0,12.83,7.41,2,2,0,0,0,2.51-1l0,0a42,42,0,0,1-10.36-6.4,4,4,0,0,1-1.41-3.47c1.09-10.09,3.48-20,6.82-27.5a3.89,3.89,0,0,1,1.7-1.84,44.21,44.21,0,0,1,9-3.63,2,2,0,0,0-2-.74,44.47,44.47,0,0,0-11.94,4.37,3.89,3.89,0,0,0-1.7,1.84C5.35,23.31,3,33.18,1.87,43.27A4,4,0,0,0,3.28,46.74Z"></path><path fill="#8d6c9f" d="M22 27c-3.31 0-6 3.14-6 7s2.69 7 6 7 6-3.14 6-7S25.31 27 22 27zm0 12c-2.21 0-4-2.24-4-5s1.79-5 4-5 4 2.24 4 5S24.21 39 22 39zM42 27c-3.31 0-6 3.14-6 7s2.69 7 6 7 6-3.14 6-7S45.31 27 42 27zm0 12c-2.21 0-4-2.24-4-5s1.79-5 4-5 4 2.24 4 5S44.21 39 42 39z"></path><path fill="#8d6c9f" d="M63.33,43.16c-1.12-10.41-3.57-20.28-6.89-27.8A4.89,4.89,0,0,0,54.3,13,45.81,45.81,0,0,0,42.08,8.58a3,3,0,0,0-3.56,2.21l-.43,1.73a36.25,36.25,0,0,0-12.18,0l-.43-1.73a3,3,0,0,0-3.56-2.21A45.81,45.81,0,0,0,9.7,13a4.89,4.89,0,0,0-2.14,2.32C4.24,22.88,1.79,32.75.67,43.16a5,5,0,0,0,1.76,4.34,43.79,43.79,0,0,0,13.13,7.58,3,3,0,0,0,1.06.19,3,3,0,0,0,2.69-1.66l2.37-4.74a48.3,48.3,0,0,0,20.65,0l2.37,4.74a3,3,0,0,0,2.69,1.66,3.06,3.06,0,0,0,1.06-.19,43.8,43.8,0,0,0,13.13-7.58A5,5,0,0,0,63.33,43.16Zm-3,2.82a41.8,41.8,0,0,1-12.53,7.23,1,1,0,0,1-1.27-.48L44.32,48.4a46.3,46.3,0,0,0,7.09-2.52,1,1,0,0,0-.82-1.82A44.92,44.92,0,0,1,32,48a44.92,44.92,0,0,1-18.59-3.94,1,1,0,0,0-.82,1.82,46.3,46.3,0,0,0,7.09,2.52l-2.16,4.33a1,1,0,0,1-1.27.48A41.79,41.79,0,0,1,3.72,46a3,3,0,0,1-1.06-2.6c1.1-10.21,3.49-19.87,6.74-27.2a2.88,2.88,0,0,1,1.26-1.37,43.81,43.81,0,0,1,11.68-4.27,1,1,0,0,1,1.2.73l.41,1.64a26.79,26.79,0,0,0-8.51,3.38,1,1,0,0,0,1.13,1.65c.06,0,5.9-3.93,15.44-3.93s15.38,3.89,15.44,3.93a1,1,0,0,0,1.13-1.65,26.78,26.78,0,0,0-8.51-3.38l.41-1.64a1,1,0,0,1,1.2-.73,43.81,43.81,0,0,1,11.68,4.27,2.88,2.88,0,0,1,1.26,1.37c3.24,7.33,5.64,17,6.74,27.2A3,3,0,0,1,60.28,46Z"></path><path fill="#8d6c9f" d="M34.67 52a37.93 37.93 0 0 1-11.43-.94A1 1 0 1 0 22.77 53 39.56 39.56 0 0 0 32 54.12c.94 0 1.88 0 2.81-.1a1 1 0 1 0-.14-2zM40.77 51.09c-.84.2-1.69.38-2.53.52a1 1 0 0 0 .16 2h.17c.89-.15 1.78-.33 2.67-.54a1 1 0 0 0-.47-1.95zM32 16.42a1 1 0 0 0-1 1v1.76a1 1 0 0 0 2 0V17.42A1 1 0 0 0 32 16.42zM36.75 20.61l.24 0a1 1 0 0 0 1-.77l.42-1.72a1 1 0 0 0-1.94-.47L36 19.4A1 1 0 0 0 36.75 20.61zM41.31 21.89a1 1 0 0 0 1.34-.44l.81-1.61a1 1 0 1 0-1.78-.9l-.81 1.61A1 1 0 0 0 41.31 21.89zM26 19.87a1 1 0 0 0 1 .77l.24 0A1 1 0 0 0 28 19.4l-.42-1.72a1 1 0 0 0-1.94.47zM21.35 21.45a1 1 0 1 0 1.78-.9l-.81-1.61a1 1 0 1 0-1.78.9z"></path> </svg>' },
            link: 'https://discord.com/invite/Yy46mP5H2T'
          },
          {
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"> <path fill="#FFC107" d="M17.5,44c-3.6,0-6.5-1.6-6.5-3.5s2.9-3.5,6.5-3.5s6.5,1.6,6.5,3.5S21.1,44,17.5,44z M37,40.5c0-1.9-2.9-3.5-6.5-3.5S24,38.6,24,40.5s2.9,3.5,6.5,3.5S37,42.4,37,40.5z"></path><path fill="#37474F" d="M37.2,22.2c-0.1-0.3-0.2-0.6-0.3-1c0.1-0.5,0.1-1,0.1-1.5c0-1.4-0.1-2.6-0.1-3.6C36.9,9.4,31.1,4,24,4S11,9.4,11,16.1c0,0.9,0,2.2,0,3.6c0,0.5,0,1,0.1,1.5c-0.1,0.3-0.2,0.6-0.3,1c-1.9,2.7-3.8,6-3.8,8.5C7,35.5,8.4,35,8.4,35c0.6,0,1.6-1,2.5-2.1C13,38.8,18,43,24,43s11-4.2,13.1-10.1C38,34,39,35,39.6,35c0,0,1.4,0.5,1.4-4.3C41,28.2,39.1,24.8,37.2,22.2z"></path><path fill="#ECEFF1" d="M14.7,23c-0.5,1.5-0.7,3.1-0.7,4.8C14,35.1,18.5,41,24,41s10-5.9,10-13.2c0-1.7-0.3-3.3-0.7-4.8H14.7z"></path><path fill="#FFF" d="M23,13.5c0,1.9-1.1,3.5-2.5,3.5S18,15.4,18,13.5s1.1-3.5,2.5-3.5S23,11.6,23,13.5z M27.5,10c-1.4,0-2.5,1.6-2.5,3.5s1.1,3.5,2.5,3.5s2.5-1.6,2.5-3.5S28.9,10,27.5,10z"></path><path fill="#37474F" d="M22,13.5c0,0.8-0.4,1.5-1,1.5s-1-0.7-1-1.5s0.4-1.5,1-1.5S22,12.7,22,13.5z M27,12c-0.6,0-1,0.7-1,1.5s0.4-0.5,1-0.5s1,1.3,1,0.5S27.6,12,27,12z"></path><path fill="#FFC107" d="M32,19.5c0,0.8-3.6,2.5-8,2.5s-8-1.7-8-2.5s3.6-1.5,8-1.5S32,18.7,32,19.5z"></path><path fill="#FF3D00" d="M38.7,21.2c-0.4-1.5-1-2.2-2.1-1.3c0,0-5.9,3.1-12.5,3.1v0.1l0-0.1c-6.6,0-12.5-3.1-12.5-3.1c-1.1-0.8-1.7-0.2-2.1,1.3c-0.4,1.5-0.7,2,0.7,2.8c0.1,0.1,1.4,0.8,3.4,1.7c-0.6,3.5-0.5,6.8-0.5,7c0.1,1.5,1.3,1.3,2.9,1.3c1.6-0.1,2.9,0,2.9-1.6c0-0.9,0-2.9,0.3-5c1.6,0.3,3.2,0.6,5,0.6l0,0v0c7.3,0,13.7-3.9,13.9-4C39.3,23.3,39,22.8,38.7,21.2z"></path><path fill="#DD2C00" d="M13.2,27.7c1.6,0.6,3.5,1.3,5.6,1.7c0-0.6,0.1-1.3,0.2-2c-2.1-0.5-4-1.1-5.5-1.7C13.4,26.4,13.3,27.1,13.2,27.7z"></path> </svg>'
            },
            link: 'https://pd.qq.com/s/9a6ctfgtu'
          }
        ],
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh',
      themeConfig: {

        nav: [
          { text: 'Home', link: '/zh' },
        ],

        sidebar: [
          {
            text: '介绍',
            items: [
              { text: '软件项目', link: '/zh/software' },
              { text: '交流社区', link: '/zh/community' },
              { text: '开发比赛', link: '/zh/competition' },
            ]
          }
        ],

        socialLinks: [
          {
            icon: 'github',
            link: 'https://github.com/godothub'
          },
          {
            icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64"> <path fill="#85cbf8" d="M62.34,43.27c-1.09-10.09-3.48-20-6.82-27.5a3.89,3.89,0,0,0-1.7-1.84A44.47,44.47,0,0,0,41.88,9.56,2,2,0,0,0,39.49,11L39,13l.08.72a35.17,35.17,0,0,0-14.16,0L25,13l-.49-2a2,2,0,0,0-2.39-1.47,44.47,44.47,0,0,0-11.94,4.37,3.89,3.89,0,0,0-1.7,1.84c-3.34,7.54-5.73,17.41-6.82,27.5a4,4,0,0,0,1.41,3.47A42.91,42.91,0,0,0,15.9,54.15a2,2,0,0,0,2.51-1L21,48l0-.3A46.94,46.94,0,0,0,43,47.7l0,.3,2.59,5.18a2,2,0,0,0,2.51,1,42.91,42.91,0,0,0,12.83-7.41A4,4,0,0,0,62.34,43.27ZM22.2,40.51c-2.8,0-5.07-2.94-5.07-6.55s2.27-6.55,5.07-6.55,5.07,2.93,5.07,6.55S25,40.51,22.2,40.51Zm20,0c-2.8,0-5.07-2.94-5.07-6.55s2.27-6.55,5.07-6.55,5.07,2.93,5.07,6.55S45,40.51,42.2,40.51Z"></path><path fill="#9fddff" d="M48,19.74l-.11.26a2.54,2.54,0,0,1-3.77,1.1A22.69,22.69,0,0,0,32,18a23,23,0,0,0-11.88,3,2.5,2.5,0,0,1-3.45-.84L16.6,20a2.52,2.52,0,0,1,1.12-3.61A36.35,36.35,0,0,1,32,13c5,0,11.21,2.13,14.55,3.43A2.51,2.51,0,0,1,48,19.74Z"></path><path fill="#9fddff" d="M60.93,46.74A42.91,42.91,0,0,1,48.1,54.15a2,2,0,0,1-2.51-1l0,0a42,42,0,0,0,10.36-6.4,4,4,0,0,0,1.41-3.47c-1.09-10.09-3.48-20-6.82-27.5a3.89,3.89,0,0,0-1.7-1.84,44.21,44.21,0,0,0-9-3.63,2,2,0,0,1,2-.74,44.47,44.47,0,0,1,11.94,4.37,3.89,3.89,0,0,1,1.7,1.84c3.34,7.54,5.73,17.41,6.82,27.5A4,4,0,0,1,60.93,46.74Z"></path><path fill="#7bbeeb" d="M3.28,46.74a42.91,42.91,0,0,0,12.83,7.41,2,2,0,0,0,2.51-1l0,0a42,42,0,0,1-10.36-6.4,4,4,0,0,1-1.41-3.47c1.09-10.09,3.48-20,6.82-27.5a3.89,3.89,0,0,1,1.7-1.84,44.21,44.21,0,0,1,9-3.63,2,2,0,0,0-2-.74,44.47,44.47,0,0,0-11.94,4.37,3.89,3.89,0,0,0-1.7,1.84C5.35,23.31,3,33.18,1.87,43.27A4,4,0,0,0,3.28,46.74Z"></path><path fill="#8d6c9f" d="M22 27c-3.31 0-6 3.14-6 7s2.69 7 6 7 6-3.14 6-7S25.31 27 22 27zm0 12c-2.21 0-4-2.24-4-5s1.79-5 4-5 4 2.24 4 5S24.21 39 22 39zM42 27c-3.31 0-6 3.14-6 7s2.69 7 6 7 6-3.14 6-7S45.31 27 42 27zm0 12c-2.21 0-4-2.24-4-5s1.79-5 4-5 4 2.24 4 5S44.21 39 42 39z"></path><path fill="#8d6c9f" d="M63.33,43.16c-1.12-10.41-3.57-20.28-6.89-27.8A4.89,4.89,0,0,0,54.3,13,45.81,45.81,0,0,0,42.08,8.58a3,3,0,0,0-3.56,2.21l-.43,1.73a36.25,36.25,0,0,0-12.18,0l-.43-1.73a3,3,0,0,0-3.56-2.21A45.81,45.81,0,0,0,9.7,13a4.89,4.89,0,0,0-2.14,2.32C4.24,22.88,1.79,32.75.67,43.16a5,5,0,0,0,1.76,4.34,43.79,43.79,0,0,0,13.13,7.58,3,3,0,0,0,1.06.19,3,3,0,0,0,2.69-1.66l2.37-4.74a48.3,48.3,0,0,0,20.65,0l2.37,4.74a3,3,0,0,0,2.69,1.66,3.06,3.06,0,0,0,1.06-.19,43.8,43.8,0,0,0,13.13-7.58A5,5,0,0,0,63.33,43.16Zm-3,2.82a41.8,41.8,0,0,1-12.53,7.23,1,1,0,0,1-1.27-.48L44.32,48.4a46.3,46.3,0,0,0,7.09-2.52,1,1,0,0,0-.82-1.82A44.92,44.92,0,0,1,32,48a44.92,44.92,0,0,1-18.59-3.94,1,1,0,0,0-.82,1.82,46.3,46.3,0,0,0,7.09,2.52l-2.16,4.33a1,1,0,0,1-1.27.48A41.79,41.79,0,0,1,3.72,46a3,3,0,0,1-1.06-2.6c1.1-10.21,3.49-19.87,6.74-27.2a2.88,2.88,0,0,1,1.26-1.37,43.81,43.81,0,0,1,11.68-4.27,1,1,0,0,1,1.2.73l.41,1.64a26.79,26.79,0,0,0-8.51,3.38,1,1,0,0,0,1.13,1.65c.06,0,5.9-3.93,15.44-3.93s15.38,3.89,15.44,3.93a1,1,0,0,0,1.13-1.65,26.78,26.78,0,0,0-8.51-3.38l.41-1.64a1,1,0,0,1,1.2-.73,43.81,43.81,0,0,1,11.68,4.27,2.88,2.88,0,0,1,1.26,1.37c3.24,7.33,5.64,17,6.74,27.2A3,3,0,0,1,60.28,46Z"></path><path fill="#8d6c9f" d="M34.67 52a37.93 37.93 0 0 1-11.43-.94A1 1 0 1 0 22.77 53 39.56 39.56 0 0 0 32 54.12c.94 0 1.88 0 2.81-.1a1 1 0 1 0-.14-2zM40.77 51.09c-.84.2-1.69.38-2.53.52a1 1 0 0 0 .16 2h.17c.89-.15 1.78-.33 2.67-.54a1 1 0 0 0-.47-1.95zM32 16.42a1 1 0 0 0-1 1v1.76a1 1 0 0 0 2 0V17.42A1 1 0 0 0 32 16.42zM36.75 20.61l.24 0a1 1 0 0 0 1-.77l.42-1.72a1 1 0 0 0-1.94-.47L36 19.4A1 1 0 0 0 36.75 20.61zM41.31 21.89a1 1 0 0 0 1.34-.44l.81-1.61a1 1 0 1 0-1.78-.9l-.81 1.61A1 1 0 0 0 41.31 21.89zM26 19.87a1 1 0 0 0 1 .77l.24 0A1 1 0 0 0 28 19.4l-.42-1.72a1 1 0 0 0-1.94.47zM21.35 21.45a1 1 0 1 0 1.78-.9l-.81-1.61a1 1 0 1 0-1.78.9z"></path> </svg>' },
            link: 'https://discord.com/invite/Yy46mP5H2T'
          },
          // {
          //   icon: {
          //     svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40 40"> <rect width="33" height="4" x="3.5" y="11.5" fill="#c5d4de"></rect><rect width="10" height="3" x="15" y="3.5" fill="#c5d4de"></rect><rect width="33" height="4" x="3.5" y="11.5" fill="none" stroke="#b0c1d4" stroke-miterlimit="10"></rect><line x1="25" x2="15" y1="3.5" y2="3.5" fill="none" stroke="#b0c1d4" stroke-miterlimit="10"></line><line x1="14.5" x2="25.5" y1="6.5" y2="6.5" fill="none" stroke="#b0c1d4" stroke-miterlimit="10"></line><path fill="#fff" d="M28.5,15.5v-9l-3-2.5v11.5h-11V4l-3,2.5v9h-8v19c0,1.105,0.895,2,2,2h29c1.105,0,2-0.895,2-2v-19 H28.5z"></path><path fill="none" stroke="#e1ebf2" stroke-miterlimit="10" d="M28.5,15.5v-9l-3-2.5v11.5h-11V4l-3,2.5v9h-8v19 c0,1.105,0.895,2,2,2h29c1.105,0,2-0.895,2-2v-19H28.5z"></path><rect width="4.5" height="4.5" x="14.5" y="20.5" fill="#f78f8f" stroke="#c74343" stroke-miterlimit="10"></rect><rect width="4.5" height="4.5" x="21" y="20.5" fill="#bae0bd" stroke="#5e9c76" stroke-miterlimit="10"></rect><rect width="4.5" height="4.5" x="14.5" y="27" fill="#8bb7f0" stroke="#4e7ab5" stroke-miterlimit="10"></rect><rect width="4.5" height="4.5" x="21" y="27" fill="#ffeea3" stroke="#f5ce85" stroke-miterlimit="10"></rect> </svg>'
          //   },
          //   link: 'https://apps.microsoft.com/detail/9pfnm10997dc'
          // },
          // {
          //   icon: {
          //     svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"> <linearGradient id="Mmo7SUtG3BkDNtKK7Uc18a_g6K6MWJPKeyk_gr1" x1="2.874" x2="24.916" y1="5.771" y2="31.217" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#33c481"></stop><stop offset="1" stop-color="#21a366"></stop></linearGradient><path fill="url(#Mmo7SUtG3BkDNtKK7Uc18a_g6K6MWJPKeyk_gr1)" d="M18,6C9.2,6,2,12,2,19.5c0,4.3,2.3,8,6,10.5l-2,6l6.3-3.9C14,32.7,16,33,18,33	c8.8,0,16-6,16-13.5S26.8,6,18,6z"></path><path d="M19,29c0,1.371,0.283,2.684,0.779,3.912C27.749,32.167,34,26.487,34,19.5	c0-0.845-0.104-1.668-0.279-2.469C33.481,17.021,33.243,17,33,17C25.28,17,19,22.383,19,29z" opacity=".05"></path><path d="M19.5,29c0,1.35,0.289,2.641,0.793,3.846C28.014,31.908,34,26.335,34,19.5	c0-0.67-0.077-1.322-0.188-1.965C33.542,17.521,33.274,17.5,33,17.5C25.556,17.5,19.5,22.659,19.5,29z" opacity=".07"></path><linearGradient id="Mmo7SUtG3BkDNtKK7Uc18b_g6K6MWJPKeyk_gr2" x1="20.478" x2="43.542" y1="17.541" y2="38.647" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f0f0f0"></stop><stop offset="1" stop-color="#bbc1c4"></stop></linearGradient><path fill="url(#Mmo7SUtG3BkDNtKK7Uc18b_g6K6MWJPKeyk_gr2)" d="M46,29c0-6.1-5.8-11-13-11s-13,4.9-13,11s5.8,11,13,11c1.8,0,3.5-0.3,5-0.8l5,2.8l-1.4-4.8	C44.3,35.2,46,32.3,46,29z"></path><path fill="#135d36" d="M14,15c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S14,13.9,14,15z M24,13c-1.1,0-2,0.9-2,2s0.9,2,2,2	s2-0.9,2-2S25.1,13,24,13z"></path><path fill="#474747" d="M30,26.5c0,0.8-0.7,1.5-1.5,1.5S27,27.3,27,26.5s0.7-1.5,1.5-1.5S30,25.7,30,26.5z M37.5,25	c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S38.3,25,37.5,25z"></path> </svg>'
          //   },
          //   link: 'https://godothub.atomgit.net/festival2024/wechat'
          // },
          {
            icon: {
              svg: '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48"> <path fill="#FFC107" d="M17.5,44c-3.6,0-6.5-1.6-6.5-3.5s2.9-3.5,6.5-3.5s6.5,1.6,6.5,3.5S21.1,44,17.5,44z M37,40.5c0-1.9-2.9-3.5-6.5-3.5S24,38.6,24,40.5s2.9,3.5,6.5,3.5S37,42.4,37,40.5z"></path><path fill="#37474F" d="M37.2,22.2c-0.1-0.3-0.2-0.6-0.3-1c0.1-0.5,0.1-1,0.1-1.5c0-1.4-0.1-2.6-0.1-3.6C36.9,9.4,31.1,4,24,4S11,9.4,11,16.1c0,0.9,0,2.2,0,3.6c0,0.5,0,1,0.1,1.5c-0.1,0.3-0.2,0.6-0.3,1c-1.9,2.7-3.8,6-3.8,8.5C7,35.5,8.4,35,8.4,35c0.6,0,1.6-1,2.5-2.1C13,38.8,18,43,24,43s11-4.2,13.1-10.1C38,34,39,35,39.6,35c0,0,1.4,0.5,1.4-4.3C41,28.2,39.1,24.8,37.2,22.2z"></path><path fill="#ECEFF1" d="M14.7,23c-0.5,1.5-0.7,3.1-0.7,4.8C14,35.1,18.5,41,24,41s10-5.9,10-13.2c0-1.7-0.3-3.3-0.7-4.8H14.7z"></path><path fill="#FFF" d="M23,13.5c0,1.9-1.1,3.5-2.5,3.5S18,15.4,18,13.5s1.1-3.5,2.5-3.5S23,11.6,23,13.5z M27.5,10c-1.4,0-2.5,1.6-2.5,3.5s1.1,3.5,2.5,3.5s2.5-1.6,2.5-3.5S28.9,10,27.5,10z"></path><path fill="#37474F" d="M22,13.5c0,0.8-0.4,1.5-1,1.5s-1-0.7-1-1.5s0.4-1.5,1-1.5S22,12.7,22,13.5z M27,12c-0.6,0-1,0.7-1,1.5s0.4-0.5,1-0.5s1,1.3,1,0.5S27.6,12,27,12z"></path><path fill="#FFC107" d="M32,19.5c0,0.8-3.6,2.5-8,2.5s-8-1.7-8-2.5s3.6-1.5,8-1.5S32,18.7,32,19.5z"></path><path fill="#FF3D00" d="M38.7,21.2c-0.4-1.5-1-2.2-2.1-1.3c0,0-5.9,3.1-12.5,3.1v0.1l0-0.1c-6.6,0-12.5-3.1-12.5-3.1c-1.1-0.8-1.7-0.2-2.1,1.3c-0.4,1.5-0.7,2,0.7,2.8c0.1,0.1,1.4,0.8,3.4,1.7c-0.6,3.5-0.5,6.8-0.5,7c0.1,1.5,1.3,1.3,2.9,1.3c1.6-0.1,2.9,0,2.9-1.6c0-0.9,0-2.9,0.3-5c1.6,0.3,3.2,0.6,5,0.6l0,0v0c7.3,0,13.7-3.9,13.9-4C39.3,23.3,39,22.8,38.7,21.2z"></path><path fill="#DD2C00" d="M13.2,27.7c1.6,0.6,3.5,1.3,5.6,1.7c0-0.6,0.1-1.3,0.2-2c-2.1-0.5-4-1.1-5.5-1.7C13.4,26.4,13.3,27.1,13.2,27.7z"></path> </svg>'
            },
            link: 'https://pd.qq.com/s/9a6ctfgtu'
          }
        ],
      },
    }
  }
})