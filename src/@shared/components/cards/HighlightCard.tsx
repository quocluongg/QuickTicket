import { CalendarIcon, MapPinIcon } from 'lucide-react';

const HighlightCard = ({
  image,
  title,
  location,
  date,
  price,
}: {
  image: string;
  title: string;
  location: string;
  date: string;
  price: string;
}) => {
  return (
    <div className="relative w-80 h-48 rounded-2xl overflow-hidden shadow-lg">
      {/* Background Image */}
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-[rgba(45,38,75,0.5)] backdrop-blur-[5px] p-2 rounded-[10px] mx-[10px] mb-[10px] h-[90px] flex flex-row justify-center items-center gap-5">
        <div className="flex-1 text-white">
          <h3 className="text-sm font-semibold truncate max-w-[200px]">
            {title}
          </h3>
          <div className="flex items-center text-xs gap-1 mt-1">
            <MapPinIcon size={14} />{' '}
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center text-xs gap-1 mt-1">
            <CalendarIcon size={14} /> <span>{date}</span>
          </div>
        </div>
        <div className="text-right text-white text-sm">
          <div className="text-xs opacity-70">Giá từ</div>
          <div className="font-bold">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
