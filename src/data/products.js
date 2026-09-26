export const products = [
  {
    id: 'khapli-wheat-atta',
    name: 'Khapli Wheat Atta (Emmer Flour)',
    category: 'attas',
    categoryName: 'Stone-Ground Attas',
    subheading: 'Ancient low-GI heirloom grain milled on slow-speed stone chakki',
    price: 340,
    originalPrice: 380,
    rating: 4.9,
    reviewsCount: 142,
    image: '/images/khapli-atta.jpg',
    secondaryImage: '/images/attas-bowls.jpg',
    badge: 'Bestseller',
    organicCertified: true,
    description: 'Our Khapli (Emmer) wheat is an ancient heirloom grain cultivated naturally by heritage farmers in Maharashtra and Karnataka. Stone-ground slowly below 40°C in traditional stone chakkis to retain all bran, germ, and dietary fiber. Exceptionally easy to digest with a gentle nutty aroma.',
    benefits: [
      'Low Glycemic Index (GI 45) - Ideal for diabetic-friendly rotis',
      'Ancient grain with weak gluten bonds, gentle on the gut',
      '100% Whole Grain with high natural protein (14g) & dietary fiber',
      'Milled fresh on order with zero preservatives or bleaching agents'
    ],
    sizes: [
      { label: '1 kg', price: 180 },
      { label: '2 kg', price: 340, popular: true },
      { label: '5 kg', price: 820 }
    ],
    origin: 'Satara, Maharashtra',
    millingType: 'Traditional Natural Stone Chakki (<40°C)',
    nutrition: {
      servingSize: '100g',
      calories: '345 kcal',
      protein: '14.2 g',
      carbs: '68.0 g',
      fiber: '11.5 g',
      fat: '1.8 g'
    },
    ingredients: '100% Single-Origin Heirloom Khapli (Emmer) Wheat'
  },
  {
    id: 'black-wheat-atta',
    name: 'Black Wheat Atta (Anthocyanin Rich)',
    category: 'attas',
    categoryName: 'Stone-Ground Attas',
    subheading: 'Natural bio-fortified dark grain with 3x antioxidant power',
    price: 380,
    originalPrice: 420,
    rating: 4.8,
    reviewsCount: 96,
    image: '/images/blackwheat-atta.jpg',
    secondaryImage: '/images/attas-bowls.jpg',
    badge: 'Superfood',
    organicCertified: true,
    description: 'Black Wheat gets its natural deep purple-black hue from high concentrations of anthocyanins—the same potent antioxidants found in blueberries and blackberries. Rich in essential minerals like zinc, magnesium, and dietary iron.',
    benefits: [
      'Rich in Anthocyanins (140 ppm) - powerful cellular antioxidants',
      'Helps support heart health and healthy blood sugar regulation',
      'Natural stone-ground with intact germ and aleurone layer',
      'Earthy, wholesome flavor that makes rustic, satisfying rotis'
    ],
    sizes: [
      { label: '1 kg', price: 200 },
      { label: '2 kg', price: 380, popular: true },
      { label: '5 kg', price: 900 }
    ],
    origin: 'Malwa Plateau, Madhya Pradesh',
    millingType: 'Slow Cold Chakki Milling',
    nutrition: {
      servingSize: '100g',
      calories: '340 kcal',
      protein: '13.8 g',
      carbs: '67.2 g',
      fiber: '12.0 g',
      fat: '2.1 g'
    },
    ingredients: '100% Pure Organically Cultivated Black Wheat'
  },
  {
    id: 'multigrain-atta',
    name: 'Summer Special Multigrain Atta',
    category: 'attas',
    categoryName: 'Stone-Ground Attas',
    subheading: 'Cooling Ayurvedic 7-grain blend with Barley, Amaranth & Oats',
    price: 320,
    originalPrice: 350,
    rating: 4.9,
    reviewsCount: 118,
    image: '/images/multigrain-atta.jpg',
    secondaryImage: '/images/chakki-banner.jpg',
    badge: 'Seasonal Blend',
    organicCertified: true,
    description: 'Formulated following traditional Ayurvedic principles for light, nourishing summer digestion. Combines cooling whole Barley (Jau), protein-packed Amaranth (Rajgira), Rolled Oats, Gram, and Sharbati Wheat.',
    benefits: [
      'Naturally cooling blend designed for warm climates and active living',
      'High soluble fiber from whole barley & oats for gut wellness',
      'Delivers sustained energy without post-meal lethargy',
      'Slow-ground together for perfect consistency and soft chapatis'
    ],
    sizes: [
      { label: '1 kg', price: 170 },
      { label: '2 kg', price: 320, popular: true },
      { label: '5 kg', price: 760 }
    ],
    origin: 'Rajasthan & Punjab Heartland',
    millingType: 'Slow Stone Ground',
    nutrition: {
      servingSize: '100g',
      calories: '350 kcal',
      protein: '13.5 g',
      carbs: '65.4 g',
      fiber: '13.1 g',
      fat: '2.4 g'
    },
    ingredients: 'Sharbati Wheat, Barley (Jau), Amaranth (Rajgira), Oats, Roasted Chana'
  },
  {
    id: 'salem-turmeric-powder',
    name: 'Salem Turmeric Powder (Haldi)',
    category: 'spices',
    categoryName: 'Pure Spices',
    subheading: 'Sun-dried high curcumin (>4.5%) heirloom Salem rhizomes',
    price: 190,
    originalPrice: 220,
    rating: 5.0,
    reviewsCount: 230,
    image: '/images/turmeric-jar.jpg',
    secondaryImage: '/images/spices-trio.jpg',
    badge: 'Curcumin 4.5%+',
    organicCertified: true,
    description: 'Harvested from fertile riverbeds of Salem, Tamil Nadu, our heirloom turmeric rhizomes are naturally sun-dried and slowly ground in stone mills to preserve their natural volatile oils. Never subjected to harsh industrial heat or color enhancement.',
    benefits: [
      'Lab-certified Curcumin content above 4.5% for maximum potency',
      'Unadulterated: 0% Lead Chromate, zero starch, zero added coloring',
      'Naturally high essential volatile oils for deep aroma and rich golden hue',
      'Packed in UV-protected glass jar with airtight cork seal'
    ],
    sizes: [
      { label: '200g Jar', price: 190, popular: true },
      { label: '500g Eco Pouch', price: 420 },
      { label: '1 kg Value Pack', price: 780 }
    ],
    origin: 'Salem District, Tamil Nadu',
    millingType: 'Cryogenic & Slow Stone Pounding',
    nutrition: {
      servingSize: '10g',
      calories: '35 kcal',
      curcumin: '4.7%',
      protein: '0.8 g',
      carbs: '6.5 g',
      fat: '0.3 g'
    },
    ingredients: '100% Pure Single-Origin Salem Turmeric'
  },
  {
    id: 'mathania-chilli-powder',
    name: 'Mathania Red Chilli Powder (Lal Mirch)',
    category: 'spices',
    categoryName: 'Pure Spices',
    subheading: 'Geographical GI-style Marwar heirloom chilli with rich warmth and aroma',
    price: 220,
    originalPrice: 250,
    rating: 4.9,
    reviewsCount: 165,
    image: '/images/chilli-jar.jpg',
    secondaryImage: '/images/spices-bowls.jpg',
    badge: 'Marwar Heritage',
    organicCertified: true,
    description: 'Grown exclusively in the sun-drenched micro-climate of Mathania, Jodhpur. Renowned for its radiant natural crimson red color, gentle smoky sweetness, and moderate balanced heat that enhances food without overpowering.',
    benefits: [
      'Famous Marwar variety known for exceptional flavor depth and vibrant red color',
      'Non-irradiated, stone-pounded with stems removed',
      'Natural capsaicin content with zero artificial dyes (Sudan dye free)',
      'Airtight glass jar with natural cork lid keeps moisture out'
    ],
    sizes: [
      { label: '200g Jar', price: 220, popular: true },
      { label: '500g Eco Pouch', price: 490 }
    ],
    origin: 'Mathania, Jodhpur, Rajasthan',
    millingType: 'Traditional Stone Pounding',
    nutrition: {
      servingSize: '10g',
      calories: '32 kcal',
      protein: '1.2 g',
      carbs: '5.4 g',
      fat: '0.9 g'
    },
    ingredients: '100% Sun-Dried Mathania Red Chillies'
  },
  {
    id: 'unpolished-cumin-seeds',
    name: 'Unpolished Whole Cumin (Jeera)',
    category: 'spices',
    categoryName: 'Pure Spices',
    subheading: 'Aromatic unwashed Gujarat cumin rich in natural cuminaldehyde oil',
    price: 210,
    originalPrice: 240,
    rating: 4.8,
    reviewsCount: 88,
    image: '/images/cumin-jar.jpg',
    secondaryImage: '/images/spices-trio.jpg',
    badge: 'Unpolished',
    organicCertified: true,
    description: 'Whole organic cumin seeds harvested from Saurashtra. Unlike commercial cumin that is chemically polished or washed with oil for artificial shine, our seeds retain their natural earthy aroma and volatile oils intact.',
    benefits: [
      'Unpolished and unadulterated with 100% natural essential oils',
      'Distinctive crackling aroma upon tempering (tadka)',
      'Rich in thymol for traditional Ayurvedic digestive support',
      'Carefully triple-sieved and hand-sorted by farmer cooperatives'
    ],
    sizes: [
      { label: '200g Jar', price: 210, popular: true },
      { label: '500g Eco Pouch', price: 480 }
    ],
    origin: 'Unjha & Surendranagar, Gujarat',
    millingType: 'Sun-dried Whole Seed',
    nutrition: {
      servingSize: '10g',
      calories: '37 kcal',
      protein: '1.8 g',
      carbs: '4.4 g',
      fat: '2.2 g'
    },
    ingredients: '100% Pure Unpolished Whole Cumin Seeds'
  },
  {
    id: 'whole-coriander-seeds',
    name: 'Whole Organic Coriander (Dhania)',
    category: 'spices',
    categoryName: 'Pure Spices',
    subheading: 'Sweet citrusy round green coriander seeds from Kota, Rajasthan',
    price: 140,
    originalPrice: 170,
    rating: 4.9,
    reviewsCount: 74,
    image: '/images/coriander-jar.jpg',
    secondaryImage: '/images/spices-trio.jpg',
    badge: 'High Aroma',
    organicCertified: true,
    description: 'Known for its refreshing citrus notes and cooling digestive profile. Harvested at peak maturity in Kota, renowned for having the finest coriander harvests in the world.',
    benefits: [
      'Sweet, herbaceous floral aroma without bitterness',
      'Whole seed maintains freshness until crushed or roasted',
      'Naturally rich in dietary antioxidants and essential oils',
      'Triple machine cleaned and hand-sorted'
    ],
    sizes: [
      { label: '200g Jar', price: 140, popular: true },
      { label: '500g Eco Pouch', price: 310 }
    ],
    origin: 'Hadoti Region, Kota, Rajasthan',
    millingType: 'Whole Seed',
    nutrition: {
      servingSize: '10g',
      calories: '30 kcal',
      protein: '1.2 g',
      carbs: '5.5 g',
      fat: '1.8 g'
    },
    ingredients: '100% Whole Organic Coriander Seeds'
  },
  {
    id: 'alsi-oil-flaxseed',
    name: 'Alsi Oil (Flaxseed Oil)',
    category: 'oils',
    categoryName: 'Cold-Pressed Oils',
    subheading: 'Cold-extracted golden flaxseed oil rich in plant Omega-3 ALA (54%)',
    price: 390,
    originalPrice: 440,
    rating: 4.9,
    reviewsCount: 178,
    image: '/images/flaxseed-oil.jpg',
    secondaryImage: '/images/oils-banner.jpg',
    badge: 'Rich in Omega-3 (ALA)',
    batchId: 'MP-ALS-2024-08',
    organicCertified: true,
    description: 'Pure, unrefined, single-pressed flaxseed oil extracted using traditional wooden Lakdi Ghani below 38°C without friction heat. Naturally abundant in Alpha-Linolenic Acid (Omega-3 ALA > 54%), supporting cardiovascular wellness, joint flexibility, and digestive lubrication. Bottled in amber UV-protective glass with natural cork seal.',
    benefits: [
      '54.2% Alpha-Linolenic Acid (Plant-Based Omega-3) per serving',
      'Cold-pressed in slow-speed wooden mortar (<38°C) preserving vital lignans',
      'Zero chemical solvents (0.00 ppm hexane) & zero heat refining',
      'Sediment-settled naturally through unbleached cotton cloth over 48 hours'
    ],
    sizes: [
      { label: '250 ml Trial', price: 210 },
      { label: '500 ml Bottle', price: 390, popular: true },
      { label: '1 Litre Pantry', price: 720 }
    ],
    origin: 'Malwa Plateau, Madhya Pradesh',
    millingType: 'Artisanal Wooden Lakdi Ghani (<38°C)',
    nutrition: {
      servingSize: '15ml (1 tbsp)',
      calories: '126 kcal',
      omega3Ala: '7.8 g (54%)',
      omega6: '2.1 g (15%)',
      omega9: '2.6 g (18%)',
      acidValue: '0.84 mg KOH/g',
      hexaneResidue: '0.00 ppm'
    },
    ingredients: '100% Single-Origin Cold-Pressed Golden Flaxseeds'
  },
  {
    id: 'kalonji-oil-black-seed',
    name: 'Kalonji Oil (Black Seed Oil)',
    category: 'oils',
    categoryName: 'Cold-Pressed Oils',
    subheading: 'Therapeutic unrefined black seed oil packed with bioactive thymoquinone',
    price: 480,
    originalPrice: 540,
    rating: 4.9,
    reviewsCount: 146,
    image: '/images/kalonji-oil.jpg',
    secondaryImage: '/images/oils-banner.jpg',
    badge: 'Therapeutic Immunity',
    batchId: 'RJ-KLN-2024-06',
    organicCertified: true,
    description: 'Revered in Ayurveda as a timeless healing nectar, our Kalonji (Nigella sativa) oil is extracted from native Rajasthan black cumin seeds using traditional wooden kolhus. Deep, dark, and intensely aromatic with high natural concentrations of thymoquinone for cellular immunity and respiratory vitality.',
    benefits: [
      'High Thymoquinone concentration (>1.2%) for robust immune defense',
      'Potent antioxidant and antimicrobial properties for gut and skin health',
      'First-press virgin extraction without artificial deodorization or diluents',
      'Apothecary-grade glass bottle with airtight cork stopper'
    ],
    sizes: [
      { label: '100 ml Trial', price: 260 },
      { label: '250 ml Bottle', price: 480, popular: true },
      { label: '500 ml Value', price: 890 }
    ],
    origin: 'Nagaur & Pali, Rajasthan',
    millingType: 'Traditional Wood Ghani (<38°C)',
    nutrition: {
      servingSize: '5ml (1 tsp)',
      calories: '42 kcal',
      thymoquinone: '1.24%',
      polyunsaturatedFat: '58%',
      monounsaturatedFat: '24%'
    },
    ingredients: '100% Pure Virgin Cold-Pressed Nigella Sativa (Kalonji) Seeds'
  },
  {
    id: 'sweet-almond-oil-badam',
    name: 'Sweet Almond Oil (Badam Rogan Oil)',
    category: 'oils',
    categoryName: 'Cold-Pressed Oils',
    subheading: '100% Pure edible sweet almond oil rich in natural Vitamin E & healthy fats',
    price: 620,
    originalPrice: 690,
    rating: 5.0,
    reviewsCount: 204,
    image: '/images/almond-oil.jpg',
    secondaryImage: '/images/cold-pressed-oils.jpg',
    badge: 'Rich in Vitamin E',
    batchId: 'KM-ALM-2024-09',
    organicCertified: true,
    description: 'Extracted from sweet edible Mamra and Gurbandi almonds in small artisanal batches. 100% food-grade pure, light golden in clarity with a delicate sweet nutty scent. Consumed with warm milk to sharpen memory and vitality, or applied topically for deeply nourished glowing skin and lustrous hair.',
    benefits: [
      'Extremely rich in natural D-Alpha Tocopherol (Active Vitamin E)',
      '100% Pure Edible Grade - Can be consumed internally or applied topically',
      'Zero mineral oils, parabens, synthetic perfumes, or chemical fillers',
      'Extracted by slow cold pressing of whole sweet almond kernels'
    ],
    sizes: [
      { label: '100 ml Glass', price: 290 },
      { label: '250 ml Bottle', price: 620, popular: true },
      { label: '500 ml Family', price: 1180 }
    ],
    origin: 'Kashmir Valley & Himachal Foothills',
    millingType: 'Gentle Wood Pressing (<35°C)',
    nutrition: {
      servingSize: '10ml',
      calories: '84 kcal',
      vitaminE: '4.8 mg (32% RDA)',
      mufa: '68%',
      pufa: '22%'
    },
    ingredients: '100% Pure Sweet Edible Almond Kernels (Prunus Dulcis)'
  },
  {
    id: 'lakdi-ghani-mustard-oil',
    name: 'Lakdi Ghani Wood-Pressed Mustard Oil (Sarson)',
    category: 'oils',
    categoryName: 'Cold-Pressed Oils',
    subheading: 'Pungent cold-pressed Kachi Ghani oil crushed in traditional wooden mortar',
    price: 295,
    originalPrice: 330,
    rating: 4.9,
    reviewsCount: 189,
    image: '/images/cold-pressed-oils.jpg',
    secondaryImage: '/images/process-ghani.jpg',
    badge: 'Wood Pressed',
    organicCertified: true,
    description: 'Extracted slowly in an artisanal wooden Kolhu/Ghani at temperatures below 35°C. No chemicals, solvents, or heat refining. Retains natural allyl isothiocyanate for that classic authentic North Indian punch and rich golden clarity.',
    benefits: [
      'Real cold-pressed without heating above 35°C',
      'Zero argemone, zero mineral oil adulteration, zero trans fats',
      'High smoke point ideal for traditional Indian curries and pickles',
      'Packed in eco-friendly glass bottles to prevent microplastic leaching'
    ],
    sizes: [
      { label: '500 ml Bottle', price: 160 },
      { label: '1 Litre Bottle', price: 295, popular: true },
      { label: '5 Litre Can', price: 1390 }
    ],
    origin: 'Bharatpur, Rajasthan',
    millingType: 'Traditional Lakdi Ghani (Wood-Mortar)',
    nutrition: {
      servingSize: '15ml',
      calories: '124 kcal',
      mufa: '60%',
      pufa: '21%',
      sfa: '7%',
      cholesterol: '0 mg'
    },
    ingredients: '100% First-Press Black Mustard Seeds'
  },
  {
    id: 'lakdi-ghani-groundnut-oil',
    name: 'Lakdi Ghani Wood-Pressed Groundnut Oil (Peanut)',
    category: 'oils',
    categoryName: 'Cold-Pressed Oils',
    subheading: 'Nutty, sweet aroma cold-pressed from native Saurashtra peanuts',
    price: 360,
    originalPrice: 395,
    rating: 4.8,
    reviewsCount: 112,
    image: '/images/cold-pressed-oils.jpg',
    secondaryImage: '/images/process-ghani.jpg',
    badge: 'Pure Wood Ghani',
    organicCertified: true,
    description: 'Crafted from bold, naturally sweet non-GMO peanuts sourced from Junagadh, Gujarat. Extracted using traditional Neem and Vaagai wood presses that keep the oil cool and nutrient-dense.',
    benefits: [
      'Rich in natural Vitamin E, resveratrol, and healthy monounsaturated fats',
      'Light golden clarity with natural sweet nutty fragrance',
      'Great for everyday sautéing, deep frying, and baking',
      'Sediment-settled naturally over 48 hours without chemical bleaching'
    ],
    sizes: [
      { label: '500 ml Bottle', price: 195 },
      { label: '1 Litre Bottle', price: 360, popular: true },
      { label: '5 Litre Can', price: 1690 }
    ],
    origin: 'Junagadh, Saurashtra, Gujarat',
    millingType: 'Wood Ghani Pressed',
    nutrition: {
      servingSize: '15ml',
      calories: '120 kcal',
      mufa: '52%',
      pufa: '32%',
      sfa: '16%',
      cholesterol: '0 mg'
    },
    ingredients: '100% Native Wood-Pressed Peanuts'
  }
];

export const categories = [
  {
    id: 'attas',
    name: 'Stone-Ground Attas',
    tagline: 'Milled slowly on natural stone chakkis under 40°C to preserve wheat germ & living nutrients.',
    banner: '/images/chakki-banner.jpg',
    accentColor: '#163422'
  },
  {
    id: 'spices',
    name: 'Pure Spices',
    tagline: 'Single-origin, unpolished whole spices and stone-pounded powders with zero artificial colors.',
    banner: '/images/spices-bowls.jpg',
    accentColor: '#974727'
  },
  {
    id: 'oils',
    name: 'Cold-Pressed Oils',
    tagline: 'Pure, unrefined single-pressed oils extracted using traditional wooden chakkis (Lakdi Ghani) below 38°C without friction heat.',
    banner: '/images/oils-banner.jpg',
    accentColor: '#402a00'
  }
];
