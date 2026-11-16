import logo from '../assets/logo.webp';
import product1 from '../assets/1.webp';
import product2 from '../assets/2.webp';
import product3 from '../assets/3.webp';
import product4 from '../assets/4.webp';
import product5 from '../assets/5.webp';
import product6 from '../assets/prestiege.webp';
import product7 from '../assets/coconut.webp';
import product8 from '../assets/beanut_butter_high_protien.webp';
import product9 from '../assets/beanut_butter.webp';
import chocoDarkHazel  from '../assets/choco-dark-hazel.jpeg';
import chocoDarkAlmond from '../assets/choco-dark-almond.jpeg';
import chocoDarkPlain  from '../assets/choco-dark-plain.jpeg';
import chocoMilkHazel  from '../assets/choco-milk-hazel.jpeg';
import chocoMilkAlmond from '../assets/choco-milk-almond.jpeg';
import chocoMilkPlain  from '../assets/choco-milk-plain.jpeg';
import barDarkAlmond from '../assets/bar-dark-almond.webp';
import barDarkHazel from '../assets/bar-dark-hazel.webp';
import barDarkPlain from '../assets/bar-dark-plain.webp';
import barMilkAlmond from '../assets/bar-milk-almond.webp';
import barMilkHazel from '../assets/bar-milk-hazel.webp';
import barMilkPlain from '../assets/bar-milk-plain.webp';

export const productImages = [product4, product1, product2, product3, product6, product7, product5, product8, product9];

// Hero carousel: no halawa spread photos yet — the logo is a placeholder.
// Add the product photos to src/assets and list them here.
export const heroImages = [logo];

export const heroImageLabels = ['Healthy Halawa Spread'];

export const spreadFlavors = [
  { id: 'halawaPlain',     label: 'حلاوة سبريد سادة',        shortLabel: 'سادة',        emoji: '🍯' },
  { id: 'halawaChocolate', label: 'حلاوة سبريد بالشيكولاتة', shortLabel: 'بالشيكولاتة', emoji: '🍫' },
  { id: 'halawaPistachio', label: 'حلاوة سبريد بالفستق',     shortLabel: 'بالفستق',     emoji: '🟢' },
  { id: 'halawaHazel',     label: 'حلاوة سبريد بالبندق',     shortLabel: 'بالبندق',     emoji: '🌰' },
  { id: 'halawaAlmond',    label: 'حلاوة سبريد باللوز',      shortLabel: 'باللوز',      emoji: '🥜' },
  // «مربى» offers (dashboard → نوع العرض: مربى)
  { id: 'jamStrawberry',   label: 'مربى فراولة',             shortLabel: 'فراولة',      emoji: '🍓' },
  // «سبريد» offers (dashboard → نوع العرض: سبريد) — same jars and photos as the spread page
  { id: 'kids',     label: 'سبريد شيكولاتة أطفال',   shortLabel: 'أطفال',   emoji: '🧒', weight: '375 جرام', image: product4 },
  { id: 'original', label: 'سبريد شيكولاتة أوجينال', shortLabel: 'أوجينال', emoji: '🍫', weight: '375 جرام', image: product1 },
  { id: 'protein',  label: 'سبريد شيكولاتة بروتين',  shortLabel: 'بروتين',  emoji: '💪', weight: '375 جرام', image: product2 },
  { id: 'vegan',    label: 'سبريد شيكولاتة فيجن',    shortLabel: 'فيجن',    emoji: '🌱', weight: '375 جرام', image: product3 },
  { id: 'prestige', label: 'سبريد شيكولاتة بريستيج', shortLabel: 'بريستيج', emoji: '👑', weight: '375 جرام', badge: '(بندق أكتر)', image: product6 },
];

export const chocoBarFlavors = [
  { id: 'darkHazel',  label: 'شيكولاتة بار دارك بالبندق 40 جرام',  shortLabel: 'دارك بالبندق',  emoji: '🍫', weight: '40 جرام', image: chocoDarkHazel },
  { id: 'darkAlmond', label: 'شيكولاتة بار دارك باللوز 40 جرام',   shortLabel: 'دارك باللوز',   emoji: '🍫', weight: '40 جرام', image: chocoDarkAlmond },
  { id: 'darkPlain',  label: 'شيكولاتة بار دارك سادة 40 جرام',     shortLabel: 'دارك سادة',     emoji: '🍫', weight: '40 جرام', image: chocoDarkPlain },
  { id: 'milkHazel',  label: 'شيكولاتة بار ميلك بالبندق 40 جرام',  shortLabel: 'ميلك بالبندق',  emoji: '🍫', weight: '40 جرام', image: chocoMilkHazel },
  { id: 'milkAlmond', label: 'شيكولاتة بار ميلك باللوز 40 جرام',   shortLabel: 'ميلك باللوز',   emoji: '🍫', weight: '40 جرام', image: chocoMilkAlmond },
  { id: 'milkPlain',  label: 'شيكولاتة بار ميلك سادة 40 جرام',     shortLabel: 'ميلك سادة',     emoji: '🍫', weight: '40 جرام', image: chocoMilkPlain },
];

export const colaFlavors = [
  { id: 'cola',  label: 'كولا 350 مل',        shortLabel: 'كولا',        emoji: '🥤', volume: '350 مل' },
  { id: 'lemon', label: 'ليمون نعناع 350 مل', shortLabel: 'ليمون نعناع', emoji: '🍋', volume: '350 مل' },
];

export const egyptGovs = ['القاهرة', 'الجيزة', 'الإسكندرية', 'طنطا', 'المنصورة', 'السويس', 'دمياط'];

export const landingData = {
  brand: {
    logo,
    name: 'Healthy & Tasty',
    tagline: 'Healthy food for all people',
  },
  nav: [
    { label: 'المميزات', href: '#benefits' },
    { label: 'العروض',   href: '#offers'   },
    { label: 'اطلب الآن', href: '#offers'  },
  ],
  hero: {
    eyebrow: 'Healthy Halawa Spread 🍯',
    title: 'حلاوة طحينية سبريد... بطريقة تناسب حياتك الصحية',
    subtitle:
      'حلاوة طحينية قابلة للدهن في برطمان، من غير سكر مضاف، مناسبة للدايت والكيتو ومرضى السكر.',
    primaryCta: 'اطلب دلوقتي',
    secondaryCta: 'شوف العروض',
    images: heroImages,
    labels: heroImageLabels,
    stats: [
      { value: '0%', label: 'سكر مضاف' },
      { value: 'Keto', label: 'مناسبة للدايت' },
      { value: 'Stevia', label: 'محلاة بالاستيفيا' },
    ],
  },
  benefits: [
    'مناسبة للدايت والكيتو',
    'مناسبة لمرضى السكر',
    'محلاة بالاستيفيا',
    'بدون سكر مضاف',
    'غنية بالطحينة',
    'تتدهن على العيش والتوست',
  ],
  audience: {
    title: 'مناسبة لمين؟',
    description: 'Healthy Halawa Spread حلو لأي روتين صحي، من غير حرمان.',
    items: [
      { label: 'الرياضيين',                  icon: '🏋️' },
      { label: 'مرضى السكر',                 icon: '🩺' },
      { label: 'متبعي الكيتو دايت',           icon: '🥑' },
      { label: 'محبي الحلاوة',                icon: '🍯' },
    ],
  },
  product: {
    title: 'طعم الحلاوة اللي بتحبه من غير إحساس بالذنب',
    description: 'حلاوة طحينية سبريد بنكهات مختلفة: سادة، بالشيكولاتة، بالفستق، بالبندق وباللوز.',
    gallery: [
      { title: 'سادة', note: 'طعم الحلاوة الأصلي' },
      { title: 'بالشيكولاتة', note: 'حلاوة وشيكولاتة مع بعض' },
      { title: 'بالفستق', note: 'قطع فستق' },
      { title: 'بالمكسرات', note: 'بندق ولوز' },
    ],
  },
  offersIntro: {
    eyebrow: 'اختار العرض المناسب ليك 👇',
    title: 'الحق العروض قبل ما تخلص',
    description: 'كل العروض شاملة الدفع عند الاستلام 💳',
  },
  // Fallback only: the live offers come from the «الحلاوة سبريد» tab in the dashboard.
  offers: [
    { id: 'four-bars', title: 'عرض 4 حلاوة سبريد', amount: '4 برطمانات Healthy Halawa Spread — اختار النكهات اللي تحبها', description: '', price: 140, originalPrice: 160, saving: 20, unitsPerPack: 4, maxFlavors: 9, badge: '🍯 جرّب كل النكهات', accent: '#C2410C', note: '' },
    { id: 'eight-bars', title: 'عرض 8 حلاوة سبريد', amount: '8 برطمانات Healthy Halawa Spread — وزّعهم على النكهات براحتك', description: '', price: 260, originalPrice: 320, saving: 60, unitsPerPack: 8, maxFlavors: 9, badge: '🔥 الأكثر طلبًا', accent: '#B45309', note: '' },
    { id: 'twelve-bars', title: 'عرض 12 حلاوة سبريد', amount: '12 برطمان Healthy Halawa Spread — أوفر عرض للعيلة', description: '', price: 370, originalPrice: 480, saving: 110, unitsPerPack: 12, maxFlavors: 9, badge: '⭐ أكبر توفير', accent: '#92400E', note: '' },
  ],
  loveReasons: {
    eyebrow: 'ليه العملاء بيحبوا Healthy Halawa Spread؟',
    title: 'لأنها بتديك طعم الحلاوة اللي بتحبه بشكل أخف',
    items: [
      { label: 'طعم حلو من غير إحساس بالذنب', icon: '😍' },
      { label: 'سهلة الدهن في الفطار والسناك',  icon: '🍞' },
      { label: 'نكهات كتير تختار منها',       icon: '🍯' },
      { label: 'بدون سكر مضاف',               icon: '✅' },
    ],
  },
  form: {
    title: 'بياناتك',
    subtitle: 'أدخل بياناتك وهنكلمك لتأكيد الطلب',
    submitLabel: 'تأكيد الطلب',
    successMessage: 'تم تسجيل طلبك! سيتم التواصل معاك في أقرب وقت لتأكيد الطلب.',
    validationMessage: 'من فضلك املأ كل الحقول المطلوبة بشكل صحيح.',
  },
  footer: {
    note: 'Healthy Halawa Spread — حلاوة طحينية صحية قابلة للدهن بدون سكر مضاف.',
  },
};

export const SHIPPING_FEE = 0;

export const formatPrice = (amount) => `${amount} جنيه`;
