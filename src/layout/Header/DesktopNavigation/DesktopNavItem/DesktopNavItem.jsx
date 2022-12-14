import { NavLink } from 'react-router-dom';

const DesktopNavItem = ({ links }) => {
  return (
    <>
      {links.map(({ to, text, id }) => (
        <li key={id}>
          <NavLink className='text-xl text-ghostWhite font-bold xl:text-3xl' to={to}>
            {text}
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default DesktopNavItem;
