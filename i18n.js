'use strict';
(() => {
  const translations = {
  "copy.001": {
    "en": "Custom portable carts, booths, signage and bespoke woodcraft by Sukatukang in Batu Pahat, Johor. Working with clients in Malaysia, Singapore and Brunei.",
    "ms": "Cart dan booth mudah alih mengikut identiti perniagaan anda. Tempahan khas, signage dan pertukangan kayu oleh Sukatukang di Batu Pahat, Johor."
  },
  "copy.002": {
    "en": "Sukatukang — Small space. Big ambition.",
    "ms": "Sukatukang — Ruang kecil, impian besar."
  },
  "copy.003": {
    "en": "Skip to content",
    "ms": "Langkau ke kandungan"
  },
  "copy.004": {
    "en": "Sukatukang, home",
    "ms": "Sukatukang, laman utama"
  },
  "copy.005": {
    "en": "Crafted with care.",
    "ms": "Dibuat dengan teliti."
  },
  "copy.006": {
    "en": "Open menu",
    "ms": "Buka menu"
  },
  "copy.007": {
    "en": "Main navigation",
    "ms": "Navigasi utama"
  },
  "copy.008": {
    "en": "About us",
    "ms": "Tentang kami"
  },
  "copy.009": {
    "en": "Services",
    "ms": "Servis"
  },
  "copy.010": {
    "en": "Featured projects",
    "ms": "Projek pilihan"
  },
  "copy.011": {
    "en": "Gallery",
    "ms": "Galeri"
  },
  "copy.012": {
    "en": "Let’s talk",
    "ms": "Bincang projek"
  },
  "copy.013": {
    "en": "Custom woodcraft from Batu Pahat",
    "ms": "Pertukangan khas dari Batu Pahat"
  },
  "copy.014": {
    "en": "Small space.",
    "ms": "Ruang kecil,"
  },
  "copy.015": {
    "en": "Big ambition.",
    "ms": "impian besar."
  },
  "copy.016": {
    "en": "From an idea to a space of your own. We build custom portable carts and booths that bring your brand to life.",
    "ms": "Dari idea di fikiran, menjadi ruang untuk berniaga. Kami hasilkan cart dan booth mudah alih yang membawa identiti anda."
  },
  "copy.017": {
    "en": "Explore our work",
    "ms": "Terokai hasil kerja"
  },
  "copy.018": {
    "en": "Tell us your idea",
    "ms": "Ceritakan idea anda"
  },
  "copy.019": {
    "en": "Your vision. Our craft.",
    "ms": "Rekaan anda. Ketelitian kami."
  },
  "copy.020": {
    "en": "Elarab counter with fluted wood panels and a warm LED frame in the Sukatukang workshop",
    "ms": "Kaunter Elarab dengan panel kayu beralur dan bingkai lampu LED hangat, di bengkel Sukatukang"
  },
  "copy.021": {
    "en": "Made to stand out.",
    "ms": "Direka untuk menyerlah."
  },
  "copy.022": {
    "en": "A custom cart with warm LED detailing",
    "ms": "Cart custom dengan kemasan LED"
  },
  "copy.023": {
    "en": "View our project gallery",
    "ms": "Lihat galeri hasil kerja"
  },
  "copy.024": {
    "en": "Made for your brand",
    "ms": "Mengikut identiti jenama"
  },
  "copy.025": {
    "en": "Practical & portable",
    "ms": "Praktikal & mudah alih"
  },
  "copy.026": {
    "en": "Built in our workshop",
    "ms": "Dihasilkan di bengkel kami"
  },
  "copy.027": {
    "en": "A craftsperson fitting a logo panel onto a green cart in the workshop",
    "ms": "Perincian panel logo pada cart hijau, dipasang oleh tukang di bengkel"
  },
  "copy.028": {
    "en": "From our workshop to your business.",
    "ms": "Dari bengkel, untuk bisnes anda."
  },
  "copy.029": {
    "en": "Meet Sukatukang",
    "ms": "Kenali Sukatukang"
  },
  "copy.030": {
    "en": "Every business has a story.",
    "ms": "Setiap bisnes ada cerita."
  },
  "copy.031": {
    "en": "We help bring it to life.",
    "ms": "Kami bantu bentukkannya."
  },
  "copy.032": {
    "en": "A cart can be the start of something bigger. At Sukatukang, we bring woodcraft, thoughtful design and everyday function together to create a business space that feels like you.",
    "ms": "Sebuah cart boleh menjadi permulaan sesuatu yang besar. Di Sukatukang, kami menggabungkan kerja kayu, rekaan dan fungsi untuk menghasilkan ruang berniaga yang terasa milik anda."
  },
  "copy.033": {
    "en": "Based in Batu Pahat, Johor, Sukatukang works with clients in Malaysia, Singapore and Brunei. From your first cart to an event counter, every commission is shaped around your needs.",
    "ms": "Sukatukang berpusat di Batu Pahat, Johor, dengan pelanggan di Malaysia, Singapura dan Brunei. Daripada cart pertama hingga kaunter untuk acara, setiap tempahan dibentuk mengikut keperluan anda."
  },
  "copy.034": {
    "en": "Since 2016",
    "ms": "Sejak 2016"
  },
  "copy.035": {
    "en": "Experience in woodcraft",
    "ms": "Pengalaman dalam pertukangan"
  },
  "copy.036": {
    "en": "Made to order",
    "ms": "Tempahan khas"
  },
  "copy.037": {
    "en": "Your size, colours & identity",
    "ms": "Saiz, warna & identiti anda"
  },
  "copy.038": {
    "en": "Discover our services",
    "ms": "Kenali servis kami"
  },
  "copy.039": {
    "en": "What we make",
    "ms": "Apa yang kami hasilkan"
  },
  "copy.040": {
    "en": "Your vision, crafted by us.",
    "ms": "Idea anda, hasil tangan kami."
  },
  "copy.041": {
    "en": "From the first shape to the finishing touches,",
    "ms": "Dari bentuk asas hingga sentuhan akhir,"
  },
  "copy.042": {
    "en": "we help make your space complete.",
    "ms": "kami bantu lengkapkan ruang anda."
  },
  "copy.043": {
    "en": "Pastel pink Kenang-Kenangan booth with a scalloped canopy",
    "ms": "Booth Kenang-Kenangan berwarna merah jambu pastel dengan bumbung beralun"
  },
  "copy.044": {
    "en": "For businesses & events",
    "ms": "Untuk bisnes & acara"
  },
  "copy.045": {
    "en": "Custom carts & booths",
    "ms": "Cart & booth custom"
  },
  "copy.046": {
    "en": "From a simple counter to a booth with a canopy, with sizes and colours tailored to the way you work.",
    "ms": "Kaunter ringkas atau booth berbumbung, dengan saiz dan warna yang disesuaikan untuk cara anda berniaga."
  },
  "copy.047": {
    "en": "Discuss your design",
    "ms": "Bincang rekaan"
  },
  "copy.048": {
    "en": "Burgundy Narci counter with a raised logo and LED lighting",
    "ms": "Kaunter Narci berwarna burgundy dengan logo timbul dan lampu LED"
  },
  "copy.049": {
    "en": "A distinctive brand presence",
    "ms": "Identiti yang menyerlah"
  },
  "copy.050": {
    "en": "Signage & finishing",
    "ms": "Signage & kemasan"
  },
  "copy.051": {
    "en": "3D logos, wood and acrylic signage, laser cutting and engraving. Add character with fluted panels and LED lighting.",
    "ms": "Logo 3D, signage kayu dan akrilik, laser cutting serta engraving. Tambah karakter dengan panel beralur dan lampu LED."
  },
  "copy.052": {
    "en": "Explore the options",
    "ms": "Terokai pilihan"
  },
  "copy.053": {
    "en": "Green and pink Pawtcha cart with a side extension table",
    "ms": "Cart Pawtcha hijau dan merah jambu dengan meja sambungan pada sisi"
  },
  "copy.054": {
    "en": "Function in every detail",
    "ms": "Fungsi dalam setiap perincian"
  },
  "copy.055": {
    "en": "Bespoke woodcraft",
    "ms": "Pertukangan mengikut keperluan"
  },
  "copy.056": {
    "en": "Extension tables, shelving and equipment spaces, alongside custom decor, souvenirs and corporate gifts.",
    "ms": "Meja sambungan, rak dan ruang peralatan, bersama tempahan dekorasi, cenderamata serta hadiah korporat."
  },
  "copy.057": {
    "en": "Tell us what you need",
    "ms": "Ceritakan keperluan"
  },
  "copy.058": {
    "en": "Every commission is different. Get in touch for a quotation based on your size, design and choice of accessories.",
    "ms": "Setiap tempahan berbeza. Hubungi kami untuk sebut harga mengikut saiz, rekaan dan aksesori pilihan anda."
  },
  "copy.059": {
    "en": "Project highlights",
    "ms": "Sorotan projek"
  },
  "copy.060": {
    "en": "Projects we’re",
    "ms": "Projek yang"
  },
  "copy.061": {
    "en": "proud to share.",
    "ms": "kami banggakan."
  },
  "copy.062": {
    "en": "A selection of projects for our clients.",
    "ms": "Antara projek pilihan untuk pelanggan kami."
  },
  "copy.063": {
    "en": "See Sukatukang’s craftsmanship in motion.",
    "ms": "Lihat hasil pertukangan Sukatukang dalam gerakan."
  },
  "copy.064": {
    "en": "Videos play silently when they come into view.",
    "ms": "Video dimainkan tanpa bunyi apabila masuk ke paparan."
  },
  "copy.065": {
    "en": "Autoplay: off",
    "ms": "Main automatik: tidak aktif"
  },
  "copy.066": {
    "en": "Sukatukang featured project video 1",
    "ms": "Video projek pilihan Sukatukang 1"
  },
  "copy.067": {
    "en": "Play project video 1",
    "ms": "Main video projek 1"
  },
  "copy.068": {
    "en": "Play",
    "ms": "Main"
  },
  "copy.069": {
    "en": "Muted",
    "ms": "Tanpa bunyi"
  },
  "copy.070": {
    "en": "Watch project video 1 on TikTok (new tab)",
    "ms": "Buka video projek 1 di TikTok (tab baharu)"
  },
  "copy.071": {
    "en": "Watch on TikTok",
    "ms": "Buka di TikTok"
  },
  "copy.072": {
    "en": "Sukatukang featured project video 2",
    "ms": "Video projek pilihan Sukatukang 2"
  },
  "copy.073": {
    "en": "Play project video 2",
    "ms": "Main video projek 2"
  },
  "copy.074": {
    "en": "Watch project video 2 on TikTok (new tab)",
    "ms": "Buka video projek 2 di TikTok (tab baharu)"
  },
  "copy.075": {
    "en": "Sukatukang featured project video 3",
    "ms": "Video projek pilihan Sukatukang 3"
  },
  "copy.076": {
    "en": "Play project video 3",
    "ms": "Main video projek 3"
  },
  "copy.077": {
    "en": "Watch project video 3 on TikTok (new tab)",
    "ms": "Buka video projek 3 di TikTok (tab baharu)"
  },
  "copy.078": {
    "en": "Different brands. Individual designs.",
    "ms": "Rekaan untuk identiti yang berbeza."
  },
  "copy.079": {
    "en": "Care in every detail.",
    "ms": "Ketelitian dalam setiap hasil kerja."
  },
  "copy.080": {
    "en": "Let’s discuss your project",
    "ms": "Bincang projek anda"
  },
  "copy.081": {
    "en": "Use each project’s “Watch on TikTok” link to view its video.",
    "ms": "Gunakan pautan “Buka di TikTok” pada setiap projek untuk menonton video."
  },
  "copy.082": {
    "en": "Selected work",
    "ms": "Pilihan hasil kerja"
  },
  "copy.083": {
    "en": "Different brands.",
    "ms": "Berbeza jenama."
  },
  "copy.084": {
    "en": "The same care.",
    "ms": "Sama ketelitian."
  },
  "copy.085": {
    "en": "Real photographs from our workshop.",
    "ms": "Gambar sebenar dari bengkel kami."
  },
  "copy.086": {
    "en": "Find inspiration for your own project.",
    "ms": "Temui inspirasi untuk projek anda."
  },
  "copy.087": {
    "en": "Filter the gallery",
    "ms": "Tapis galeri"
  },
  "copy.088": {
    "en": "All",
    "ms": "Semua"
  },
  "copy.089": {
    "en": "Counters",
    "ms": "Kaunter"
  },
  "copy.090": {
    "en": "With canopy",
    "ms": "Berbumbung"
  },
  "copy.091": {
    "en": "Bespoke designs",
    "ms": "Rekaan khas"
  },
  "copy.092": {
    "en": "6 projects",
    "ms": "6 hasil kerja"
  },
  "copy.093": {
    "en": "Coffee counter with a raised logo, worktop and freestanding sign.",
    "ms": "Kaunter kopi dengan logo timbul, permukaan kerja dan signage berdiri."
  },
  "copy.094": {
    "en": "Black Richiamo coffee counter with a wood-tone worktop",
    "ms": "Kaunter kopi Richiamo hitam dengan permukaan tona kayu"
  },
  "copy.095": {
    "en": "Enlarge the Richiamo Coffee image",
    "ms": "Besarkan gambar Richiamo Coffee"
  },
  "copy.096": {
    "en": "Coffee counter",
    "ms": "Kaunter kopi"
  },
  "copy.097": {
    "en": "3D logo",
    "ms": "Logo 3D"
  },
  "copy.098": {
    "en": "Pastel canopy booth with scalloped detailing and raised lettering.",
    "ms": "Booth pastel berbumbung dengan kemasan beralun dan tulisan timbul."
  },
  "copy.099": {
    "en": "Pink Kenang-Kenangan booth with a canopy",
    "ms": "Booth Kenang-Kenangan merah jambu dengan bumbung"
  },
  "copy.100": {
    "en": "Enlarge the Kenang-Kenangan image",
    "ms": "Besarkan gambar Kenang-Kenangan"
  },
  "copy.101": {
    "en": "Canopy booth",
    "ms": "Booth berbumbung"
  },
  "copy.102": {
    "en": "Flower cart with tiered display shelves, a canopy and decorative wheels.",
    "ms": "Cart bunga dengan rak bertingkat, bumbung dan roda hiasan."
  },
  "copy.103": {
    "en": "Burgundy Quwa Florist flower cart with tiered shelving and white wheels",
    "ms": "Cart bunga Quwa Florist burgundy dengan rak bertingkat dan roda putih"
  },
  "copy.104": {
    "en": "Enlarge the Quwa Florist image",
    "ms": "Besarkan gambar Quwa Florist"
  },
  "copy.105": {
    "en": "Flower display cart",
    "ms": "Cart paparan bunga"
  },
  "copy.106": {
    "en": "Custom shelving",
    "ms": "Rak khas"
  },
  "copy.107": {
    "en": "Yellow-striped bakery counter with a wooden worktop and tray slots.",
    "ms": "Kaunter bakeri berjalur kuning dengan permukaan kerja kayu dan ruang tray."
  },
  "copy.108": {
    "en": "Yellow and white bakery counter with tray slots in the top",
    "ms": "Kaunter bakeri kuning putih dengan ruang tray di bahagian atas"
  },
  "copy.109": {
    "en": "Enlarge the bakery counter image",
    "ms": "Besarkan gambar kaunter bakeri"
  },
  "copy.110": {
    "en": "Bakery counter",
    "ms": "Kaunter bakeri"
  },
  "copy.111": {
    "en": "Display & serving space",
    "ms": "Paparan & ruang hidangan"
  },
  "copy.112": {
    "en": "Tray slots",
    "ms": "Ruang tray"
  },
  "copy.113": {
    "en": "Cream counter with framed panels and a logo tailored to the brand.",
    "ms": "Kaunter krim dengan panel bingkai dan logo mengikut identiti jenama."
  },
  "copy.114": {
    "en": "Cream Goodie Berry counter with a burgundy logo",
    "ms": "Kaunter Goodie Berry krim dengan logo burgundy"
  },
  "copy.115": {
    "en": "Enlarge the Goodie Berry image",
    "ms": "Besarkan gambar Goodie Berry"
  },
  "copy.116": {
    "en": "Minimalist counter",
    "ms": "Kaunter minimalis"
  },
  "copy.117": {
    "en": "Custom colours",
    "ms": "Warna custom"
  },
  "copy.118": {
    "en": "Green and pink cart with an extension table for extra workspace.",
    "ms": "Cart hijau dan merah jambu, dilengkapi meja sambungan untuk ruang kerja tambahan."
  },
  "copy.119": {
    "en": "Pawtcha cart with its folding side table extended",
    "ms": "Cart Pawtcha dengan meja sisi dilipat keluar"
  },
  "copy.120": {
    "en": "Enlarge the Pawtcha image",
    "ms": "Besarkan gambar Pawtcha"
  },
  "copy.121": {
    "en": "Drinks cart",
    "ms": "Cart minuman"
  },
  "copy.122": {
    "en": "Folding table",
    "ms": "Meja lipat"
  },
  "copy.123": {
    "en": "Found a design you like?",
    "ms": "Ada rekaan yang anda suka?"
  },
  "copy.124": {
    "en": "Let’s start from there.",
    "ms": "Kita boleh mulakan dari situ."
  },
  "copy.125": {
    "en": "Let’s talk about your idea",
    "ms": "Bincang idea anda"
  },
  "copy.126": {
    "en": "Behind the craft",
    "ms": "Cerita di sebalik hasil kerja"
  },
  "copy.127": {
    "en": "From our workshop to your screen.",
    "ms": "Dari bengkel ke skrin anda."
  },
  "copy.128": {
    "en": "Get to know us a little better.",
    "ms": "Kenali kami dengan lebih dekat."
  },
  "copy.129": {
    "en": "Follow our workshop stories and design inspiration.",
    "ms": "Ikuti cerita pertukangan dan inspirasi rekaan."
  },
  "copy.130": {
    "en": "Syahmi Sukatukang on TikTok, @sukatukang (new tab)",
    "ms": "TikTok Syahmi Sukatukang, @sukatukang (tab baharu)"
  },
  "copy.131": {
    "en": "Meet Syahmi and discover life in our workshop.",
    "ms": "Kenali Syahmi dan cerita dari bengkel kami."
  },
  "copy.132": {
    "en": "Official Sukatukang Instagram, @sukatukang (new tab)",
    "ms": "Instagram rasmi Sukatukang, @sukatukang (tab baharu)"
  },
  "copy.133": {
    "en": "Official Sukatukang",
    "ms": "Sukatukang rasmi"
  },
  "copy.134": {
    "en": "Explore our designs and finished projects.",
    "ms": "Temui inspirasi rekaan dan hasil kerja kami."
  },
  "copy.135": {
    "en": "Let’s make something",
    "ms": "Mari mulakan sesuatu"
  },
  "copy.136": {
    "en": "Bring your idea.",
    "ms": "Anda bawa idea."
  },
  "copy.137": {
    "en": "We’ll help make it real.",
    "ms": "Kami bantu jadikannya nyata."
  },
  "copy.138": {
    "en": "Share your design inspiration, approximate dimensions and type of business. We’ll help you explore the possibilities.",
    "ms": "Hantar inspirasi rekaan, anggaran saiz dan jenis perniagaan anda. Kami bantu bincangkan pilihan yang sesuai."
  },
  "copy.139": {
    "en": "Chat on WhatsApp",
    "ms": "Bincang di WhatsApp"
  },
  "copy.140": {
    "en": "Get in touch for a quotation.",
    "ms": "Hubungi kami untuk sebut harga."
  },
  "copy.141": {
    "en": "WhatsApp our admin",
    "ms": "WhatsApp admin"
  },
  "copy.142": {
    "en": "Our workshop",
    "ms": "Bengkel kami"
  },
  "copy.143": {
    "en": "Get directions",
    "ms": "Lihat lokasi"
  },
  "copy.144": {
    "en": "Sukatukang logo",
    "ms": "Logo Sukatukang"
  },
  "copy.145": {
    "en": "Custom carts & woodcraft",
    "ms": "Cart custom & pertukangan"
  },
  "copy.146": {
    "en": "Sukatukang. All rights reserved.",
    "ms": "Sukatukang. Hak cipta terpelihara."
  },
  "copy.147": {
    "en": "Sukatukang social media",
    "ms": "Media sosial Sukatukang"
  },
  "copy.148": {
    "en": "Syahmi Sukatukang on TikTok (new tab)",
    "ms": "TikTok Syahmi Sukatukang (tab baharu)"
  },
  "copy.149": {
    "en": "Official Sukatukang Instagram (new tab)",
    "ms": "Instagram rasmi Sukatukang (tab baharu)"
  },
  "copy.150": {
    "en": "Back to top",
    "ms": "Kembali ke atas"
  },
  "copy.151": {
    "en": "Contact Sukatukang on WhatsApp (new tab)",
    "ms": "Hubungi Sukatukang melalui WhatsApp (tab baharu)"
  },
  "copy.152": {
    "en": "WhatsApp us",
    "ms": "WhatsApp kami"
  },
  "copy.153": {
    "en": "Close image",
    "ms": "Tutup gambar"
  },
  "copy.154": {
    "en": "Sukatukang’s work",
    "ms": "Hasil kerja Sukatukang"
  },
  "copy.155": {
    "en": "Ask about this design",
    "ms": "Tanya tentang rekaan ini"
  },
  "copy.156": {
    "en": "Previous image",
    "ms": "Gambar sebelumnya"
  },
  "copy.157": {
    "en": "Next image",
    "ms": "Gambar seterusnya"
  },
  "menu.open": {
    "en": "Open menu",
    "ms": "Buka menu"
  },
  "menu.close": {
    "en": "Close menu",
    "ms": "Tutup menu"
  },
  "gallery.count.one": {
    "en": "{count} project",
    "ms": "{count} hasil kerja"
  },
  "gallery.count.many": {
    "en": "{count} projects",
    "ms": "{count} hasil kerja"
  },
  "whatsapp.general": {
    "en": "Hello, I’m interested in a custom cart or booth from Sukatukang.",
    "ms": "Salam, saya berminat untuk tempah cart atau booth Sukatukang."
  },
  "whatsapp.signage": {
    "en": "Hello, I’d like to ask about signage and finishing options at Sukatukang.",
    "ms": "Salam, saya ingin bertanya tentang signage dan kemasan Sukatukang."
  },
  "whatsapp.bespoke": {
    "en": "Hello, I’d like to discuss a bespoke woodcraft project with Sukatukang.",
    "ms": "Salam, saya ingin berbincang tentang tempahan pertukangan khas Sukatukang."
  },
  "whatsapp.project": {
    "en": "Hello, I’m interested in the {project} design in the Sukatukang gallery. Could you share more details?",
    "ms": "Salam, saya berminat dengan rekaan {project} dalam galeri Sukatukang. Boleh saya dapatkan maklumat lanjut?"
  },
  "video.play": {
    "en": "Play",
    "ms": "Main"
  },
  "video.pause": {
    "en": "Pause",
    "ms": "Jeda"
  },
  "video.playLabel": {
    "en": "Play project video {number}",
    "ms": "Main video projek {number}"
  },
  "video.pauseLabel": {
    "en": "Pause project video {number}",
    "ms": "Jeda video projek {number}"
  },
  "video.playing": {
    "en": "Playing",
    "ms": "Sedang dimainkan"
  },
  "video.muted": {
    "en": "Muted",
    "ms": "Tanpa bunyi"
  },
  "video.autoOn": {
    "en": "Autoplay: on",
    "ms": "Main automatik: aktif"
  },
  "video.autoOff": {
    "en": "Autoplay: off",
    "ms": "Main automatik: tidak aktif"
  },
  "video.waiting": {
    "en": "Waiting for the TikTok player. You can also watch directly on TikTok.",
    "ms": "Menunggu pemain TikTok. Anda juga boleh buka video terus di TikTok."
  },
  "video.blocked": {
    "en": "Your browser blocked autoplay. Press Play or watch on TikTok.",
    "ms": "Pelayar menyekat main automatik. Tekan Main atau buka di TikTok."
  },
  "video.failed": {
    "en": "This video could not load here. Use the Watch on TikTok link.",
    "ms": "Video tidak dapat dimuatkan di sini. Gunakan pautan Buka di TikTok."
  },
  "language.group": {
    "en": "Website language",
    "ms": "Bahasa laman web"
  },
  "language.changed": {
    "en": "Website language changed to English.",
    "ms": "Bahasa laman ditukar kepada Bahasa Melayu."
  }
};
  const validLanguage = value => value === 'en' || value === 'ms';
  let language = 'en';
  function t(key, values = {}) {
    const text = translations[key]?.[language] ?? translations[key]?.en ?? key;
    return text.replace(/\{(\w+)\}/g, (match, name) => Object.prototype.hasOwnProperty.call(values, name) ? String(values[name]) : match);
  }
  function setLanguage(next, { remember = false, announce = false, updateURL = false } = {}) {
    if (!validLanguage(next)) return;
    language = next;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(element => { element.textContent = t(element.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-attrs]').forEach(element => {
      element.getAttribute('data-i18n-attrs').split(';').forEach(binding => {
        const [attribute, key] = binding.split(':');
        if (attribute && key) element.setAttribute(attribute, t(key));
      });
    });
    document.querySelectorAll('[data-whatsapp]').forEach(link => {
      link.setAttribute('href', 'https://wa.me/60125420514?text=' + encodeURIComponent(t(link.dataset.whatsapp)));
    });
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    const switcher = document.querySelector('.language-switch');
    if (switcher) { switcher.hidden = false; switcher.setAttribute('aria-label', t('language.group')); }
    if (remember) { try { window.localStorage.setItem('sukatukang-language', language); } catch {} }
    if (updateURL) { try { const url = new URL(window.location.href); url.searchParams.set('lang', language); window.history.replaceState(null, '', url.href); } catch {} }
    if (announce) document.querySelector('#language-announcement').textContent = t('language.changed');
    document.dispatchEvent(new CustomEvent('site:languagechange', { detail: { language } }));
  }
  window.SiteI18n = Object.freeze({ t, setLanguage, getLanguage: () => language });
  let savedLanguage;
  try { savedLanguage = window.localStorage.getItem('sukatukang-language'); } catch {}
  const requestedLanguage = new URL(window.location.href).searchParams.get('lang');
  setLanguage(validLanguage(requestedLanguage) ? requestedLanguage : validLanguage(savedLanguage) ? savedLanguage : 'en');
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language, { remember: true, announce: true, updateURL: true })));
})();
