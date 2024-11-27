import CatLinks from '@/components/CategoryButtons';
import { CatCards } from '@/components/homepage/CategoryCards';
import Image from 'next/image';
import { foundationsCards, featuredCards } from '@/helper/DummyData';

export default function Home() {
  return (
    <div className="">
      <CatLinks />
      <CatCards
        categoryTitle={'Featured'}
        cardData={featuredCards}
        backgroundColor="#333343"
      />
      <CatCards
        icon={{
          src: '/foundationsIcon.svg',
          width: 40,
          height: 40,
          alt: 'foundations icon',
        }}
        categoryTitle={'Foundations'}
        cardData={foundationsCards}
        backgroundColor="#000"
      />
    </div>
  );
}
