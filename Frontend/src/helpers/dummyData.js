const first = "/assets/images/carousel1.webp";
const second = "/assets/images/carousel2.webp";
const third = "/assets/images/carousel1.webp";
const card1 = "/assets/images/card1.jpg";
const card12 = "/assets/images/card12.jpg";
const card3 = "/assets/images/card3.jpg";
const card33 = "/assets/images/card33.jpg";
const card4 = "/assets/images/card4.jpg";
const pendent = "/assets/images/pendent.jpg"
const pendent2 = "/assets/images/pendent2.jpg"


const four = "/assets/images/card9.jpg";
const five = "/assets/images/card5.jpg";
const six = "/assets/images/card8.jpg";
const seven = "/assets/images/card14.jpg";
const eight = "/assets/images/card13.jpg";

export const homeSliderData = [
  {
    imageUrl: first,
    link: "https://www.example1.com",
    buttonText: "Learn More",
  },
  {
    imageUrl: second,
    link: "https://www.example2.com",
    buttonText: "View Details",
  },
  {
    imageUrl: third,
    link: "https://www.example3.com",
    buttonText: "Buy Now",
  },
  {
    imageUrl: first,
    link: "https://www.example3.com",
    buttonText: "Buy Now",
  },
  {
    imageUrl: second,
    link: "https://www.example3.com",
    buttonText: "Buy Now",
  },
];

export const middleBannerData = [
  {
    imageUrl: card1,
    link: "https://www.example1.com",
    buttonText: "test",
     heading:'Your Signature Sparkle',
    subheading: 'Shine with timeless grace.'
  },
  {
    imageUrl: second,
    link: "https://www.example2.com",
    buttonText: "middle",
    heading:'Timeless Elegance',
    subheading: 'Discover rings that speak luxury.'
  },
  {
    imageUrl: third,
    link: "https://www.example3.com",
    buttonText: "new",
      heading:'Lustrous Loops',
    subheading: 'Jewelry that defines style.'
  },
  {
    imageUrl: first,
    link: "https://www.example3.com",
    buttonText: "middle",
     heading:'Your Signature Sparkle',
    subheading: 'Elegance, sealed in gold.'
  },
  {
    imageUrl: pendent2,
    link: "https://www.example3.com",
    buttonText: "Buy Now",
     heading:' Bold. Brilliant. You',
    subheading: 'Grace in every sparkle.'
  },
];

export const dummyData = [
  {
    id: 1,
    image: pendent,
    type: "Necklace",
    name: "Rose Gold Pendant Necklace",
    price: 10,
    discount: "-15% Discount",
    tags: [
      { type: "discount", value: "30% OFF" },
      { type: "highlight", value: "Best Seller" },
    ],
    hoverImage: pendent,
    multipleQuantity: true,
    quantityOptions: ["16 inches", "18 inches", "20 inches"],
    description:
     "A stunning rose gold pendant necklace crafted with elegance. Perfect for any occasion and designed to shine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: pendent,
      },
      {
        imageUrl: pendent,
      },
    ],
    isFeatured: true,
    isBestSeller: true,
    category: 'Necklaces',
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: 2,
    image: pendent2,
    type: "Necklace",
    name: "Gold plated Pendant ",
    price: 89.99,
    discount: "-20% Discount",
    tags: [{ type: "highlight", value: "New Arrival" }],
    hoverImage: pendent2,
    multipleQuantity: false,
    description:
     "A beautifully crafted silver heart pendant necklace, designed to add a touch of elegance and sophistication to any outfit.",
    inStock: false, // Added inStock property
    outOfStock: true, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: pendent2,
      },
      {
        imageUrl: pendent2,
      },
      {
        imageUrl: pendent2,
      },
      {
        imageUrl: pendent2,
      },
    ],
    isFeatured: true,
    category: 'Necklaces',
    createdAt: "2024-02-04T10:30:00Z",
  },
  {
    id: 3,
    image: card4,
    type: "Necklace",
    name: "Elegant Gold Necklace",
    price: 99.99,
    discount: "-10% Discount",
    hoverImage: card4,
    multipleQuantity: true,
    quantityOptions: ["16 inches", "18 inches", "20 inches"],
    description:
    "An elegant gold necklace crafted with precision, perfect for elevating any outfit with a touch of sophistication.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: card4,
      },
      {
        imageUrl: card4,
      },
    ],
    isBestSeller: true,
    category: 'Necklaces',
    createdAt: "2023-12-17T10:30:00Z",
  },
  {
    id: 4,
    image: card1,
    type: "Ring",
    name: "Elegant Ring",
    price: 69.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: card1,
    multipleQuantity: true,
    quantityOptions: ["Size 6", "Size 7", "Size 8"],
    description:
     "This premium ring kit includes three stunning adjustable rings crafted from high-quality materials. Perfect for adding a touch of elegance to any outfit.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: card1,
      },
      {
        imageUrl: card1,
      },
    ],
    isFeatured: true,
    category: 'Rings',
    createdAt: "2023-08-15T10:30:00Z",
  },
  {
    id: 5,
    image: five,
    type: "Earring",
    name: "Elegant Gold Hoop Earrings",
    price: 69.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: five,
    multipleQuantity: true,
    quantityOptions: ["Small", "Medium"],
    description:
    "A pair of beautifully crafted gold hoop earrings, perfect for any occasion. Designed for comfort and style, made with high-quality materials.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: five,
      },
      {
        imageUrl: five,
      },
    ],
    isFeatured: true,
    category: 'Earrings',
    createdAt: "2023-08-15T10:30:00Z",
  },
  {
    id: 6,
    image: card3,
    type: "Earring",
    name: "Silver Hoop Earrings",
    price: 69.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: card3,
    multipleQuantity: true,
    quantityOptions: ["Small", "Medium", "Large"],
    description:
     "A pair of elegant silver hoop earrings, crafted for timeless style. Perfect for daily wear or special occasions.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: card3,
      },
      {
        imageUrl: card33,
      },
    ],
    isFeatured: true,
    category: 'Earrings',
    createdAt: "2023-08-15T10:30:00Z",
  },
  {
    id: 7,
    image: seven,
    type: "Braclet",
    name: "Elegant Silver Bracelet",
    price: 69.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: seven,
    multipleQuantity: true,
    quantityOptions: ["Small", "Medium", "Large"],
    description:"An elegant silver bracelet crafted with precision and care. Perfect for adding a touch of sophistication to any outfit.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: seven,
      },
      {
        imageUrl: five,
      },
    ],
    isFeatured: true,
    category: 'Braclet',
    createdAt: "2023-08-15T10:30:00Z",
  },
  {
    id: 8,
    image: eight,
    type: "Braclet",
    name: "Luxury Gold Bracelet",
    price: 69.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: eight,
    multipleQuantity: true,
    quantityOptions: ["Small", "Medium", "Large"],
    description:
     "A luxurious gold bracelet featuring a sleek and modern design. Perfect for any occasion and crafted with precision.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: eight,
      },
      {
        imageUrl: five,
      },
    ],
    isFeatured: true,
    category: 'Braclet',
    createdAt: "2023-08-15T10:30:00Z",
  },
  {
    id: 9,
    image: card1,
    type: "Necklace",
    name: "Rose Gold Pendant Necklace",
    price: 10,
    discount: "-15% Discount",
    tags: [
      { type: "discount", value: "30% OFF" },
      { type: "highlight", value: "Best Seller" },
    ],
    hoverImage: card1,
    multipleQuantity: true,
    quantityOptions: ["16 inches", "18 inches", "20 inches"],
    description:
     "A stunning rose gold pendant necklace crafted with elegance. Perfect for any occasion and designed to shine.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: card1,
      },
      {
        imageUrl: card1,
      },
    ],
    isFeatured: true,
    isBestSeller: true,
    category: 'Necklaces',
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: 10,
    image:card3 ,
    type: "Earrings",
    name: "Silver Hoop Earrings",
    price: 89.99,
    discount: "-20% Discount",
    tags: [{ type: "highlight", value: "New Arrival" }],
    hoverImage: card3,
    multipleQuantity: false,
    description:
     "A beautifully crafted silver heart pendant necklace, designed to add a touch of elegance and sophistication to any outfit.",
    inStock: false, // Added inStock property
    outOfStock: true, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: card3,
      },
      {
        imageUrl: card3,
      },
      {
        imageUrl: card3,
      },
      {
        imageUrl: card3,
      },
    ],
    isFeatured: true,
    category: 'Earrings',
    createdAt: "2024-02-04T10:30:00Z",
  },
  {
    id: 11,
    image: card12,
    type: "Nacklace",
    name: "Perl Necklace",
    price: 99.99,
    discount: "-10% Discount",
    hoverImage: card1,
    multipleQuantity: true,
    quantityOptions: ["16 inches", "18 inches", "20 inches"],
    description:
    "An elegant gold necklace crafted with precision, perfect for elevating any outfit with a touch of sophistication.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: card1,
      },
      {
        imageUrl: card1,
      },
    ],
    isBestSeller: true,
    category: 'Necklaces',
    createdAt: "2023-12-17T10:30:00Z",
  },
  {
    id: 12,
    image: four,
    type: "Ring",
    name: "Elegant Ring",
    price: 69.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: four,
    multipleQuantity: true,
    quantityOptions: ["Size 6", "Size 7", "Size 8"],
    description:
     "This premium ring kit includes three stunning adjustable rings crafted from high-quality materials. Perfect for adding a touch of elegance to any outfit.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: four,
      },
      {
        imageUrl: five,
      },
    ],
    isFeatured: true,
    category: 'Rings',
    createdAt: "2023-08-15T10:30:00Z",
  },
  {
    id: 13,
    image: five,
    type: "Earring",
    name: "Elegant Gold Hoop Earrings",
    price: 69.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: five,
    multipleQuantity: true,
    quantityOptions: ["Small", "Medium"],
    description:
    "A pair of beautifully crafted gold hoop earrings, perfect for any occasion. Designed for comfort and style, made with high-quality materials.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: five,
      },
      {
        imageUrl: five,
      },
    ],
    isFeatured: true,
    category: 'Earrings',
    createdAt: "2023-08-15T10:30:00Z",
  },
  {
    id: 14,
    image: six,
    type: "Earring",
    name: "Silver Hoop Earrings",
    price: 69.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: six,
    multipleQuantity: true,
    quantityOptions: ["Small", "Medium", "Large"],
    description:
     "A pair of elegant silver hoop earrings, crafted for timeless style. Perfect for daily wear or special occasions.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: six,
      },
      {
        imageUrl: five,
      },
    ],
    isFeatured: true,
    category: 'Earrings',
    createdAt: "2023-08-15T10:30:00Z",
  },
  {
    id: 15,
    image: eight,
    type: "Braclet",
    name: "Luxury Gold Bracelet",
    price: 69.99,
    discount: "-5% Discount",
    tags: [{ type: "highlight", value: "Exclusive" }],
    hoverImage: eight,
    multipleQuantity: true,
    quantityOptions: ["Small", "Medium", "Large"],
    description:
     "A luxurious gold bracelet featuring a sleek and modern design. Perfect for any occasion and crafted with precision.",
    inStock: true, // Added inStock property
    outOfStock: false, // Added outOfStock property
    sliderImages: [
      {
        imageUrl: eight,
      },
      {
        imageUrl: five,
      },
    ],
    isFeatured: true,
    category: 'Braclet',
    createdAt: "2023-08-15T10:30:00Z",
  },
];

export const allCategories = [
  { name: "Rings", link: "/category/rings", img: second },
  { name: "Earrings", link: "/category/earrings", img: third },
  { name: "Necklaces", link: "/category/necklaces", img: second },
  { name: "Braclet", link: "/category/Braclet", img: second },
  { name: "New Arrivals", link: "/category/new-arrivals", img: third },
  { name: "Best Sellers", link: "/category/best-sellers", img: five },
  { name: "Luxury Collection", link: "/category/luxury", img: six },
  { name: "Gift Sets", link: "/category/gift-sets", img: seven },
  { name: "Custom Designs", link: "/category/custom-designs", img: eight },
  { name: "Trending", link: "/category/trending", img: second },
  { name: "Shop All", link: "/category/all", img: six },
];

