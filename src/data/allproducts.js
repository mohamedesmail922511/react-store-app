// allcategories.js
const products = [
    {
        id:1,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting 1',
        price: 100,
        sale: null,
        color:[
            {
                color:'white',
                image:'/images/product-images/auto-parts-p-img2.jpg'
            },
            {
                color:'black',
                image:'/images/product-images/auto-parts-p-img3.jpg'
            },
            {
                color:'blue',
                image:'/images/product-images/auto-parts-p-img4.jpg'
            },
        ],
        size:['S','L','XL','XXL'],
        category: 'Men',
        image: '/images/collection/collection-page1.jpg',
        images: ['/images/product-images/auto-parts-p-img1.jpg',
            '/images/product-images/auto-parts-p-img2.jpg',
            '/images/product-images/auto-parts-p-img3.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
        ]
    },
    {
        id:2,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting 2',
        price: 100,
        sale: 50,
        color:[
            {
                color:'white',
                image:'/images/product-images/auto-parts-p-img2.jpg'
            },
            {
                color:'black',
                image:'/images/product-images/auto-parts-p-img3.jpg'
            },
            {
                color:'blue',
                image:'/images/product-images/auto-parts-p-img4.jpg'
            },
        ],
        size:['S','L','XL','XXL'],
        category: 'Kids',
        image: '/images/collection/collection-page2.jpg',
        images: ['/images/product-images/auto-parts-p-img1.jpg',
            '/images/product-images/auto-parts-p-img2.jpg',
            '/images/product-images/auto-parts-p-img3.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
        ]
    },
    {
        id:3,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting 3',
        price: 100,
        sale: 50,
        color:[
            {
                color:'white',
                image:'/images/product-images/auto-parts-p-img2.jpg'
            },
            {
                color:'black',
                image:'/images/product-images/auto-parts-p-img3.jpg'
            },
            {
                color:'blue',
                image:'/images/product-images/auto-parts-p-img4.jpg'
            },
        ],
        size:['S','L','XL','XXL'],
        category: 'Kids',
        image: '/images/collection/collection-page3.jpg',
        images: ['/images/product-images/auto-parts-p-img1.jpg',
            '/images/product-images/auto-parts-p-img2.jpg',
            '/images/product-images/auto-parts-p-img3.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
        ]
    },
    {
        id:4,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting 4',
        price: 100,
        sale: 50,
        category: 'Kids',
        image: '/images/collection/collection-page4.jpg',
        images: ['/images/product-images/auto-parts-p-img1.jpg',
            '/images/product-images/auto-parts-p-img2.jpg',
            '/images/product-images/auto-parts-p-img3.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
        ]
    },
    {
        id:5,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting 5',
        price: 100,
        sale: 50,
        color:[
            {
                color:'white',
                image:'/images/product-images/auto-parts-p-img2.jpg'
            },
            {
                color:'black',
                image:'/images/product-images/auto-parts-p-img3.jpg'
            },
            {
                color:'blue',
                image:'/images/product-images/auto-parts-p-img4.jpg'
            },
        ],
        size:[],
        category: 'Kids',
        image: '/images/collection/collection-page5.jpg',
        images: ['/images/product-images/auto-parts-p-img1.jpg',
            '/images/product-images/auto-parts-p-img2.jpg',
            '/images/product-images/auto-parts-p-img3.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
        ]
    },
    {
        id:6,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting 6',
        price: 100,
        sale: 50,
        color:[],
        size:['S','L','XL','XXL'],
        category: 'Kids',
        image: '/images/collection/collection-page6.jpg',
        images: ['/images/product-images/auto-parts-p-img1.jpg',
            '/images/product-images/auto-parts-p-img2.jpg',
            '/images/product-images/auto-parts-p-img3.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
        ]
    },
    {
        id:7,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting 7',
        price: 100,
        sale: 50,
        color:[
            {
                color:'white',
                image:'/images/product-images/auto-parts-p-img2.jpg'
            },
            {
                color:'black',
                image:'/images/product-images/auto-parts-p-img3.jpg'
            },
            {
                color:'blue',
                image:'/images/product-images/auto-parts-p-img4.jpg'
            },
        ],
        size:['S','L','XL','XXL'],
        category: 'Kids',
        image: '/images/collection/collection-page7.jpg',
        images: ['/images/product-images/auto-parts-p-img1.jpg',
            '/images/product-images/auto-parts-p-img2.jpg',
            '/images/product-images/auto-parts-p-img3.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
        ]
    },
    {
        id:8,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting 8',
        price: 100,
        sale: 50,
        color:[
            {
                color:'white',
                image:'/images/product-images/auto-parts-p-img2.jpg'
            },
            {
                color:'black',
                image:'/images/product-images/auto-parts-p-img3.jpg'
            },
            {
                color:'blue',
                image:'/images/product-images/auto-parts-p-img4.jpg'
            },
        ],
        size:['S','L','XL','XXL'],
        category: 'Kids',
        image: '/images/collection/collection-page8.jpg',
        images: ['/images/product-images/auto-parts-p-img1.jpg',
            '/images/product-images/auto-parts-p-img2.jpg',
            '/images/product-images/auto-parts-p-img3.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
        ]
    },
    
    {
        id:9,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting 1',
        price: 100,
        sale: null,
        color:[
            {
                color:'white',
                image:'/images/product-images/auto-parts-p-img2.jpg'
            },
            {
                color:'black',
                image:'/images/product-images/auto-parts-p-img3.jpg'
            },
            {
                color:'blue',
                image:'/images/product-images/auto-parts-p-img4.jpg'
            },
        ],
        size:['S','L','XL','XXL'],
        category: 'Men',
        image: '/images/collection/collection-page1.jpg',
        images: ['/images/product-images/auto-parts-p-img1.jpg',
            '/images/product-images/auto-parts-p-img2.jpg',
            '/images/product-images/auto-parts-p-img3.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
            '/images/product-images/auto-parts-p-img5.jpg',
        ]
    },
    {
        id:10,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting 2',
        price: 100,
        sale: 50,
        category: 'Kids',
        image: '/images/collection/collection-page2.jpg',
        images: ['/images/product-images/auto-parts-p-img1.jpg',
            '/images/product-images/auto-parts-p-img2.jpg',
            '/images/product-images/auto-parts-p-img3.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
            '/images/product-images/auto-parts-p-img5.jpg',
        ]
    },
    {
        id:11,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting 3',
        price: 100,
        sale: 50,
        color:[
            {
                color:'white',
                image:'/images/product-images/auto-parts-p-img2.jpg'
            },
            {
                color:'black',
                image:'/images/product-images/auto-parts-p-img3.jpg'
            },
            {
                color:'blue',
                image:'/images/product-images/auto-parts-p-img4.jpg'
            },
        ],
        size:['S','L','XL','XXL'],
        category: 'Kids',
        image: '/images/collection/collection-page3.jpg',
        images: ['/images/product-images/auto-parts-p-img1.jpg',
            '/images/product-images/auto-parts-p-img2.jpg',
            '/images/product-images/auto-parts-p-img3.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
            '/images/product-images/auto-parts-p-img5.jpg',
        ]
    },
    {
        id:12,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting 4',
        price: 100,
        sale: 50,
        color:[
            {
                color:'white',
                image:'/images/product-images/auto-parts-p-img2.jpg'
            },
            {
                color:'black',
                image:'/images/product-images/auto-parts-p-img3.jpg'
            },
            {
                color:'blue',
                image:'/images/product-images/auto-parts-p-img4.jpg'
            },
        ],
        size:['S','L','XL','XXL'],
        category: 'Kids',
        image: '/images/collection/collection-page4.jpg',
        images: ['/images/product-images/auto-parts-p-img1.jpg',
            '/images/product-images/auto-parts-p-img2.jpg',
            '/images/product-images/auto-parts-p-img3.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
            '/images/product-images/auto-parts-p-img5.jpg',
        ]
    },
    {
        id:13,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting 5',
        price: 100,
        sale: 50,
        category: 'Kids',
        image: '/images/collection/collection-page5.jpg',
        images: ['/images/product-images/auto-parts-p-img1.jpg',
            '/images/product-images/auto-parts-p-img2.jpg',
            '/images/product-images/auto-parts-p-img3.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
            '/images/product-images/auto-parts-p-img5.jpg',
        ]
    },
    {
        id:14,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting 6',
        price: 100,
        sale: 50,
        color:[
            {
                color:'white',
                image:'/images/product-images/auto-parts-p-img2.jpg'
            },
            {
                color:'black',
                image:'/images/product-images/auto-parts-p-img3.jpg'
            },
            {
                color:'blue',
                image:'/images/product-images/auto-parts-p-img4.jpg'
            },
        ],
        size:['S','L','XL','XXL'],
        category: 'Kids',
        image: '/images/collection/collection-page6.jpg',
        images: ['/images/product-images/auto-parts-p-img1.jpg',
            '/images/product-images/auto-parts-p-img2.jpg',
            '/images/product-images/auto-parts-p-img3.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
            '/images/product-images/auto-parts-p-img5.jpg',
        ]
    },
    {
        id:15,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting 7',
        price: 100,
        sale: 50,
        category: 'Kids',
        image: '/images/collection/collection-page7.jpg',
        images: ['/images/product-images/auto-parts-p-img1.jpg',
            '/images/product-images/auto-parts-p-img2.jpg',
            '/images/product-images/auto-parts-p-img3.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
            '/images/product-images/auto-parts-p-img5.jpg',
        ]
    },
    {
        id:16,
        name: 'Lorem Ipsum is simply dummy text of the printing and typesetting 8',
        price: 100,
        sale: 50,
        color:[
            {
                color:'white',
                image:'/images/product-images/auto-parts-p-img2.jpg'
            },
            {
                color:'black',
                image:'/images/product-images/auto-parts-p-img3.jpg'
            },
            {
                color:'blue',
                image:'/images/product-images/auto-parts-p-img4.jpg'
            },
        ],
        size:['S','L','XL','XXL'],
        category: 'Kids',
        image: '/images/collection/collection-page8.jpg',
        images: ['/images/product-images/auto-parts-p-img1.jpg',
            '/images/product-images/auto-parts-p-img2.jpg',
            '/images/product-images/auto-parts-p-img3.jpg',
            '/images/product-images/auto-parts-p-img4.jpg',
            '/images/product-images/auto-parts-p-img5.jpg',
        ]
    },
];

export default products;
