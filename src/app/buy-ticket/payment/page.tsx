'use client';
import { useBookingStore } from '@hooks/useBookingStore';
import { createZaloPayOrder } from '@hooks/useCreateOrder';
import { useState } from 'react';

export default function PaymentSummary() {
  const { selectedSeats, comboItems, ticketType, ticketQuantity } = useBookingStore();
  const [selectedMethod, setSelectedMethod] = useState('zalo');
  const [promoCode, setPromoCode] = useState('');
  const [orderUrl, setOrderUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  const seatPrice = 200_000;
  const comboPriceMap: Record<string, number> = {
    comboMộtMình: 79_000,
    comboCặpĐôi: 120_000,
  };
  const seatTotal = selectedSeats.length > 0
  ? selectedSeats.length * seatPrice
  : (ticketType?.price || 0) * (ticketQuantity || 0);

const comboTotal = comboItems.reduce((total, item) => {
  const unitPrice = comboPriceMap[item.name] || 0;
  return total + unitPrice * item.quantity;
}, 0);

const discount = promoCode === 'GIAM10' ? 10_000 : 0;
const total = seatTotal + comboTotal - discount;


  const handleSubmit = async () => {
    const zaloOrderData = {
      fullName: 'quoc',
      email: 'quoc@example.com',
      phone: '0900000000',
      quantity: selectedSeats.length,
      amount: total,
      description: selectedSeats.length > 0
  ? `Thanh toán ${selectedSeats.length} vé + combo`
  : `Thanh toán ${ticketQuantity} vé loại ${ticketType?.name}`,
    };

    const result = await createZaloPayOrder(zaloOrderData);
    if (result.order_url) {
      setOrderUrl(result.order_url);
      setShowModal(true);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-4 space-y-5">
      <h2 className="text-center text-[20px] font-semibold text-[#761CBC] mb-4">
        Payment
      </h2>

      {/* Info box */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-xl px-4 py-3 text-sm">
        <p><strong>Ghế:</strong> {selectedSeats.join(', ')}</p>
        <p><strong>Combo:</strong> {comboItems.map(item => `${item.name} x${item.quantity}`).join(', ') || 'Không'}</p>
      </div>

      {/* Dynamic items */}
      <div className="space-y-1 text-sm">
  {selectedSeats.length > 0 ? (
    selectedSeats.map((seat, idx) => (
      <div key={idx} className="flex justify-between">
        <span>1x Vé VIP – {seat}</span>
        <span className="font-medium">{seatPrice.toLocaleString('vi-VN')}đ</span>
      </div>
    ))
  ) : (
    <div className="flex justify-between">
      <span>{ticketQuantity}x {ticketType?.name}</span>
      <span className="font-medium">
        {(ticketQuantity * (ticketType?.price || 0)).toLocaleString('vi-VN')}đ
      </span>
    </div>
  )}

  {comboItems.map((item, idx) => {
    const unitPrice = comboPriceMap[item.name] || 0;
    return (
      <div key={idx} className="flex justify-between">
        <span>{item.quantity}x {item.name}</span>
        <span className="font-medium">
          {(79000 * item.quantity).toLocaleString('vi-VN')}đ
        </span>
      </div>
    );
  })}

  {discount > 0 && (
    <div className="flex justify-between text-red-500">
      <span>Discount</span>
      <span className="font-medium">−{discount.toLocaleString('vi-VN')}đ</span>
    </div>
  )}

  <div className="flex justify-between font-bold text-base border-t pt-2 mt-2">
    <span>TỔNG CỘNG</span>
    <span>{total.toLocaleString('vi-VN')}đ</span>
  </div>
</div>


      {/* Payment Method */}
      <div>
        <p className="text-sm font-medium mb-2">Phương thức thanh toán</p>

        {/* ZaloPay option */}
        <div
          onClick={() => setSelectedMethod('zalo')}
          className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer border ${
            selectedMethod === 'zalo'
              ? 'border-blue-500 bg-blue-50'
              : 'hover:bg-gray-100'
          }`}
        >
          <img
            src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png"
            alt="Zalo Pay"
            className="w-8 h-8"
          />
          <div>
            <p className="font-medium text-sm">Zalo Pay - Bạn mới giảm 40%</p>
          </div>
        </div>

        {/* VietQR option */}
        <div
          onClick={() => setSelectedMethod('vietqr')}
          className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer border mt-2 ${
            selectedMethod === 'vietqr'
              ? 'border-blue-500 bg-blue-50'
              : 'hover:bg-gray-100'
          }`}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8fB7CGGyPt5k8nsDXXCIsBqSXdlA10Y3X18Maksuhz72SoTiPveMtbRRk1uqtL8lEE9g"
            alt="VietQR"
            className="w-8 h-8"
          />
          <div>
            <p className="font-medium text-sm">VietQR</p>
          </div>
        </div>
      </div>

      {/* Promo + Button + Order Link */}
      <div className="p-4 fixed left-0 bottom-0 w-full bg-white">
        <input
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder="Nhập mã (VD: GIAM10)"
          className="w-full rounded-[28px] border border-purple-500 px-4 py-3 text-sm placeholder:text-zinc-400 focus:outline-none"
        />
        <button
          onClick={handleSubmit}
          type="button"
          className="w-full rounded-[14px] bg-[#761cbc] px-4 py-3 text-zinc-950 font-bold hover:bg-white/90 !text-white mt-[10px]"
        >
          Thanh toán
        </button>

        {showModal && orderUrl && (
          <div className="mt-4 p-4 border rounded-xl bg-green-50 text-green-700 text-sm">
            Link thanh toán:{' '}
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              Mở ZaloPay
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
