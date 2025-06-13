import { create } from 'zustand';

interface TicketType {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface ComboItem {
  name: string;
  quantity: number;
}

interface BookingStore {
  selectedSeats: string[];
  comboItems: ComboItem[];

  // Cho sự kiện thường
  ticketType: TicketType | null;
  ticketQuantity: number;

  // Actions
  setSelectedSeats: (seats: string[]) => void;
  setComboItems: (items: ComboItem[]) => void;

  setTicketType: (type: TicketType) => void;
  setTicketQuantity: (quantity: number) => void;

  resetBooking: () => void;
}

export const useBookingStore = create<BookingStore>((set) => ({
  selectedSeats: [],
  comboItems: [],
  ticketType: null,
  ticketQuantity: 1,

  setSelectedSeats: (seats) => set({ selectedSeats: seats }),
  setComboItems: (items) => set({ comboItems: items }),
  setTicketType: (type) => set({ ticketType: type }),
  setTicketQuantity: (quantity) => set({ ticketQuantity: quantity }),

  resetBooking: () =>
    set({
      selectedSeats: [],
      comboItems: [],
      ticketType: null,
      ticketQuantity: 1,
    }),
}));
