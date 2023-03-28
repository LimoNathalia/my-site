const projects = [
  {
    id: 1,
    title: 'Blog',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    tags: ['Nextjs', 'Tailwind', 'MongoDB', 'Typescript'],
  },
  {
    id: 2,
    title: 'Storybook',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    tags: ['Nextjs', 'Tailwind', 'Storybook', 'Chromatic', 'Typescript'],
  },
  {
    id: 3,
    title: 'Adventskalender',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    tags: ['Nextjs', 'Tailwind', 'Typescript', 'Prismic (CMS)'],
  },
  // More projects...
];

export default function Projects() {
  return (
    <div className="relative flex items-center justify-center z-40 py-12 md:py-20">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">My Work</h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <a href={project.href} className="mt-2 block">
                  <div className="flex-shrink-0">
                    <img className="h-48 w-full object-cover" src={project.imageUrl} alt="nl" />
                  </div>
                </a>

                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <a href={project.href} className="mt-2 block">
                      {' '}
                      <p className="text-xl font-semibold text-primary">{project.title}</p>
                    </a>
                    <p className="mt-3 text-base text-gray">{project.description}</p>
                    <div className="py-4">
                      {project.tags.map((t) => (
                        <span key={t} className="cursor-default tag tag-sm tag-other mr-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
