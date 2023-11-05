import cards from '../../../data/Data';

export default function Card() {
  return (
    <section>
      <div className="container mx-auto mb-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold ">Projects</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cards.map((card, index) => (
            <a href={card.link} target='_blank' className="card m-2 transform cursor-pointer rounded-lg border border-gray-400 transition-all duration-200 hover:-translate-y-1 hover:border-opacity-0 hover:shadow-md" key={index}>
              <div className="m-3">
                <h2 className="mb-2 text-lg">
                  {card.title} <span className="float-right inline animate-pulse rounded-full bg-teal-100 px-2 align-top font-mono text-sm text-teal-800">{card.tag}</span>
                </h2>
                <p className="font-mono text-sm font-light text-gray-700 transition-all duration-200 hover:text-gray-900">{card.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
{cards.map((card, index) => (
            <div className="card m-2 transform cursor-pointer rounded-lg border border-gray-400 transition-all duration-200 hover:-translate-y-1 hover:border-opacity-0 hover:shadow-md" key={index}>
              <div className="m-3">
                <h2 className="mb-2 text-lg">
                  {card.title} <span className="float-right inline animate-pulse rounded-full bg-teal-100 px-2 align-top font-mono text-sm text-teal-800">{card.tag}</span>
                </h2>
                <p className="font-mono text-sm font-light text-gray-700 transition-all duration-200 hover:text-gray-900">{card.description}</p>
              </div>
            </div>
          ))}
====
base on text above, do i just need to add link in this const cards = [
  {
   link : '/trypath
    title: 'Trying Vite',
    tag: 'Tool',
    description: 'Vite is a quick web development build tool.',
  },
*/
