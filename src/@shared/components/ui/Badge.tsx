import clsx from 'clsx';
import React from 'react';

const Badge = ({ title, className }: { title: string; className: string }) => {
  return (
    <div
      className={clsx(
        'py-[4px] px-[8px] rounded-[8px] text-[12px] leading-[normal] h-[28px] flex items-center',
        className,
      )}
    >
      {title}
    </div>
  );
};

export default Badge;
