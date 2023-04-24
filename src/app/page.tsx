import { getHouses } from './lib/api/houses';

import HouseCard from "./components/Cards/HouseCard";

export default async function Home() {

  const houses: [] = await getHouses();
  return (
    <div className="flex flex-col sm:border-slate-400 border-0 sm:border-2 rounded-lg drop-shadow-lg sm:shadow-sm shadow-slate-500 p-10">
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
