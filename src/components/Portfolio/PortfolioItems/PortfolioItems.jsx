import PortfolioParagraph from 'components/Portfolio/PortfolioParagraph/PortfolioParagraph';
import PortfolioItem from 'components/Portfolio/PortfolioItem/PortfolioItem';

import evilWest640 from 'assets/video-games/evil-west/evil-west-circle-640.webp';
import evilWest750 from 'assets/video-games/evil-west/evil-west-circle-750.webp';
import evilWest830 from 'assets/video-games/evil-west/evil-west-circle-830.webp';
import evilWest1080 from 'assets/video-games/evil-west/evil-west-circle-1080.webp';
import evilWest1200 from 'assets/video-games/evil-west/evil-west-circle-1200.webp';
import evilWest1920 from 'assets/video-games/evil-west/evil-west-circle-1920.webp';
import evilWestFallback from 'assets/video-games/evil-west/evil-west-circle-1080.jpg';
import lordsOfTheFallen640 from 'assets/video-games/lords-of-the-fallen/lords-of-the-fallen-circle-640.webp';
import lordsOfTheFallen750 from 'assets/video-games/lords-of-the-fallen/lords-of-the-fallen-circle-750.webp';
import lordsOfTheFallen830 from 'assets/video-games/lords-of-the-fallen/lords-of-the-fallen-circle-830.webp';
import lordsOfTheFallen1080 from 'assets/video-games/lords-of-the-fallen/lords-of-the-fallen-circle-1080.webp';
import lordsOfTheFallen1200 from 'assets/video-games/lords-of-the-fallen/lords-of-the-fallen-circle-1200.webp';
import lordsOfTheFallen1920 from 'assets/video-games/lords-of-the-fallen/lords-of-the-fallen-circle-1920.webp';
import lordsOfTheFallenFallback from 'assets/video-games/lords-of-the-fallen/lords-of-the-fallen-circle-1080.jpg';
import sniper640 from 'assets/video-games/sniper-ghost-warrior-3/sniper-ghost-warrior-3-circle-640.webp';
import sniper750 from 'assets/video-games/sniper-ghost-warrior-3/sniper-ghost-warrior-3-circle-750.webp';
import sniper830 from 'assets/video-games/sniper-ghost-warrior-3/sniper-ghost-warrior-3-circle-830.webp';
import sniper1080 from 'assets/video-games/sniper-ghost-warrior-3/sniper-ghost-warrior-3-circle-1080.webp';
import sniper1200 from 'assets/video-games/sniper-ghost-warrior-3/sniper-ghost-warrior-3-circle-1200.webp';
import sniper1920 from 'assets/video-games/sniper-ghost-warrior-3/sniper-ghost-warrior-3-circle-1920.webp';
import sniperFallback from 'assets/video-games/sniper-ghost-warrior-3/sniper-ghost-warrior-3-circle-1080.jpeg';
import sniperContracts640 from 'assets/video-games/sniper-ghost-warrior-contracts/sniper-ghost-warrior-contracts-circle-640.webp';
import sniperContracts750 from 'assets/video-games/sniper-ghost-warrior-contracts/sniper-ghost-warrior-contracts-circle-750.webp';
import sniperContracts830 from 'assets/video-games/sniper-ghost-warrior-contracts/sniper-ghost-warrior-contracts-circle-830.webp';
import sniperContracts1080 from 'assets/video-games/sniper-ghost-warrior-contracts/sniper-ghost-warrior-contracts-circle-1080.webp';
import sniperContracts1200 from 'assets/video-games/sniper-ghost-warrior-contracts/sniper-ghost-warrior-contracts-circle-1200.webp';
import sniperContracts1920 from 'assets/video-games/sniper-ghost-warrior-contracts/sniper-ghost-warrior-contracts-circle-1920.webp';
import sniperContractsFallback from 'assets/video-games/sniper-ghost-warrior-contracts/sniper-ghost-warrior-contracts-circle-1080.jpeg';
import shadowWarrior640 from 'assets/video-games/shadow-warrior/shadow-warrior-3-circle-640.webp';
import shadowWarrior750 from 'assets/video-games/shadow-warrior/shadow-warrior-3-circle-750.webp';
import shadowWarrior830 from 'assets/video-games/shadow-warrior/shadow-warrior-3-circle-830.webp';
import shadowWarrior1080 from 'assets/video-games/shadow-warrior/shadow-warrior-3-circle-1080.webp';
import shadowWarrior1200 from 'assets/video-games/shadow-warrior/shadow-warrior-3-circle-1200.webp';
import shadowWarrior1920 from 'assets/video-games/shadow-warrior/shadow-warrior-3-circle-1920.webp';
import shadowWarriorFallback from 'assets/video-games/shadow-warrior/shadow-warrior-3-circle-1080.jpg';

const PortfolioItems = () => {
  return (
    <div className='max-w-screen-2xl py-10 flex flex-col md:[&>*:nth-child(5)]:mb-0 md:flex-row md:flex-wrap'>
      <div>
        <PortfolioParagraph />
      </div>
      <PortfolioItem
        srcSet={`${evilWest640} 640w, ${evilWest750} 750w, ${evilWest830} 830w, ${evilWest1080} 1080w, ${evilWest1200} 1200w, ${evilWest1920} 1920w`}
        src={evilWestFallback}
        alt='Evil West'
        title='Evil West'
        studio='Flying Wild Hog'
      />
      <PortfolioItem
        srcSet={`${lordsOfTheFallen640} 640w, ${lordsOfTheFallen750} 750w, ${lordsOfTheFallen830} 830w, ${lordsOfTheFallen1080} 1080w, ${lordsOfTheFallen1200} 1200w, ${lordsOfTheFallen1920} 1920w`}
        src={lordsOfTheFallenFallback}
        alt='Lords Of The Fallen'
        title='Lords Of The Fallen iOS'
        studio='CI Games'
      />
      <PortfolioItem
        srcSet={`${sniper640} 640w, ${sniper750} 750w, ${sniper830} 830w, ${sniper1080} 1080w, ${sniper1200} 1200w, ${sniper1920} 1920w`}
        src={sniperFallback}
        alt='Sniper Ghost Warrior 3'
        title='Sniper Ghost Warrior 3'
        studio='CI Games'
      />
      <PortfolioItem
        srcSet={`${sniperContracts640} 640w, ${sniperContracts750} 750w, ${sniperContracts830} 830w, ${sniperContracts1080} 1080w, ${sniperContracts1200} 1200w, ${sniperContracts1920} 1920w`}
        src={sniperContractsFallback}
        alt='Sniper Ghost Warrior Contracts'
        title='Sniper Ghost Warrior Contracts'
        studio='CI Games'
      />
      <PortfolioItem
        srcSet={`${shadowWarrior640} 640w, ${shadowWarrior750} 750w, ${shadowWarrior830} 830w, ${shadowWarrior1080} 1080w, ${shadowWarrior1200} 1200w, ${shadowWarrior1920} 1920w`}
        src={shadowWarriorFallback}
        alt='Shadow Warrior 3'
        title='Shadow Warrior 3'
        studio='Flying Wild Hog'
      />
    </div>
  );
};

export default PortfolioItems;