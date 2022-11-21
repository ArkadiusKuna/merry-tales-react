import { NavLink } from 'react-router-dom';

const DesktopNavItem = ({ links }) => {
  return (
    <>
      {links.map(({ to, text, id }) => (
        <li key={id}>
          <NavLink className='text-lg font-bold' to={to}>{text}</NavLink>
        </li>
      ))}
    </>
  );
};

export default DesktopNavItem;
