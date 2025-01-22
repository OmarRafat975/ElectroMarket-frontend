export const searchIcon = (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

export const profileIcon = (
  <svg
    className="w-6 h-6 "
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

export const cartIcon = (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

export const menuIcon = (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

export const backIcon = (
  <svg
    className="w-5 h-5"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    />
  </svg>
);

export const dropDownIcon = (
  <svg
    className="w-5 h-5 pb-1"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

export const crossIcon = (
  <svg
    className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

export const backHeadIcon = (
  <svg
    className="size-7"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </svg>
);

export const products = [
  {
    _id: '67460ca793cd395cfe75b151',
    name: 'Product 1',
    description: 'Product description',
    richDescription: 'Product richDescription',
    image: 'product-1.jpeg',
    images: ['product-1.jpeg', 'product-1-1.jpeg', 'product-1-2.jpeg'],
    brand: 'maker',
    price: 99,
    category1: {
      name: 'fridge',
    },
    category: {
      name: 'fridge',
    },
    countInStock: 2,
    rating: 3.5,
    numReviews: 5,
    isFeatured: true,
    dateCreated: '2024-11-26T18:00:07.203Z',
    __v: 0,
    id: '67460ca793cd395cfe75b151',
  },
  {
    _id: '67461d0e32d0ae886e5d7d06',
    name: 'Product 2',
    description: 'Product description',
    richDescription: 'Product richDescription',
    image: 'product-2.jpeg',
    images: ['product-2.jpeg', 'product-2-1.jpeg', 'product-2-2.jpeg'],
    brand: 'maker',
    price: 150,
    category: {
      name: 'stove',
    },
    countInStock: 1,
    rating: 3.5,
    numReviews: 10,
    isFeatured: true,
    dateCreated: '2024-11-26T19:10:06.273Z',
    __v: 0,
    id: '67461d0e32d0ae886e5d7d06',
  },
  {
    _id: '67509d4a3986b6016bf73e37',
    name: 'Product 3',
    description: 'Product description',
    richDescription: 'Product richDescription',
    image: 'product-2.jpeg',
    images: ['product-2.jpeg', 'product-2-1.jpeg', 'product-2-2.jpeg'],
    brand: 'maker',
    price: 150,
    category: {
      name: 'stove',
    },
    countInStock: 1,
    rating: 3.5,
    numReviews: 10,
    isFeatured: true,
    dateCreated: '2024-12-04T18:19:54.228Z',
    __v: 0,
    id: '67509d4a3986b6016bf73e37',
  },
  {
    _id: '67509d7d3986b6016bf73e3b',
    name: 'Product 3',
    description: 'Product description',
    richDescription: 'Product richDescription',
    image: 'product-2.jpeg',
    images: ['product-2.jpeg', 'product-2-1.jpeg', 'product-2-2.jpeg'],
    brand: 'maker',
    price: 150,
    category: {
      name: 'stove',
    },
    countInStock: 1,
    rating: 3.5,
    numReviews: 10,
    isFeatured: true,
    dateCreated: '2024-12-04T18:20:45.293Z',
    __v: 0,
    id: '67509d7d3986b6016bf73e3b',
  },
  {
    _id: '67509d903986b6016bf73e3e',
    name: 'Product 3',
    description: 'Product description',
    richDescription: 'Product richDescription',
    image: 'product-2.jpeg',
    images: ['product-2.jpeg', 'product-2-1.jpeg', 'product-2-2.jpeg'],
    brand: 'maker',
    price: 150,
    category: {
      name: 'stove',
    },
    countInStock: 1,
    rating: 3.5,
    numReviews: 10,
    isFeatured: true,
    dateCreated: '2024-12-04T18:21:04.829Z',
    __v: 0,
    id: '67509d903986b6016bf73e3e',
  },
  {
    _id: '67509dad3986b6016bf73e42',
    name: 'Product 3',
    description: 'Product description',
    richDescription: 'Product richDescription',
    image: 'product-2.jpeg',
    images: ['product-2.jpeg', 'product-2-1.jpeg', 'product-2-2.jpeg'],
    brand: 'maker',
    price: 150,
    category: {
      name: 'stove',
    },
    countInStock: 1,
    rating: 3.5,
    numReviews: 10,
    isFeatured: true,
    dateCreated: '2024-12-04T18:21:33.536Z',
    __v: 0,
    id: '67509dad3986b6016bf73e42',
  },
  {
    _id: '67509ec6899abec3fbe1e8d8',
    name: 'Product 3',
    description: 'Product description',
    richDescription: 'Product richDescription',
    image: 'product-2.jpeg',
    images: ['product-2.jpeg', 'product-2-1.jpeg', 'product-2-2.jpeg'],
    brand: 'maker',
    price: 150,
    category: {
      name: 'stove',
    },
    countInStock: 1,
    rating: 3.5,
    numReviews: 10,
    isFeatured: true,
    dateCreated: '2024-12-04T18:26:14.120Z',
    __v: 0,
    id: '67509ec6899abec3fbe1e8d8',
  },
  {
    _id: '67509f262ff84abe18e6ab6b',
    name: 'Product 3',
    description: 'Product description',
    richDescription: 'Product richDescription',
    image: 'product-2.jpeg',
    images: ['product-2.jpeg', 'product-2-1.jpeg', 'product-2-2.jpeg'],
    brand: 'maker',
    price: 150,
    category: {
      name: 'stove',
    },
    countInStock: 1,
    rating: 3.5,
    numReviews: 10,
    isFeatured: true,
    dateCreated: '2024-12-04T18:27:50.796Z',
    __v: 0,
    id: '67509f262ff84abe18e6ab6b',
  },
];
