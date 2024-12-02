import CatLinks from '@/components/CategoryButtons';
import { CatCards } from '@/components/homepage/CategoryCards';

import { TbTargetArrow } from 'react-icons/tb';

import {
  foundationsCards,
  featuredCards,
  essentialsCards,
  careerCards,
  lifestyleCards,
  healthCards,
  fulfilmentCards,
  relationshipsCards,
} from '@/helper/DummyData';

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
        image={{
          src: '/foundationsIcon.svg',
          width: 40,
          height: 40,
          alt: 'foundations icon',
        }}
        categoryTitle={'Foundations'}
        cardData={foundationsCards}
        backgroundColor="#000"
      />
      <CatCards
        image={{
          src: '/essentialsIcon.svg',
          width: 40,
          height: 40,
          alt: 'essentials icon',
        }}
        categoryTitle={'Essentials'}
        cardData={essentialsCards}
        backgroundColor="#000"
      />
      <CatCards
        icon={<TbTargetArrow color="white" size={30} strokeWidth={1} />}
        categoryTitle={'Career'}
        cardData={careerCards}
        backgroundColor="#000"
      />
      <CatCards
        image={{
          src: '/lifestyleIcon.svg',
          width: 20,
          height: 20,
          alt: 'lifestyle icon',
        }}
        categoryTitle={'Lifestyle'}
        cardData={lifestyleCards}
        backgroundColor="#000"
      />

      <CatCards
        image={{
          src: '/healthIcon.svg',
          width: 30,
          height: 30,
          alt: 'health icon',
        }}
        categoryTitle={'Health'}
        cardData={healthCards}
        backgroundColor="#000"
      />
      <CatCards
        image={{
          src: '/fulfilmentIcon.svg',
          width: 30,
          height: 30,
          alt: 'Fulfilment icon',
        }}
        categoryTitle={'Fulfilment'}
        cardData={fulfilmentCards}
        backgroundColor="#000"
      />
      <CatCards
        image={{
          src: '/relationshipIcon.svg',
          width: 40,
          height: 40,
          alt: 'relationship icon',
        }}
        categoryTitle={'Relationships'}
        cardData={relationshipsCards}
        backgroundColor="#000"
      />
    </div>
  );
}
