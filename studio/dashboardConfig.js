export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5defd67c4da709376ce01037',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pmunnpur',
                  apiId: '1e6a6de2-25e6-4de4-8df7-e50ceeb524c5'
                },
                {
                  buildHookId: '5defd67c2bdb787e5d5e4f37',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-tu1uvefd',
                  apiId: 'a757fc5b-8c50-4dfa-8d91-792784175591'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/michaelburtonray/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-tu1uvefd.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
