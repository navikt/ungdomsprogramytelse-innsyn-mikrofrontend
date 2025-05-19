import React from "react";

interface IconProps {
  className?: string;
  width?: string;
  height?: string;
  fill?: string;
}

const PleiepengerIcon: React.FC<IconProps> = () => (
  <svg width="56" height="54" viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1_1001)">
      <rect x="12.8333" y="10.8333" width="30.3333" height="30.3333" rx="15.1667" fill="#CCE2F0" />
      <path d="M53.6667 28.6667V3.33337H37.6667V28.6667" stroke="#23262A" strokeWidth="2" />
      <path d="M37.6667 12.6666H29.6667V28.6666" stroke="#23262A" strokeWidth="2" />
      <path d="M43 10L48.3333 10" stroke="#23262A" strokeWidth="2" />
      <path d="M45.6667 7.33337L45.6667 12.6667" stroke="#23262A" strokeWidth="2" />
      <path d="M33.6667 22V24.6667" stroke="#23262A" strokeWidth="2" />
      <path d="M33.6667 16.6666V19.3333" stroke="#23262A" strokeWidth="2" />
      <path d="M48.3333 22V24.6667" stroke="#23262A" strokeWidth="2" />
      <path d="M48.3333 16.6666V19.3333" stroke="#23262A" strokeWidth="2" />
      <path d="M43 16.6666V19.3333" stroke="#23262A" strokeWidth="2" />
      <path d="M43 22V24.6667" stroke="#23262A" strokeWidth="2" />
      <path d="M27.6667 28.6666L55.6667 28.6666" stroke="#23262A" strokeWidth="2" />
      <path
        d="M13.125 39.2501C17.3652 39.2501 21.3139 41.3574 24.9722 45.8335C21.3139 50.3095 17.3652 52.4168 13.125 52.4168C8.88476 52.4168 4.93613 50.3095 1.27779 45.8335C4.93613 41.3574 8.88476 39.2501 13.125 39.2501Z"
        stroke="#23262A"
        strokeWidth="2"
      />
      <path
        d="M17.6412 45.8335C17.6412 48.177 15.6558 50.1418 13.1249 50.1418C10.5941 50.1418 8.60864 48.177 8.60864 45.8335C8.60864 43.4899 10.5941 41.5251 13.1249 41.5251C15.6558 41.5251 17.6412 43.4899 17.6412 45.8335Z"
        stroke="#23262A"
        strokeWidth="2"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_1001">
        <rect width="56" height="53.4168" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default PleiepengerIcon;
