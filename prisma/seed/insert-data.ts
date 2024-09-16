import { MerchandiseType, Prisma, PrismaClient } from "@prisma/client";

export const laptops = [
  {
    title:
      "لپ تاپ ایسوس 15.6 اینچی مدل TUF Gaming F15 FX507ZC i5 12500H 32GB 1TB RTX3050",
    subtitle:
      "Asus TUF Gaming F15 FX507ZC i5 12500H 32GB 1TB SSD 4GB RTX3050 FHD 15.6 inch Laptop",
    price: 50_300_000,
    ram: "32 گیگابایت",
    hdd: "ندارد",
    webcam: "دارد",
    screenSize: "15.6 اینچ",
    panel: "IPS Wide View",
    ssd: "1 ترابایت",
    cpu: "12",
    type: "gaming ",
    brand: "Asus",
    image: "/Asus-TUF.webp",
  },
  {
    title:
      "لپ تاپ ایسوس 15.6 اینچی مدل Vivobook 15 X1504ZA i7 1255U 16GB 512GB",
    subtitle: "ASUS VivoBook 15 X1504ZA i7 1255U 16GB RAM 512GB SSD Iris Xe",
    price: 32_700_000,
    ram: "16 گیگابایت",
    color: "نقره ای",
    hdd: "ندارد",
    webcam: "دارد",
    screenSize: "15.6 اینچ",
    panel: "TFT",
    ssd: "512 گیگابایت",
    cpu: "12",
    type: "عمومی/ مالتی مدیا",
    brand: "Asus",
    image: "/ASUS-VivoBook-gray.webp",
  },
  {
    title: "لپ‌ تاپ 15.6 اینچی ایسوس Vivobook 15 X1502ZA i3 1215U 8GB 512GB",
    subtitle: "ASUS Vivobook 15 X1502ZA i3 1215U 8GB 512GB SSD 15.6 Inch",
    price: 20_500_000,
    ram: "8 گیگابایت",
    hdd: "ندارد",
    webcam: "دارد",
    screenSize: "15.6 اینچ",
    panel: "TN",
    ssd: "512 گیگابایت",
    cpu: "12",
    type: "عمومی/ مالتی مدیا",
    brand: "Asus",
    image: "/vivobook-15-gray.webp",
  },
  {
    title: "لپ تاپ لنوو 15.6 اینچی مدل IdeaPad Slim 3 i5 13420H 8GB 512GB",
    subtitle: "Lenovo IdeaPad Slim 3 i5 13420H 8GB RAM 512GB SSD UHD Graphics",
    price: 24_688_000,
    ram: "8 گیگابایت",
    hdd: "ندارد",
    webcam: "دارد",
    screenSize: "15.6 اینچ",
    panel: "TN",
    ssd: "512 گیگابایت",
    cpu: "11",
    type: "عمومی/ مالتی مدیا",
    brand: "Lenovo",
    image: "/IdeaPad-3.webp",
  },
  {
    title: "لپ تاپ لنوو 15.6 اینچی مدل LOQ i5 12450H 16GB 512GB RTX 2050",
    subtitle: "Lenovo LOQ 15IRH8 i5 12450H 16GB RAM 512GB SSD RTX 2050",
    price: 37_000_000,
    ram: "16 گیگابایت",
    hdd: "ندارد",
    webcam: "دارد",
    screenSize: "15.6 اینچ",
    panel: "IPS",
    ssd: "512 گیگابایت",
    cpu: "12",
    type: "گیمینگ",
    brand: "Lenovo",
    image: "/Lenovo-LOQ.webp",
  },
  {
    title: "لپ تاپ لنوو 15.6 اینچی مدل IdeaPad N4020 4GB 256GB",
    subtitle: "IdeaPad 1 Celeron N4020 4GB RAM 256GB SSD Intel UHD",
    price: 10_744_000,
    ram: "4 گیگابایت",
    hdd: "ندارد",
    webcam: "دارد",
    screenSize: "15.6 اینچ",
    panel: "TN",
    ssd: "512 گیگابایت",
    cpu: "12",
    type: "عمومی/ مالتی مدیا",
    brand: "Lenovo",
    image: "/Celeron.webp",
  },
];

export const watches = [
  {
    title: "ساعت هوشمند میبرو مدل T2",
    subtitle: "Mibro T2 GD Smartwatch",
    price: 2_499_000,
    color: [
      {
        title: "طلائی",
        image: "/Mibro-t2-talayi.webp",
      },
      {
        title: "سرمه‌ای",
        image: "/Mibro-t2-sormeyi.webp",
      },
    ],
    screenForm: "مستطیل",
    sim: "دارد",
    abilityTalk: "دارد",
    brand: "Xiaomi",
    style: "کلاسیک",
  },
  {
    title: "ساعت هوشمند میبرو مدل C3",
    subtitle: "Mibro C3 smart Watch",
    price: 1_100_000,
    color: [
      {
        title: "سرمه ای",
        image: "/Mibro-c3-sormeyi.webp",
      },
    ],
    screenForm: "مستطیل",
    sim: "ندارد",
    abilityTalk: "دارد",
    brand: "Xiaomi",
    style: "اسپورت",
  },
  {
    title: "ساعت هوشمند شیائومی مدل Band 7 Pro",
    subtitle: "Xiaomi Smart Band 7 Pro",
    price: 3_169_000,
    color: [{ title: "مشکی", image: "/Mibro-c3-sormeyi.webp" }],
    screenForm: "مستطیل",
    sim: "ندارد",
    abilityTalk: "ندارد ",
    brand: "Xiaomi",
    style: "اسپورت",
  },
  {
    title: "ساعت هوشمند سامسونگ مدل Galaxy Watch4 Classic 46mm",
    subtitle: "Samsung Galaxy Watch4 (R890) Classic 46mm",
    price: 6_259_000,
    color: [
      {
        title: "مشکی",
        image: "/galaxy-watch-4-meshki.webp",
      },
      {
        title: "نقره‌ای",
        image: "/galaxy-watch-4-gray.webp",
      },
    ],
    screenForm: "گرد",
    sim: "ندارد",
    abilityTalk: "دارد",
    brand: "Samsung",
    style: "کلاسیک",
  },
  {
    title: "ساعت هوشمند سامسونگ مدل Galaxy Watch6 40mm",
    subtitle: "Samsung Galaxy Watch6 40mm",
    price: 8_689_000,
    color: [
      {
        title: "مشکی",
        image: "/galaxy-watch-6-meshki.webp",
      },
      {
        title: "طلائی",
        image: "/galaxy-watch-6-talayi.webp",
      },
    ],
    screenForm: "گرد",
    sim: "ندارد",
    abilityTalk: "دارد",
    brand: "Samsung",
    style: "اسپورت",
  },
  {
    title: "ساعت هوشمند سامسونگ مدل Galaxy Watch6 Classic 47mm Astro Edition",
    subtitle: "Samsung Galaxy Watch6 Classic 47mm Astro Edition",
    price: 15_780_000,
    color: [
      {
        title: "مشکی",
        image: "/galaxy-watch-6-classic.webp",
      },
    ],
    screenForm: "گرد",
    sim: "دارد",
    abilityTalk: "دارد",
    brand: "Samsung",
    style: "کلاسیک",
  },
  {
    title: "اپل واچ SE Gen2 2023 سایز 40 میلی متری",
    subtitle: "Apple Watch SE Gen2 2023 40mm Aluminum Silicone Sport Band",
    price: 12_930_000,
    color: [
      {
        title: "مشکی",
        image: "/apple-watch-se-gen2-meshki",
      },
      {
        title: "آبی",
        image: "/apple-watch-se-gen2-abi.webp",
      },
      {
        title: "کرم",
        image: "/apple-watch-se-gen2-kerem",
      },
    ],
    screenForm: "مستطیل",
    sim: "ندارد",
    abilityTalk: "دارد",
    brand: "Apple",
    style: "اسپورت",
  },
  {
    title: "اپل واچ اولترا 2 سایز 49 میلی متری بند اوشن",
    subtitle: "Apple Watch Ultra 2 Titanium Case 49mm Ocean",
    price: 45_500_000,
    color: [
      {
        title: "آبی",
        image: "/apple-watch-ultra-abi.webp",
      },
      {
        title: "سفید",
        image: "/apple-watch-ultra-sefid.webp",
      },
      {
        title: "نارنجی",
        image: "/apple-watch-ultra-narengi.webp",
      },
    ],
    screenForm: "مستطیل",
    sim: "ندارد",
    abilityTalk: "دارد",
    brand: "Apple",
    style: "اسپورت",
  },
  {
    title: "اپل واچ اولترا 2 سایز 49 میلی متری بند لوپ آلپاین",
    subtitle: "Apple Watch Ultra 2 Titanium Case 49mm Loop Alpine",
    price: 44_500_000,
    color: [
      {
        title: "بنفش",
        image: "/apple-watch-ultra2-banafsh.webp",
      },
      {
        title: "سبز",
        image: "/apple-watch-ultra2-sabz.webp",
      },
      {
        title: "آبی",
        image: "/apple-watch-ultra2-abi.webp",
      },
    ],
    screenForm: "مستطیل",
    sim: "ندارد",
    abilityTalk: "دارد",
    brand: "Apple",
    style: "اسپورت",
  },
];

export const tablets = [
  {
    title:
      "تبلت اپل مدل iPad Pro 11 WiFi (2024) ظرفیت 256 گیگابایت رم 8 گیگابایت",
    subtitle: "Apple iPad Pro 11 WiFi (2024) 256/8GB",
    color: [
      {
        title: "نقره‌ای",
        image: "/iPad-Pro-11-gray.webp",
      },
      {
        title: "مشکی",
        image: "/iPad-Pro-11-meshki.webp",
      },
    ],
    price: 69_500_000,
    SimCardCount: "ندارد",
    screenSize: "11 این",
    internalMemory: "256 گیگابایت",
    brand: "Apple",
    ram: "8 گیگابایت",
  },
  {
    title:
      "تبلت اپل مدل iPad 10th Gen (2022) Wi-Fi ظرفیت 256 گیگابایت رم 4 گیگابایت",
    subtitle: "Apple iPad 10th Gen (2022) Wi-Fi 256GB/4GB",
    color: [
      {
        title: "زرد",
        image: "/iPad-10th-zard.webp",
      },
      {
        title: "آبی",
        image: "/iPad-10th-abi.webp",
      },
    ],
    price: 37_500_000,
    SimCardCount: "ندارد",
    screenSize: "11 این",
    internalMemory: "256 گیگابایت",
    brand: "Apple",
    ram: "4 گیگابایت",
  },
  {
    title: "تبلت اپل مدل (iPad 10.2 2021 (Wifi ظرفیت 64 گیگابایت رم 3 گیگابایت",
    subtitle: "Apple iPad 10.2 2021 (Wifi) 64GB RAM 3GB Tablet",
    color: [
      {
        title: "نقره‌ای",
        image: "/iPad-10-gray.webp",
      },
    ],
    price: 17_800_000,
    SimCardCount: "ندارد",
    screenSize: "10.2 این",
    internalMemory: "64 گیگابایت",
    brand: "Apple",
    ram: "3 گیگابایت",
  },
  {
    title:
      "تبلت سامسونگ مدل Galaxy Tab A9 4G ظرفیت 64 گیگابایت رم 4 گیگابایت (SM-X115)",
    subtitle: "Samsung Galaxy Tab A9 4G 64GB 4GB Tablet",
    color: [
      {
        title: "نقره‌ای",
        image: "-Tab-A9-gray.webp",
      },
      {
        title: "خاکستری",
        image: "-Tab-A9-khakestari.webp",
      },
    ],
    price: 12_050_000,
    SimCardCount: "نانو سیم، ای سیم",
    screenSize: "8.7 اینچ",
    internalMemory: "64 گیگابایت ",
    brand: "Samsung",
    ram: "4 گیگابایت",
  },
  {
    title:
      "تبلت سامسونگ مدل Galaxy Tab A9 Plus 5G ظرفیت 64 گیگابایت رم 4 گیگابایت (SM-X216)",
    subtitle: "Samsung Galaxy Tab A9 Plus 5G 64GB 4GB Tablet",
    color: [
      {
        title: "خاکستری",
        image: "-galaxy-tab-a9-pro-khakestari.webp",
      },
      {
        title: "سرمه‌ای",
        image: "-galaxy-tab-a9-pro-sormeyi.webp",
      },
      {
        title: "نقره‌ای",
        image: "-galaxy-tab-a9-pro-gray.webp",
      },
    ],
    price: 18_991_000,
    SimCardCount: "نانو سیم، ای سیم (eSIM)",
    screenSize: "11 اینچ",
    internalMemory: "64 گیگابایت ",
    brand: "Samsung",
    ram: "4 گیگابایت",
  },
  {
    title:
      "تبلت سامسونگ مدل Galaxy Tab S9 Plus 5G ظرفیت 512 گیگابایت رم 12 گیگابایت",
    subtitle: "Galaxy Tab S9 Plus 5G 512GB 12G Tablet",
    color: [
      {
        title: "بژ",
        image: "-tab-s9-pro-bezh.webp",
      },
      {
        title: "خاکستری تیره",
        image: "-tab-s9-pro-sormeyi.webp",
      },
    ],
    price: 64_500_000,
    SimCardCount: "تک",
    screenSize: "12.4 اینچ",
    internalMemory: "512 گیگابایت ",
    brand: "Samsung",
    ram: "12 گیگابایت",
  },
];

export const mobiles = [
  {
    title:
      "گوشی موبایل اپل مدل iPhone 13 CH/A Not Active ظرفیت 256 گیگابایت - رم 4 گیگابایت",
    subtitle: "Apple iPhone 13 CH/A 256/4GB - Not Active",
    color: [
      {
        title: "صورتی",
        image: "/iphone-13-not-active-soorati.webp",
      },
      {
        title: "مشکی",
        image: "/iphone-13-not-active-meshki.webp",
      },
    ],
    price: 64_999_000,
    SimCardCount: "دو سیم کارت نانو سیم (همزمان فعال)",
    screenSize: "6.1 این",
    internalMemory: "256 گیگابایت",
    brand: "Apple",
    ram: "4 گیگابایت",
  },
  {
    title:
      "گوشی موبایل اپل مدل آیفون 13 پرو مکس نات اکتیو RK/A تک سیم کارت ظرفیت 512 گیگابایت رم 6 گیگابایت",
    subtitle: "Apple iPhone 13 Pro Max RK/A 512/6GB - Not Active",
    color: [
      {
        title: "آبی",
        image: "/iphone-13-promax-abi.webp",
      },
      {
        title: "طلایی",
        image: "/iphone-13-promax-talayi.webp",
      },
      {
        title: "نقره‌ای",
        image: "/iphone-13-promax-gray.webp",
      },
    ],
    price: 109_999_000,
    SimCardCount: "تک سیم کارت",
    screenSize: "6.7 این",
    internalMemory: "256 گیگابایت",
    brand: "Apple",
    ram: "6 گیگابایت",
  },
  {
    title:
      "گوشی موبایل اپل مدل iPhone 13 Pro RK/A نات اکتیو تک سیم کارت ظرفیت 512 گیگابایت رم 6 گیگابایت",
    subtitle: "Apple iPhone 13 Pro RK/A 512GB/6GB - Not Active",
    color: [
      {
        title: "آبی",
        image: "/iphone-13-abi.webp",
      },
      {
        title: "طلایی",
        image: "/iphone-13-pro-talayi.webp",
      },
      {
        title: "نقره‌ای",
        image: "/iphone-13-pro-gray.webp",
      },
    ],
    price: 95_999_000,
    SimCardCount: "تک سیم کارت",
    screenSize: "6.1 این",
    internalMemory: "512 گیگابایت",
    brand: "Apple",
    ram: "6 گیگابایت",
  },
  {
    title:
      "گوشی موبایل سامسونگ مدل Galaxy A15 4G ظرفیت 128 گیگابایت رم 4 گیگابایت - ویتنام",
    subtitle: "Samsung Galaxy A15 4G 128/4GB",
    color: [
      {
        title: "سرمه‌ای",
        image: "/A15(sormeyi).webp",
      },
      {
        title: "زرد",
        image: "/A15(zard).webp",
      },
      {
        title: "آبی‌روشن",
        image: "/A15(abi-roshan).webp",
      },
    ],
    price: 8_439_000,
    SimCardCount: "دو سیم کارت نانوسیم، هیبریدی (همزمان فعال)",
    screenSize: "6.5 اینچ",
    internalMemory: "128 گیگابایت ",
    brand: "Samsung",
    ram: "4 گیگابایت",
  },
  {
    title:
      "گوشی موبايل سامسونگ گلکسی A34 5G (SM-A346E/DSN) ظرفیت 128 گیگابایت رم 8 گیگابایت - ویتنام",
    subtitle: "Samsung Galaxy A34 5G (SM-A346E/DSN) 128/8GB - Vietnam",
    color: [
      {
        title: "سبز",
        image: "/A34-sabz.webp",
      },
      {
        title: "مشکی",
        image: "/A34-meshki.webp",
      },
    ],
    price: 15_649_000,
    SimCardCount: "دو سیم کارت نانوسیم، هیبریدی (همزمان فعال)",
    screenSize: "6.6 اینچ",
    internalMemory: "128 گیگابایت",
    brand: "Samsung",
    ram: "8 گیگابایت",
  },
  {
    title:
      "گوشی موبايل سامسونگ مدل Galaxy S23 FE 5G ظرفیت 256 گیگابایت رم 8 گیگابایت - ویتنام",
    subtitle: "Samsung Galaxy S23 FE 5G 256/8GB - Vietnam",
    color: [
      {
        title: "خاکستری",
        image: "/S23-FE-khakestari.webp",
      },
      {
        title: "سبز",
        image: "/S23-FE-sabz.webp",
      },
      {
        title: "بنفش",
        image: "/S23-FE-banafsh.webp",
      },
    ],
    price: 28_999_000,
    SimCardCount: "دو سیم کارت نانوسی (همزمان فعال)",
    screenSize: "6.4 اینچ",
    internalMemory: "256 گیگابایت",
    brand: "Samsung",
    ram: "8 گیگابایت",
  },
  {
    title:
      "گوشی موبایل شیائومی مدل Redmi Note 13 4G ظرفیت 256 گیگابایت رم 8 گیگابایت",
    subtitle: "Xiaomi Redmi Note 13 4G 256/8GB",
    color: [
      {
        title: "مشکی",
        image: "/1/Xiaomi-Redmi-Note-13-meshki.webp",
      },
      {
        title: "سبز",
        image: "/1/Xiaomi-Redmi-Note-13-sabz.webp",
      },
      {
        title: "آبی",
        image: "/1/Xiaomi-Redmi-Note-13-abi.webp",
      },
    ],
    price: 10_350_000,
    SimCardCount: "دو سیم کارت نانوسیم، (همزمان فعال)",
    screenSize: "6.7 اینچ",
    internalMemory: "256 گیگابایت ",
    brand: "Xiaomi",
    ram: "8 گیگابایت",
  },
  {
    title: "گوشی موبایل شیائومی Redmi 12 4G ظرفیت 256 گیگابایت رم 8 گیگابایت",
    subtitle: "Xiaomi Redmi 12 4G 256/8GB",
    color: [
      {
        title: "مشکی",
        image: "/2/Xiaomi-Redmi-12-meshki.webp",
      },
      {
        title: "نقزه‌ای",
        image: "/2/Xiaomi-Redmi-12-gray.webp",
      },
    ],
    price: 9_199_000,
    SimCardCount: "دو سیم کارت نانوسیم،  (همزمان فعال)",
    screenSize: "6.79 اینچ",
    internalMemory: "256 گیگابایت ",
    brand: "Xiaomi",
    ram: "8 گیگابایت",
  },
  {
    title: "گوشی موبايل پوکو مدل X6 Pro 5G ظرفیت 512 گیگابایت رم 12 گیگابایت",
    subtitle: "Poco X6 Pro 5G 512GB/12GB",
    color: [
      {
        title: "مشکی",
        image: "/3/Poco-meshki.webp",
      },
      {
        title: "خاکستری",
        image: "/3/Poco-khakestari.webp",
      },
    ],
    price: 20_329_000,
    SimCardCount: "دو سیم کارت نانوسیم،  (همزمان فعال)",
    screenSize: "6.67 اینچ",
    internalMemory: "512  گیگابایت ",
    brand: "Xiaomi",
    ram: "12 گیگابایت",
  },
];

const prisma = new PrismaClient();

type CreateData = Prisma.MerchandiseCreateInput;

async function main() {
  const createData = await Promise.all([
    // add laptops
    ...laptops.map<CreateData>((laptop) => {
      const features: Prisma.FeatureCreateManyMerchandiseInputEnvelope = {
        data: [
          { title: "ram", value: laptop.ram },
          { title: "hdd", value: laptop.hdd },
          { title: "webcam", value: laptop.webcam },
          { title: "screen size", value: laptop.screenSize },
          { title: "panel", value: laptop.panel },
          { title: "ssd", value: laptop.ssd },
          { title: "cpu", value: laptop.cpu },
          { title: "type", value: laptop.type },
        ],
      };

      return {
        title: laptop.title,
        description: laptop.subtitle,
        price: laptop.price,
        type: MerchandiseType.Laptop,
        brand: laptop.brand,
        features: {
          createMany: features,
        },
        images: {
          create: {
            path: `uploads/${laptop.image}`,
          },
        },
      };
    }),
    // add mobiles
    ...mobiles.map<CreateData>((mobile) => ({
      title: mobile.title,
      description: mobile.subtitle,
      price: mobile.price,
      type: MerchandiseType.Mobile,
      brand: mobile.brand,
      features: {
        createMany: {
          data: [
            { title: "Internal Memory", value: mobile.internalMemory },
            { title: "Screen Size", value: mobile.screenSize },
            { title: "Sim Card Count", value: mobile.SimCardCount },
            { title: "RAM", value: mobile.ram },
          ],
        },
      },
      images: {
        createMany: {
          data: mobile.color.map((color) => ({
            color: color.title,
            path: `uploads/${color.image}`,
          })),
        },
      },
    })),
    // add tablets
    ...tablets.map<CreateData>((tablet) => ({
      title: tablet.title,
      description: tablet.subtitle,
      price: tablet.price,
      type: MerchandiseType.Tablet,
      brand: tablet.brand,
      features: {
        createMany: {
          data: [
            { title: "Internal Memory", value: tablet.internalMemory },
            { title: "Screen Size", value: tablet.screenSize },
            { title: "Sim Card Count", value: tablet.SimCardCount },
            { title: "RAM", value: tablet.ram },
          ],
        },
      },
      images: {
        createMany: {
          data: tablet.color.map((color) => ({
            color: color.title,
            path: `uploads/${color.image}`,
          })),
        },
      },
    })),
    // add tablets
    ...watches.map<CreateData>((watch) => ({
      title: watch.title,
      description: watch.subtitle,
      price: watch.price,
      type: MerchandiseType.SmartWatch,
      brand: watch.brand,
      features: {
        createMany: {
          data: [
            { title: "Sim", value: watch.sim },
            { title: "Screen Form", value: watch.screenForm },
            { title: "Ability To Talk", value: watch.abilityTalk },
            { title: "Style", value: watch.style },
          ],
        },
      },
      images: {
        createMany: {
          data: watch.color.map((color) => ({
            color: color.title,
            path: `uploads/${color.image}`,
          })),
        },
      },
    })),
  ]);

  await Promise.all([
    createData.map(async (data) => {
      return await prisma.merchandise.create({
        data,
      });
    }),
  ]);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
