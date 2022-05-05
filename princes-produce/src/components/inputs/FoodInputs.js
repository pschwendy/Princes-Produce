import italianHero from '../pages/assets/italian_hero.webp';
import hispanicHero from '../pages/assets/hispanic_hero.jpg';
import americanHero from '../pages/assets/american_hero.jpg';
import africanHero from '../pages/assets/african_hero.webp';
import frenchHero from '../pages/assets/french_hero.jpg';
import middleEasternHero from '../pages/assets/middle_eastern_hero.webp';
import laLuce from '../pages/assets/la_luce.jpg';
import chimiking from '../pages/assets/chimiking.jpg';
import tabla from '../pages/assets/tabla.jpg';
import nile from '../pages/assets/nile.jpg';
import legourmetbreak from '../pages/assets/le-gourmet-break.jpg';
import leBoucherie from '../pages/assets/sirloin.jpg';
import zaman from '../pages/assets/zaman.jpg';
import halal from '../pages/assets/halal.jpg';
import vegetarianHero from '../pages/assets/vegetarian-hero.webp';
import marketOnSouth from '../pages/assets/market-on-south.jpg';
import veggieGarden from '../pages/assets/veggie-garden.jpg'
import bombay from '../pages/assets/bombay.jpg'

// JSON storing information for food pages
const foodInputs = [
    {
        type: 'Italian',
        hero: italianHero, //'https://s3-media0.fl.yelpcdn.com/bphoto/fGTjQzu8v60-kcGCij_E7Q/o.jpg',
        heroCitation: 'Devereaux, Noah. Fiaschetteria Pistoia. 2021. The Infatuation, https://www.theinfatuation.com/new-york/reviews/fiaschetteria-pistoia',
        route: '/explore-food-italian',
        content: [
            {
                name: 'Prato',
                pricing: '$$',
                address: '124 N Park Ave, Winter Park, FL 32789',
                description: 'Taking inspiration from Italian classics and blending that with a modern touch, Prato offers hand-stretched pizzas and oversized meatballs in a warm and chic atmosphere.',
                website: 'https://www.prato-wp.com/',
                menu: 'https://www.prato-wp.com/menu',
                menuInfo: ' - Menu changes daily and seasonally',
                hours: [
                    {
                        when: 'Monday - Tuesday: ',
                        times: '4:00pm - 10:00pm'
                    },
                    {
                        when: 'Wednesday - Sunday: ',
                        times: '11:30am - 3:00pm and 5:30pm - 11:00pm'
                    }
                ],
                image: 'https://www.orlandosentinel.com/resizer/8DlK-WMinQAFP5yn-iZwDQgllCc=/800x449/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/N7WUAT45NRC7NN3H7EMFP6WHTQ.jpg'
                ,
                citation:
                    "Pizarri, Michael. Prato's diavolo pizza is on the Winter Park restaurant's new happy hour menu. 2017. Orlando Sentinel, https://www.orlandosentinel.com/food-restaurants/os-et-prato-happy-hour-20170801-story.html",
            },
            {
                name: 'La Luce',
                pricing: '$$$',
                address: '14100 Bonnet Creek Resort Ln, Orlando, FL 32821',
                description: 'Get a taste of Italian recipes that have stood the test of time and passed down through generations at La Luce. Featuring the freshest ingredients combined with tradition and innovation, taste the passion that shines through the food. ',
                website: 'https://www.laluceorlando.com/',
                menu: 'https://www.laluceorlando.com/#!menus',
                menuInfo: ' - Menu changes daily and seasonally',
                hours: [
                    {
                        when: 'Tuesday - Wednesday: ',
                        times: 'Closed'
                    },
                    {
                        when: 'Thursday - Monday: ',
                        times: '6:00pm - 10:00pm'
                    }
                ],
                image: laLuce,
                citation:
                    "La Luce. Agnello Al Scottadito. 2021. Tasty Chomps, https://tastychomps.com/2018/08/la-luce-at-hilton-bonnet-creek-summer-menu.html",
            }
        ]
    },
    {
        type: 'Asian',
        hero: 'https://s3-media0.fl.yelpcdn.com/bphoto/bagFSzMMIQNMd8_bcfDoFg/o.jpg',
        heroCitation: 'S., Michelle. Taste Of Chengdu Restaurant. 2019. Yelp. https://www.yelp.com/biz_photos/taste-of-chengdu-orlando-3?select=bagFSzMMIQNMd8_bcfDoFg',
        route: '/explore-food-asian',
        content: [
            {
                name: 'Kadence',
                pricing: '$$$$',
                address: '1809 Winter Park Rd, Orlando, FL 32803',
                description: 'Look no further for a traditional Japanese sushi experience. Here at Kadence, a sushi and sake bar, the chefs will prepare an omakase course for fresh sushi and sashimi tasting. Reservations are required but you can order delicious chirashi bowls for takeout in reusable containers that can be returned.',
                website: 'http://kadenceorlando.com/',
                menu: '',
                menuInfo: ' - There is no menu for sushi because it is left up to the chef to decide what to prepare',
                hours: [
                    {
                        when: 'Monday - Wednesday: ',
                        times: 'Closed'
                    },
                    {
                        when: 'Thursday - Saturday: ',
                        times: '4:00pm - 7:00pm'
                    },
                    {
                        when: 'Sunday: ',
                        times: '12:00pm - 12:30pm'
                    }
                ],
                image: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/s1080x2048/120229696_3218970118180717_274272401219222733_o.jpg?_nc_cat=106&ccb=2&_nc_sid=a26aad&_nc_ohc=yvjv01xN1O0AX-4Gd1m&_nc_ht=scontent-ort2-1.xx&tp=7&oh=84f782d0ed04ab1f3647a395a62a3433&oe=6017E815',
                citation: "Ausley, Amanda. Chirashi Bowl. 2020. Facebook, https://www.facebook.com/kadenceorlando/",
            },
            {
                name: 'Taste Of Chengdu',
                pricing: '$$',
                address: '4856 New Broad St, Orlando, FL 32814',
                description: 'Come dine at Taste of Chengdu for traditional Sichuan cuisine. Chefs layer each dish with spices and seasonings to create a strong flavor that brings together different Chinese cuisines.',
                website: 'https://tasteofchengdufl.com/',
                menu: 'https://tasteofchengdufl.com/menu-baldwin-park/',
                menuInfo: '',
                hours: [
                    {
                        when: 'Monday - Thursday: ',
                        times: '11:30am – 9:30pm'
                    },
                    {
                        when: 'Friday-Saturday: ',
                        times: '11:30am – 10:30pm'
                    },
                    {
                        when: 'Sunday: ',
                        times: '11:30am – 9:00pm'
                    }
                ],
                image: 'https://s3-media0.fl.yelpcdn.com/bphoto/uT1IzQXSfq1PoQ8Fdox0_A/o.jpg',
                citation: "W., Ellen. Sichuan Cuisine at Taste of Chengdu. 2018. Yelp, https://www.yelp.com/biz_photos/taste-of-cheng du-orlando-3?select=uT1IzQXSfq1PoQ8Fdox0 _A",
            }
        ]
    },
    {
        type: 'Hispanic',
        hero: hispanicHero, //'https://s3-media0.fl.yelpcdn.com/bphoto/KL3INQ6thD_wzD9D8eibnQ/o.jpg',
        heroCitation: 'March, Oleg. El Vez Burrito. 2015. Travel + Leisure, https://www.travelandleisure.com/food-drink/restaurants/best-new-york-mexican-restaurants?slide=2130968#2130968',
        route: '/explore-food-hispanic',
        content: [
            {
                name: 'Black Rooster Taqueria',
                pricing: '$$',
                address: '1323 N Mills Ave Orlando, FL 32803',
                description: 'This isn’t your average taco joint; at the Black Rooster Taqueria, the walls are covered in vibrant art, and each plate of food is made with care. Fill up on salads, tacos, or bowls and wash it down with a Jarritos fruit-flavored soda.',
                website: 'http://www.blackroostertaqueria.com/',
                menu: 'http://www.blackroostertaqueria.com/#menu-page',
                menuInfo: '',
                hours: [
                    {
                        when: 'Monday: ',
                        times: 'Closed'
                    },
                    {
                        when: 'Tuesday - Friday: ',
                        times: '11:00am - 2:00pm and 5:00pm - 9:00pm'
                    },
                    {
                        when: 'Saturday - Sunday: ',
                        times: '11:00am - 3:00pm and 5:00pm - 9:00pm'
                    }
                ],
                image: 'https://media.timeout.com/images/105247885/380/285/image.jpg',
                citation: 
                    "C., Juliana. Tacos at Black Rooster Taqueria. 2020. TimeOut, https://www.timeout.com/orlando/restaurants/best-restaurants-in-orlando"
                ,
            },
            {
                name: 'Chimiking Restaurant',
                pricing: '$',
                address: '6700 Conroy Windermere Rd STE 105 Orlando, FL 32835',
                description: 'At Chimiking, the chefs blend together Dominican and Latin American cuisine for an immersive experience. They serve contemporary takes on traditional dishes at an affordable price so that everyone can get a taste.',
                website: 'http://windermere.chimikingrestaurant.com/',
                menu: 'http://windermere.chimikingrestaurant.com/store/#',
                menuInfo: '',
                hours: [
                    {
                        when: 'Every Day: ',
                        times: '10:00am - 10:00pm'
                    },
                ],
                image: chimiking,
                citation: 
                    "V., Julie. Fried Chicken with Tostones. 2018. Yelp. https://www.yelp.com/biz_photos/chimiking-restaurant-orlando-2?select=WcCpeVwNaGLsLKiq8DU14Q"
                ,
            }
        ]
    },
    {
        type: 'Fusion',
        hero: 'https://s3-media0.fl.yelpcdn.com/bphoto/NXNzLM0pFjw1yHbHU-RQ0w/o.jpg',
        heroCitation: 'R., Chen. Art All Over. 2019. Yelp. https://www.yelp.com/biz_photos/caf%C3%A9-tu-tu-tango-orlando-5?select=NXNzLM0pFjw1yHbHU-RQ0w',
        route: '/explore-food-fusion',
        content: [
            {
                name: 'Café Tu Tu Tango',
                pricing: '$$',
                address: '8625 International Drive, Orlando, FL 32819',
                description: 'Food Network named Café Tu Tu Tango the best place for tapas in Orlando. Featuring select dishes from around the world, it is the perfect place to send your taste buds on a world tour.',
                website: 'https://www.cafetututango.com/menus',
                menu: 'https://www.cafetututango.com/menus',
                menuInfo: '',
                hours: [
                    {
                        when: 'Monday - Thursday: ',
                        times: '12:00pm – 11:00pm'
                    },
                    {
                        when: 'Friday: ',
                        times: '12:00pm - 12:00am'
                    },
                    {
                        when: 'Saturday: ',
                        times: '10:00am - 12:00am'
                    },
                    {
                        when: 'Sunday: ',
                        times: '10:00am - 10:00pm'
                    }
                ],
                image: 'https://s3-media0.fl.yelpcdn.com/bphoto/UobBp-ZINTJt5r_m1jE-rA/o.jpg',
                citation: "C., Jadhai. Sesame Steak Skewers. 2020. Yelp, https://www.yelp.com/biz_photos/caf%C3 %A9-tu-tu-tango-orlando-5?select=UobB p-ZINTJt5r_m1jE-rA",
            },
            {
                name: 'Tabla Indian Restaurant',
                pricing: '$$',
                address: '5847 Grand National Dr Orlando, FL',
                description: 'The Tabla Indian Restaurant serves a variety of food from India, China, and Thailand. With a wide variety of vegan and vegetarian options, eating here is perfect for any gathering.',
                website: 'https://www.tablacuisine.com/',
                menu: 'https://www.tablacuisine.com/mobile-menu/',
                menuInfo: '',
                hours: [
                    {
                        when: 'Every Day: ',
                        times: '11:30am - 11:00pm'
                    },
                ],
                image: tabla,
                citation: "C., Rachelle. Fried Baby Corn in Sweet N Sour Sauce. 2018. Yelp.https://www.yelp.com/biz_photos/tabla-indian-restaurant-san-mateo-2?select=HEMo0VmnPmVJ6xuVsZqN8A",
            }
        ]
    },
    {
        type: 'American',
        hero: americanHero, //'https://s3-media0.fl.yelpcdn.com/bphoto/Wl6_QdGMZktvZrZvrvQZow/o.jpg',
        heroCitation: 'D., Mark. Great Wall. 2018. Yelp. https://www.yelp.com/biz_photos/se7en-bites-orlando?select=Wl6_QdGMZktvZrZvrvQZow',
        route: '/explore-food-american',
        content: [
            {
                name: 'Se7en Bites',
                pricing: '$$',
                address: '617 Primrose Dr, Orlando, FL 32803',
                description: 'Enjoy a taste of the South at this hospitable kitchen. Order something off their all-day breakfast and lunch menu or grab something for your sweet tooth at their bakery.',
                website: 'http://www.se7enbites.com/',
                menu: 'http://www.se7enbites.com/menu-1',
                menuInfo: '',
                hours: [
                    {
                        when: 'Monday - Wednesday: ',
                        times: 'Closed'
                    },
                    {
                        when: 'Thursday - Friday: ',
                        times: '8:00am - 3:30pm'
                    },
                    {
                        when: 'Saturday - Sunday: ',
                        times: '9:00am - 3:00pm'
                    }
                ],
                image: 'https://images.squarespace-cdn.com/content/v1/57c63f3e03596e373290b357/1498861703222-QTE8MV4LMN15OHX2DOEP/ke17ZwdGBToddI8pDm48kIyvoTDOqK6tuLbY8s33gHl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UTzjvHSAOXjnTxN2sJb-n4pP61BYfWtluh1bxbCEA7ounr1xKjsq_-rO8kOgOtwYvw/F120FF6B-D9A2-445C-B220-070093E4F14B.jpg?format=500w',
                citation: "Se7en Bites LLC, Chicken and Biscuits. 2018. Se7en Bites, http://www.se7enbites.com/gallery",
            },
            {
                name: 'Maxine’s On Shine',
                pricing: '$$',
                address: '337 N Shine Ave Orlando, FL 32803',
                description: 'Make a reservation to dine at this award winning neighborhood restaurant for a friendly dinner or bright weekend brunch. A favorite of both tourists and locals, Maxine’s On Shine has food for the whole family.',
                website: 'https://maxinesonshine.com/',
                menu: 'https://maxinesonshine.com/maxines-market/',
                menuInfo: '',
                hours: [
                    {
                        when: 'Monday - Tuesday: ',
                        times: 'Closed'
                    },
                    {
                        when: 'Wednesday - Thursday: ',
                        times: '5:00pm - 9:00pm'
                    },
                    {
                        when: 'Friday - Saturday: ',
                        times: '10:00am - 9:00pm'
                    },
                    {
                        when: 'Friday - Saturday: ',
                        times: '10:00am - 3:00pm'
                    }
                ],
                image: 'https://s3-media0.fl.yelpcdn.com/bphoto/gyTsMaNGwPEaWbjsJ52F5Q/o.jpg',
                citation: "K., Brittany. Vegetarian Blanco at Maxine’s On Shine. 2020. Yelp, https://www.yelp.com/biz_photos/ma xines-on-shine-orlando?select=gyTs MaNGwPEaWbjsJ52F5Q",
            },
            {
                name: 'Linda’s La Cantina Steakhouse',
                pricing: '$$',
                address: '4721 E Colonial Dr, Orlando, FL 32803',
                description: 'Serving steaks hot off the grill since 1947, La Cantina offers juicy cuts of steak along with pictures landing you right in the 20th century. Each steak comes with a salad and your pick of sides.',
                website: 'http://www.lindaslacantina.com/index1.htm',
                menu: 'http://www.lindaslacantina.com/Menu/menu2.htm',
                menuInfo: '',
                hours: [
                    {
                        when: 'Sunday - Monday: ',
                        times: 'Closed'
                    },
                    {
                        when: 'Tuesday - Saturday: ',
                        times: '4:00pm - 9:30pm'
                    }
                ],
                image: 'https://media-cdn.tripadvisor.com/media/photo-w/16/af/6a/2e/yummy-ribeye.jpg',
                citation: "A., Gail. Anniversary Dinner. 2019. Trip Advisor, https://www.tripadvisor.es/ShowUserReviews-g34515-d456862-r643263942-Linda_s_La_Cantina-Orlando_Florida.html#UR643263942",
            }
        ]
    },
    {
        type: 'African',
        hero: africanHero,
        heroCitation: 'Walt Disney World. Boma - Flavors of Africa. 2012. Trip Advisor, https://www.tripadvisor.com/Restaurant_Review-g34515-d451064-Reviews-Boma_Flavors_of_Africa-Orlando_Florida.html#photos;aggregationId=101&albumid=101&filter=7&ff=54196672',
        route: '/explore-food-african',
        content: [
            {
                name: 'Selam Ethiopian & Eritrean Cuisine',
                pricing: '$$',
                address: '5494 Central Florida Pkwy, Orlando, FL 32821',
                description: 'A dashing blend of colors and flavorful spices, Selam features traditional cuisine brought to you from the horn of Africa.',
                website: 'https://www.ethiopianrestaurantorlando.com/',
                menu: 'https://www.ethiopianrestaurantorlando.com/#menu',
                menuInfo: '',
                hours: [
                    {
                        when: 'Tuesday: ',
                        times: 'Closed'
                    },
                    {
                        when: 'Wednesday - Monday: ',
                        times: '12:00pm - 9:00pm'
                    },
                ],
                image: 'https://s3-media0.fl.yelpcdn.com/bphoto/RXY7z3SZ97YJSQcX9empiw/o.jpg',
                citation: "B., Shawn. Selam Veggie Special. 2019. Yelp, https://www.yelp.com/biz_photos/selam-ethiopian-and-eritrean-cuisine-orlando?select=RXY7z3SZ97YJSQcX9empiw",
            },
            {
                name: 'Nile Ethiopian Restaurant',
                pricing: '$',
                address: '5494 Central Florida Pkwy, Orlando, FL 32821',
                description: 'With house special spices and mouth watering dishes, Nile Ethiopian is a can’t miss for anyone wanting the full Ethiopian experience. Enjoy the ambience and hospitality offered by staff.',
                website: 'http://www.nileorlando.com/',
                menu: 'http://www.nileorlando.com/',
                menuInfo: '',
                hours: [
                    {
                        when: 'Monday - Friday: ',
                        times: '5:00pm - 10:00pm'
                    },
                    {
                        when: 'Saturday-Sunday: ',
                        times: '12:00pm - 10:00pm'
                    },
                ],
                image: nile,
                citation: "Nile Ethiopian Restaurant. Meat Combination. 2011. Nile Ethiopian Restaurant, http://www.nileorlando.com/",
            }
        ]
    },
    {
        type: 'French',
        hero: frenchHero,
        heroCitation: 'Galland, Jéróme. Tuscan Trattoria Pink Mamma is Infused With Earth Accents. 2018. Galerie, https://www.galeriemagazine.com/9-beautiful-restaurants-paris-france/',
        route: '/explore-food-french',
        content: [
            {
                name: 'Le Gourmet Break',
                pricing: '$',
                address: '150 S Magnolia Ave, Orlando FL',
                description: 'Feel the Paris atmosphere in downtown Orlando with authentic french pastries freshly prepared everyday. Stop in anytime throughout the day to enjoy their all-day breakfast and indulge in delicious crepes and baguettes.',
                website: 'https://www.legourmetbreak.com/',
                menu: 'https://www.legourmetbreak.com/menu.html',
                menuInfo: '',
                hours: [
                    {
                        when: 'Sunday - Monday: ',
                        times: '8:00am - 2:00pm'
                    },
                    {
                        when: 'Tuesday - Friday: ',
                        times: '7:30am - 2:00pm'
                    },
                ],
                image: legourmetbreak,
                citation: "Le Gourmet Break. Le Gourmet Break. 2013. Trip Advisor, https://www.tripadvisor.com/Restaurant_Review-g34515-d4379548-Reviews-Le_Gourmet_Break-Orlando_Florida.html#photos;aggregationId=&albumid=101&filter=7&ff=69352457",
            },
            {
                name: 'La Boucherie',
                pricing: '$$',
                address: '7625 Turkey Lake Rd, Orlando, FL 32819',
                description: 'Featured in USA Today’s “10 Best New and Popular Restaurants in Orlando”, La Boucherie is one of France’s most popular steakhouse. Each steak is carefully sourced locally and cooked to perfection with traditional French methods and an American flair.',
                website: 'https://www.laboucherieusa.com/',
                menu: 'https://c617af48-b09b-4b1c-bc2a-c9e1b9464e5a.filesusr.com/ugd/68ef93_759a966dd4a4464dbafe414c600ff14f.pdf',
                menuInfo: '',
                hours: [
                    {
                        when: 'Monday - Thursday: ',
                        times: '12:00pm - 9:00pm'
                    },
                    {
                        when: 'Friday: ',
                        times: '12:00pm - 10:00pm'
                    },
                    {
                        when: 'Saturday: ',
                        times: '10:00am - 10:00pm'
                    },
                    {
                        when: 'Sunday:',
                        times: '10:00am - 9:00pm'
                    }
                ],
                image: leBoucherie,
                citation: "La Boucherie. Sirloin. 2019. Trip Advisor, https://www.tripadvisor.com/Restaurant_Review-g34515-d15521927-Reviews-La_Boucherie-Orlando_Florida.html#photos;aggregationId=101&albumid=101&filter=7&ff=413405385",
            },
        ]
    },
    {
        type: 'Middle Eastern',
        hero: middleEasternHero,
        heroCitation: 'Simmons, Krista. 46 Best Restaurants in Los Angeles. 2020. Traveler. https://www.cntraveler.com/gallery/best-restaurants-in-los-angeles',
        route: '/explore-food-middle-eastern',
        content: [
            {
                name: 'Zaman Mediterranean Grill',
                pricing: '$$',
                address: '6400 International Dr unit 140, Orlando, FL 32819',
                description: 'Come enjoy fresh Middle Eastern cuisine at the Zaman Mediterranean Grill. At this local favorite, you can widen your horizons and find a new favorite dish.',
                website: 'https://www.facebook.com/zamancuisine/',
                menu: 'https://www.facebook.com/zamancuisine/photos/pcb.953253341701362/953253151701381',
                menuInfo: '',
                hours: [
                    {
                        when: 'Saturday - Tuesday: ',
                        times: '12:00pm - 1:00am'
                    },
                    {
                        when: 'Wednesday - Friday: ',
                        times: '12:00pm - 3:00am'
                    },
                ],
                image: zaman,
                citation: "B., Chris. Shish Kebab for Two. 2018. Yelp. https://www.yelp.com/biz_photos/palm-palace-ann-arbor?select=1rdn87sMOmlSPkm9Wey8CQ",
            },
            {
                name: 'Halal Food Express',
                pricing: '$',
                address: '6227 International Dr, Orlando, FL 32819',
                description: 'With every meal made to order, you can guarantee your kebab is fresh. Get your fix of delicious Mediterranean home-style food without breaking the bank. Cooked with the freshest ingredients, this will make you come back for more.',
                website: 'https://www.halalfoodexpress.com/index.php',
                menu: 'https://www.halalfoodexpress.com/menu.php',
                menuInfo: '',
                hours: [
                    {
                        when: 'Monday - Sunday: ',
                        times: '12:00pm - 12:00am'
                    }
                ],
                image: halal,
                citation: "M, Aamina. Delicious Gyro. 2019. Tripadvisor, https://www.tripadvisor.com/Restaurant_Review-g34515-d4240859-Reviews-Halal_Food_Express-Orlando_Florida.html#photos;aggregationId=101&albumid=101&filter=7&ff=407103959 ",
            },
        ]
    },
    {
        type: 'Vegetarian & Vegan',
        hero: vegetarianHero,
        heroCitation: 'Urban Robot Associates. Plants, Plants Everywhere!. 2018. Tasting Table.https://www.tastingtable.com/entertain/national/restaurant-design-new-trends/slideshow/slide4 ',
        route: '/explore-food-vegetarian-vegan',
        content: [
            {
                name: 'Market On South',
                pricing: '$$',
                address: '2603 E South St, Orlando, FL 32803',
                description: 'Enjoy a wide range of vegan and vegetarian food in the Market On South. They serve Dharma Fine Vittles plant based BBQ and desserts from Valhalla Bakery.',
                website: 'https://www.marketonsouth.com/',
                menu: 'https://www.marketonsouth.com/menu',
                menuInfo: '',
                hours: [
                    {
                        when: 'Monday - Saturday: ',
                        times: '8:00am - 12:00am'
                    },
                    {
                        when: 'Sunday: ',
                        times: '8:00am - 10:00pm'
                    },
                ],
                image: marketOnSouth,
                citation: 'Market On South. Vegan Sandwich and Cake. 2018. Yelp. https://www.yelp.com/biz_photos/market-on-south-orlando?select=tfScRxhyyM6fPAcDVDYAfQ',
            },
            {
                name: 'Veggie Garden',
                pricing: '$',
                address: '1216 E Colonial Dr #11, Orlando, FL 32803',
                description: 'The chefs at the Veggie Garden work wide varieties of vegetables and fruits into every dish they prepare. This Vietnamese, vegan restaurant is an all time local favorite.',
                website: 'https://www.veggiegardenvegan.net/',
                menu: 'https://www.veggiegardenvegan.net/menu',
                menuInfo: '',
                hours: [
                    {
                        when: 'Monday - Sunday: ',
                        times: '9:30am - 7:00pm'
                    }
                ],
                image: veggieGarden,
                citation: "T., Khang. Vegan Entree at Veggie Garden. 2017. Yelp. https://www.yelp.com/biz_photos/veggie-garden-orlando-2?select=X2PoVqLrZbsChp1ZSvEBwQ",
            },
            {
                name: 'Bombay Cafe',
                pricing: '$$',
                address: '1137 Doss Ave #1155, Orlando, FL 32809',
                description: 'At the Bombay Cafe, they serve Indian food that is all vegetarian. Each meal is filled with fresh spices and authentic flavor; you can even crank up the heat if you’re really feeling it.',
                website: 'https://bombaycafeorlando.net/',
                menu: 'https://bombaycafeorlando.net/menu/',
                menuInfo: '',
                hours: [
                    {
                        when: 'Monday - Sunday: ',
                        times: '11:30am - 9:30pm'
                    }
                ],
                image: bombay,
                citation: "Bombay Café. Vegetarian Entrée. 2020. Yelp. https://www.yelp.com/biz_photos/bombay-caf%C3%A9-orlando-2?select=6f9UgkCAWu8LF93eIoCNfA",
            },
        ]
    }
]

export { foodInputs };