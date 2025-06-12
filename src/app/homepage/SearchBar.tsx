import React from 'react';

const SearchBar = () => {
  return (
    <div className="w-full border-1 rounded-[10px] p-4">
      <div className="flex flex-row gap-4">
        {/* icon  */}
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#oh4rk26pia)">
            <path
              d="M13.989 12.22a.75.75 0 1 0-1.061 1.06l1.06-1.06zm1.772 3.894a.75.75 0 0 0 1.061-1.061l-1.06 1.06zm-2.303-3.364-.53.53 2.833 2.834.53-.53.531-.531-2.833-2.833-.53.53zm-5.666.708v-.75a5.625 5.625 0 0 1-5.625-5.625h-1.5a7.125 7.125 0 0 0 7.125 7.125v-.75zm6.375-6.375h-.75a5.625 5.625 0 0 1-5.625 5.625v1.5a7.125 7.125 0 0 0 7.125-7.125h-.75zM7.792.708v.75a5.625 5.625 0 0 1 5.625 5.625h1.5A7.125 7.125 0 0 0 7.792-.042v.75zm0 0v-.75A7.125 7.125 0 0 0 .667 7.083h1.5a5.625 5.625 0 0 1 5.625-5.625v-.75z"
              fill="#2D264B"
            />
          </g>
          <defs>
            <clipPath id="oh4rk26pia">
              <path fill="#fff" d="M0 0h17v17H0z" />
            </clipPath>
          </defs>
        </svg>
        <input type="text" placeholder="Tìm kiếm sự kiện" className="w-full" />
      </div>
    </div>
  );
};

export default SearchBar;
