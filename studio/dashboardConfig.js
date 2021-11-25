export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619fca3adc8c6f00949a7752',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jzcdju9g',
                  apiId: 'ae1a42ba-fcef-43ef-8c7f-2ac436d0f6de'
                },
                {
                  buildHookId: '619fca3a687596009943f7d4',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-77483q4y',
                  apiId: '641e5e06-a5a3-4374-b2e2-4f148bfed193'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thedavefulton/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-77483q4y.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
