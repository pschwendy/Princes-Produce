
import ifly from '../pages/assets/iflyy.jpg';
import universal from '../pages/assets/universal_hero.jpg';
import icon from '../pages/assets/icon_hero.jpg';
import seaworld from '../pages/assets/seaworld_hero.webp';

// JSON storing information for attraction pages
const attractionInputs = [
    {
        title: 'Seaworld, Aquatica, Discovery Cove',
        route: '/explore-attractions-water-attractions',
        description: 'Get up close with fascinating marine creatures and ride thrilling roller coasters at SeaWorld. Explore the mythical Journey to Atlantis on a refreshing boat ride or ride the Kraken, Orlando’s only floorless roller coaster, to reach an extreme high of 150 feet. After you’re done with the rides, come swim and play with dolphins at Discovery Cove. Located nearby is the southern Pacific themed Aquatica, which features lazy rivers and water slides that pass right by animal habitats.',
        websites: [
            {
                part: 'Seaworld',
                site: 'https://seaworld.com/orlando/',
            },
            {
                part: 'Aquatica',
                site: 'https://aquatica.com/orlando/',
            },
            {
                part: 'Discovery Cove',
                site: 'https://discoverycove.com/orlando/',
            }
        ],
        pricing: [
            '$109.99 single day ticket',
            '$153.99 two park ticket',
            '$174.99 three park ticket',
            '$232.99 four park + unlimited parking tickets'
        ],
        hours: [
            'Most days, 10:00am - 6:00pm'
        ],
        restrictions: [
            'All guests over the age of two years must wear a mask with no vents or mesh and must have a temperature lower than 100.4°F.',
            'Guests are required to wear appropriate clothing (shirt and shorts) when not swimming at Aquatica.',
            'No outside food or beverages are permitted in Seaworld.',
            'Service animals are welcomed at Seaworld, but other animals are not permitted.'
        ],
        restrictionInfo: ['https://seaworld.com/orlando/park-info/park-safety/'],
        image: 'https://cache.undercovertourist.com/blog/2016/05/Aquatica-800x450.jpg',
        citation: "Mommy Frog. Aquatica by SeaWorld. 2020. Undercover tourist, https://www.undercovertourist.com/blog/orlando-top-water-parks/",
        hero: seaworld, //'https://t2conline.com/wp-content/uploads/2019/10/orlando-3577183_960_720-900x600.jpg',
        heroCitation: 'Grow, Kory. Orca Show at Seaworld Orlando. 2018. Rolling Stone. https://www.rollingstone.com/culture/culture-news/pink-seaworld-battle-over-killer-whale-captivity-628545/'
    },
    {
        title: 'Ripley’s Believe it or Not',
        route: '/explore-attractions-ripleys',
        description: 'Bizarre adventures await here at Ripley’s “odditorium”. Let your curiosity run wild inside this 10,000-square foot building that looks like it’s getting swallowed by a sinkhole. Gawk at the hundreds of exhibits featuring micro-sculptures inside needles, Tibetan skull bowls, and the Tribal Cave. Explore strange artifacts and immerse yourself in strange and mysterious stories through a variety of collections.',
        websites: [
            {
                part: 'Ripley’s Believe it or Not',
                site: 'https://www.ripleys.com/orlando/attractions/believe-it-or-not/',
            }
        ],
        pricing: [
            '$23.99 per person'
        ],
        hours: [
            'Daily, 10:00am - 12:00am'
        ],
        restrictions: ['No major restrictions'],
        restrictionInfo: [],
        image: 'https://media-cdn.tripadvisor.com/media/photo-w/02/4b/b7/6f/ripley-s-believe-it-or.jpg',
        citation: 'Tripadvisor Management. Front View of Ripley’s Believe It or Not. 2012. Trip Advisor, https://www.tripadvisor.com/Attraction_Review-g34515-d124551-Reviews-Ripley_s_Believe_It_or_Not_Orlando-Orlando_Florida.html#photos;aggregationId=101&albumid=101&filter=7&ff=38516591',
        hero: 'https://s3-media0.fl.yelpcdn.com/bphoto/mqTx7V1rdY-Xz-a1dXOx5w/o.jpg',
        heroCitation: ' D., Donna. Ripley’s Believe it or Not. 2020. Yelp. https://www.yelp.com/biz_photos/ripleys-believe-it-or-not-orlando-4?select=mqTx7V1rdY-Xz-a1dXOx5w '
    },
    {
        title: 'Orlando Museum of Art',
        route: '/explore-attractions-museum-of-art',
        description: 'Plunge into Florida’s art and culture at this institution. Featuring 10-12 compelling exhibitions annually, the Orlando Museum of Art showcases extraordinary works from landscape paintings by Louis Dewis to a journey of America through art. Explore elements of both contemporary and historical artwork.',
        websites: [
            {
                part: 'Orlando Museum of Art',
                site: 'https://omart.org/'
            }
        ],
        pricing: [
            '$15'
        ],
        hours: [
            'Daily, 10:00am - 4:00pm'
        ],
        restrictions: [
            'Flash photography, video cameras, tripods, and special photography equipment are not permitted in the Orlando Museum of Art.'
        ],
        restrictionInfo: [],
        image: 'https://thermanstatom.com/site/wp-content/uploads/2014/12/ORLANDO-MUSEUM-OF-ART.jpg',
        citation: 'Reid, Tom. Orlando Museum of Art. 2009. Therman Statom, https://thermanstatom.com/portfolio_page/orlando-museum-of-art/',
        hero: 'https://s3-media0.fl.yelpcdn.com/bphoto/jIzvtPozrZP5oo-HuNy84Q/o.jpg',
        heroCitation: 'B., Kathleen. Painting Section. 2019. Yelp. https://www.yelp.com/biz_photos/orlando-museum-of-art-orlando?select=jIzvtPozrZP5oo-HuNy84Q'
    },
    {
        title: 'Chocolate Kingdom',
        route: '/explore-attractions-chocolate-kingdom',
        description: 'Watch the creation of everyone’s favorite treat at the Chocolate Kingdom. The personal tour guide, alongside a charming Prince and a daring Dragon companion, will take you to the Mystical River of Chocolate, an unforgettable Chocolate Museum, and through a Bean-to-the-bar factory using vintage machinery. Don’t leave out the one of a kind opportunity to customize your very own chocolate bar.',
        websites: [
            {
                part: 'Chocolate Kingdom',
                site: 'https://www.chocolatekingdom.com/'
            }
        ],
        pricing: [
            '$16.95'
        ],
        hours: [
            'Daily, 12:00pm - 4:00pm'
        ],
        restrictions: ['No major restrictions'],
        restrictionInfo: [],
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/dfOMgkZuV_3UzZPqk2NDzw/o.jpg',
        citation: 'H., Michelle. Photos for Chocolate Kingdom-Factory Adventure Tour. 2019. Yelp, https://www.yelp.com/biz_photos/chocolate-kingdom-factory-adventure-tour-orlando?select=dfOMgkZuV_3UzZPqk2NDzw',
        hero: 'https://media-cdn.tripadvisor.com/media/photo-o/17/a6/c2/bc/20190514-155846-largejpg.jpg',
        heroCitation: 'Monaleese. A Chocoholic’s Delight. 2019. Trip Advisor, https://www.tripadvisor.com/Attraction_Review-g34515-d8353042-Reviews-Chocolate_Kingdom_Factory_Tours-Orlando_Florida.html#photos;aggregationId=101&albumid=101&filter=7&ff=396804796'
    },
    {
        title: 'The Escape Game Orlando',
        route: '/explore-attractions-escape-game',
        description: 'Immerse yourself in a 60-minute adventure that requires you to use wits, communication, and teamwork to solve for your way out through puzzles and clues.  Enjoy a fully enticing escapade that keeps you on your toes until the very last minute. Check out Gold Rush or The Heist and get your chance to save the day.',
        websites: [
            {
                part: 'The Escape Game Orlando',
                site: 'https://theescapegame.com/orlando/'
            }
        ],
        pricing: [
            '$34.99 per person'
        ],
        hours: [
            'Daily, 8:00am - 11:45pm'
        ],
        restrictions: ['No major restrictions'],
        restrictionInfo: [],
        image: 'https://orlandoinformer.com/wp-content/uploads/2018/01/Edit-11-1024x683.jpg',
        citation: 'Rupp, Madison. I’m Still Talking About Gold Rush Months After We Played. 2018. Orlando Informer, https://orlandoinformer.com/blog/guide-escape-rooms-orlando',
        hero: 'https://booking.theescapegame.com/slir/h500/https://booking.theescapegame.com/media/experiences/5ba0f7bfe3ac9f0c248b4584.jpg',
        heroCitation: 'The Escape Game Orlando. Prison Break #2. 2021. The Escape Game, https://theescapegame.com/orlando/'
    },
    { /* MAY NOT APPLY */
        title: 'iFLY Orlando Indoor Skydiving',
        route: '/explore-attractions-ifly',
        description: 'Experience the thrill of skydiving without worrying about extreme heights. No jumping or falling, just step in a wind tunnel that creates a cushion from wall-to-wall. IFLY is committed to safety, so first-time flyers have to take a mandatory training session. iFLY will also provide gear and a certified instructor, so all you have to do is show up and get ready to fly.',
        websites: [
            {
                part: 'iFLY Orlando Indoor Skydiving',
                site: 'https://www.iflyworld.com/orlando/'
            }
        ],
        pricing: [
            '2 Flight Package: $69.95',
            '3 Flight Package: $89.95',
            '4 Flight Package: $111.95',
            '5 Flight Package: $131.95'
        ],
        hours: [
            'Monday - Thursday: 9:00am - 9:00pm',
            'Friday - Saturday: 8:30am - 10:30pm',
            'Sunday: 8:30am - 10:30pm'
        ],
        restrictions: ['No major restrictions'],
        restrictionInfo: [],
        image: 'https://instagram.fdet1-2.fna.fbcdn.net/v/t51.2885-15/e35/89270883_202145167668875_2178344007128352351_n.jpg?_nc_ht=instagram.fdet1-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=fqBk06csybYAX-qPthy&tp=1&oh=ac23e4a9d80d7d5af2fc2df2e36139bf&oe=601DCB2A',
        citation: 'iFLY Orlando. Piper’s Third Birthday. 2020. Instagram, https://www.instagram.com/p/B9Sf4swphPN/',
        hero: ifly, //'https://s3-media0.fl.yelpcdn.com/bphoto/QZ46y-f4XZRa1uqS4sGKMQ/o.jpg',
        heroCitation: 'iDrive Orlando. iFly Indoor Skydiving - I-Drive Orlando. 2021. iDrive Orlando, https://idriveorlando.com/attractions/ifly-indoor-skydiving-i-drive-orlando'
    },
    {
        title: 'Kennedy Space Center',
        route: '/explore-attractions-kennedy-space-center',
        description: 'Venture through the wonders of space travel at Kennedy Space Center. Get close-up views of the Space Shuttle Atlantis or learn about the individuals that travel the galaxy in the Heroes & Legends exhibit. Experience blast off to space in a rocket launch simulator or train as an astronaut to learn how to pilot, dock, and land. Start your space quest here.',
        websites: [
            {
                part: 'Kennedy Space Center',
                site: 'https://www.kennedyspacecenter.com/'
            }
        ],
        pricing: [
            '$57'
        ],
        hours: [
            'Daily, 10:00am - 4:00pm'
        ],
        restrictions: ['No major restrictions'],
        restrictionInfo: [],
        image: 'https://www.kennedyspacecenter.com/-/media/DNC/KSCVC/Attraction-Images/NASA-Now-and-Next/Hero-images/NASA-NOW-MAIN-banner.ashx?h=950&w=1875&la=en&hash=CC088C0A78F1B2F1C5E224F384F6DCDB03AE7905',
        citation: 'DNC Parks and Resort. NASA Now + Next. 2020. Kennedy Space Center Visitor Complex, https://www.kennedyspacecenter.com/explore-attractions',
        hero: 'https://s3-media0.fl.yelpcdn.com/bphoto/jdcrhLfN-UwKX4cfXJbqmg/o.jpg',
        heroCitation: 'N., Natalie. Rocket Garden Behind the Splash Pad. 2018. Yelp. https://www.yelp.com/biz_photos/kennedy-space-center-visitor-complex-merritt-island?select=jdcrhLfN-UwKX4cfXJbqmg'
    },
    {
        title: 'Andretti Indoor Karting & Games',
        route: '/explore-attractions-indoor-karting',
        description: 'Experience the excitement of real life Mario Karting at the world’s longest indoor track with exhilarating turns and elevation changes. Outside of the track, explore the arcade and its captivating VR experiences at the Omniverse Arena or Hologate Blitz. Enjoy fun at new heights with rope courses and ziplines or go for a classic like laser tag.',
        websites: [
            {
                part: 'Andretti Indoor Karting & Games',
                site: 'https://andrettikarting.com/orlando/'
            }
        ],
        pricing: [
            'Race: $21.95',
            'Rope Courses w/ Zipline: $12.95',
            'Laser Tag: $12.95',
            'Omniverse: $14.95'
        ],
        hours: [
            'Monday - Thursday: 12:00pm - 12:00am',
            'Friday: 12:00pm - 1:00am',
            'Saturday: 11:00am - 1:00am',
            'Sunday: 11:00am - 12:00am'
        ],
        restrictions: ['No major restrictions'],
        restrictionInfo: [],
        image: 'https://img.grouponcdn.com/deal/3NQPF9BhzT5En1c4hY4CdgNDRxoZ/3N-774x464/v1/c700x420.webp',
        citation: 'Andretti Karting. Andretti Indoor Karting And Games Orlando. 2020. Groupon, https://www.groupon.com/deals/andretti-indoor-karting-and-games-orlando-2',
        hero: 'https://bcifl.net/wp-content/uploads/2017/11/Andretti-Karting-Skybar.jpg',
        heroCitation: 'BCI Integrated Solutions. Andretti Indoor Karting & Games Orlando. 2020. BCI Integrated Solutions, https://bcifl.net/project/andretti-indoor-karting-orlando/'
    },
    { /* MAY NOT APPLY */
        title: 'Orlando Science Center',
        route: '/explore-attractions-science-center',
        description: 'Discover interactive exhibits, labs, workshops, and an observatory at the Orlando Science Center. For 60 years, this institution provided STEM enrichment to promote engagement among the community. Traverse through the different layers of Earth’s atmosphere at the Our Earth exhibit or make your ideas come to life using resources at The Hive: A Makerspace. Get inspired about science or spark innovation here at the Science Center.',
        websites: [
            {
                part: 'Orlando Science Center',
                site: 'https://www.osc.org/'
            }
        ],
        pricing: [
            '$23'
        ],
        hours: [
            '10:00am - 5:00pm'
        ],
        restrictions: [],
        restrictionInfo: [],
        image: 'https://www.osc.org/wp-content/uploads/2018/09/Shot-by-Harry-Aaron_599.jpg',
        citation: 'Aaron, Harry. T-Rex Holding a Wedding Sign in its Mouth. 2020. Orlando Science Center, https://www.osc.org/shot-by-harry-aaron_599/',
        hero: 'https://www.osc.org/wp-content/uploads/2018/09/Event-picture7_720.jpg',
        heroCitation: 'Orlando Science Center. Event Set Up on the Terrace. 2021. Orlando Science Center, https://www.osc.org/event-picture7_720/'
    },
    {
        title: 'ICON Park',
        route: '/explore-attractions-icon-park',
        description: 'Get a view of the thriving cityscape from 400 feet above the air at the Orlando Eye, also known as The Wheel at Icon Park. Enjoy seeing the natural lakes, Walt Disney World, and Universal Orlando from an angle you’ve never seen before to view the skyline in its entirety. Once you hop off the 18-minute ferris wheel ride, walk over to meet celebrities at Madame Tussauds. Although they may be made of wax, you can still get up and close with your favorite celebrities or your favorite superheroes. After you greet Wonder Woman at the museum, you can say hi to dolphins and other marine creatures at the Sea Life Aquarium. Divulge in an aquatic voyage at the 360-degree ocean channel and meet everything from stingrays to starfishes.',
        websites: [
            {
                part: 'ICON Park',
                site: 'https://www.iconparkorlando.com/attractions/',
            }
        ],
        pricing: [
            'The Wheel: $27.99 per person',
            'Triple Attraction Combo (The Wheel + Sea Life + Madame Tussauds): $49.95',
            'Double Attraction Combo (The Wheel + Sea Life or Madame Tussauds): $39.95',
            'ICON Park Play Pass: $65.00'
        ],
        hours: [
            'Daily, 10:00am - 2:00am'
        ],
        restrictions: [
            'Trained Service Animals are permitted at ICON park, but other pets are not.',
            'Every bag, person, or parcel may be subjected to screenings and security checks.',
            'Proper attire must be worn at all times, including shoes and shirts.',
        ],
        restrictionInfo: ['https://www.iconparkorlando.com/terms-conditions/'],
        image: 'https://i1.wp.com/partiudisneyparks.com/wp-content/uploads/2020/05/icon-park-orlando.png?w=1392&ssl=1',
        citation: 'Braga, Carlos. Icon-park-orlando. 2020. Partiu Disney Parks, https://partiudisneyparks.com/en/icon-park-orlando/',
        hero: icon, //'https://a.cdn-hotels.com/gdcs/production50/d1181/2c4b122e-9291-4b8e-93b9-5ea6136b8ea0.jpg',
        heroCitation: 'Clark, Rusty. The New I-Drive 360. 2015. Hotels, https://ua.hotels.com/go/usa/icon-orlando'
    },
    {
        title: 'Universal Theme Park',
        route: '/explore-attractions-universal',
        description: 'Featuring rides and restaurants based on your favorite TV shows and movies, Universal Studios is the ultimate Hollywood experience. Dive into the Wizarding World of Harry Potter in the Diagon Alley and the Escape from Gringotts ride. After checking out the rides and shops at Universal Studios Florida, you can take the Hogwarts Express across to another park, the Islands of Adventure, which features Marvel superhero roller coasters and water rides that are fun for the whole family. Located right next door is Universal’s Volcano Bay. This water theme park filled with winding rivers, wave pools, and slides is the perfect way to cool off after a hot day in the other parks.',
        websites: [
            {
                part: 'Universal Orlando',
                site: 'https://www.universalorlando.com/web-store/en/us/park-tickets?flr=1&days=1',
            },
            {
                part: 'Islands of Adventure',
                site: 'https://www.universalorlando.com/web/en/us/theme-parks/islands-of-adventure',
            },
            {
                part: 'Volcano Bay',
                site: 'https://www.universalorlando.com/web/en/us/theme-parks/volcano-bay',
            }
        ],
        pricing: [
            'Universal Studios: $109, one day ticket',
            'Islands of Adventure: $109, one day ticket',
            'Volcano Bay: $70, one day ticket',
            'Universal Studios and Islands of Adventure: $164, one day ticket'
        ],
        hours: [
            'Universal Studios: Most days, 9:00am - 5:00pm',
            'Islands of Adventure: Most days, 10:00am - 6:00pm',
            'Volcano Bay: Most days, 10:00 AM - 5:00 PM (Closed in the winter)'
        ],
        restrictions: [
            'COVID-19 restrictions: People with a temperature over 100.4°F will not be allowed into the parks and everyone must wear a mask while in the parks.',
            'Everyone must walk through metal detectors and bags are subject to x-rays when entering the park.',
            'Trained Service Animals are permitted in parks and resorts, but other pets are not.',
        ],
        restrictionInfo: ['https://www.universalorlando.com/web/en/us/plan- your-visit/hours-information/policies-restrictions'],
        image: 'https://www.visitflorida.com/content/dam/visitflorida/en-us/images/articles/2016/listicles/family-universal/universal-orlando-resort-harry-potter-diagon-alley.jpg.1020.680.imagerendition',
        citation: 'Universal Orlando Resort. Explore the streets of Diagon Alley at Universal Studios Florida. 2020. Visit Florida, https://www.visitflorida.com/en-us/things-to-do/attractions/experience-diagon-alley-universal-studios.html',
        hero: universal, //'https://s3-media0.fl.yelpcdn.com/bphoto/eKsSxXPhSj3bG1QXzDaDmg/o.jpg',
        heroCitation: 'World Class Vacations. Orlando, Florida. 2020. World Class Vacations, https://www.wcv.com/trip/orlando-florida/'
    },
];

export { attractionInputs };