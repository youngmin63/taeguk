// 이미지 에셋들 - story1~4.png 사용
const imgStory1 = "/assets/story1.png";
const imgStory2 = "/assets/story2.png";
const imgStory3 = "/assets/story3.png";
const imgStory4 = "/assets/story4.png";
const imgFrame61 = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSI5MjMiIHZpZXdCb3g9IjAgMCAxOTIwIDkyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSI5MjMiIGZpbGw9IiMzZjQwMjYiLz48dGV4dCB4PSI5NjAiIHk9IjQ2MS41IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjZmVmOWVjIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiPkFib3V0IEJhY2tncm91bmQ8L3RleHQ+PC9zdmc+";
const imgRose = "/assets/rose.png";
const imgLeaf = "/assets/Leaf.png";
const imgTree = "/assets/Tree.png";
const imgBasket = "/assets/Basket.png";
const imgCarouselIcon = "/assets/carouse.svg";

import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

interface HomeProps {
  onNavigate?: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const { t, language } = useLanguage();
  
  return (
    <div className="w-full">
      <LanguageToggle />
      {/* Hero Section */}
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

      {/* Hero Section (continued) */}
      <section className="bg-[#3f4026] flex flex-col items-center justify-center px-4 ">

        {/* Hero Image */}
        <div className="w-full max-w-[1335px] mx-auto aspect-[16/9]">
          <img src="/assets/main background.png" alt="Taeguk Interior" className="w-full h-full object-cover rounded-lg" />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#3f4026] py-40 px-4">
        <div className="max-w-8xl mx-auto">
          {/* Main Title */}
          <h2 className={`text-[#fef9ec] text-3xl md:text-5xl lg:text-6xl ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold text-center mb-12`}>
            {t('home.hero.title')}
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center text-center p-6 min-h-[200px] min-w-0">
              <div className="w-8 h-8 mb-4">
                <img src={imgRose} alt="Rose" className="w-full h-full" />
              </div>
              <h3 className={`text-[#fef9ec] text-[18px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold mb-3 whitespace-nowrap`}>
                {t('home.services.seasonal')}
              </h3>
              <p className={`text-[#fef9ec] text-[14px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} opacity-90`}>
                {t('home.services.seasonal.desc')}
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 min-h-[200px] min-w-0">
              <div className="w-8 h-8 mb-4">
                <img src={imgLeaf} alt="Leaf" className="w-full h-full" />
              </div>
              <h3 className={`text-[#fef9ec] text-[18px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold mb-3 whitespace-nowrap`}>
                {t('home.services.interior')}
              </h3>
              <p className={`text-[#fef9ec] text-[14px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} opacity-90`}>
                {t('home.services.interior.desc')}
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 min-h-[200px] min-w-0">
              <div className="w-8 h-8 mb-4">
                <img src={imgTree} alt="Tree" className="w-full h-full" />
              </div>
              <h3 className={`text-[#fef9ec] text-[18px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold mb-3 whitespace-nowrap`}>
                {t('home.services.garden')}
              </h3>
              <p className={`text-[#fef9ec] text-[14px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} opacity-90`}>
                {t('home.services.garden.desc')}
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 min-h-[200px] min-w-0">
              <div className="w-8 h-8 mb-4">
                <img src={imgBasket} alt="Basket" className="w-full h-full" />
              </div>
              <h3 className={`text-[#fef9ec] text-[18px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold mb-3 whitespace-nowrap`}>
                {t('home.services.event')}
              </h3>
              <p className={`text-[#fef9ec] text-[14px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} opacity-90`}>
                {t('home.services.event.desc')}
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 min-h-[200px] min-w-0">
              <div className="w-8 h-8 mb-4">
                <img src="/assets/Chat Bubble.png" alt="Consulting" className="w-full h-full" />
              </div>
              <h3 className={`text-[#fef9ec] text-[18px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold mb-3 whitespace-nowrap`}>
                {t('home.services.consulting')}
              </h3>
              <p className={`text-[#fef9ec] text-[14px] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} opacity-90`}>
                {t('home.services.consulting.desc')}
              </p>
            </div>
          </div>
          {/* Services CTA */}
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => onNavigate?.('services')}
              className={`bg-[#fef9ec] text-[#3f4026] px-6 py-3 ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold text-lg hover:opacity-80 transition-opacity`}
            >
              {t('home.services.cta')}
            </button>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="relative h-[60vh] md:h-screen flex items-end justify-center pb-16">
        <img src="/assets/project1.png" alt="Project Background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 text-center text-white">
          <h2 className={`text-4xl md:text-2xl ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold mb-4`}>
            [Project]
          </h2>
          <h3 className={`text-2xl md:text-4xl ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold`}>
            Natural Garden Design
          </h3>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="bg-[#fef9ec] py-40 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-[#3f4026] text-4xl md:text-5xl ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold text-center mb-16`}>
            {t('home.story.title')}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Story 1 (was 3) */}
            <a href="https://blog.naver.com/eunsuk7225/224006405168" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-6 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-full aspect-square max-w-[304px] mx-auto">
                <img src={imgStory3} alt="Nandina Privacy Screen Installation" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-base ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold mb-2 px-8`}>
                  {t('stories.story3.title')}
                </h3>
                <div className={`text-[rgba(63,64,38,0.7)] text-xs ${language === 'ko' ? 'font-notoSansKr' : ''}`}>
                  <p className="mb-1">{t('stories.story3.type')}</p>
                  <p>{t('stories.story3.services')}</p>
                </div>
              </div>
            </a>

            {/* Story 2 */}
            <a href="https://blog.naver.com/eunsuk7225/224006419000" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-6 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-full aspect-square max-w-[304px] mx-auto">
                <img src={imgStory2} alt="Kindergarten Garden Bed & Pruning" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-base ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold mb-2 px-8`}>
                  {t('stories.story2.title')}
                </h3>
                <div className={`text-[rgba(63,64,38,0.7)] text-xs ${language === 'ko' ? 'font-notoSansKr' : ''}`}>
                  <p className="mb-1">{t('stories.story2.type')}</p>
                  <p>{t('stories.story2.services')}</p>
                </div>
              </div>
            </a>

            {/* Story 3 (was 1) */}
            <a href="https://blog.naver.com/eunsuk7225/224006405168" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-6 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-full aspect-square max-w-[304px] mx-auto">
                <img src={imgStory1} alt="Nandina Planting for Garden Privacy" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-base ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold mb-2 px-8`}>
                  {t('stories.story1.title')}
                </h3>
                <div className={`text-[rgba(63,64,38,0.7)] text-xs ${language === 'ko' ? 'font-notoSansKr' : ''}`}>
                  <p className="mb-1">{t('stories.story1.type')}</p>
                  <p>{t('stories.story1.services')}</p>
                </div>
              </div>
            </a>

            {/* Story 4 */}
            <a href="https://blog.naver.com/eunsuk7225/224005560800" target="_blank" rel="noopener noreferrer" className="flex flex-col gap-6 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="w-full aspect-square max-w-[304px] mx-auto">
                <img src={imgStory4} alt="Garden Privacy Screening & Renewal" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-base ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold mb-2 px-8`}>
                  {t('stories.story4.title')}
                </h3>
                <div className={`text-[rgba(63,64,38,0.7)] text-xs ${language === 'ko' ? 'font-notoSansKr' : ''}`}>
                  <p className="mb-1">{t('stories.story4.type')}</p>
                  <p>{t('stories.story4.services')}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <img src={imgFrame61} alt="About Background" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="bg-[#fef9ec] p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
             
              <div className="flex-1">
                <h2 className={`text-[#3f4026] text-3xl md:text-4xl ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold mb-6`}>
                  {t('home.about.title')}
                </h2>
                <div className={`text-[#3f4026] text-base md:text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} leading-relaxed`}>
                  <p className="mb-4">{t('home.about.desc1')}</p>
                  <p className="mb-6">{t('home.about.desc2')}</p>
                  <button
                    onClick={() => onNavigate?.('about')}
                    className="bg-[#3f4026] text-[#fef9ec] px-6 py-2 font-['Cormorant_Upright'] font-semibold text-lg hover:opacity-80 transition-opacity"
                  >
                    {t('home.story.cta')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-[#fef9ec] py-40 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-[#3f4026] text-4xl md:text-5xl ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold text-center mb-16`}>
            {t('home.reviews.title')}
          </h2>
          
          <div className="w-full max-w-[865px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <div className={`text-[#3f4026] text-base md:text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} leading-relaxed`}>
                  <p className="mb-4">{t('home.reviews.review1')}</p>
                </div>
              </div>
              <div className="w-full max-w-[384px] aspect-[384/492]">
                <img src="/assets/review image1.png" alt="Review Image 1" className="w-full h-full object-cover rounded-lg" />
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <div className="text-[#3f4026] text-base md:text-lg font-['Cormorant_Upright'] leading-relaxed">
                  <p className="mb-4">{t('home.reviews.review2')}</p>
                </div>
              </div>
              <div className="w-full max-w-[384px] aspect-[384/492]">
                <img src="/assets/review image2.png" alt="Review Image 2" className="w-full h-full object-cover rounded-lg" />
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