"use client" 
import MobilePageLayout from "@/@shared/components/layout/Page";
import { Button } from "@/@shared/components/ui/Button";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddEventPage = () => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [ticketPrice, setTicketPrice] = useState(0);
  const [eventImage, setEventImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!eventName || !eventDescription || !eventDate || !eventLocation || !ticketPrice || !eventImage) {
      toast.error("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    const formData = new FormData();
    formData.append("name", eventName);
    formData.append("description", eventDescription);
    formData.append("date", eventDate);
    formData.append("location", eventLocation);
    formData.append("ticketPrice", ticketPrice.toString());
    formData.append("image", eventImage);

    try {
      // Gửi dữ liệu tới API để tạo sự kiện mới (giả sử API có endpoint POST /events)
      const response = await fetch("/api/events", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Thêm sự kiện thành công!");
      } else {
        toast.error("Lỗi thêm sự kiện!");
      }
    } catch (error) {
      console.error("Lỗi khi thêm sự kiện:", error);
      toast.error("Đã có lỗi xảy ra khi thêm sự kiện.");
    }
  };

  return (
    <MobilePageLayout className="pt-[60px]">
      <Toaster />
      <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Ảnh sự kiện</label>
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
              <label className="text-[14px] font-bold">
              Tên sự kiện
              </label>
              <input
                 value={eventName}
                 onChange={(e) => setEventName(e.target.value)}
                 required
                placeholder="Nhập tên sự kiện"
                className="w-full rounded-[28px] border border-[#f3f4f9]  px-4 py-3 text-sm placeholder:text-zinc-400 focus:outline-none"
              />
            </div>
        <div>
              <label className="text-[14px] font-bold">
              Mô tả sự kiện
              </label>
              <textarea
                 value={eventDescription}
                 onChange={(e) => setEventDescription(e.target.value)}
                 required
                placeholder="Nhập mô tả sự kiện"
                className="w-full rounded-[28px] border border-[#f3f4f9]  px-4 py-3 text-sm placeholder:text-zinc-400 focus:outline-none"
              />
            </div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Thời gian diễn ra</label>
        <input
          type="text"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          required
        />
        
        <label className="block text-sm font-medium text-gray-700 mb-1">Địa điểm</label>
        <input
          value={eventLocation}
          onChange={(e) => setEventLocation(e.target.value)}
          required
        />
        <label className="block text-sm font-medium text-gray-700 mb-1">Giá vé</label>
        <input
          type="number"
          value={ticketPrice}
          onChange={(e) => setTicketPrice(Number(e.target.value))}
          required
        />
        <div>

    </div>
        <Button type="submit" >
          Thêm sự kiện
        </Button>
      </form>
    </MobilePageLayout>
  );
};

export default AddEventPage;
