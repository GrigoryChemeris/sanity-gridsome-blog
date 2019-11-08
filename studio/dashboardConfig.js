export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5dc59c9ef09463e22acccc45',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-35cpkbak',
                  apiId: '6d3e3b8e-19ed-4e44-94ca-7ae51440a631'
                },
                {
                  buildHookId: '5dc59c9eabd1f2d52f25f63c',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-4sgcy5k2',
                  apiId: '1103df76-d664-42b2-9e3b-0e18ddf77fac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/GrigoryChemeris/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-4sgcy5k2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
