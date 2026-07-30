export const site = {
  domain: 'QingshuiGeothermal.com',
  url: 'https://qingshuigeothermal.com',
  title: '清水地熱公園旅遊指南',
  shortTitle: '清水地熱',
  description:
    '清水地熱公園完整旅遊指南：最新開放時間、地熱煮食、溫泉蛋計時、停車交通、足湯、泡湯與親子安全一次掌握。',
  phone: '03-989-4500',
  address: '宜蘭縣大同鄉三星路八段501巷139號',
  coordinates: {
    lat: 24.6118089,
    lng: 121.6365653,
  },
  lastVerified: '2026-07-29',
  ga4: 'G-HXM22WWPKP',
};

export const navigation = [
  { label: '行前資訊', href: '#quick-info' },
  { label: '煮食攻略', href: '#cooking' },
  { label: '煮食計時器', href: '#timer' },
  { label: '交通停車', href: '#transport' },
  { label: '常見問題', href: '#faq' },
];

export const quickFacts = [
  { icon: 'thermometer', label: '地熱泉溫', value: '約 95°C', note: '高溫區請保持距離' },
  { icon: 'ticket', label: '入園門票', value: '免費', note: '食材與部分設施另計' },
  { icon: 'clock', label: '建議停留', value: '2–3 小時', note: '含煮食、用餐與泡腳' },
  { icon: 'calendar', label: '一般時段', value: '09:00–17:00', note: '特殊日期以現場公告為準' },
];

export const cookingSteps = [
  {
    number: '01',
    title: '準備食材',
    text: '可在園區選購，也可自備適合水煮、容易熟透的食材。',
  },
  {
    number: '02',
    title: '租借竹簍',
    text: '依現場規定租借竹簍並記下編號，不使用塑膠籃具。',
  },
  {
    number: '03',
    title: '分類入簍',
    text: '不同熟成時間分開擺放，包裝食材確認耐熱且密封。',
  },
  {
    number: '04',
    title: '放入地熱池',
    text: '由成人操作竹簍，避免接觸高溫泉水、蒸氣與濕滑區域。',
  },
  {
    number: '05',
    title: '計時享用',
    text: '使用本站計時器輔助，取出後先瀝水、降溫，再慢慢享用。',
  },
];

export const foods = [
  { id: 'egg', name: '雞蛋', minutes: 12, label: '人氣首選', hint: '想吃全熟可視蛋量與池溫增加時間。', emoji: '🥚' },
  { id: 'corn', name: '玉米', minutes: 20, label: '親子推薦', hint: '較粗的玉米可切段，受熱更均勻。', emoji: '🌽' },
  { id: 'bamboo', name: '茭白筍', minutes: 18, label: '宜蘭風味', hint: '保留外殼烹煮，口感通常更清甜。', emoji: '🎋' },
  { id: 'sweet-potato', name: '地瓜', minutes: 30, label: '飽足感高', hint: '大小差異影響明顯，建議選小條。', emoji: '🍠' },
  { id: 'taro', name: '芋頭', minutes: 35, label: '需要耐心', hint: '切成適當大小，食用前確認中心熟透。', emoji: '🟣' },
  { id: 'peanut', name: '花生', minutes: 30, label: '分享小食', hint: '使用耐熱袋或依園區現場包裝方式烹煮。', emoji: '🥜' },
];

export const experiences = [
  {
    kicker: 'FREE FOOTBATH',
    title: '免費足湯',
    text: '等待食材熟成時，最適合到降溫後的足浴區休息。建議自備小毛巾，泡腳前先測試水溫。',
    image: '/images/geothermal-pool.webp',
    alt: '清水地熱公園山谷與地熱水池實景',
  },
  {
    kicker: 'HOT SPRING',
    title: '公共泡湯',
    text: '園區另有收費泡湯設施，通常需準備泳衣、泳帽與毛巾；票價與開放狀況以當日現場為準。',
    image: '/images/geothermal-zone.webp',
    alt: '清水地熱公園地熱設施與周邊山林',
  },
  {
    kicker: 'GEOTHERMAL STORY',
    title: '地熱教育',
    text: '從高溫泉水到地熱發電，清水地熱不只可以煮蛋，也是一處理解臺灣再生能源的自然教室。',
    image: '/images/geothermal-steam.webp',
    alt: '清水地熱區冒出蒸氣的實景',
  },
];

export const gallery = [
  { src: '/images/geothermal-cooking.webp', alt: '竹簍放入清水地熱煮食池的近景', caption: '地熱煮食是園區最具代表性的體驗。' },
  { src: '/images/geothermal-basket.webp', alt: '遊客在清水地熱公園使用竹簍煮食', caption: '假日上午早點抵達，操作與找座位都更從容。' },
  { src: '/images/geothermal-pool.webp', alt: '清水地熱公園地熱池與山林景觀', caption: '清水溪谷把溫泉蒸氣與山林景觀留在同一個畫面。' },
  { src: '/images/geothermal-steam.webp', alt: '清水地熱區白色蒸氣與溪谷', caption: '天氣較涼時，白色蒸氣的層次更明顯。' },
  { src: '/images/geothermal-zone.webp', alt: '清水地熱公園地熱冷卻設施', caption: '園區可看見地熱利用與降溫設施。' },
];

export const routes = [
  { time: '08:00', title: '清水地熱公園', meta: '煮食、早餐、泡腳｜約 2.5 小時' },
  { time: '11:00', title: '長埤湖', meta: '環湖散步與山景｜約 1 小時' },
  { time: '12:30', title: '三星市區', meta: '午餐與三星蔥料理｜約 1.5 小時' },
  { time: '14:30', title: '天送埤車站', meta: '老車站、街區散步｜約 45 分鐘' },
  { time: '16:00', title: '返回羅東', meta: '傍晚可接羅東夜市' },
];

export const faqs = [
  {
    question: '清水地熱公園需要門票嗎？',
    answer: '公園目前免費入園；停車、食材、竹簍租借與部分泡湯體驗可能另外收費，實際金額以園區當日公告為準。',
  },
  {
    question: '2026 年暑假幾點開放？',
    answer: '宜蘭縣政府公告 2026 年 7 月 20 日至 8 月 31 日調整為 08:00–18:00；一般時段通常為 09:00–17:00。颱風、豪雨或維護期間可能臨時休園。',
  },
  {
    question: '可以自己帶雞蛋、玉米嗎？',
    answer: '通常可以自備適合水煮的食材，但容器、包裝與可否下池仍須遵守現場規定。容易散開或不易熟透的食材不建議攜帶。',
  },
  {
    question: '雞蛋到底要煮幾分鐘？',
    answer: '本站以 12 分鐘作為全熟參考值；實際會受池溫、蛋量與尺寸影響，請優先遵循現場標示，兒童食用建議確認完全熟透。',
  },
  {
    question: '一定要租竹簍嗎？',
    answer: '地熱池需使用符合園區規範的煮食器具，不應使用塑膠網或不耐高溫容器。租借方式、押金與消費門檻可能調整，請看當日櫃檯資訊。',
  },
  {
    question: '沒有開車也能去嗎？',
    answer: '可查詢羅東方向的宜蘭縣公車綠 17，但班次有限、部分班次可能需預約。規劃時務必先確認去回程時刻，尤其是回程末班車。',
  },
  {
    question: '適合帶幼兒或長輩嗎？',
    answer: '整體適合親子與長輩，但高溫煮食區必須由成人操作。建議平日上午抵達，避開人潮，並留意濕滑地面、曝曬與泡腳時間。',
  },
  {
    question: '下雨天還適合前往嗎？',
    answer: '小雨時蒸氣景觀別有氣氛，部分區域也有遮蔽；但山區道路與園區地面可能濕滑。豪雨、颱風或溪水暴漲風險期間不要前往。',
  },
];
