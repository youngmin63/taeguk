// 이미지 상수들 - story1~16.png 순서대로
const imgStory1 = "/assets/story1.png";
const imgStory2 = "/assets/story2.png";
const imgStory3 = "/assets/story3.png";
const imgStory4 = "/assets/story4.png";
const imgStory5 = "/assets/story5.png";
const imgStory6 = "/assets/story6.png";
const imgStory7 = "/assets/story7.png";
const imgStory8 = "/assets/story8.png";
const imgStory9 = "/assets/story9.png";
const imgStory10 = "/assets/story10.png";
const imgStory11 = "/assets/story11.png";
const imgStory12 = "/assets/story12.png";
const imgStory13 = "/assets/story13.png";
const imgStory14 = "/assets/story14.png";
const imgStory15 = "/assets/story15.png";
const imgStory16 = "/assets/story16.png";

// 인스타그램 섹션용 이미지들
const imgInsta1 = "/assets/instaImage1.png";
const imgInsta2 = "/assets/instaImage2.png";
const imgInsta3 = "/assets/instaImage3.png";
const imgInsta4 = "/assets/instaImage4.png";
const imgInsta5 = "/assets/instaImage5.png";
const imgInsta6 = "/assets/instaImage6.png";

// 아이콘들
const imgCarouselIcon = "/assets/carouse.svg";

import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

interface StoriesProps {
  onNavigate?: (page: string) => void;
}

export default function Stories({ onNavigate }: StoriesProps) {
  const { t, language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-[#fef9ec]">
      <LanguageToggle />
      {/* Header Section */}
      <section className="bg-[#3f4026] min-h-[40vh] flex flex-col items-center justify-center px-4">
        {/* Logo */}
        <div className="mt-8 mb-8">
          <button type="button" onClick={() => onNavigate?.('home')} className="w-64 h-48 mx-auto mb-4 cursor-pointer">
            <img src="/assets/logo2.svg" alt="Taeguk Logo" className="w-full h-full object-contain" />
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

      {/* Main Content */}
      <section className="bg-[#fef9ec] py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Main Title */}
          <h1 className="text-[#3f4026] text-5xl md:text-6xl font-['Cormorant_Upright'] font-bold text-center mb-20">
            {t('stories.title')}
          </h1>

          {/* Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Story 1 (was 3) */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[304px]">
                <img src={imgStory3} alt="Nandina Privacy Screen Installation" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold mb-2 px-8`}>
                  {t('stories.story3.title')}
                </h3>
                <div className="text-[rgba(63,64,38,0.7)] text-xs">
                  <p className="mb-1">{t('stories.story3.type')}</p>
                  <p>{t('stories.story3.services')}</p>
                </div>
              </div>
            </div>

            {/* Story 2 */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[304px]">
                <img src={imgStory2} alt="Kindergarten Garden Bed & Pruning" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold mb-2 px-8`}>
                  {t('stories.story2.title')}
                </h3>
                <div className="text-[rgba(63,64,38,0.7)] text-xs">
                  <p className="mb-1">{t('stories.story2.type')}</p>
                  <p>{t('stories.story2.services')}</p>
                </div>
              </div>
            </div>

            {/* Story 3 (was 1) */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[304px]">
                <img src={imgStory1} alt="Nandina Planting for Garden Privacy" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold mb-2 px-8`}>
                  {t('stories.story1.title')}
                </h3>
                <div className="text-[rgba(63,64,38,0.7)] text-xs">
                  <p className="mb-1">{t('stories.story1.type')}</p>
                  <p>{t('stories.story1.services')}</p>
                </div>
              </div>
            </div>

            {/* Story 4 */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[304px]">
                <img src={imgStory4} alt="Garden Privacy Screening & Renewal" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold mb-2 px-8`}>
                  {t('stories.story4.title')}
                </h3>
                <div className="text-[rgba(63,64,38,0.7)] text-xs">
                  <p className="mb-1">{t('stories.story4.type')}</p>
                  <p>{t('stories.story4.services')}</p>
                </div>
              </div>
            </div>

            {/* Story 5 */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[304px]">
                <img src={imgStory5} alt="Pampas Grass Rental for Café Landscaping" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold mb-2 px-8`}>
                  {t('stories.story5.title')}
                </h3>
                <div className="text-[rgba(63,64,38,0.7)] text-xs">
                  <p className="mb-1">{t('stories.story5.type')}</p>
                  <p>{t('stories.story5.services')}</p>
                </div>
              </div>
            </div>

            {/* Story 6 */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[304px]">
                <img src={imgStory6} alt="Lagerstroemia Planting for Privacy & Garden Appeal" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold mb-2 px-8`}>
                  {t('stories.story6.title')}
                </h3>
                <div className="text-[rgba(63,64,38,0.7)] text-xs">
                  <p className="mb-1">{t('stories.story6.type')}</p>
                  <p>{t('stories.story6.services')}</p>
                </div>
              </div>
            </div>

            {/* Story 7 */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[304px]">
                <img src={imgStory7} alt="Blue Arrow — Elegant Privacy & Accent Planting" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold mb-2 px-8`}>
                  {t('stories.story7.title')}
                </h3>
                <div className="text-[rgba(63,64,38,0.7)] text-xs">
                  <p className="mb-1">{t('stories.story7.type')}</p>
                  <p>{t('stories.story7.services')}</p>
                </div>
              </div>
            </div>

            {/* Story 8 */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[304px]">
                <img src={imgStory8} alt="Crape Myrtle Collection — Vibrant Colour for Every Garden" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold mb-2 px-8`}>
                  {t('stories.story8.title')}
                </h3>
                <div className="text-[rgba(63,64,38,0.7)] text-xs">
                  <p className="mb-1">{t('stories.story8.type')}</p>
                  <p>{t('stories.story8.services')}</p>
                </div>
              </div>
            </div>

            {/* Story 9 */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[304px]">
                <img src={imgStory9} alt="Blue Arrow Hedge for Residential Privacy & Space Efficiency" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold mb-2 px-8`}>
                  {t('stories.story9.title')}
                </h3>
                <div className="text-[rgba(63,64,38,0.7)] text-xs">
                  <p className="mb-1">{t('stories.story9.type')}</p>
                  <p>{t('stories.story9.services')}</p>
                </div>
              </div>
            </div>

            {/* Story 10 */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[304px]">
                <img src={imgStory10} alt="On-Site Plant Potting & Care Service" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold mb-2 px-8`}>
                  {t('stories.story10.title')}
                </h3>
                <div className="text-[rgba(63,64,38,0.7)] text-xs">
                  <p className="mb-1">{t('stories.story10.type')}</p>
                  <p>{t('stories.story10.services')}</p>
                </div>
              </div>
            </div>

            {/* Story 11 */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[304px]">
                <img src={imgStory11} alt="Crape Myrtle — A Bold Summer Statement Tree" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold mb-2 px-8`}>
                  {t('stories.story11.title')}
                </h3>
                <div className="text-[rgba(63,64,38,0.7)] text-xs">
                  <p className="mb-1">{t('stories.story11.type')}</p>
                  <p>{t('stories.story11.services')}</p>
                </div>
              </div>
            </div>

            {/* Story 12 */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[304px]">
                <img src={imgStory12} alt="Blue Arrow Delivery for Café Landscaping in Seoul" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold mb-2 px-8`}>
                  {t('stories.story12.title')}
                </h3>
                <div className="text-[rgba(63,64,38,0.7)] text-xs">
                  <p className="mb-1">{t('stories.story12.type')}</p>
                  <p>{t('stories.story12.services')}</p>
                </div>
              </div>
            </div>

            {/* Story 13 */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[304px]">
                <img src={imgStory13} alt="Nandina — A Four-Season Favourite with Autumn Charm" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold mb-2 px-8`}>
                  {t('stories.story13.title')}
                </h3>
                <div className="text-[rgba(63,64,38,0.7)] text-xs">
                  <p className="mb-1">{t('stories.story13.type')}</p>
                  <p>{t('stories.story13.services')}</p>
                </div>
              </div>
            </div>

            {/* Story 14 */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[304px]">
                <img src={imgStory14} alt="Variegated Willow — Seasonal Beauty from Spring to Autumn" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold mb-2 px-8`}>
                  {t('stories.story14.title')}
                </h3>
                <div className="text-[rgba(63,64,38,0.7)] text-xs">
                  <p className="mb-1">{t('stories.story14.type')}</p>
                  <p>{t('stories.story14.services')}</p>
                </div>
              </div>
            </div>

            {/* Story 15 */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[304px]">
                <img src={imgStory15} alt="Spring Bulb Collection — Tulips & Daffodils" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold mb-2 px-8`}>
                  {t('stories.story15.title')}
                </h3>
                <div className="text-[rgba(63,64,38,0.7)] text-xs">
                  <p className="mb-1">{t('stories.story15.type')}</p>
                  <p>{t('stories.story15.services')}</p>
                </div>
              </div>
            </div>

            {/* Story 16 */}
            <div className="flex flex-col gap-6">
              <div className="w-full h-[304px]">
                <img src={imgStory16} alt="Repotting Service — A Friendly Start with Sempervivum" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="text-center">
                <h3 className={`text-[#3f4026] text-lg ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-bold mb-2 px-8`}>
                  {t('stories.story16.title')}
                </h3>
                <div className="text-[rgba(63,64,38,0.7)] text-xs">
                  <p className="mb-1">{t('stories.story16.type')}</p>
                  <p>{t('stories.story16.services')}</p>
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
                <a href="https://www.instagram.com/oksuri398/" target="_blank" rel="noopener noreferrer" className="relative w-full aspect-square max-w-[205px] cursor-pointer">
                  <img src={imgInsta1} alt="Instagram 1" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <img src={imgCarouselIcon} alt="Carousel" className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6" />
                </a>
                <a href="https://www.instagram.com/oksuri398/" target="_blank" rel="noopener noreferrer" className="relative w-full aspect-square max-w-[205px] cursor-pointer">
                  <img src={imgInsta2} alt="Instagram 2" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <img src={imgCarouselIcon} alt="Carousel" className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6" />
                </a>
                <a href="https://www.instagram.com/oksuri398/" target="_blank" rel="noopener noreferrer" className="relative w-full aspect-square max-w-[205px] cursor-pointer">
                  <img src={imgInsta3} alt="Instagram 3" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <img src={imgCarouselIcon} alt="Carousel" className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6" />
                </a>
                <a href="https://www.instagram.com/oksuri398/" target="_blank" rel="noopener noreferrer" className="relative w-full aspect-square max-w-[205px] cursor-pointer">
                  <img src={imgInsta4} alt="Instagram 4" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <img src={imgCarouselIcon} alt="Carousel" className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6" />
                </a>
                <a href="https://www.instagram.com/oksuri398/" target="_blank" rel="noopener noreferrer" className="relative w-full aspect-square max-w-[205px] cursor-pointer">
                  <img src={imgInsta5} alt="Instagram 5" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                  <img src={imgCarouselIcon} alt="Carousel" className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6" />
                </a>
                <a href="https://www.instagram.com/oksuri398/" target="_blank" rel="noopener noreferrer" className="relative w-full aspect-square max-w-[205px] cursor-pointer">
                  <img src={imgInsta6} alt="Instagram 6" className="absolute inset-0 w-full h-full object-cover rounded-lg" />
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
              <img src="/assets/logo2 footer.svg" alt="Taeguk Logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
