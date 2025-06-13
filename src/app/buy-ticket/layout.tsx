export default function BuyTicketLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="p-4 max-w-4xl mx-auto">
        {/* Progress Indicator */}
        <div className="flex justify-between mb-6 text-sm text-gray-500">
          <span>1. Chọn ghế</span>
          <span>2. Chọn combo</span>
          <span>3. Thanh toán</span>
        </div>
        <div>{children}</div>
      </div>
    );
  }
  