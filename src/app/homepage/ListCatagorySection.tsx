
import Loading from '@/@shared/components/icon/Loading';
import { Badge } from '@/@shared/components/ui/badge';
import { useGetCatagory } from '@hooks/useGetCatagory';
import React from 'react';

const COLOR_CLASSES = [
  'bg-violet-100 text-violet-800',
  'bg-yellow-100 text-yellow-800',
  'bg-red-100 text-red-800',
  'bg-green-100 text-green-800',
];

const ListCatagorySection = () => {
  const { data, isLoading } = useGetCatagory();

  return (
    <div className="w-full px-4 py-2">
      <div className="flex overflow-x-auto space-x-3 no-scrollbar">
        {isLoading && <Loading />}
        {!isLoading &&
          data?.map((element: any, idx: number) => (
            <Badge
              key={idx}
              variant="secondary"
              className={`${COLOR_CLASSES[idx % COLOR_CLASSES.length]} whitespace-nowrap rounded-full px-3 py-1 text-sm font-medium shadow`}
            >
              {element.category_name}
            </Badge>
          ))}
      </div>
    </div>
  );
};

export default ListCatagorySection;
