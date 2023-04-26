import { getHouses } from './lib/api/houses';

import HouseCard from "./components/Cards/HouseCard";
import Presentation from './components/Shared/Presentation/Presentation';

export default async function Home() {

  const houses: [] = await getHouses();
  return (
    <div className="flex flex-col gap-10 w-10/12 m-auto">
      <Presentation />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-between">
        {
          houses?.map((house: any) => {
            return (
              <HouseCard
                key={house.ID}
                house={house}
              />
            );
          })
        }
      </div>
    </div>
  )
}
