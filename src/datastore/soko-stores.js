import OhnestLogo from '../images/ohnest-logo.png';

//product images imports
/**
 * @todo optimize image imports using dynamic imports
 */
//cups
import cup1 from '../images/cup1.jpg';
import cup2 from '../images/cup2.jpg';
import cup3 from '../images/cup3.jpg';
import cup4 from '../images/cup4.jpg';
import cup5 from '../images/cup5.jpg';

//cookware
import cookware1 from '../images/cw1.jpeg';
import cookware2 from '../images/cw2.jpg';
import cookware3 from '../images/cw3.jpg';
import cookware4 from '../images/cw4.jpg';
import cookware5 from '../images/cw5.jpg';
import cookware6 from '../images/cw6.jpg';
import cookware7 from '../images/cw7.jpg';

//flasks
import flask1 from '../images/flask1.jpg';
import flask2 from '../images/flask2.jpg';
import flask3 from '../images/flask3.jpg';
import flask4 from '../images/flask4.jpg';
import flask5 from '../images/flask5.jpg';
import flask6 from '../images/flask6.jpg';

//footwear
import footwear1 from '../images/fw1.png';
import footwear2 from '../images/fw2.jpg';
import footwear3 from '../images/fw3.jpg';
import footwear4 from '../images/fw4.jpg';
import footwear5 from '../images/fw5.jpg';
import footwear6 from '../images/fw6.jpg';
import footwear7 from '../images/fw7.jpg';
import footwear8 from '../images/fw8.jpg';
import footwear9 from '../images/fw9.jpg';
import footwear10 from '../images/fw10.jpg';

//glasses
import glass1 from '../images/glass1.jpg';
import glass2 from '../images/glass2.jpg';
import glass3 from '../images/glass3.jpg';
import glass4 from '../images/glass4.jpg';
import glass5 from '../images/glass5.jpg';
import glass6 from '../images/glass6.jpg';
import glass7 from '../images/glass7.jpg';

//plates
import plate1 from '../images/plate1.jpg';
import plate2 from '../images/plate2.jpg';
import plate3 from '../images/plate3.jpg';
import plate4 from '../images/plate4.jpg';
import plate5 from '../images/plate5.jpg';

export const ohnestInvestmentsStore = {
    name: 'Ohnest Investments',
    address: 'Kayole Spine Road, P.C.E.A Kayole, Nairobi, Kenya',
    image_url: OhnestLogo,
    categories: [
        {
            id: 'c1',
            name: 'Cups',
            image_url: cup1,
            products: [
                {
                    id: 'p1',
                    name: 'Floating Cup (white)',
                    description: '',
                    images: [cup1],
                    price: 550,
                    discount_price: 400,
                },
                {
                    id: 'p2',
                    name: 'Modern Ceramic Cup',
                    description: '',
                    images: [cup2],
                    price: 100,
                },
                {
                    id: 'p3',
                    name: 'Le Gucci',
                    description: '',
                    images: [cup3],
                    price: 250,
                    discount_price: 200,
                },
                {
                    id: 'p4',
                    name: 'Timber Old School',
                    description: '',
                    images: [cup4],
                    price: 1000,
                },
                {
                    id: 'p5',
                    name: 'Genius Tea Cup',
                    description: '',
                    images: [cup5],
                    price: 250,
                },
            ]
        },
        {
            id: 'c2',
            name: 'Cookware',
            image_url: cookware1,
            products: [
                {
                    id: 'p6',
                    name: 'New Dessinni Non Stick',
                    description: '',
                    images: [cookware1],
                    price: 7500,
                    discount_price: 7000,
                },
                {
                    id: 'p7',
                    name: 'Matrix Kitchen Set',
                    description: '',
                    images: [cookware2],
                    price: 5000,
                },
                {
                    id: 'p8',
                    name: 'Panther Kitchen Set',
                    description: '',
                    images: [cookware3],
                    price: 6000,
                    discount_price: 5000,
                },
                {
                    id: 'p9',
                    name: 'Tycoon Non Stick',
                    description: '',
                    images: [cookware4],
                    price: 11000,
                    discount_price: 9500,
                },
                {
                    id: 'p10',
                    name: 'GoldTimes Kitchen Set',
                    description: '',
                    images: [cookware5],
                    price: 5000,
                },
                {
                    id: 'p11',
                    name: 'New Matrix Set',
                    description: '',
                    images: [cookware6],
                    price: 8000,
                },
                {
                    id: 'p12',
                    name: 'Old Dessinni Set',
                    description: '',
                    images: [cookware7],
                    price: 7000,
                    discount_price: 6500,
                },
            ]
        }, 
        {
            id: 'c3',
            name: 'Flasks',
            image_url: flask1,
            products: [
                {
                    id: 'p13',
                    name: 'Royalty Non Breakable',
                    description: '',
                    images: [flask1],
                    price: 1200,
                    discount_price: 1100,
                },
                {
                    id: 'p14',
                    name: 'Travel Flask',
                    description: '',
                    images: [flask2],
                    price: 850,
                    discount_price: 800,
                },
                {
                    id: 'p15',
                    name: 'Wuhan 3L',
                    description: '',
                    images: [flask3],
                    price: 3000,
                },
                {
                    id: 'p16',
                    name: 'Captain Flask',
                    description: '',
                    images: [flask4],
                    price: 1000,
                },
                {
                    id: 'p17',
                    name: 'Caramel Guest Dispenser',
                    description: '',
                    images: [flask5],
                    price: 2500,
                },
                {
                    id: 'p18',
                    name: 'Vogue Thermos',
                    description: '',
                    images: [flask6],
                    price: 500,
                    discount_price: 450,
                },
            ]
        },
        {
            id: 'c4',
            name: 'Foot wear',
            image_url: footwear1,
            products: [
                {
                    id: 'p19',
                    name: 'Riley Sandals',
                    description: '',
                    images: [footwear1],
                    price: 1000,
                    discount_price: 800,
                }, 
                {
                    id: 'p20',
                    name: 'Foot Mittens Blue',
                    description: '',
                    images: [footwear2],
                    price: 1000,
                    discount_price: 800,
                }, 
                {
                    id: 'p21',
                    name: 'Lady Birds',
                    description: '',
                    images: [footwear3],
                    price: 800,
                }, 
                {
                    id: 'p22',
                    name: 'Classic Addidas',
                    description: '',
                    images: [footwear4],
                    price: 250,
                }, 
                {
                    id: 'p23',
                    name: 'Checker Brown',
                    description: '',
                    images: [footwear5],
                    price: 300,
                    discount_price: 250,
                }, 
                {
                    id: 'p24',
                    name: 'Indoor Panda',
                    description: '',
                    images: [footwear6],
                    price: 600,
                    discount_price: 500,
                }, 
                {
                    id: 'p25',
                    name: 'Sacred Sheep',
                    description: '',
                    images: [footwear7],
                    price: 500,
                }, 
                {
                    id: 'p26',
                    name: 'Fluffy Me',
                    description: '',
                    images: [footwear8],
                    price: 1000,
                    discount_price: 800,
                }, 
                {
                    id: 'p27',
                    name: 'Lady Fluffy',
                    description: '',
                    images: [footwear9],
                    price: 250,
                    discount_price: 200,
                }, 
                {
                    id: 'p28',
                    name: 'Sandals Sure',
                    description: '',
                    images: [footwear10],
                    price: 250,
                }, 
            ]
        },
        {
            id: 'c5',
            name: 'Drinking Glasses',
            image_url: glass1,
            products: [
                {
                    id: 'p29',
                    name: 'Beer Deco',
                    description: '',
                    images: [glass1],
                    price: 100,
                    discount_price: 80,
                }, 
                {
                    id: 'p30',
                    name: 'Beer Long Tumbler',
                    description: '',
                    images: [glass2],
                    price: 100,
                }, 
                {
                    id: 'p31',
                    name: 'Beer Short Deco',
                    description: '',
                    images: [glass3],
                    price: 100,
                }, 
                {
                    id: 'p32',
                    name: 'Beer Wide Rim',
                    description: '',
                    images: [glass4],
                    price: 100,
                }, 
                {
                    id: 'p33',
                    name: 'Wine Classic',
                    description: '',
                    images: [glass5],
                    price: 150,
                }, 
                {
                    id: 'p34',
                    name: 'Tea Glass',
                    description: '',
                    images: [glass6],
                    price: 150,
                    discount_price: 120,
                }, 
                {
                    id: 'p35',
                    name: 'Crystal Glass',
                    description: '',
                    images: [glass7],
                    price: 200,
                }, 
            ]
        },
        {
            id: 'c6',
            name: 'Plates',
            image_url: plate1,
            products: [
                {
                    id: 'p36',
                    name: 'Luminarc Black',
                    description: '',
                    images: [plate1],
                    price: 300,
                    discount_price: 250,
                },
                {
                    id: 'p37',
                    name: 'Luminarc White',
                    description: '',
                    images: [plate2],
                    price: 300,
                    discount_price: 250,
                },  
                {
                    id: 'p38',
                    name: 'Sundabests White',
                    description: '',
                    images: [plate3],
                    price: 200,
                }, 
                {
                    id: 'p39',
                    name: 'Illusion (Fish)',
                    description: '',
                    images: [plate4],
                    price: 500,
                }, 
                {
                    id: 'p40',
                    name: 'Modern Kaulo',
                    description: '',
                    images: [plate5],
                    price: 200,
                    discount_price: 180,
                }, 
            ]
        }
    ]
}