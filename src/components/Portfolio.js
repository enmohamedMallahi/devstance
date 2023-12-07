import Link from 'next/link';

const projects = [
  {
    title: 'Road Stone Morocco',
    description: 'E-commerce site for men shoes',
    techDetails: 'Built with Next.js, Contenful, and Tailwind CSS',
    imageUrl: './project-roadstone.png',
    link: 'https://road-stone.com',
  },
  {
    title: 'TrouverMonBien',
    description: 'Real Estate Directory',
    techDetails: 'Website for finding real estate properties',
    imageUrl: './project-tmb.png',
    link: 'https://trouvermonbien.com',
  },
  {
    title: 'Autovolo',
    description: 'Car Rental Site',
    techDetails: 'Automate booking process for car rental agencies',
    imageUrl: './project-autovolo.png',
    link: 'https://example.com/third-project',
  },
];

export default function Projects() {
  return (
    <div id="portfolio" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white  px-4 py-4 rounded-lg shadow-md">
              <img src={project.imageUrl} alt={project.title} className="w-full h-60 md:h-40 object-cover rounded-lg border" />
              <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
              <p className="text-gray-500 mt-2">{project.techDetails}</p>
              <Link href={project.link} className="text-indigo-500 mt-4 block hover:underline">
                Visit Website
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
