import Image from 'next/image';
import { categories } from '@/data/data';

export default function Category() {
  console.log(categories);
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Categories
      </h1>
      {/* Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item) => (
          <div
            key={item.name}
            className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <Image src={item.image} alt={item.name} width={75} height={75} />
          </div>
        ))}
      </div>
    </div>
  );
}
