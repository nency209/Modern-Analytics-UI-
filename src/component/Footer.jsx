import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="mt-12 flex justify-between">
        <p className="px-4 font-['Plus_Jakarta_Display'] text-sm font-normal">
          @ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
        </p>
        <div className="flex mx-4 gap-4 justify-between">
          <p className="font-['Plus_Jakarta_Display'] text-sm font-normal">Marketplace</p>
          <p className="font-['Plus_Jakarta_Display'] text-sm font-normal">Blog</p>
          <p className="font-['Plus_Jakarta_Display'] text-sm font-normal">License</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;