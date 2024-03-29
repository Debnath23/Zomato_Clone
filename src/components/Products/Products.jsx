const Products = [
  {
    id: 1,
    image: "https://b.zmtcdn.com/data/pictures/chains/9/19090659/35a358a2f62f5f8cd33de6e6fc140dbd_o2_featured_v2.jpg" ,
    title: "Oven Story Pizza",
    description: "Pizza, Fast Food",
    rating: 4.4,
    deliveryTime: "30 min",
    forOne: 100,
  },
  {
    id: 2,
    image: "https://b.zmtcdn.com/data/pictures/7/18578307/d60d81d492555d99f95894d9bbb960b7_o2_featured_v2.jpg",
    title: "Sufi Palace",
    description: "Biryani, North Indian",
    rating: 4.2,
    deliveryTime: "29 min",
    forOne: 200,
  },
  {
    id: 3,
    image: "https://b.zmtcdn.com/data/pictures/chains/7/20797/7c440b99b4140cce88505e64bb690b0f_o2_featured_v2.jpg",
    title: "Arsalan",
    description: "Biryani, North Indian",
    rating: 4.4,
    deliveryTime: "44 min",
    forOne: 100,
  },
  {
    id: 4,
    image: "https://b.zmtcdn.com/data/pictures/6/18926316/f6db9eb540f8fe56a20a7dc8b92e93cc_o2_featured_v2.jpg",
    title: "Belgian Waffle ",
    description: "Desserts, Beverages",
    rating: 4.1,
    deliveryTime: "51 min",
    forOne: 250,
  },
  {
    id: 5,
    image: "https://b.zmtcdn.com/data/pictures/6/18761176/faa954598a51b5d2ead55d405a8f14b2_o2_featured_v2.jpg",
    title: "Lazeez Biryani",
    description: "Biryani, North Indian",
    rating: 3.6,
    deliveryTime: "20 min",
    forOne: 200,
  },
  {
    id: 6,
    image: "https://b.zmtcdn.com/data/pictures/5/18923265/4d505db29d6de653fe30af1815f1708c_o2_featured_v2.jpg",
    title: "Kochi Kalapata",
    description: "Bengali, North Indian",
    rating: 3.9,
    deliveryTime: "32 min",
    forOne: 200,
  },
  {
    id: 7,
    image: "https://b.zmtcdn.com/data/pictures/6/18390916/eab1029d47ac9942e15e636d68cb4e67_o2_featured_v2.jpg?output-format=webp",
    title: "Apna Dhaba",
    description: "North Indian",
    rating: 3.9,
    deliveryTime: "36 min",
    forOne: 100,
  },
  {
    id: 8,
    image: "https://b.zmtcdn.com/data/pictures/chains/9/21429/d505be0b3ee11e4f79581b7b9df2d04a_o2_featured_v2.jpg?output-format=webp",
    title: "Allen Kitchen",
    description: "Bengali, Sea Food",
    rating: 4.1,
    deliveryTime: "28 min",
    forOne: 100,
  },
  {
    id: 9,
    image: "https://b.zmtcdn.com/data/pictures/chains/7/20287/b91d431a1d217865e40a2261ab9752e3_o2_featured_v2.jpg",
    title: "KFC",
    description: "Fast Food, Burger, Biryani",
    rating: 4.1,
    deliveryTime: "33 min",
    forOne: 100,
  },
  {
    id: 10,
    image: "https://b.zmtcdn.com/data/pictures/chains/4/19193204/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg",
    title: "Burger King",
    description: "Burger, Fast Food, Dessert",
    rating: 3.8,
    deliveryTime: "45 min",
    forOne: 100,
  },
  {
    id: 11,
    image: "https://b.zmtcdn.com/data/pictures/6/21576/89d036bc4157a5dcad9b29b952716529_o2_featured_v2.jpg",
    title: "Kasturi Restaurant",
    description: "Bengali, Bangladeshi",
    rating: 4.1,
    deliveryTime: "54 min",
    forOne: 100,
  },
  {
    id: 12,
    image: "https://b.zmtcdn.com/data/pictures/chains/8/19137878/edae7f8ddd7d4b18a9f176c9a48331a4_o2_featured_v2.jpg",
    title: "Edabba",
    description: "Chinese, North Indian",
    rating: 4.1,
    deliveryTime: "35 min",
    forOne: 150,
  },
  {
    id: 13,
    image: "https://b.zmtcdn.com/data/pictures/6/20680286/a01ae6733e643acef236e7b7eb1357a4_o2_featured_v2.jpg",
    title: "New Arsalan Biryani",
    description: "Biryani, North Indian",
    rating: 3.5,
    deliveryTime: "45 min",
    forOne: 150,
  },
  {
    id: 14,
    image: "https://b.zmtcdn.com/data/pictures/8/21288/8b3bc793c5151b163bc4cfcb1c46a047_o2_featured_v2.jpg",
    title: "New Paul Dhaba",
    description: "Chinese, North Indian",
    rating: 3.5,
    deliveryTime: "30 min",
    forOne: 150,
  },
  {
    id: 15,
    image: "https://b.zmtcdn.com/data/pictures/8/20301618/e35c8b23400e7ca42aeff42972ca0f8f_o2_featured_v2.jpg",
    title: "Superfast Haji Biryani",
    description: "Biryani",
    rating: 3.8,
    deliveryTime: "35 min",
    forOne: 100,
  },
  {
    id: 16,
    image: "https://b.zmtcdn.com/data/pictures/chains/2/18926302/e2378445c7cf80813d2c49495ef61f9e_o2_featured_v2.jpg",
    title: "WOW! China",
    description: "Chinese, Oriental",
    rating: 3.8,
    deliveryTime: "37 min",
    forOne: 100,
  },
  {
    id: 17,
    image: "https://b.zmtcdn.com/data/pictures/chains/6/22656/41ca6e7531c39f4fabaa988756820b1c_o2_featured_v2.jpg",
    title: "Zam Zam Restaurant",
    description: "Biryani, Roll, North Indian",
    rating: 4.4,
    deliveryTime: "45 min",
    forOne: 150,
  },
  {
    id: 18,
    image: "https://b.zmtcdn.com/data/pictures/9/21539/47d96dea1966f978c8e9c7331c649194_o2_featured_v2.jpg",
    title: "McDonald's",
    description: "Barger, Fast Food",
    rating: 4.1,
    deliveryTime: "52 min",
    forOne: 100,
  },
  {
    id: 19,
    image: "https://b.zmtcdn.com/data/pictures/chains/0/20240/2666c7666fac8bb90186fa30a8b67519_o2_featured_v2.jpg",
    title: "Hatari",
    description: "Chinese, North Indian",
    rating: 4.4,
    deliveryTime: "42 min",
    forOne: 150,
  },
  {
    id: 20,
    image: "https://b.zmtcdn.com/data/pictures/chains/5/21125/d3104038b1830f341869f2bf2eb5539e_o2_featured_v2.jpg",
    title: "Mitra Cafe",
    description: "Sea Food, North Indian",
    rating: 4.5,
    deliveryTime: "33 min",
    forOne: 150,
  },
  {
    id: 21,
    image: "https://b.zmtcdn.com/data/pictures/chains/4/20464/3ddd27dc733fdb07d16ffcbfbc5e2309_o2_featured_v2.jpg",
    title: "Sher-E-Panjub",
    description: "North Indian, Roll",
    rating: 3.9,
    deliveryTime: "43 min",
    forOne: 250,
  },
  
];

export default Products;
