const data = [
  {
    id: 1,
    title: 'AA Headphones pods',
    oldPrice: '$175.00',
    price: '$149.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/79983-airpods-angle-ipod-touch-tap-macbook_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1-1-599x599-270x270.jpg',
  },
  {
    id: 2,
    title: 'AA Laptop Air',
    oldPrice: '$899.00',
    price: '$849.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/06/mcbook-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/06/macbook-1-799x799-270x270.png',
  },
  {
    id: 3,
    title: 'AA Qled TV 4k',
    price: '$1,499.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/archidey-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/shivaki-left-799x799-270x270.jpg',
  },
  {
    id: 4,
    title: 'AA Smartphone XS',
    oldPrice: '$1,100.00',
    price: '$1,059.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iphone-xs-gols-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iphone-xs-silver-1-599x599-270x270.png',
  },
  {
    id: 5,
    title: 'AAA Smartphone 10 LTE',
    price: '$899.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/ezgif-1-e15eba69f90a-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/ezgif-1-930149de5303-995x661-270x270.png',
  },
  {
    id: 6,
    title: 'AB Laptop 15.6″ Cloudbook',
    price: '$2,299.00',
    oldPrice: '$2,400.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/LAPTOPMAC-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/sdrf-599x599-270x270.png',
  },
  {
    id: 7,
    title: 'AB Laptop 15.6″ Universe',
    price: '$799.00',
    oldPrice: '$900.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/HUAWEI-MateBook-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/LAPTOPMAC-799x799-270x270.png',
  },
  {
    id: 8,
    title: 'AB Protection Plan Pro',
    price: '$250.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/ionic-slate-blue-burnt-orange-tpu-regular-0-ae6581782abecc91f23c5cdcf14198ab-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/ionic-blue-gray-silver-gray-tpu-regular-1-9329f99e4083a511768a7bf19a6e7f45-1079x919-270x270.png',
  },
  {
    id: 9,
    title: 'AB QLED TV UltraHD',
    price: '$899.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/qled-red-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/qled-tv-led-799x799-270x270.jpg',
  },
  {
    id: 10,
    title: 'AB Smartphone XR',
    oldPrice: '$799.00',
    price: '$749.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iphone-xr-white-select-201809-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iphone-xr-red-1-599x599-270x270.png',
  },
  {
    id: 11,
    title: 'AC 13 Inch, Chromebook',
    price: '$1,600.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/49993-2-dell-laptop-image-free-transparent-image-hq_600x600-1-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/06/mcbook-799x799-270x270.png',
  },
  {
    id: 12,
    title: 'AC Smartphone 8',
    price: '$599.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iphone-8-gold-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iphone-8-silver-3-599x599-270x270.png',
  },
  {
    id: 13,
    title: 'AC Smartphone 8+',
    price: '$699.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iphone-8-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iphone-8-silver-2-599x599-270x270.png',
  },
  {
    id: 14,
    title: 'AC Televisions 49″ QLED 4K',
    price: '$999.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/gortv-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/qled-799x599-270x270.jpg',
  },
  {
    id: 15,
    title: 'AD QLed TV UltraHD Curved',
    price: '$2,199.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1-270x270.jpg',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/flower-curved-799x799-270x270.png',
  },
  {
    id: 16,
    title: 'AD Smartphone 7',
    price: '$500.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iphone-7-silver-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/Iphone-7-gold-1-599x599-270x270.png',
  },
  {
    id: 17,
    title: 'AD Smartphone 7+',
    price: '$550.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iphone-7-gold-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/Iphone-7-silver-1-599x599-270x270.png',
  },
  {
    id: 18,
    title: 'AE QLED pro TV 8K',
    price: '$1,999.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/qled-8k-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/sony-799x799-270x270.jpg',
  },
  {
    id: 19,
    title: 'AF Home Theater 86″',
    price: '$1,499.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/uhd-tv-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/uhd-799x799-270x270.png',
  },
  {
    id: 20,
    title: 'AG Televisions Dark Edition 55″ 4K',
    price: '$1,799.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/uhd-salyud-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/night-799x799-270x270.png',
  },
  {
    id: 21,
    title: 'AH UHD TV Curved 49″',
    price: '$1,799.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/premium-tv-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/premiumtv-799x799-270x270.png',
  },
  {
    id: 22,
    title: 'Amazfit SmartWatch',
    oldPrice: '$174.00',
    price: '$144.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/amazfit_equator_rose_gold_closed_loop-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/amazfit_moonbeam_white_open_clasp-999x999-270x270.png',
  },
  {
    id: 23,
    title: 'Apple Watch',
    oldPrice: '$399.00',
    price: '$300.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/white-watch-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/amazfit_bip_smartwatch_white_cloud_front-999x999-270x270.png',
  },
  {
    id: 24,
    title: 'Audio System 30W 1-2',
    oldPrice: '$299.00',
    price: '$199.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/51543-4-multimedia-speaker-png-free-photo_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/51634-2-multimedia-speaker-images-png-file-hd_600x600-599x599-270x270.png',
  },
  {
    id: 25,
    title: 'Audio System 55W 1-2',
    oldPrice: '$79.00',
    price: '$59.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/51621-5-multimedia-speaker-png-file-hd_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/51527-5-multimedia-speaker-free-hd-image_600x600-599x599-270x270.png',
  },
  {
    id: 26,
    title: 'Audio System 65W Ultra Bass',
    oldPrice: '$299.00',
    price: '$199.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/51527-5-multimedia-speaker-free-hd-image_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/51621-5-multimedia-speaker-png-file-hd_600x600-599x599-270x270.png',
  },
  {
    id: 27,
    title: 'Audio System for PC',
    oldPrice: '$299.00',
    price: '$199.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/51503-6-multimedia-speaker-download-image-free-clipart-hd_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/51543-4-multimedia-speaker-png-free-photo_600x600-599x599-270x270.png',
  },
  {
    id: 28,
    title: 'Audio System Imba 3',
    oldPrice: '$99.00',
    price: '89.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/51634-2-multimedia-speaker-images-png-file-hd_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/51503-6-multimedia-speaker-download-image-free-clipart-hd_600x600-599x599-270x270.png',
  },
  {
    id: 29,
    title: 'BA EliteBook Revolve 810 G2',
    price: '$1,300.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/laptopp-acer-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/laptopp-599x599-270x270.png',
  },
  {
    id: 30,
    title: 'BA Laptop 15.6″ Intel G4556',
    price: '$599.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/acer-1-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/acer-front-799x799-270x270.png',
  },
  {
    id: 31,
    title: 'BA Laptop 250 G6',
    price: '$1,300.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/lenova-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/69140-core-intel-laptop-i5-narendra-computer-modi_800x800-1-799x799-270x270.png',
  },
  {
    id: 32,
    title: 'BA Laptop air 13 inch',
    price: '$999.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/laptop-asus-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/laptop-hp215-798x798-270x270.png',
  },
  {
    id: 33,
    title: 'BA Laptop Chromebook S330',
    price: '$780.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/lenovanew2015-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/sdrf-599x599-270x270.png',
  },
  {
    id: 34,
    title: 'BA Tablet Pro',
    price: '$999.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/Ipad-pro-gray-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/Ipad-pro-silver-599x599-270x270.png',
  },
  {
    id: 35,
    title: 'BB Tablet Air',
    price: '$899.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/ipad-air-gold-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/ipad-air-gray-599x599-270x270.png',
  },
  {
    id: 36,
    title: 'BC Tablet',
    oldPrice: '$499.00',
    price: '$449.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/ipad-gold-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/Ipad-silver-599x599-270x270.png',
  },
  {
    id: 37,
    title: 'BD Tablet Mini',
    price: '$799.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/ipad-mini-silver-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/ipad-mini-gold-599x599-270x270.png',
  },
  {
    id: 38,
    title: 'Black headphone',
    price: '$49.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/16-black-headphones-png-image_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/6-headphones-png-image_600x600-599x599-270x270.png',
  },
  {
    id: 39,
    title: 'Camera Cco D3100',
    oldPrice: '$3,499.00',
    price: '$3,299.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-12-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-999x999-270x270.png',
  },
  {
    id: 40,
    title: 'Camera D3300',
    oldPrice: '$2,498.00',
    price: '$2,450.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/sony_vaio_1-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-12-999x999-270x270.png',
  },
  {
    id: 41,
    title: 'Camera Mony 500D',
    price: '$600.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-5-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-7-999x999-270x270.png',
  },
  {
    id: 42,
    title: 'Camera Nx-201',
    oldPrice: '$1,999.00',
    price: '$1,799.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-7-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-5-999x999-270x270.png',
  },
  {
    id: 43,
    title: 'Camera PRO 70 HDV',
    oldPrice: '$1,790.00',
    price: '$1,750.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-2-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1-2-999x999-270x270.png',
  },
  {
    id: 44,
    title: 'CameraSX 2100',
    oldPrice: '$3,999.00',
    price: '$3,499.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-8-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-999x999-270x270.png',
  },
  {
    id: 45,
    title: 'CC Laptop 15.6 G250 Intel g2020',
    oldPrice: '$1,399.00',
    price: '$1,199.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/laptop-hp215-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/laptop-asus-599x599-270x270.png',
  },
  {
    id: 46,
    title: 'Console dark edition',
    price: '$249.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/2-2-xbox-free-download-png_600x600-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/joystick-599x599-270x270.png',
  },
  {
    id: 47,
    title: 'Fitness bracelet v1',
    oldPrice: '$149.00',
    price: '$99.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/fitband-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/amazfit_arc_hero_side_time-999x999-270x270.png',
  },
  {
    id: 48,
    title: 'Fitness braclet',
    price: '$29.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/galaxy-fi-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/frontier-799x799-270x270.jpg',
  },
  {
    id: 49,
    title: 'Game Console Controller',
    oldPrice: '$75.00',
    price: '$60.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/playstation-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/joystick-599x599-270x270.png',
  },
  {
    id: 50,
    title: 'Game Console Orginy',
    price: '$299.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/7-2-xbox-free-png-image_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/2-2-xbox-free-download-png_600x600-599x599-270x270.png',
  },
  {
    id: 51,
    title: 'Game Console Run edition',
    price: '$299.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/82168-roblox-playstation-all-product-accessory-xbox_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/7-2-xbox-free-png-image_600x600-599x599-270x270.png',
  },
  {
    id: 52,
    title: 'Game Console SE',
    price: '$789.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/46814-9-console-download-image-free-download-image_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/4-2-xbox-png-image_600x600-599x599-270x270.png',
  },
  {
    id: 53,
    title: 'Gamming headphone',
    price: '$149.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/5-blue-headphones-png-image_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/27-green-headphones-png-image_600x600-599x599-270x270.png',
  },
  {
    id: 54,
    title: 'Gear Virtual Reality',
    oldPrice: '$799.00',
    price: '$749.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/4-2-virtual-reality-picture_600x600-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/13013573-499x499-270x270.png',
  },
  {
    id: 55,
    title: 'Gold HeadPhones',
    price: '$45.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/H6_Natural_1000x1000-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/H4_CharcoalGrey_1000x1000-999x999-270x270.png',
  },
  {
    id: 56,
    title: 'Green Headphone',
    oldPrice: '$99.00',
    price: '$79.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/27-green-headphones-png-image_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/5-blue-headphones-png-image_600x600-599x599-270x270.png',
  },
  {
    id: 57,
    title: 'headphone classic design',
    oldPrice: '$49.00',
    price: '$39.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/6-headphones-png-image_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1-1-599x599-270x270.jpg',
  },
  {
    id: 58,
    title: 'Headphone solo 3 novo',
    oldPrice: '$300.00',
    price: '$249.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/0053_rgb_MP582-RGB-bttm_V22-1-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/0056_rgb_MNET2-RGB-bttm-1-1-799x799-270x270.png',
  },
  {
    id: 59,
    title: 'Headphone solo 3 pink',
    oldPrice: '$219.00',
    price: '$199.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/0056_rgb_MNET2-RGB-bttm-1-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/0053_rgb_MP582-RGB-bttm_V2-1-1-799x799-270x270.png',
  },
  {
    id: 60,
    title: 'Headphone solo2 studio',
    oldPrice: '$210.00',
    price: '$185.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/0000_rgb_MP132-RGB-bttm_V2-1-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/0005_MQCY2-RGB-bttm-1-1-799x799-270x270.png',
  },
  {
    id: 61,
    title: 'Headphone super bass',
    price: '$239.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/0005_MQCY2-RGB-bttm-1-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/0000_rgb_MP132-RGB-bttm_V2-1-1-799x799-270x270.png',
  },
  {
    id: 62,
    title: 'Joystick for GameConsole FX Rog',
    price: '$39.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/4-2-xbox-png-image_600x600-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/joystick-599x599-270x270.png',
  },
  {
    id: 63,
    title: 'Joystick for Gameconsole SE 4',
    oldPrice: '$59.00',
    price: '$39.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/4-2-xbox-png-image_600x600-599x599-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/joystick-270x270.png',
  },
  {
    id: 64,
    title: 'Laptop 14″ Cloudbook EM-1321',
    price: '$1,200.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/hp-gammingnew-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/hpgammingfrnt-599x599-270x270.png',
  },
  {
    id: 65,
    title: 'Laptop 17.3″ 4210',
    oldPrice: '$2,399.00',
    price: '$2,199.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/asus-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/asus-frint-1-799x799-270x270.png',
  },
  {
    id: 66,
    title: 'ManDisk USB 3.0 Flash 32 GB',
    price: '$100.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1-270x270.jpg',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/62-usb-flash-drive-png_800x800-799x799-270x270.png',
  },
  {
    id: 67,
    title: 'MicroSD 3.0 Flash 32 GB',
    price: '$100.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/sd-32-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/sd-599x599-270x270.jpg',
  },
  {
    id: 68,
    title: 'Mini GameConsole SintenSo',
    price: '$99.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/46824-8-console-hd-free-download-image_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/4-2-xbox-png-image_600x600-599x599-270x270.png',
  },
  {
    id: 69,
    title: 'Mony camera super zoom',
    oldPrice: '$400.00',
    price: '$380.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-3-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-12-999x999-270x270.png',
  },
  {
    id: 70,
    title: 'Mony z21 FullHD',
    oldPrice: '$599.00',
    price: '$549.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-12-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-999x999-270x270.png',
  },
  {
    id: 71,
    title: 'NX Mini F1 SMART NX',
    oldPrice: '$559.00',
    price: '$550.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/sony_vaio_1-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-12-999x999-270x270.png',
  },
  {
    id: 72,
    title: 'NX Mini Z1',
    oldPrice: '$260.00 ',
    price: '$240.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-4-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-2-999x999-270x270.png',
  },
  {
    id: 73,
    title: 'PC HeadPhones',
    oldPrice: '$59.00',
    price: '$49.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/7-headphones-png-image_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/27-green-headphones-png-image_600x600-599x599-270x270.png',
  },
  {
    id: 74,
    title: 'Pendrive USB 3.0 Flash 64 GB',
    price: '$100.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/8-2-usb-flash-png-picture_800x800-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1-599x599-270x270.jpg',
  },
  {
    id: 75,
    title: 'Photo camera CX 7100',
    oldPrice: '$1,499.00',
    price: '$1,299.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-11-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-8-999x999-270x270.png',
  },
  {
    id: 76,
    title: 'Photo camera Ranoc D90',
    price: '$820.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1-2-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-2-999x999-270x270.png',
  },
  {
    id: 77,
    title: 'Photo Sam 600D',
    oldPrice: '$999.00',
    price: '$899.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-10-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-12-999x999-270x270.png',
  },
  {
    id: 78,
    title: 'Renon EOS 60D',
    oldPrice: '$2,200.00',
    price: '$2,000.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-6-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1-1-1-999x999-270x270.png',
  },
  {
    id: 79,
    title: 'Rikkon F3310',
    oldPrice: '$629.00',
    price: '$619.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1-1-1-270x270.png',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/camera-6-999x999-270x270.png',
  },
  {
    id: 80,
    title: 'SanDrive USB 3.0 Flash 8 GB',
    price: '$100.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/uz-32gb-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/sd-hybrid-599x599-270x270.jpg',
  },
  {
    id: 81,
    title: 'Smart Camera',
    price: '$799.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/11-photo-camera-png-image_600x600-1-599x599-270x270.png',
  },
  {
    id: 82,
    title: 'Smartphone 10 light',
    price: '$219.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/honor-20lite-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/honor-599x599-270x270.jpg',
  },
  {
    id: 83,
    title: 'Smartphone 7',
    oldPrice: '$399.00',
    price: '$349.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/honorr-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/mi7-599x599-270x270.jpg',
  },
  {
    id: 84,
    title: 'Smartphone mate20',
    price: '$899.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/mate20-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/matex-599x599-270x270.jpg',
  },
  {
    id: 85,
    title: 'Smartphone Mix',
    price: '$499.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/mimixc-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/mi7-599x599-270x270.jpg',
  },
  {
    id: 86,
    title: 'Smartphone Note 7',
    price: '$199.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/mi7-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/honorr-599x599-270x270.jpg',
  },
  {
    id: 87,
    title: 'Smartphone P30s',
    price: '$700.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/p30-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/p30-violet-599x599-270x270.jpg',
  },
  {
    id: 88,
    title: 'Smartwatch 2.0 LTE Wifi',
    oldPrice: '$149.00',
    price: '$129.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/watch-red-2-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/frontred-watch-799x799-270x270.png',
  },
  {
    id: 89,
    title: 'Smartwatch 4 series',
    oldPrice: '$199.00',
    price: '$149.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/iwatch-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/frontier-799x799-270x270.jpg',
  },
  {
    id: 90,
    title: 'Smartwatch 4.5w',
    oldPrice: '$299.00',
    price: '$249.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/amazing-galaxy-watch-270x270.jpg',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/Huawei-watch-799x799-270x270.jpg',
  },
  {
    id: 91,
    title: 'Smartwatch classic edition',
    oldPrice: '$215.00',
    price: '$189.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/SAM-WATCH-270x270.jpg',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/sport-watcxh-799x799-270x270.jpg',
  },
  {
    id: 92,
    title: 'Smartwatch Fronier',
    oldPrice: '$239.00',
    price: '$200.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/galaxy-watch-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/galaxy-fi-799x799-270x270.jpg',
  },
  {
    id: 93,
    title: 'Smartwatch Golang',
    oldPrice: '$220.00',
    price: '$200.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/frontier-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/SAM-WATCH-799x799-270x270.jpg',
  },
  {
    id: 94,
    title: 'Smartwatch sport edition',
    price: '$129.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/sport-watcxh-270x270.jpg',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/amazing-galaxy-watch-799x799-270x270.jpg',
  },
  {
    id: 95,
    title: 'Smartwatch Waterproof',
    price: '$725.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/blakc-watch-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/amazfit_bip_smartwatch_onyx_black_front-999x999-270x270.png',
  },
  {
    id: 96,
    title: 'Televisions Home Theater 65″ QLED',
    price: '$1,299.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/qled-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/75376-television-set-tv-screen-liquid-crystal-lcd-led-backlit_600x600-1-599x599-270x270.png',
  },
  {
    id: 97,
    title: 'Ultra Plus 128GB 3.0',
    price: '$100.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/sd-ps-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/sd-32-599x599-270x270.jpg',
  },
  {
    id: 98,
    title: 'White Solo 2 Wireless',
    price: '$129.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/H4_CharcoalGrey_1000x1000-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/H4_1000x1000_vapour-999x999-270x270.png',
  },
  {
    id: 99,
    title: 'White Solo 5 Wireless',
    price: '$129.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/H4_1000x1000_vapour-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/H6_Natural_1000x1000-999x999-270x270.png',
  },
  {
    id: 100,
    title: 'Widescreen 4K SUHD TV',
    oldPrice: '$399.00',
    price: '$299.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/51969-2-led-television-images-png-download-free_600x600-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/75376-television-set-tv-screen-liquid-crystal-lcd-led-backlit_600x600-1-599x599-270x270.png',
  },
  {
    id: 101,
    title: 'Wireless Audio System',
    oldPrice: '$299.00',
    price: '$249.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/A9_white_2500-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/A9_white_1000-999x999-270x270.png',
  },
  {
    id: 102,
    title: 'Wireless headphone extra bass',
    oldPrice: '$299.00 ',
    price: '$249.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/0053_rgb_MP582-RGB-bttm_V2-1-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/16-black-headphones-png-image_600x600-599x599-270x270.png',
  },
  {
    id: 103,
    title: 'Wireless HeadPhones',
    oldPrice: '$69.00',
    price: '$49.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1-1-270x270.jpg',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/27-green-headphones-png-image_600x600-599x599-270x270.png',
  },
  {
    id: 104,
    title: 'Wireless Speaker Charge 3',
    oldPrice: '$299.00',
    price: '$209.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/52390-8-red-bluetooth-speaker-image-download-free-image_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/52319-4-red-bluetooth-speaker-download-free-image_600x600-599x599-270x270.png',
  },
  {
    id: 105,
    title: 'Wireless Speaker RGB',
    oldPrice: '$299.00',
    price: '$232.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/50534-5-bluetooth-speaker-image-free-clipart-hq_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/52390-8-red-bluetooth-speaker-image-download-free-image_600x600-599x599-270x270.png',
  },
  {
    id: 106,
    title: 'Wireless speaker solo 3',
    oldPrice: '$299.00',
    price: '$249.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/50672-3-black-bluetooth-speaker-image-free-png-hq_600x600-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/52309-7-red-bluetooth-speaker-image-png-free-photo_600x600-599x599-270x270.png',
  },
  {
    id: 107,
    title: 'WW Aqulus USB 3.0 Hybrid',
    price: '$100.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/sd-hybrid-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/uz-32gb-599x599-270x270.jpg',
  },
  {
    id: 108,
    title: 'WW Extreme Pro Flash 64 GB',
    price: '$100.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/sd-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/sd-32-599x599-270x270.jpg',
  },
  {
    id: 109,
    title: 'WW Flash 16GB USB 3.1',
    price: '$100.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/32gb-270x270.jpg',
    image2: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/uz-32gb-599x599-270x270.jpg',
  },
  {
    id: 110,
    title: 'ZZ Black Sports Watch',
    oldPrice: '$145.00',
    price: '$120.00',
    image1: 'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/01/product-66-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/04/ionic-slate-blue-burnt-orange-tpu-regular-0-ae6581782abecc91f23c5cdcf14198ab-1079x919-270x270.png',
  },
  {
    id: 111,
    title: 'ZZ Gamming Desk 16-core',
    price: '$1,500.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/32969-4-gaming-computer-free-download_800x800-1-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/69137-gaming-personal-laptop-computers-predator-desktop-computer_800x800-1-1-799x799-270x270.png',
  },
  {
    id: 112,
    title: 'ZZ Gamming PC FPS edition',
    price: '$1,499.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/32869-6-gaming-computer-picture_800x800-1-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/33021-6-gaming-computer_800x800-1-1-799x799-270x270.png',
  },
  {
    id: 113,
    title: 'ZZ Gamming PC Full 24inch Monitor',
    price: '$1,650.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/69137-gaming-personal-laptop-computers-predator-desktop-computer_800x800-1-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/32869-6-gaming-computer-picture_800x800-1-1-799x799-270x270.png',
  },
  {
    id: 114,
    title: 'ZZ Gamming tower special edition',
    price: '$1,700.00',
    image1:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/33021-6-gaming-computer_800x800-1-1-270x270.png',
    image2:
      'https://elab.stylemixthemes.com/demo-1/wp-content/uploads/sites/2/2019/05/32969-4-gaming-computer-free-download_800x800-1-1-799x799-270x270.png',
  },
];

export default data;
