
import React from 'react';

interface LinkedInIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const LinkedInIcon: React.FC<LinkedInIconProps> = ({ className = '', ...props }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 448 448"
      className={`${className}`}
      fill="#0077B5"
      {...props}
    >
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v319.4C0 401.5 14.3 416 31.9 416H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 320H69V152h66.4v168zm-33.2-192h-.4c-22.2 0-36.7-15.3-36.7-34.5 0-19.6 14.8-34.5 37.5-34.5 22.7 0 36.7 14.9 37.1 34.5 0 19.2-14.4 34.5-37.5 34.5zm272.8 192h-66.4v-90c0-27-9.7-45.4-33.8-45.4-18.4 0-29.4 12.4-34.2 24.4-1.8 4.3-2.2 10.2-2.2 16.2v94.8h-66.4V152h66.4v28.6c9.8-13.8 27.1-33.2 65.9-33.2 48.1 0 84.1 31.4 84.1 99v73.6h-13.4z"/>
    </svg>
  );
};

export default LinkedInIcon;
