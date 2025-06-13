'use client';
import MobilePageLayout from '@/@shared/components/layout/Page';
import { Button } from '@/@shared/components/ui/Button';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { PickDate } from './PickDate';
import MultipleSelector, { Option } from '@/@shared/components/ui/multi-select';

const eventTypeOptions = [
  { value: 'movie', label: 'Phim chiếu rạp' },
  { value: 'art', label: 'Nghệ thuật' },
  { value: 'music', label: 'Âm nhạc' },
  { value: 'tech', label: 'Công nghệ' },
  { value: 'sport', label: 'Thể thao' },
  { value: 'education', label: 'Giáo dục' },
];
type TicketType = {
  name: string;
  price: number;
  quantity: number;
};
const AddEventPage = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState<Date | undefined>();
  const [eventLocation, setEventLocation] = useState('');
  const [ticketPrice, setTicketPrice] = useState(0);
  const [eventTypes, setEventTypes] = useState<Option[]>([]);
  const [eventImage, setEventImage] = useState<File | null>(null);
  const [ticketTypes, setTicketTypes] = useState<TicketType[]>([]);
  const [seatRows, setSeatRows] = useState<number>();
  const [seatColumns, setSeatColumns] = useState<number>();
  const isMovieType = eventTypes.some((type) => type.value === 'movie');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !eventName ||
      !eventDescription ||
      !eventDate ||
      !eventLocation ||
      !eventImage
    ) {
      toast.error('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    const formData = new FormData();
    formData.append('name', eventName);
    formData.append('description', eventDescription);
    formData.append('date', eventDate.toLocaleDateString());
    formData.append('location', eventLocation);
    formData.append('image', eventImage);
    formData.append("ticketTypes", JSON.stringify(ticketTypes));
if (isMovieType) {
  formData.append("seatRows", seatRows?.toString() || "0");
  formData.append("seatColumns", seatColumns?.toString() || "0");
}

    try {
      // Gửi dữ liệu tới API để tạo sự kiện mới (giả sử API có endpoint POST /events)
      const response = await fetch('/api/events', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('Thêm sự kiện thành công!');
      } else {
        toast.error('Lỗi thêm sự kiện!');
      }
    } catch (error) {
      console.error('Lỗi khi thêm sự kiện:', error);
      toast.error('Đã có lỗi xảy ra khi thêm sự kiện.');
    }
  };

  return (
    <MobilePageLayout className="pt-[60px]">
      <Toaster />
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ảnh sự kiện
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setEventImage(file);
            }
          }}
          className="block w-full text-sm text-gray-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-primary file:text-white
        hover:file:bg-primary/80
        "
        />
        {eventImage && (
          <img
            src={URL.createObjectURL(eventImage)}
            alt="Preview"
            className="mt-2 w-full max-h-64 object-cover rounded-lg"
          />
        )}
        <div>Thông tin sự kiện</div>
        <div>
          <label className="text-[14px] font-bold">Tên sự kiện</label>
          <input
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
            placeholder="Nhập tên sự kiện"
            className="w-full rounded-[28px] border border-[#f3f4f9]  px-4 py-3 text-sm placeholder:text-zinc-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-[14px] font-bold">Mô tả sự kiện</label>
          <textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
            placeholder="Nhập mô tả sự kiện"
            className="w-full rounded-[28px] border border-[#f3f4f9]  px-4 py-3 text-sm placeholder:text-zinc-400 focus:outline-none"
          />
        </div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Thời gian diễn ra
        </label>
        <PickDate date={eventDate} onChange={setEventDate} />
        <div>
          <label className="text-[14px] font-bold">Địa điểm diễn ra</label>
          <input
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            required
            placeholder="Nhập địa điểm diễn ra"
            className="w-full rounded-[28px] border border-[#f3f4f9]  px-4 py-3 text-sm placeholder:text-zinc-400 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Loại sự kiện
          </label>
          <MultipleSelector
            options={eventTypeOptions}
            value={eventTypes}
            onChange={setEventTypes}
            placeholder="Chọn loại sự kiện"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Các loại vé
          </label>
          <div className="space-y-2">
            {ticketTypes.map((ticket, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center"
              >
                <input
                  type="text"
                  placeholder="Tên loại vé"
                  value={ticket.name}
                  onChange={(e) => {
                    const newTypes = [...ticketTypes];
                    newTypes[index].name = e.target.value;
                    setTicketTypes(newTypes);
                  }}
                  className="w-full rounded-[28px] border border-[#f3f4f9] px-4 py-2 text-sm placeholder:text-zinc-400"
                />
                <input
                  type="number"
                  placeholder="Giá"
                  value={ticket.price}
                  onChange={(e) => {
                    const newTypes = [...ticketTypes];
                    newTypes[index].price = Number(e.target.value);
                    setTicketTypes(newTypes);
                  }}
                  className="w-full rounded-[28px] border border-[#f3f4f9] px-4 py-2 text-sm placeholder:text-zinc-400"
                />
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Số lượng"
                    value={ticket.quantity}
                    onChange={(e) => {
                      const newTypes = [...ticketTypes];
                      newTypes[index].quantity = Number(e.target.value);
                      setTicketTypes(newTypes);
                    }}
                    className="flex-1 rounded-[28px] border border-[#f3f4f9] px-4 py-2 text-sm placeholder:text-zinc-400"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    className="px-3 text-white"
                    onClick={() => {
                      const newTypes = [...ticketTypes];
                      newTypes.splice(index, 1);
                      setTicketTypes(newTypes);
                    }}
                  >
                    X
                  </Button>
                </div>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setTicketTypes([
                  ...ticketTypes,
                  { name: '', price: 0, quantity: 0 },
                ])
              }
            >
              + Thêm loại vé
            </Button>
          </div>
        </div>
        {isMovieType && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cấu hình ghế ngồi (chỉ áp dụng với rạp phim)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="Số hàng ghế (ví dụ: 10)"
                value={seatRows}
                min={1}
                onChange={(e) => setSeatRows(Number(e.target.value))}
                className="w-full rounded-[28px] border border-[#f3f4f9] px-4 py-2 text-sm placeholder:text-zinc-400"
              />
              <input
                type="number"
                placeholder="Số cột ghế (ví dụ: 12)"
                value={seatColumns}
                min={1}
                onChange={(e) => setSeatColumns(Number(e.target.value))}
                className="w-full rounded-[28px] border border-[#f3f4f9] px-4 py-2 text-sm placeholder:text-zinc-400"
              />
            </div>
          </div>
        )}

        <Button type="submit" className="w-full">
          Thêm sự kiện
        </Button>
      </form>
    </MobilePageLayout>
  );
};

export default AddEventPage;
