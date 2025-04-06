/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
  // This section will run whenever the button is clicked
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener('click', toggleDarkMode);

/*** Form Handling [PLACEHOLDER] [ADDED IN UNIT 6] ***/
/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const rsvpButton = document.getElementById('rsvp-button');
let participants = JSON.parse(localStorage.getItem('participants')) || [
  { name: "Uncle Bob", region: "Texas", guests: 1 },
  { name: "Aunt Lisa", region: "California", guests: 2 },
  { name: "Cousin Emily", region: "New York", guests: 1 }
];
let count = participants.length;

document.addEventListener('DOMContentLoaded', () => {
  const savedParticipants = document.querySelector('.rsvp-participants');
  savedParticipants.innerHTML = '';

  participants.forEach(item => {
    const p = document.createElement('p');
    p.innerHTML = `🎉 ${item.name} from ${item.region} <br><small>Bringing ${item.guests} guest${item.guests > 1 ? 's' : ''}</small>`;
    savedParticipants.appendChild(p);
  });

  updateCounter();
});

const addParticipant = (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const region = document.getElementById('region').options[document.getElementById('region').selectedIndex].text;
  const guests = document.getElementById('guests').value;

  participants.push({ name, region, guests: parseInt(guests) });
  localStorage.setItem('participants', JSON.stringify(participants));

  count = participants.length;

  const newParticipant = document.createElement('p');
  newParticipant.innerHTML = `🎉 ${name} from ${region} <br><small>Bringing ${guests} guest${guests > 1 ? 's' : ''}</small>`;
  document.querySelector('.rsvp-participants').appendChild(newParticipant);
  updateCounter();
  document.getElementById('rsvp-form').reset();
};

function updateCounter() {
  const existingCounter = document.getElementById('rsvp-count');
  if (existingCounter) existingCounter.remove();

  const newCount = document.createElement('p');
  newCount.id = 'rsvp-count';
  newCount.textContent = `⭐ ${count} ${count === 1 ? 'person has' : 'people have'} RSVP'd to this event!`;

  document.getElementById('rsvp').insertBefore(newCount, document.querySelector('.form-container'));
}

rsvpButton.addEventListener('click', addParticipant);



/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/


// Switch Language mode
/*** Language Toggle ***/
const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.schedule': 'Schedule',
    'nav.rsvp': 'RSVP',
    'nav.venueMap': 'Venue Map',
    'nav.gallery': 'Gallery',
    'theme.button': 'Dark Mode',
    'language.button': 'EN/中文',

    // Header
    'header.title': 'Ever After Weddings',
    'header.date': 'July 6, 2024 • Wuhan, China',
    'header.rsvpButton': 'RSVP by June 1',
    'header.detailsButton': 'View Wedding Details',

    // About Section
    'about.title': 'Our Wedding Story',
    'letter.greeting': 'Dear cherished family and friends,',
    'letter.p1': "With hearts full of joy, we invite you to witness the union of two souls from different shores of China at the Yan Yang Tian Banquet Center (Living Room Hall) in Wuhan. Alicia, the Lingnan rose who grew up amidst the lychee orchards of Guangdong, and Stevie, the Wuhan lad nurtured by the Yangtze River's currents, found our serendipity in Shanghai's bustling streets where eastern tides meet southern breezes. Though 1,100 kilometers once separated our childhood homes, love built bridges between the Pearl River Delta and Jianghan Plain.",
    'letter.p2': "On July 6, 2024, we choose to begin our forever in the golden halls of Yan Yang Tian - where contemporary Wuhan hospitality meets timeless tradition. The venue's signature 'Dual River Hall' symbolizes our journey: its ceiling cascades with 2,368 crystal droplets representing the Yangtze's vitality, while floor mosaics depict the Pearl River's meandering grace.",
    'letter.p3': "As dusk falls, the banquet will unveil a culinary dialogue between our homelands. Wuhan's signature re gan mian will be served in delicate Cantonese bamboo steamers, while Guangdong's signature roasted meats will be presented with Jingchu-style spicy dipping sauces. The centerpiece dessert - lychee-infused douhua floating in osmanthus syrup - embodies our sweet fusion.",
    'letter.p4': "We've prepared bilingual journey maps guiding guests through three symbolic zones: the 'Pearl River Memory Corridor' with Alicia's childhood photos from Shunde water towns, the 'Yangtze Heritage Wall' displaying Stevie's family heirlooms from Hankou, and the 'Shanghai Fusion Rotunda' where our love story unfolds through interactive holograms.",
    'highlights.title': 'Wedding Highlights',

    // wedding highlights
    'highlights.cultural': 'Cultural Fusion',
    'highlights.culturalDesc': 'Blending Eastern traditions with modern Western elements',
    'highlights.garden': 'Garden Celebration',
    'highlights.gardenDesc': 'Outdoor ceremony by the Yangtze River followed by lakeside reception',
    'highlights.culinary': 'Culinary Journey',
    'highlights.culinaryDesc': 'Signature dishes from Wuhan and customized wedding banquet',

    // Schedule
    'schedule.title': 'Wedding Day Schedule',
    'schedule.ceremony.title': '4:00 PM - Ceremony',
    'schedule.ceremony.p1': 'Exchange of vows at the Peony Pavilion',
    'schedule.ceremony.p2': 'Traditional Chinese tea ceremony',
    'schedule.ceremony.p3': 'Group photo session',

    // RSVP
    'rsvp.title': 'RSVP',
    'rsvp.count': '⭐ {count} people have RSVP\'d to this event!',
    'rsvp.description': 'Please join us on July 6, 2024...',

    // Form
    'form.name': 'Name:',
    'form.email': 'Email:',
    'form.region': 'Region:',
    'form.diet': 'Dietary Needs:',
    'form.guests': 'Number of Guests:',
    'form.submit': 'Confirm Attendance',

    // Regions
    'region.hubei': 'Hubei, China',
    'region.guangdong': 'Guangdong, China',
    'region.overseas': 'Overseas'
  },
  zh: {
    // Navigation
    'nav.about': '关于我们',
    'nav.schedule': '日程安排',
    'nav.rsvp': '回复邀请',
    'nav.venueMap': '场地地图',
    'nav.gallery': '相册',
    'theme.button': '暗黑模式',
    'language.button': 'EN/中文',

    // Header
    'header.title': '永远的婚礼',
    'header.date': '2024年7月6日 • 中国武汉',
    'header.rsvpButton': '6月1日前回复',
    'header.detailsButton': '查看婚礼详情',

    // About Section
    'about.title': '我们的婚礼故事',
    'letter.greeting': '亲爱的家人和朋友们，',
    'letter.p1': '怀着无比喜悦的心情，我们诚邀您莅临武汉艳阳天宴会中心（客厅厅），见证这对来自华夏南北两岸新人的结合。生长于广东荔枝园中的岭南玫瑰Alicia，与在长江水滋养下成长的武汉伢Stevie，在浦江之滨的上海街头邂逅——当东海潮遇见岭南风，虽然我们的故乡相隔1100公里，但爱意早已在珠江三角洲与江汉平原之间架起鹊桥。', 
    'letter.p2': "2024年7月6日，我们选择在艳阳天的鎏金厅开启永恒之旅。这里既有武汉待客之道的现代风范，又承袭千年礼仪传统。宴会厅独创的「双江厅」恰似我们的爱情轨迹：穹顶上2368颗水晶珠帘演绎长江奔涌的磅礴气韵，地面马赛克拼花勾勒珠江蜿蜒的旖旎风情。",
    'letter.p3': "暮色初临时分，宴会将开启一场跨越地域的味觉对话：武汉招牌热干面盛放在粤式竹蒸笼中奉上，广东经典烧味配以荆楚风味辣酱。压轴甜品「荔香月影」——浸泡在桂花蜜中的荔枝豆花，正是我们甜蜜交融的完美写照。",
    'letter.p4': "我们特别准备的双语导览图，将带您穿越三大主题区域：「珠玑记忆长廊」陈列Alicia在顺德水乡的童年影像，「长江传承之壁」展示Stevie家族在汉口的传家珍品，而「海派融合穹厅」将通过互动全息影像讲述我们的爱情故事。",

    // wedding highlights
    'highlights.title': '婚礼亮点',
    'highlights.cultural': '',
    'highlights.culturalDesc': '',
    'highlights.garden': '',
    'highlights.gardenDesc': '',
    'highlights.culinary': '',
    'highlights.culinaryDesc': '',

    // Schedule
    'schedule.title': '婚礼日程安排',
    'schedule.title': 'Wedding Day Schedule',
    'schedule.ceremony.title': '4:00 PM - Ceremony',
    'schedule.ceremony.p1': 'Exchange of vows at the Peony Pavilion',
    'schedule.ceremony.p2': 'Traditional Chinese tea ceremony',
    'schedule.ceremony.p3': 'Group photo session',

    // RSVP
    'rsvp.title': '回复邀请',
    'rsvp.count': '⭐ {count} 人已确认参加！',
    'rsvp.description': '请于2024年7月6日...', 

    // Form
    'form.name': '姓名：',
    'form.email': '邮箱：',
    'form.region': '地区：',
    'form.diet': '饮食需求：',
    'form.guests': '随行人数：',
    'form.submit': '确认出席',

    // Regions
    'region.hubei': '中国湖北',
    'region.guangdong': '中国广东',
    'region.overseas': '海外'
  }
};

let currentLang = 'en';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  applyTranslations(currentLang);
  updateCounter();
  renderParticipants();
}

function applyTranslations(lang) {
  // Update text elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key];
  });

  // Update select options
  document.querySelectorAll('option[data-i18n]').forEach(option => {
    const key = option.dataset.i18n;
    option.textContent = translations[lang][key];
  });

  // Update language button
  document.getElementById('language-button').textContent = translations[lang]['language.button'];
}

// Update participants list with translations
function renderParticipants() {
  const container = document.querySelector('.rsvp-participants');
  container.innerHTML = '';
  participants.forEach(p => {
    const region = translations[currentLang][`region.${p.region}`];
    const el = document.createElement('p');
    el.innerHTML = `🎉 ${p.name} from ${region}<br><small>Bringing ${p.guests} guest${p.guests > 1 ? 's' : ''}</small>`;
    container.appendChild(el);
  });
}

// Modified updateCounter to handle translations
function updateCounter() {
  const countEl = document.getElementById('rsvp-count');
  if (countEl) {
    countEl.textContent = translations[currentLang]['rsvp.count'].replace('{count}', count);
  }
}

// Initialize translations
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);
  renderParticipants();
});

// Add event listener for language button
document.getElementById('language-button').addEventListener('click', toggleLanguage);





/*** Carousel Auto-Play ***/
function initializeCarousels() {
    const carousels = document.querySelectorAll('.carousel-container');
    
    carousels.forEach(container => {
        const slides = container.querySelectorAll('img');
        let currentIndex = 0;
        
        setInterval(() => {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }, 5000); 
    });
  }
  
  document.addEventListener('DOMContentLoaded', initializeCarousels);







  /**
   * Pagination
   */
  const pagination = {
    config: {
        itemsPerPage: 4,
        currentPage: 1,
        totalPages: 0
    },
    
    init: function() {
        // Make sure we're on the gallery page
        if (!document.querySelector('.photo-grid')) {
            console.log('No gallery found on this page');
            return;
        }
        
        // Select all photo items
        this.items = document.querySelectorAll('.photo-grid > .photo-item');
        
        console.log('Found image containers:', this.items.length);
        
        if (this.items.length === 0) {
            console.warn('No photo items found in the gallery');
            return;
        }
        
        this.config.totalPages = Math.ceil(this.items.length / this.config.itemsPerPage);
        console.log('Total pages:', this.config.totalPages);
        
        // Create page indicator if it doesn't exist
        this.createPageIndicator();
        
        this.render();
        this.bindEvents();
    },
    
    createPageIndicator: function() {
        const controls = document.querySelector('.pagination-controls');
        if (!controls) {
            console.warn('Pagination controls not found');
            return;
        }
        
        if (!document.querySelector('.page-indicator')) {
            const indicator = document.createElement('div');
            indicator.className = 'page-indicator';
            
            // Insert between prev and next buttons
            const nextBtn = controls.querySelector('.pagination-btn.next');
            if (nextBtn) {
                controls.insertBefore(indicator, nextBtn);
            } else {
                controls.appendChild(indicator);
            }
        }
    },
    
    render: function() {
        // Hide all images first
        this.items.forEach(item => {
            item.style.display = 'none';
        });
        
        // Calculate which items to show
        const start = (this.config.currentPage - 1) * this.config.itemsPerPage;
        const end = Math.min(start + this.config.itemsPerPage, this.items.length);
        
        console.log(`Showing items ${start+1} to ${end} (Page ${this.config.currentPage}/${this.config.totalPages})`);
        
        // Show current page images
        for (let i = start; i < end; i++) {
            this.items[i].style.display = 'block';
        }
        
        // Update pagination buttons
        const prevBtn = document.querySelector('.pagination-btn.prev');
        const nextBtn = document.querySelector('.pagination-btn.next');
        
        if (prevBtn) prevBtn.disabled = this.config.currentPage === 1;
        if (nextBtn) nextBtn.disabled = this.config.currentPage === this.config.totalPages || this.config.totalPages === 0;
        
        // Update page indicator
        const indicator = document.querySelector('.page-indicator');
        if (indicator) {
            indicator.textContent = `${this.config.currentPage} / ${this.config.totalPages}`;
        }
    },
    
    bindEvents: function() {
        const prevBtn = document.querySelector('.pagination-btn.prev');
        const nextBtn = document.querySelector('.pagination-btn.next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (this.config.currentPage > 1) {
                    this.config.currentPage--;
                    console.log('Previous page, new page:', this.config.currentPage);
                    this.render();
                }
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (this.config.currentPage < this.config.totalPages) {
                    this.config.currentPage++;
                    console.log('Next page, new page:', this.config.currentPage);
                    this.render();
                }
            });
        }
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Checking for gallery page');
    if (document.querySelector('.gallery-container')) {
        console.log('Gallery page detected, initializing pagination');
        pagination.init();
    }
});