// 이미지 상수들
const imgContactsImage = "/assets/contact2.jpg";
const imgInsta1 = "/assets/instaImage1.png";
const imgInsta2 = "/assets/instaImage2.png";
const imgInsta3 = "/assets/instaImage3.png";
const imgInsta4 = "/assets/instaImage4.png";
const imgInsta5 = "/assets/instaImage5.png";
const imgInsta6 = "/assets/instaImage6.png";
const imgCarouselIcon = "/assets/carouse.svg";

import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

interface ContactsProps {
  onNavigate?: (page: string) => void;
}

export default function Contacts({ onNavigate }: ContactsProps) {
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

      {/* Main Content Section */}
      <section className="bg-[#fef9ec] w-full py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            {/* Left: Text and Form Section */}
            <div className="flex-1">
              <h2 className={`text-[#3f4026] text-6xl md:text-7xl lg:text-7xl ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold leading-tight mb-8`}>
                {t('contacts.title')}
              </h2>
              
              <div className={`text-[#3f4026] text-xl ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold mb-12`}>
                <p className="mb-2">{t('contacts.subtitle1')}</p>
                <p>{t('contacts.subtitle2')}</p>
              </div>

              {/* Contact Form */}
              <div className="space-y-8 w-full max-w-[438px]">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className={`text-[#3f4026] text-xl ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold`}>
                    {t('contacts.form.name')}
                  </label>
                  <input
                    type="text"
                    className={`w-full h-11 bg-white px-4 text-[#3f4026] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"}`}
                    placeholder=""
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className={`text-[#3f4026] text-xl ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold`}>
                    {t('contacts.form.email')}
                  </label>
                  <input
                    type="email"
                    className={`w-full h-11 bg-white px-4 text-[#3f4026] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"}`}
                    placeholder=""
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className={`text-[#3f4026] text-xl ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold`}>
                    {t('contacts.form.message')}
                  </label>
                  <textarea
                    className={`w-full h-30 bg-white px-4 py-3 text-[#3f4026] ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} resize-none`}
                    placeholder=""
                    rows={4}
                  />
                </div>

                {/* Send Button */}
                <button className={`bg-[#3f4026] text-[#fef9ec] text-xl ${language === 'ko' ? 'font-notoSansKr' : "font-['Cormorant_Upright']"} font-semibold px-8 py-3 hover:opacity-80 transition-opacity`}>
                  {t('contacts.form.send')}
                </button>
              </div>
            </div>

            {/* Right: Image Section */}
            <div className="flex-1 flex justify-end w-full">
              <div className="w-full max-w-[516px] bg-white">
                <img src={imgContactsImage} alt="Contact Image" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
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
