import { useState } from 'react';

import MobileNavigation from 'layout/Header/MobileNavigation/MobileNavigation';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <header className='fixed flex items-center justify-between w-full h-[70px] px-2 py-1 border-10 border-black z-20 bg-gray-300 sm:px-4 md:p-0'>
    <h1 className='text-xl font-bold sm:text-3xl md:hidden'>Merry Tale Games</h1>
      <MobileNavigation isActive={isActive} onClick={handleIsActive} />
      <DesktopNavigation />
    </header>
  );
};

export default Header;
