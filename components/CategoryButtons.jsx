import { CategoryLinks } from '@/helper/DummyData';

// Card Component
const Card = ({ category, tags }) => {
  return (
    <a
      href="#"
      className="flex flex-col gap-2 items-start lg:items-center justify-center
       bg-gradient-to-br from-[#1e1e33] to-[#030311]
      rounded-lg p-6 hover:border-[#9ED0CB] hover:text-[#9ED0CB]
      transition-all duration-300 border border-transparent
      min-w-[260px] h-[100px]"
    >
      <h3 className="text-xl font-bold text-center">{category}</h3>
      <p className="text-sm text-gray-400 text-center">{tags}</p>
    </a>
  );
};

const CatLinks = () => {
  return (
    <div className="bg-[#000] lg:py-10 px-6 my-10 lg:px-[64px]
     overflow-x-auto">
      <div
        className="flex flex-col lg:flex-row lg:items-center   
        lg:overflow-x-auto  lg:space-y-0 lg:space-x-4"
      >
        <a
          href="#"
          className="flex flex-row items-center  bg-gradient-to-br
           from-[#1e1e33] to-[#030311]
          rounded-lg p-6 hover:border-[#9ED0CB] hover:text-[#9ED0CB]
          transition-all duration-300 border-2 border-transparent
           min-w-[260px] h-[100px]"
        >
          <h3 className="text-xl font-bold text-center">All Playbooks</h3>
        </a>
        {CategoryLinks.map((card, index) => (
          <Card key={index} category={card.category} tags={card.tags} />
        ))}
      </div>
    </div>
  );
};

export default CatLinks;
