import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ko' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-[#3f4026] text-[#fef9ec] px-4 py-2 rounded-lg font-['Cormorant_Upright'] font-semibold text-lg hover:opacity-80 transition-opacity shadow-lg"
    >
      {language === 'en' ? '한국어' : 'English'}
    </button>
  );
}
