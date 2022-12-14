import { useLocation } from 'react-router-dom';
import { GrMail, GrYoutube } from 'react-icons/gr';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

import SocialsItem from 'components/Boxes/SocialsBox/SocialsItem/SocialsItem';

const variantMap = {
  main: 'w-full h-full flex z-10 sm:grid sm:grid-cols-2 sm:grid-rows-2',
  fixed: 'h-auto max-w-screen-2xl sm:!flex',
};

const SocialsBox = ({ variant }) => {
  const location = useLocation();
  const variantClasses = variantMap[variant];

  const { main } = variantMap;

  return (
    <div className={`${main} ${variantClasses}`}>
      <SocialsItem
        variant={location.pathname === '/' ? 'facebookHome' : 'facebook'}
        element={
          <FaFacebookF
            className='mx-auto h-8 w-8'
            fill={location.pathname === '/' ? '#fff' : '#000'}
          />
        }
        href='https://www.facebook.com/szmeryznadkamery'
      />
      <SocialsItem
        variant={location.pathname === '/' ? 'linkedInHome' : 'linkedin'}
        element={
          <FaLinkedinIn
            className='mx-auto h-8 w-8'
            fill={location.pathname === '/' ? '#fff' : '#000'}
          />
        }
        href='https://www.linkedin.com/in/maria-borys-pi%C4%85tkowska-126308149/'
      />
      <SocialsItem
        variant={location.pathname === '/' ? 'youTubeHome' : 'youtube'}
        element={
          <GrYoutube
            className='mx-auto h-8 w-8'
            fill={location.pathname === '/' ? '#fff' : '#000'}
          />
        }
        href='https://www.youtube.com/@GrajKolektyw'
      />
      <SocialsItem
        variant={location.pathname === '/' ? 'def' : 'email'}
        element={
          <GrMail
            className='mx-auto h-8 w-8'
            fill={location.pathname === '/' ? '#fff' : '#000'}
          />
        }
        href='mailto:merry.rpg@gmail.com?subject=Merry Tale Games Contact'
      />
    </div>
  );
};

export default SocialsBox;
