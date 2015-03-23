
module.exports.clientside = {
  publicVars: {
    appLogo: '/core/images/logo.png',
    appName: 'We.js site',
    appAbout: 'A We.js Blog Theme with Start Bootstrap clean theme',

    // default background images
    blogHomeBg: '/core/images/bgs/home-bg.jpg',
    blogArticlesBg: '/core/images/bgs/post-bg.jpg',

    // footer social links
    socialLinks: {
      twitter: 'https://twitter.com/we_js',
      github: 'https://github.com/wejs/we'
    },

    menus: {
      // your app main menu
      main: {
        links: [
          {
            text: 'Home',
            type: 'page',
            model: 'home'
          },
          {
            text: 'Get started',
            type: 'resource',
            model: 'page',
            modelId: '1'
          },
          {
            text: 'Features',
            type: 'resource',
            model: 'page',
            modelId: '1'
          },
          {
            text: 'Github',
            external: true,
            href: 'https://github.com/wejs/we',
            target: '_blank'
          }
        ]
      },

      sidebar: {
        links: [
          {
            text: 'Get Started',
            type: 'resource',
            model: 'page',
            modelId: '1'
          },
          {
            text: 'Generators',
            type: 'resource',
            model: 'page',
            modelId: '2'
          },
          {
            text: 'Plugins',
            type: 'resource',
            model: 'page',
            modelId: '3'
          },
          {
            text: 'Themes',
            type: 'resource',
            model: 'page',
            modelId: '4'
          }
        ]
      },

      admin: {
        links: [
          // // Submenu item example
          // {
          //   text: 'User and permissions',
          //   isSubmenu: true,
          //   links: [
          //     {
          //       text: 'User',
          //       type: 'resource',
          //       model: 'user'
          //     }
          //   ]
          // },
          //

          {
            i18nText: 'menu.link.page',
            type: 'resource',
            model: 'page'
          },

          {
            i18nText: 'menu.link.vocabulary',
            type: 'resource',
            model: 'vocabularies'
          },

          {
            i18nText: 'menu.link.user',
            type: 'resource',
            model: 'user'
          },

          {
            i18nText: 'menu.link.permissions',
            type: 'resource',
            model: 'permissions'
          }
        ]
      }
    }
  } // end publicVars
}