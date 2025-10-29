// 이미지 상수들
const imgServiceFlowers = "/assets/serviceFlowers.png";
const imgServiceEvents = "/assets/serviceEvents.png";
const imgServiceEducation = "/assets/serviceEducation.png";
const imgServiceSpace = "/assets/serviceSpace.png";
const imgCarouselIcon = "/assets/carouse.svg";

import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

interface ServicesProps {
  onNavigate?: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const { t, language } = useLanguage();
  
  return (
    <div className="relative w-full min-h-screen">
      <LanguageToggle />
      {/* Header Section */}
      <section className="bg-[#3f4026] min-h-[40vh] flex flex-col items-center justify-center px-4">
        {/* Logo */}
        <div className="mt-8 mb-8">
          <button type="button" onClick={() => onNavigate?.('home')} className="w-64 h-48 mx-auto mb-4 cursor-pointer">
            <img src="/assets/Logo.svg" alt="Taeguk Logo" className="w-full h-full object-contain" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mb-16 flex justify-center">
          <ul className="flex flex-wrap justify-center gap-4 text-[#fef9ec] text-xl md:text-2xl font-['Cormorant_Upright'] font-semibold w-full max-w-[808px]">
            <li>
              <button
                onClick={() => onNavigate?.('about')}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                {t('nav.about')}
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate?.('services')}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                {t('nav.services')}
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate?.('stories')}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                {t('nav.stories')}
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate?.('contacts')}
                className="hover:opacity-80 transition-opacity cursor-pointer"
              >
                {t('nav.contacts')}
              </button>
            </li>
          </ul>
        </nav>
      </section>

      {/* Content Section */}
      <section className="bg-[#3f4026]">

        {/* Main Title */}
        <div className="w-full h-[320px] md:h-[487px] bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: "url('/assets/service background pic.jpg')"}}>
          <div className="max-w-6xl mx-auto px-4 h-full relative">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
              <div className="flex justify-center items-center w-full max-w-[980px] px-6 py-8 md:px-[64px] md:py-[32px] bg-[#FEF9EC]">
                <h1 className={`text-[#3f4026] text-3xl md:text-6xl lg:text-[80px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold leading-normal text-center`}>
                  {t('services.title')}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Space Styling Section */}
      <section className="bg-[#3f4026] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-24">
            {/* Left: Image and Description */}
            <div className="flex-1 order-2 md:order-1">
              <div className="w-full max-w-[643px] aspect-[643/478] ">
                <img src={imgServiceSpace} alt="Space Styling" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="bg-[#fef9ec] border border-black p-8 w-full max-w-[632px] ml-0 md:ml-[40px] ">
                <div className={`text-black text-[20px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold leading-relaxed`}>
                  <p className="mb-4">{t('services.space.desc1')}</p>
                  <p className="mb-4">{t('services.space.desc2')}</p>
                  <p className="mb-4">{t('services.space.desc3')}</p>
                  <p>{t('services.space.desc4')}</p>
                </div>
              </div>
            </div>
            
            {/* Right: Title */}
            <div className="flex-1 order-1 md:order-2">
              <h2 className={`text-[#fef9ec] text-4xl md:text-6xl lg:text-[80px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold uppercase leading-tight mt-8 md:mt-8`}>
                {t('services.space.title')}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Flowers & Plants Section */}
      <section className="bg-[#3f4026] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-24">
            {/* Left: Title */}
            <div className="flex-1">
              <h2 className={`text-[#fef9ec] text-4xl md:text-6xl lg:text-[80px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold uppercase leading-tight mt-8 md:mt-8 text-right`}>
                {t('services.flowers.title')}
              </h2>
            </div>
            
            {/* Right: Image and Description */}
            <div className="flex-1">
              <div className="w-full max-w-[643px] aspect-[643/478]">
                <img src={imgServiceFlowers} alt="Flowers and Plants" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="bg-[#fef9ec] border border-black p-8 w-full max-w-[632px] md:-ml-[40px]">
                <div className={`text-black text-[20px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold leading-relaxed`}>
                  <p className="mb-4">{t('services.flowers.desc1')}</p>
                  <p className="mb-4">{t('services.flowers.desc2')}</p>
                  <p className="mb-4">{t('services.flowers.desc3')}</p>
                  <p className="mb-4">{t('services.flowers.desc4')}</p>
                  <p>{t('services.flowers.desc5')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events & Social Education Section */}
      <section className="bg-[#3f4026] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-8">
            {/* Top: Title */}
            <div className="flex justify-center">
              <h2 className={`text-[#fef9ec] text-4xl md:text-6xl lg:text-[80px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold uppercase leading-tight mb-8 text-center`}>
                {t('services.events.title')}
              </h2>
            </div>
            
            {/* Middle: Images */}
            <div className="flex justify-center items-center">
              <div className="w-full max-w-[548px] aspect-[548/407] md:-mr-[47px] relative z-20">
                <img src={imgServiceEducation} alt="Events" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="w-full max-w-[454px] aspect-[454/653] md:-ml-[47px] relative z-10">
                <img src={imgServiceEvents} alt="Social Education" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            
            {/* Bottom: Centered Description */}
            <div className="flex justify-center">
              <div className="bg-[#fef9ec] border border-black p-8 w-full max-w-[908px]">
                <div className={`text-black text-[20px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold leading-relaxed`}>
                  <p className="mb-4">{t('services.events.desc1')}</p>
                  <p className="mb-4">{t('services.events.desc2')}</p>
                  <p className="mb-4">{t('services.events.desc3')}</p>
                  <p className="mb-4">{t('services.events.desc4')}</p>
                  <p>{t('services.events.desc5')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#3f4026] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Instagram Section */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              {/* Left: Instagram Text */}
              <div className="flex-1">
                <h2 className="text-[#fef9ec] text-[88px] font-['Cormorant_Upright'] font-semibold leading-tight">
                  {t('footer.instagram')}
                </h2>
              </div>
              
              {/* Right: Instagram Images Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-2 sm:gap-x-3 sm:gap-y-3 lg:gap-x-4 lg:gap-y-4 w-full lg:max-w-[647px] mx-auto justify-items-center">
                <div className="relative w-full aspect-square max-w-[205px]">
                  <img src="/assets/instaImage1.png" alt="Instagram 1" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <img src={imgCarouselIcon} alt="Carousel" className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div className="relative w-full aspect-square max-w-[205px]">
                  <img src="/assets/instaImage2.png" alt="Instagram 2" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <img src={imgCarouselIcon} alt="Carousel" className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div className="relative w-full aspect-square max-w-[205px]">
                  <img src="/assets/instaImage3.png" alt="Instagram 3" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <img src={imgCarouselIcon} alt="Carousel" className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div className="relative w-full aspect-square max-w-[205px]">
                  <img src="/assets/instaImage4.png" alt="Instagram 4" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <img src={imgCarouselIcon} alt="Carousel" className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div className="relative w-full aspect-square max-w-[205px]">
                  <img src="/assets/instaImage5.png" alt="Instagram 5" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <img src={imgCarouselIcon} alt="Carousel" className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div className="relative w-full aspect-square max-w-[205px]">
                  <img src="/assets/instaImage6.png" alt="Instagram 6" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <img src={imgCarouselIcon} alt="Carousel" className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="text-[#fef9ec] font-['Cormorant_Upright'] font-semibold text-lg md:text-xl">
              <p>{t('footer.location')}</p>
              <p>{t('footer.phone')}</p>
              <p>{t('footer.email')}</p>
            </div>
            
            <div className="text-[#fef9ec] font-['Cormorant_Upright'] font-semibold text-lg md:text-xl">
              <p>{t('footer.about')}</p>
              <p>{t('footer.work')}</p>
              <p>{t('footer.stories')}</p>
              <p>{t('footer.contacts')}</p>
            </div>
            
            <div className="w-[253px] h-[179px]">
              <img src="/assets/logo footer.svg" alt="Taeguk Logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
