import ksiegaStraznika400 from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-400.webp';
import ksiegaStraznika600 from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-600.webp';
import ksiegaStraznika800 from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-800.webp';
import ksiegaStraznika1000 from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-1000.webp';
import ksiegaStraznika1200 from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-1200.webp';
import ksiegaStraznikaFallback from 'assets/tabletop/cthulhu/cthulhu-ksiega-straznika-800.jpg';
import zewCthulhu400 from 'assets/tabletop/cthulhu/cthulhu-zew-400.webp';
import zewCthulhu600 from 'assets/tabletop/cthulhu/cthulhu-zew-600.webp';
import zewCthulhu800 from 'assets/tabletop/cthulhu/cthulhu-zew-800.webp';
import zewCthulhu1000 from 'assets/tabletop/cthulhu/cthulhu-zew-1000.webp';
import zewCthulhu1200 from 'assets/tabletop/cthulhu/cthulhu-zew-1200.webp';
import zewCthulhuFallback from 'assets/tabletop/cthulhu/cthulhu-zew-800.jpg';
import nutka400 from 'assets/tabletop/other/nutka-w-nutke-400.webp';
import nutka600 from 'assets/tabletop/other/nutka-w-nutke-600.webp';
import nutka800 from 'assets/tabletop/other/nutka-w-nutke-800.webp';
import nutka1000 from 'assets/tabletop/other/nutka-w-nutke-1000.webp';
import nutka1200 from 'assets/tabletop/other/nutka-w-nutke-1200.webp';
import nutkaFallback from 'assets/tabletop/other/nutka-w-nutke-800.jpg';
import fantastyka400 from 'assets/tabletop/other/fantastyka-400.webp';
import fantastyka600 from 'assets/tabletop/other/fantastyka-600.webp';
import fantastyka800 from 'assets/tabletop/other/fantastyka-800.webp';
import fantastyka1000 from 'assets/tabletop/other/fantastyka-1000.webp';
import fantastyka1200 from 'assets/tabletop/other/fantastyka-1200.webp';
import fantastykaFallback from 'assets/tabletop/other/fantastyka-800.jpg';
import sibirPunk400 from 'assets/tabletop/other/sibir-punk-400.webp';
import sibirPunk600 from 'assets/tabletop/other/sibir-punk-400.webp';
import sibirPunk800 from 'assets/tabletop/other/sibir-punk-400.webp';
import sibirPunk1000 from 'assets/tabletop/other/sibir-punk-400.webp';
import sibirPunk1200 from 'assets/tabletop/other/sibir-punk-400.webp';
import sibirPunkFallback from 'assets/tabletop/other/sibir-punk-800.jpg';

export const homePageTabletops = [
  {
    id: 1,
    srcSet: `${ksiegaStraznika400} 400w, ${ksiegaStraznika600} 600w, ${ksiegaStraznika800} 800w, ${ksiegaStraznika1000} 1000w, ${ksiegaStraznika1200} 1200w`,
    src: ksiegaStraznikaFallback,
    sizes:
      '(max-width: 639px) 200px, (max-width: 1279px) 310px, (min-width: 1280px) 100vw',
    alt: 'Zew Cthulhu - Ksi??ga Stra??nika',
  },
  {
    id: 2,
    srcSet: `${zewCthulhu400} 400w, ${zewCthulhu600} 600w, ${zewCthulhu800} 800w, ${zewCthulhu1000} 1000w, ${zewCthulhu1200} 1200w`,
    src: zewCthulhuFallback,
    sizes:
      '(max-width: 639px) 200px, (max-width: 1279px) 310px, (min-width: 1280px) 100vw',
    alt: 'Zew Cthulhu - Us??ysz Zew Cthulhu',
  },
  {
    id: 3,
    srcSet: `${nutka400} 400w, ${nutka600} 600w, ${nutka800} 800w, ${nutka1000} 1000w, ${nutka1200} 1200w`,
    src: nutkaFallback,
    sizes:
      '(max-width: 639px) 200px, (max-width: 1279px) 310px, (min-width: 1280px) 100vw',
    alt: 'Nutka W Nutk??.exe',
  },
  {
    id: 4,
    srcSet: `${fantastyka400} 400w, ${fantastyka600} 600w, ${fantastyka800} 800w, ${fantastyka1000} 1000w, ${fantastyka1200} 1200w`,
    src: fantastykaFallback,
    sizes:
      '(max-width: 639px) 200px, (max-width: 1279px) 310px, (min-width: 1280px) 100vw',
    alt: 'Nowa Fantastyka',
  },
  {
    id: 5,
    srcSet: `${sibirPunk400} 400w, ${sibirPunk600} 600w, ${sibirPunk800} 800w, ${sibirPunk1000} 1000w, ${sibirPunk1200} 1200w`,
    src: sibirPunkFallback,
    sizes:
      '(max-width: 639px) 200px, (max-width: 1279px) 310px, (min-width: 1280px) 100vw',
    alt: 'Sibir Punk',
  },
];
