import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'ko';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 번역 데이터
const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.stories': 'Stories',
    'nav.contacts': 'Contacts',
    
    // Home
    'home.hero.title': 'We work for your pleasure',
    'home.services.seasonal': 'Seasonal Florals',
    'home.services.seasonal.desc': 'Fresh flowers and wild plants arranged with local character and natural warmth.',
    'home.services.interior': 'Interior Styling',
    'home.services.interior.desc': 'From cafés to homes — we create gentle indoor moods that breathe with plants and textures.',
    'home.services.garden': 'Garden Styling',
    'home.services.garden.desc': 'We shape outdoor and semi-open spaces into calm, natural sanctuaries that grow over time.',
    'home.services.event': 'Event & Installation',
    'home.services.event.desc': 'Seasonal exhibitions and floral installations that tell your brand\'s story through nature.',
    'home.services.consulting': 'Personal Consulting',
    'home.services.consulting.desc': 'We listen to your space and needs to design bespoke floral and plant experiences.',
    'home.project.title': '[Project]',
    'home.project.subtitle': 'Natural Garden Design',
    'home.story.title': 'Our Story',
    'home.story.cta': 'See More',
    'home.services.cta': 'See More',
    'home.about.title': 'About Taeguk',
    'home.about.desc1': 'Taeguk — a name rooted in family and kindness.',
    'home.about.desc2': 'A reminder that the things we care for grow into something meaningful. Our flowers follow that belief: blooming gently, filling spaces with warmth, and connecting hearts like living stories.',
    'home.reviews.title': 'Our Warmth, Reflected In Their Heart',
    'home.reviews.review1': '"It was my wife\'s birthday, and I wanted flowers that felt truly meaningful. Wayne listened kindly to my concerns about rising flower prices and assured me he would take care of it. He created a bouquet filled with the loveliest, most fragrant blooms — all arranged with such care. It was a simple order, yet it brought us such joy. I\'ll gladly return again."',
    'home.reviews.review2': '"We wanted to refresh our small outdoor space by replacing the concrete wall with bamboo. Wayne understood exactly what we were hoping for and guided us with sincere suggestions. He transformed a plain yard into a refreshing green space — and now just looking at it brings us calm joy every day. We\'re so happy with the result and grateful for the thoughtful work. Highly recommend!"',
    
    // Services
    'services.title': 'Our Services',
    'services.space.title': 'Space Styling',
    'services.space.desc1': 'With horticultural expertise and thoughtful design,',
    'services.space.desc2': 'we transform both indoor and outdoor spaces into green sanctuaries.',
    'services.space.desc3': 'From plant curation to full garden construction,',
    'services.space.desc4': 'we ensure every project is built to thrive — naturally and sustainably.',
    'services.flowers.title': 'Flowers & Plants',
    'services.flowers.desc1': 'From seasonal flowers to unique plants grown at our farm,',
    'services.flowers.desc2': 'Taeguk Wildflower offers tailored styling for homes, shops, and outdoor landscapes.',
    'services.flowers.desc3': 'With hands-on horticulture expertise, we design green spaces that last — beautiful, healthy, alive.',
    'services.events.title': 'Events & Social Education',
    'services.events.desc1': 'We believe nature can inspire confidence and creativity.',
    'services.events.desc2': 'From school programs for children to hands-on workshops for local communities, we bring the joy of growing and creating with plants into everyday life.',
    'services.events.desc3': 'Together, we design experiences that help people connect — with nature, with each other, and with themselves.',
    
    // About
    'about.title': 'THE FACE BEHIND TAEGUK',
    'about.greeting': 'Hello flower friends',
    'about.intro1': 'Owned + operated by Wayne,',
    'about.intro2': 'Taeguk Wildflower is a floral & garden design studio based out of Cheongju, South Korea',
    'about.service1': 'SERVING ALL PARTS OF CHUNGJU AND NEARBY AREAS | ALWAYS OPEN TO VISIT YOUR SPACE',
    'about.service2': 'DESIGNS ARE INSPIRED BY GENUINE CONNECTIONS WITH NATURE — FROM LOCAL WILDFLOWERS TO LUSH TROPICAL GREENS.',
    'about.service3': 'A CREATOR WHO LOVES BOTH CALM, EARTHY TONES AND BRIGHT, JOYFUL COLOR PALETTES.',
    'about.team.title': 'Our Team',
    'about.team.desc': 'We grow alongside our plants, craft with our own hands, and fill each day with laughter. All of us together, including Kongtteok, dream of green moments that live on.',
    'about.stats.grown': 'grown + cared for directly at our greenhouse',
    'about.stats.available': 'flowers + plants available year-round',
    'about.stats.styled': 'gardens + interiors we\'ve styled with nature',
    'about.stats.return': 'return because they love our service + heart',
    'about.philosophy.title': 'Our Philosophy',
    'about.philosophy.desc1': 'We believe nature should feel like home.',
    'about.philosophy.desc2': 'Every plant we care for carries warmth from our family to yours.',
    'about.philosophy.desc3': 'We design spaces where people and nature grow together —',
    'about.philosophy.desc4': 'creating calm, joy, and a little magic in everyday life.',
    
    // Stories
    'stories.title': 'Our Stories',
    'stories.story1.title': 'Nandina Planting for Garden Privacy',
    'stories.story1.type': 'Design Type: Natural',
    'stories.story1.services': 'Services: Planting / Privacy Garden',
    'stories.story2.title': 'Kindergarten Garden Bed & Pruning',
    'stories.story2.type': 'Design Type: Maintenance & Improvement',
    'stories.story2.services': 'Services: Pruning / Garden Bed Care',
    'stories.story3.title': 'Nandina Privacy Screen Installation',
    'stories.story3.type': 'Design Type: Privacy Screen',
    'stories.story3.services': 'Services: Delivery & Planting Support',
    'stories.story4.title': 'Garden Privacy Screening & Renewal',
    'stories.story4.type': 'Design Type: Privacy & Renewal',
    'stories.story4.services': 'Services: Cleanup / Custom Planter / Planting',
    'stories.story5.title': 'Pampas Grass Rental for Café Landscaping',
    'stories.story5.type': 'Design Type: Seasonal Feature',
    'stories.story5.services': 'Services: Plant Rental / Styling',
    'stories.story6.title': 'Lagerstroemia Planting for Privacy & Garden Appeal',
    'stories.story6.type': 'Design Type: Privacy & Colour',
    'stories.story6.services': 'Services: Delivery / Planting',
    'stories.story7.title': 'Blue Arrow — Elegant Privacy & Accent Planting',
    'stories.story7.type': 'Design Type: Privacy & Accent',
    'stories.story7.services': 'Services: Delivery / Planting Support',
    'stories.story8.title': 'Crape Myrtle Collection — Vibrant Colour for Every Garden',
    'stories.story8.type': 'Design Type: Seasonal Colour',
    'stories.story8.services': 'Services: Delivery / Planting Support',
    'stories.story9.title': 'Blue Arrow Hedge for Residential Privacy & Space Efficiency',
    'stories.story9.type': 'Design Type: Privacy & Space Efficiency',
    'stories.story9.services': 'Services: Planting',
    'stories.story10.title': 'On-Site Plant Potting & Care Service',
    'stories.story10.type': 'Design Type: Plant Care Service',
    'stories.story10.services': 'Services: On-site Potting / Maintenance',
    'stories.story11.title': 'Crape Myrtle — A Bold Summer Statement Tree',
    'stories.story11.type': 'project: the secret Garden 2024 Services: Planter Design',
    'stories.story11.services': 'Project Type: Natural',
    'stories.story12.title': 'Blue Arrow Delivery for Café Landscaping in Seoul',
    'stories.story12.type': 'Design Type: Café Entrance Accent',
    'stories.story12.services': 'Services: Delivery',
    'stories.story13.title': 'Nandina — A Four-Season Favourite with Autumn Charm',
    'stories.story13.type': 'Design Type: Seasonal Colour',
    'stories.story13.services': 'Services: Delivery / Planting Support',
    'stories.story14.title': 'Variegated Willow — Seasonal Beauty from Spring to Autumn',
    'stories.story14.type': 'Design Type: Seasonal Transition',
    'stories.story14.services': 'Services: Delivery / Planting Support',
    'stories.story15.title': 'Spring Bulb Collection — Tulips & Daffodils',
    'stories.story15.type': 'Design Type: Spring Bulb Bloom',
    'stories.story15.services': 'Services: Delivery / In-store Pickup',
    'stories.story16.title': 'Repotting Service — A Friendly Start with Sempervivum',
    'stories.story16.type': 'Design Type: Customer Care',
    'stories.story16.services': 'Services: In-store Potting / Plant Guidance',
    
    // Contacts
    'contacts.title': 'GET IN TOUCH',
    'contacts.subtitle1': 'Have a question or a dream project in mind?',
    'contacts.subtitle2': 'Reach out and let\'s create something beautiful together.',
    'contacts.form.name': 'Name',
    'contacts.form.email': 'Phone number or Email',
    'contacts.form.message': 'Message',
    'contacts.form.send': 'Send',
    
    // Footer
    'footer.instagram': 'Follow Our Instagram',
    'footer.location': '251, Hagamoksu-gil, Bugi-myeon',
    'footer.phone': 'Tel: 0507-1480-8274',
    'footer.email': 'design.by.kwon@gmail.com',
    'footer.about': 'About',
    'footer.work': 'Work',
    'footer.stories': 'Stories',
    'footer.contacts': 'Contacts',
  },
  ko: {
    // Navigation
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.stories': 'Stories',
    'nav.contacts': 'Contacts',
    
    // Home
    'home.hero.title': '고객의 즐거움을 위해 일합니다',
    'home.services.seasonal': '계절 꽃다발',
    'home.services.seasonal.desc': '지역이 품은 자연의 따뜻함을 담아 신선한 꽃과 야생 식물을 전합니다.',
    'home.services.interior': '인테리어 스타일링',
    'home.services.interior.desc': '집과 카페, 어떤 공간이든 식물의 질감과 생기로 부드러운 분위기를 완성합니다.',
    'home.services.garden': '가든 스타일링',
    'home.services.garden.desc': '시간과 함께 성장하는 녹색 공간.자연스럽고 오래 머무는 정원을 설계합니다.',
    'home.services.event': '이벤트 & 설치',
    'home.services.event.desc': '브랜드의 이야기를 자연의 언어로 전합니다.전시, 행사, 플로럴 설치 작품을 진행합니다.',
    'home.services.consulting': '개인 상담',
    'home.services.consulting.desc': '고객의 공간과 니즈를 확인하고 맞춤형 플로럴과 식물 경험을 디자인합니다.',
    'home.project.title': '[프로젝트]',
    'home.project.subtitle': '자연 가든 디자인',
    'home.story.title': '우리의 이야기',
    'home.story.cta': '자세히보기',
    'home.services.cta': '자세히보기',
    'home.about.title': '태국 야생화 소개',
    'home.about.desc1': '태국은 가족과 친절함에 뿌리를 둔 이름입니다.',
    'home.about.desc2': '우리가 돌보는 모든 식물에는 의미 있고 살아가는 힘이 담겨 있습니다.',
    'home.reviews.title': '고객님들의 이야기',
    'home.reviews.review1': '“아내 생일이라 의미 있는 꽃을 선물하고 싶었습니다. 웨인이 꽃과 구성에 대해 제 걱정을 진심으로 들어주고 해결해준다고 약속해주셨습니다. 그리고 정말 가장 사랑스러운 향기와 색감으로 가득한 아주 예쁜 부케를 만들어주셨어요. 간단한 주문이었지만 우리에게 큰 기쁨을 선물해주셨습니다. 다음에도 꼭 다시 이용할 예정입니다.”',
    'home.reviews.review2': '"작은 야외 공간을 콘크리트 벽을 대나무로 바꿔서 새롭게 하고 싶었습니다. 웨인이 우리가 바라는 것을 정확히 이해하고 진심 어린 제안으로 안내해주었습니다.그 결과, 평범한 마당이차분한 녹색 공간으로 변했어요. 이제 바라보기만 해도 매일 작은 즐거움이 생깁니다. 세심한 작업에 정말 만족합니다. 정말 추천드려요."',
    
    // Services
    'services.title': '우리의 서비스',
    'services.space.title': '조경 디자인',
    'services.space.desc1': '원예 전문성과 세심한 디자인으로,',
    'services.space.desc2': '실내외 공간을 더욱 풍성한 녹음으로 채워드립니다.',
    'services.space.desc3': '식물 큐레이션부터 완성도 높은 가든 조성까지,',
    'services.space.desc4': '자연스러움과 지속가능성을 통해 살아 숨 쉬는 공간을 만들어갑니다.',
    'services.flowers.title': '꽃과 식물',
    'services.flowers.desc1': '계절마다 피어나는 꽃부터 정성껏 키운 개성 있는 식물들까지,',
    'services.flowers.desc2': '태국 야생화는 집, 카페, 야외 공간에 맞춘 맞춤형 식물 스타일링을 제공합니다.',
    'services.flowers.desc3': '전문 원예 지식과 건강한 식물 관리로, 아름답고 지속가능한 녹색 공간을 만들어드립니다.',
    'services.events.title': '이벤트 & 사회 교육',
    'services.events.desc1': '자연은 우리의 자신감과 창의력을 자라게 합니다.',
    'services.events.desc2': '학교 프로그램, 지역 워크숍 등 다양한 활동을 통해 식물과 함께 배우고 만드는 즐거움을 더 많은 사람들에게 전합니다.',
    'services.events.desc3': '자연 속에서, 사람과 사람 사이에서 가까워지는 경험을 디자인합니다.',
    
    // About
    'about.title': '태국 야생화를 꽃피우는 wayne입니다',
    'about.greeting': '안녕하세요.',
    'about.intro1': 'Wayne이 운영하는,',
    'about.intro2': '태국 야생화는 청주를 기반으로 활동하는 플로럴 & 가든 디자인 스튜디오입니다.',
    'about.service1': '청주 및 인근 지역 전역 서비스 | 언제든지 화원 방문 가능',
    'about.service2': '저희 디자인은 자연이 주는 진정한 감동에서 영감을 받습니다.',
    'about.service3': '야생화의 생기와 다양한 녹음을 사랑하고, 때로는 차분하게, 때로는 밝고 즐거운 색감으로 공간과 일상에 자연의 아름다움을 더합니다.',
    'about.team.title': '우리 팀',
    'about.team.desc': '우리는 함께 심고, 함께 웃고, 함께 자랍니다. 식물도, 사람도, 꽁떡이도 모두 팀이에요. 오늘 만든 초록의 순간이 내일도 계속될 수 있게',
    'about.stats.grown': '온실에서 직접 키우고 관리',
    'about.stats.available': '연중 이용 가능한 꽃과 식물',  
    'about.stats.styled': '자연으로 스타일링한 가든과 인테리어',
    'about.stats.return': '우리의 서비스와 마음을 사랑해서 재방문',
    'about.philosophy.title': '우리의 철학',
    'about.philosophy.desc1': '자연은 누구에게나 편안한 쉼터가 되어야 합니다.',
    'about.philosophy.desc3': '우리가 사랑으로 키운 식물들이 당신의 일상속에 온기를 더했으면 합니다.',
    'about.philosophy.desc4': '식물이 자라고, 사람이 미소 짓는 곳. 그 작은 변화들이 일상에 마법 같은 순간을 만듭니다.',
    
    // Stories
    'stories.title': '태국의 스토리',
    'stories.story1.title': '가든 프라이버시를 위한 남천 식재',
    'stories.story1.type': '디자인 타입: 네츄럴',
    'stories.story1.services': '서비스: 식재 / 프라이버시 가든',
    'stories.story2.title': '유치원 가든 베드 & 가지치기',
    'stories.story2.type': '디자인 타입: 유지보수 & 개선',
    'stories.story2.services': '서비스: 가지치기 / 가든 베드 관리',
    'stories.story3.title': '남천 프라이버시 스크린 설치',
    'stories.story3.type': '디자인 타입: 프라이버시 스크린',
    'stories.story3.services': '서비스: 배송 & 식재 지원',
    'stories.story4.title': '가든 프라이버시 스크리닝 & 리뉴얼',
    'stories.story4.type': '디자인 타입: 프라이버시 & 리뉴얼',
    'stories.story4.services': '서비스: 정리 / 맞춤 플랜터 / 식재',
    'stories.story5.title': '카페 조경을 위한 팜파스 그래스 렌탈',
    'stories.story5.type': '디자인 타입: 계절적 특징',
    'stories.story5.services': '서비스: 식물 렌탈 / 스타일링',
    'stories.story6.title': '프라이버시 & 가든 매력을 위한 라거스트로미아 식재',
    'stories.story6.type': '디자인 타입: 프라이버시 & 컬러',
    'stories.story6.services': '서비스: 배송 / 식재',
    'stories.story7.title': '블루 애로우 — 우아한 프라이버시 & 액센트 식재',
    'stories.story7.type': '디자인 타입: 프라이버시 & 액센트',
    'stories.story7.services': '서비스: 배송 / 식재 지원',
    'stories.story8.title': '크레이프 머틀 컬렉션 — 모든 가든을 위한 생생한 컬러',
    'stories.story8.type': '디자인 타입: 계절적 컬러',
    'stories.story8.services': '서비스: 배송 / 식재 지원',
    'stories.story9.title': '주거용 프라이버시 & 공간 효율성을 위한 블루 애로우 헤지',
    'stories.story9.type': '디자인 타입: 프라이버시 & 공간 효율성',
    'stories.story9.services': '서비스: 식재',
    'stories.story10.title': '현장 식물 화분 분갈이 & 케어 서비스',
    'stories.story10.type': '디자인 타입: 식물 케어 서비스',
    'stories.story10.services': '서비스: 현장 화분 분갈이 / 유지보수',
    'stories.story11.title': '크레이프 머틀 — 대담한 여름 스테이트먼트 트리',
    'stories.story11.type': '프로젝트: 더 시크릿 가든 2024 서비스: 플랜터 디자인',
    'stories.story11.services': '프로젝트 타입: 자연스러운',
    'stories.story12.title': '서울 카페 조경을 위한 블루 애로우 배송',
    'stories.story12.type': '디자인 타입: 카페 입구 액센트',
    'stories.story12.services': '서비스: 배송',
    'stories.story13.title': '남천 — 가을 매력이 있는 사계절 인기 식물',
    'stories.story13.type': '디자인 타입: 계절적 컬러',
    'stories.story13.services': '서비스: 배송 / 식재 지원',
    'stories.story14.title': '얼룩버들 — 봄부터 가을까지의 계절적 아름다움',
    'stories.story14.type': '디자인 타입: 계절적 전환',
    'stories.story14.services': '서비스: 배송 / 식재 지원',
    'stories.story15.title': '봄 구근 컬렉션 — 튤립 & 수선화',
    'stories.story15.type': '디자인 타입: 봄 구근 개화',
    'stories.story15.services': '서비스: 배송 / 매장 픽업',
    'stories.story16.title': '화분 분갈이 서비스 — 세뮤퍼비붐과 함께하는 친근한 시작',
    'stories.story16.type': '디자인 타입: 고객 케어',
    'stories.story16.services': '서비스: 매장 화분 분갈이 / 식물 가이드',
    
    // Contacts
    'contacts.title': '문의하기',
    'contacts.subtitle1': '궁금한 점이나 꿈꾸는 프로젝트가 있으신가요?',
    'contacts.subtitle2': '언제든 편하게 연락 주시면 정성껏 안내해드리겠습니다.',
    'contacts.form.name': '이름',
    'contacts.form.email': '전화번호 또는 이메일',
    'contacts.form.message': '메시지',
    'contacts.form.send': '보내기',
    
    // Footer
    'footer.instagram': 'Follow Our Instagram',
    'footer.location': '충북 청주시 청원구 북이면 학암옥수길 251',
    'footer.phone': 'Tel: 0507-1480-8274',
    'footer.email': 'design.by.kwon@gmail.com',
    'footer.about': 'About',
    'footer.work': 'Work',
    'footer.stories': 'Stories',
    'footer.contacts': 'Contacts',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
