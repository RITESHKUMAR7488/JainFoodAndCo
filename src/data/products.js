// Client sheets, 2–3 October 2026, and explicit chat corrections.
// null prices are pending. Flour packs of 1 kg are user-authorized defaults.
export const categories = [
 {id:'attas',name:'Atta & Flours',tagline:'Wheat, millet and everyday flours for your kitchen.',banner:'/images/unbranded/khapli-wheat-atta.png',original:true},
 {id:'spices',name:'Spices & Masalas',tagline:'Whole spices, ground spices and familiar kitchen blends.',banner:'/images/spices-bowls.jpg',original:true},
 {id:'oils',name:'Oil & Ghee',tagline:'Cold-pressed oils and bilona ghee for your everyday kitchen.',banner:'/images/unbranded/lakdi-ghani-mustard-oil.png',original:true},
 {id:'ghee',name:'Ghee',tagline:'Bilona cow ghee and buffalo ghee.',banner:'/images/unbranded/bilona-cow-ghee.png',original:true},
 {id:'grains',name:'Grains & Pantry',tagline:'Rice, poha, daliya and pantry staples.'},
 {id:'pulses',name:'Pulses & Beans',tagline:'Chana, rajma, lentils and beans for everyday meals.'},
 {id:'seeds',name:'Seeds',tagline:'Pumpkin, sunflower, watermelon and chia seeds.'},
 {id:'sweeteners',name:'Honey & Sweeteners',tagline:'Honey, khand, gud and traditional sweeteners.'},
];
// id | product name | category | subgroup | size:price (blank = pending)
const catalog = `
mp-sharbati-atta|MP Super Sharbati Atta|attas|Wheat|5 kg:290
khapli-wheat-atta|Khapli Wheat Atta|attas|Wheat|1 kg:270
black-wheat-atta|Black Wheat Atta|attas|Wheat|1 kg:160
summer-multigrain-atta|Summer Multigrain Atta|attas|Multigrain|1 kg:120
jau-atta|Jau (Barley) Atta|attas|Millet & Other Flours|1 kg:85
jowar-atta|Jowar Atta|attas|Millet & Other Flours|1 kg:85
makka-atta|Makka Atta|attas|Millet & Other Flours|1 kg:75
bajra-atta|Bajra Atta|attas|Millet & Other Flours|1 kg:75
amaranth-atta|Amaranth Atta|attas|Millet & Other Flours|1 kg:320
oats-atta|Oats Atta|attas|Millet & Other Flours|1 kg:280
kangni-atta|Kangni Atta|attas|Millet & Other Flours|1 kg:210
kodra-atta|Kodra Atta|attas|Millet & Other Flours|1 kg:200
quinoa-atta|Quinoa Atta|attas|Millet & Other Flours|1 kg:260
ragi-atta|Ragi Atta|attas|Millet & Other Flours|1 kg:
singhara-atta|Singhara Atta|attas|Millet & Other Flours|1 kg:
kuttu-atta|Kuttu Atta|attas|Millet & Other Flours|1 kg:
chana-sattu|Chana Sattu|attas|Sattu & Besan|500 g:105
jau-sattu|Jau Sattu|attas|Sattu & Besan|
besan-fine|Besan (Bareek / Fine)|attas|Sattu & Besan|500 g:75,1 kg:145
besan-coarse|Besan (Mota / Coarse)|attas|Sattu & Besan|500 g:75
lakdi-ghani-mustard-oil|Yellow Mustard Oil (Pili Sarson)|oils|Mustard|1 L:270,2 L:540,5 L:1350
black-mustard-oil|Black Mustard Oil (Kali Sarson)|oils|Mustard|1 L:240,2 L:480,5 L:1200
coconut-oil|Coconut Oil|oils|Other Oils|200 ml:170,500 ml:390,900 ml:720
kalonji-oil-black-seed|Kalonji Oil|oils|Other Oils|200 ml:680
lakdi-ghani-groundnut-oil|Groundnut Oil|oils|Other Oils|900 ml:420
sesame-oil|Sesame Oil (Til)|oils|Other Oils|500 ml:270,900 ml:510
sweet-almond-oil|Almond Oil (Badam)|oils|Other Oils|200 ml:710,500 ml:1775
bilona-cow-ghee|Bilona Cow Ghee|ghee|Ghee|1 L:910
buffalo-ghee|Buffalo Ghee|ghee|Ghee|1 L:810
unpolished-whole-cumin|Jeera (Whole Cumin)|spices|Whole Spices|100 g:95,200 g:190
black-pepper-whole|Black Pepper (Whole)|spices|Whole Spices|50 g:100
white-pepper|White Pepper|spices|Whole Spices|50 g:85,100 g:155
mota-saunf|Saunf (Mota)|spices|Whole Spices|100 g:65
bareek-saunf|Saunf (Bareek)|spices|Whole Spices|100 g:60
whole-organic-coriander|Dhaniya Sabut (Whole Coriander)|spices|Whole Spices|200 g:80
rai|Rai|spices|Whole Spices|100 g:45
black-mustard-seeds|Black Mustard Seeds (Kali Sarson)|spices|Whole Spices|100 g:25
yellow-mustard-seeds|Yellow Mustard Seeds (Pili Sarson)|spices|Whole Spices|100 g:25
pipli|Pipli|spices|Whole Spices|50 g:80
tilkora|Tilkora|spices|Whole Spices|200 g:85
tejpatta|Tejpatta (Bay Leaves)|spices|Whole Spices|25 g:25
lal-mirch-sabut|Lal Mirch Sabut (Whole Red Chilli)|spices|Whole Spices|100 g:80
panchforan|Panchforan|spices|Whole Spices|100 g:100
methi-dana|Methi Dana|spices|Whole Spices|200 g:50
ajwain|Ajwain|spices|Whole Spices|100 g:60,200 g:110
kalonji-seeds|Kalonji Seeds|spices|Whole Spices|100 g:55
ground-masala-panchforan|Panchforan (Ground)|spices|Ground Spices & Masalas|100 g:75
dal-chini-whole|Dal Chini (Cinnamon)|spices|Whole Spices|100 g:135
badi-elaichi|Badi Elaichi (Black Cardamom)|spices|Whole Spices|50 g:145
small-elaichi|Small Elaichi (Green Cardamom)|spices|Whole Spices|
laung|Laung (Cloves)|spices|Whole Spices|50 g:80,100 g:150
javitri|Javitri (Mace)|spices|Whole Spices|25 g:110
star-phool|Star Phool (Star Anise)|spices|Whole Spices|25 g:120
khus-dana|Khus Dana|spices|Whole Spices|50 g:80
hing|Hing|spices|Ground Spices & Masalas|45 g:190
kasuri-methi|Kasuri Methi|spices|Whole Spices|25 g:25
garam-masala-powder|Garam Masala Powder|spices|Ground Spices & Masalas|100 g:135,200 g:260
salem-turmeric-powder|Haldi Powder (Turmeric)|spices|Ground Spices & Masalas|200 g:50,500 g:85
pink-salt|Pink Salt|spices|Seasonings|1 kg:170
red-chilli-powder|Mirch Kutti (Red Chilli)|spices|Ground Spices & Masalas|100 g:80,200 g:160
kashmiri-mirch|Kashmiri Mirch|spices|Ground Spices & Masalas|100 g:130
coriander-powder|Dhaniya Powder|spices|Ground Spices & Masalas|200 g:85,500 g:210
jeera-powder|Jeera Powder|spices|Ground Spices & Masalas|100 g:120
black-pepper-powder|Black Pepper Powder (Kali Mirch)|spices|Ground Spices & Masalas|100 g:165
kala-namak|Kala Namak (Black Salt)|spices|Seasonings|200 g:30
sonth-powder|Sonth Powder|spices|Ground Spices & Masalas|100 g:80
methi-powder|Methi Powder|spices|Ground Spices & Masalas|100 g:70
sambhar-masala|Sambhar Masala|spices|Ground Spices & Masalas|100 g:90
chana-masala|Chana Masala|spices|Ground Spices & Masalas|100 g:80
saunf-powder|Saunf Powder|spices|Ground Spices & Masalas|100 g:75
rajma-masala|Rajma Powder|spices|Ground Spices & Masalas|100 g:90
amchur-powder|Amchur Powder|spices|Ground Spices & Masalas|100 g:65
amla-powder|Amla Powder|spices|Ground Spices & Masalas|100 g:80
sabji-masala|Sabji Masala|spices|Ground Spices & Masalas|100 g:90
paneer-masala|Paneer Masala|spices|Ground Spices & Masalas|100 g:90
mulethi|Mulethi|spices|Ground Spices & Masalas|100 g:90
dalchini-powder|Dalchini Powder|spices|Ground Spices & Masalas|100 g:145
murmura|Murmura|grains|Pantry|
poha|Poha|grains|Pantry|500 g:58
daliya|Daliya|grains|Pantry|500 g:45
makhana|Makhana|grains|Pantry|200 g:430
sona-masoori-rice|South Sona Masoori Rice|grains|Rice|1 kg:95
bengal-basmati-rice|Bengal Royal Basmati Rice|grains|Rice|1 kg:160
soyabean|Soyabean|pulses|Beans|
bhuna-chana|Bhuna Chana (Roasted Chickpeas)|pulses|Chana|
groundnuts|Groundnuts|grains|Pantry|
kale-chana|Kale Chana|pulses|Chana|500 g:60,1 kg:120
kabuli-chana|Kabuli Chana|pulses|Chana|500 g:,1 kg:185
dabra-chana|Dabra (Large Kabuli Chana)|pulses|Chana|500 g:110,1 kg:215
rajma-lal|Rajma Lal|pulses|Rajma|500 g:105,1 kg:210
rajma-chitra|Rajma Chitra|pulses|Rajma|500 g:100,1 kg:200
safed-matar|Safed Matar|pulses|Beans|500 g:75,1 kg:150
kali-masoor|Kali Masoor|pulses|Lentils|500 g:85
white-lobia|White Lobia|pulses|Beans|
urad-sabut|Urad Sabut|pulses|Lentils|
moong-sabut|Moong Sabut|pulses|Lentils|
alsi|Alsi (Flaxseed)|seeds|Seeds|200 g:60
pumpkin-seeds|Pumpkin Seeds|seeds|Seeds|100 g:120
sunflower-seeds|Sunflower Seeds|seeds|Seeds|100 g:120
watermelon-seeds|Watermelon Seeds|seeds|Seeds|100 g:120
chia-seeds|Chia Seeds|seeds|Seeds|100 g:120
honey|Honey|sweeteners|Honey|500 g:280
khand|Khand|sweeteners|Traditional Sweeteners|500 g:65,1 kg:130
gud-powder|Gud Powder (Jaggery)|sweeteners|Traditional Sweeteners|500 g:65,1 kg:130
karara|Karara|sweeteners|Traditional Sweeteners|500 g:55
bura|Bura|sweeteners|Traditional Sweeteners|500 g:55
`;

export const packKey = label => label.toLowerCase().replace(/\s+/g,'-');
export const products = catalog.trim().split('\n').map(row => {
 const [id,name,category,group,packList]=row.split('|');
 const cat=categories.find(c=>c.id===category);
 const sizes=(packList?packList.split(','):['Ask for sizes:']).map(pair=>{
  const [label,value]=pair.split(':');
  return {label,price:value===''?null:Number(value),image:`/images/unbranded/${id}.${["daliya","pumpkin-seeds"].includes(id)?"webp":"png"}`,confirmedSize:label!=='Ask for sizes'};
 });
 return {id,name,category,group,categoryName:cat.name,isOriginal:!!cat.original,subheading:group,
  description:`Explore ${name.toLowerCase()} from our pantry collection. Contact our Noida store for availability and product details.`,
  sizes,price:sizes[0].price,image:sizes[0].image,
  chosenPack:category==='attas' && sizes[0].label==='1 kg',
 };
});
export const priceText = price => typeof price==='number' ? `₹${price.toLocaleString('en-IN')}` : 'Contact for price';
