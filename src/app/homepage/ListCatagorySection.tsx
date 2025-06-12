import Loading from '@/@shared/components/icon/Loading';
import Badge from '@/@shared/components/ui/Badge';
import { useGetCatagory } from '@hooks/useGetCatagory';
import React from 'react';

const COLOR_CLASSES = [
  'bg-violet-100',
  'bg-yellow-100',
  'bg-red-100',
  'bg-green-100',
];

const ListCatagorySection = () => {
  const { data } = useGetCatagory();

  return (
    <div className="flex">
      <div className="overflow-x-auto flex flex-row space-x-3">
        {!data && <Loading />}
        {data &&
          data.map((element: any, idx: number) => (
            <Badge
              key={element?.id || idx}
              title={element?.category_name}
              className={`${COLOR_CLASSES[idx % COLOR_CLASSES.length]} text-black`}
            />
          ))}
      </div>
    </div>
  );
};

export default ListCatagorySection;
