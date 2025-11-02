// 피그마에서 가져온 이미지 에셋들
const imgFaceTaeguk = "/assets/facetaeguk.png";
const imgTeamFirst = "/assets/ourteamFirst.png";
const imgTeamSecond = "/assets/ourteamSecond.png";
const imgCarouselIcon = "/assets/carouse.svg";

import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

interface AboutProps {
  onNavigate?: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const { t, language } = useLanguage();
  
  return (
    <div className="relative w-full" data-name="About1">
      <LanguageToggle />
      {/* Hero Section */}
      <section className="bg-[#3f4026] min-h-[40vh] flex flex-col items-center justify-center px-4">
        {/* Logo */}
        <div className="mt-8 mb-8">
          <button type="button" onClick={() => onNavigate?.('home')} className="w-64 h-48 mx-auto mb-4 cursor-pointer">
            <img src="/assets/logo2.svg" alt="Taeguk Logo" className="w-full h-full object-contain" />
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="mb-16 flex justify-center">
          <ul className="flex flex-wrap justify-center gap-16 text-[#FEF3DA] text-xl md:text-2xl font-['Cormorant_Upright'] font-semibold w-full max-w-[808px]">
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
      <section className="bg-[#3f4026] min-h-screen flex flex-col items-center justify-center pb-20">

        {/* Main Content Section */}
        <div className="bg-[#FEF3DA] w-full min-h-[560px] md:min-h-[720px] lg:min-h-[887px] py-20 overflow-visible">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left: Text Section */}
              <div className="flex-1">
                <h2 className="text-[#3f4026] text-6xl md:text-7xl lg:text-8xl font-['Cormorant_Upright'] font-semibold leading-tight">
                  <div className="mb-2">THE FACE</div>
                  <div className="mb-2">BEHIND</div>
                  <div>TAEGUK</div>
                </h2>
              </div>
              
              {/* Right: Image Section */}
              <div className="flex-1 flex justify-end w-full">
                <div className="w-full max-w-[528px] aspect-[4/5]">
                  <img src={imgFaceTaeguk} alt="About Taeguk" className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 소개 텍스트 섹션 */}
      <div className="bg-[#3f4026] min-h-0 md:min-h-[1080px] px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <p className={`text-[#FEF3DA] text-[32px] md:text-[48px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold text-left mb-16 `}>
            {t('about.greeting')}
          </p>
          
          <div className={`text-[#FEF3DA] text-[32px] md:text-[48px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold text-left mb-32`}>
            <p>{t('about.intro1')}</p>
            <p>{t('about.intro2')}</p>
          </div>
          
          <div className={`text-[16px] md:text-[20px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-medium text-white max-w-4xl mx-auto text-left`}>
            <p className="mb-8">{t('about.service1')}</p>
          
            <p className="mb-8">{t('about.service2')}</p>
            
            <p>{t('about.service3')}</p>
          </div>
        </div>
      </div>

      {/* 팀 섹션 */}
      <div className="bg-[#FEF3DA] min-h-0 md:min-h-[1080px] px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <p className={`text-[#3f4026] text-[48px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold text-center mb-16`}>
            {t('about.team.title')}
          </p>
          
          <div className="flex flex-col lg:flex-row gap-[40px] items-start justify-center mb-16">
            <div className="w-full max-w-[643px] aspect-[643/524]">
              <img alt="Team working" className="w-full h-full object-cover" src={imgTeamFirst} />
            </div>
            <div className="flex flex-col gap-[24px] w-full max-w-[340px]">
              <div className="w-full aspect-[340/284]">
                <img alt="Team with dog" className="w-full h-full object-cover" src={imgTeamSecond} />
              </div>
              <div className={`text-[#3f4026] text-[24px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold`}>
                <p>{t('about.team.desc')}</p>
              </div>
            </div>
          </div>
          
          {/* 통계 섹션 */}
          <div className="flex flex-wrap items-stretch justify-center">
            <div className="flex flex-col gap-[16px] items-center w-full sm:w-1/2 lg:w-1/4 py-8">
              <p className={`text-[#3f4026] text-[80px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold px-20`}>100%</p>
              <p className={`text-[#3f4026] text-[16px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold text-center px-0`}>
                {t('about.stats.grown')}
              </p>
            </div>
            <div className="flex flex-col gap-[16px] items-center w-full sm:w-1/2 lg:w-1/4 py-8 ">
              <p className={`text-[#3f4026] text-[80px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold px-20`} >50+</p>
              <p className={`text-[#3f4026] text-[16px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold text-center px-0`}>
                {t('about.stats.available')}
              </p>
            </div>
            <div className="flex flex-col gap-[16px] items-center w-full sm:w-1/2 lg:w-1/4 py-8 ">
              <p className={`text-[#3f4026] text-[80px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold px-20`}>500+</p>
              <p className={`text-[#3f4026] text-[16px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold text-center px-0`}>
                {t('about.stats.styled')}
              </p>
            </div>
            <div className="flex flex-col gap-[16px] items-center w-full sm:w-1/2 lg:w-1/4 py-8 ">
              <p className={`text-[#3f4026] text-[80px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold px-20`}>90%</p>
              <p className={`text-[#3f4026] text-[16px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold text-center px-0`}>
                {t('about.stats.return')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 철학 섹션 */}
      <div className="bg-[#3f4026] min-h-0 md:min-h-[550px] flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className={`text-[#FEF3DA] text-[32px] md:text-[64px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold mb-16`}>
            {t('about.philosophy.title')}
          </p>
          <p className={`text-[#FEF3DA] text-[18px] md:text-[48px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold`}>
            {t('about.philosophy.desc1')}
            <br />
            {t('about.philosophy.desc3')}
            <br />
            {t('about.philosophy.desc4')}
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-[#3f4026] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Instagram Section */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
              {/* Left: Instagram Text */}
              <div className="flex-1">
                <h2 className="text-[#FEF3DA] text-[88px] font-['Cormorant_Upright'] font-semibold leading-tight">
                  {t('footer.instagram')}
                </h2>
              </div>
              
              {/* Right: Instagram Images Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-2 sm:gap-x-3 sm:gap-y-3 lg:gap-x-4 lg:gap-y-4 w-full lg:max-w-[647px] mx-auto justify-items-center">
                <a href="https://www.instagram.com/oksuri398/" target="_blank" rel="noopener noreferrer" className="relative w-full aspect-square max-w-[205px] cursor-pointer">
                  <img src="/assets/instaImage1.png" alt="Instagram 1" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <img src={imgCarouselIcon} alt="Carousel" className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6" />
                </a>
                <a href="https://www.instagram.com/oksuri398/" target="_blank" rel="noopener noreferrer" className="relative w-full aspect-square max-w-[205px] cursor-pointer">
                  <img src="/assets/instaImage2.png" alt="Instagram 2" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <img src={imgCarouselIcon} alt="Carousel" className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6" />
                </a>
                <a href="https://www.instagram.com/oksuri398/" target="_blank" rel="noopener noreferrer" className="relative w-full aspect-square max-w-[205px] cursor-pointer">
                  <img src="/assets/instaImage3.png" alt="Instagram 3" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <img src={imgCarouselIcon} alt="Carousel" className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6" />
                </a>
                <a href="https://www.instagram.com/oksuri398/" target="_blank" rel="noopener noreferrer" className="relative w-full aspect-square max-w-[205px] cursor-pointer">
                  <img src="/assets/instaImage4.png" alt="Instagram 4" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <img src={imgCarouselIcon} alt="Carousel" className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6" />
                </a>
                <a href="https://www.instagram.com/oksuri398/" target="_blank" rel="noopener noreferrer" className="relative w-full aspect-square max-w-[205px] cursor-pointer">
                  <img src="/assets/instaImage5.png" alt="Instagram 5" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <img src={imgCarouselIcon} alt="Carousel" className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6" />
                </a>
                <a href="https://www.instagram.com/oksuri398/" target="_blank" rel="noopener noreferrer" className="relative w-full aspect-square max-w-[205px] cursor-pointer">
                  <img src="/assets/instaImage6.png" alt="Instagram 6" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <img src={imgCarouselIcon} alt="Carousel" className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="text-[#FEF3DA] font-['Cormorant_Upright'] font-semibold text-lg md:text-xl">
              <p>{t('footer.location')}</p>
              <p>{t('footer.phone')}</p>
              <p>{t('footer.email')}</p>
            </div>
            
            <div className="text-[#FEF3DA] font-['Cormorant_Upright'] font-semibold text-lg md:text-xl">
              <button type="button" onClick={() => onNavigate?.('about')} className="block text-left hover:opacity-80 cursor-pointer">{t('footer.about')}</button>
              <button type="button" onClick={() => onNavigate?.('services')} className="block text-left hover:opacity-80 cursor-pointer">{t('footer.work')}</button>
              <button type="button" onClick={() => onNavigate?.('stories')} className="block text-left hover:opacity-80 cursor-pointer">{t('footer.stories')}</button>
              <button type="button" onClick={() => onNavigate?.('contacts')} className="block text-left hover:opacity-80 cursor-pointer">{t('footer.contacts')}</button>
            </div>
            
            <div className="w-[253px] h-[179px]">
              <img src="/assets/logo2 footer.svg" alt="Taeguk Logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
