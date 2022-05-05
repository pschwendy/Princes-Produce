import harry_p_leu from '../pages/assets/harry-p-leu.jpg';
import adventure from '../pages/assets/adventure.jpg';
import tibet from '../pages/assets/tibet.jpg';
import lakeEola from '../pages/assets/lake_eola.jpg';
import exoticAnimal from '../pages/assets/exotic_animal.jpg';
import kissimmee from '../pages/assets/kissimmee_hero.jpg';
import zoo from '../pages/assets/florida_zoo.jpg';
import butler from '../pages/assets/butler.webp';

//JSON storing info for sightseeing pages
const sightseeingInputs = [
    {
        title: 'Harry P. Leu Gardens',
        route: '/explore-sightseeing-harry-p-leu-gardens',
        blurb: 'Looking to get out in nature? Come explore the paths at Leu Gardens any day of the week. Pick up a guide and map at the Garden House Welcome Center to prepare for your self-guided tour of the grounds. The garden is handicap accessible, and wheelchairs are available at the welcome center.',
        website: 'https://www.leugardens.org/',
        prices: 'Prices - $10 per adult, $5 per child (ages 4-17), Free for children under 3 years',
        hours: 'Hours - Daily, 9:00am - 5:00pm',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/mukaTitS7owa18BKD3xfjg/o.jpg',
        citation: 'O., Crystal. Kopsia Fruticosa at Harry P. Leu Gardens. 2020. Yelp. https://www.yelp.com/biz_photos/harry-p-leu-gardens-orlando?select=mukaTitS7owa18BKD3xfjg',
        hero: harry_p_leu,
        heroCitation: "Harry P. Leu Gardens. 2020. Eventective. https://www.eventective.com/orlando-fl/harry-p-leu-gardens-679003.html"
    },
    {
        title: 'Adventure Tours',
        route: '/explore-sightseeing-florida-tours',
        blurb: 'Escape the city and explore the Flordian wilderness on a boat tour led by local experts. Try snorkeling in the crisp rivers and springs. Don’t forget to keep an eye out for manatees! These ECO tours last 12 hours and fill whole days with outdoor adventures.',
        website: 'https://www.floridadolphintours.com/en/florida-adventure-tour',
        prices: 'Prices - $139 per adult, $109 per child (ages 3-9), free for children under 3 years',
        hours: 'Hours - Tuesdays and Fridays, 8:00am - 8:00pm',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/N6V8IeiagxIEwpYoa9-eZw/o.jpg',
        citation: 'Florida Dolphin Tours. Swim with manatees excursion. 2014. Yelp. https://www.yelp.com/biz_photos/florida-dolphin-tours-orlando?select=N6V8IeiagxIEwpYoa9-eZw',
        hero: adventure,
        heroCitation: 'jc.winkler. Bayou Corne in Louisiana. 2010. Wikipedia. https://en.wikipedia.org/wiki/Bayou#/media/File:Bayou_Corne.jpg '
    },
    {
        title: 'Tibet-Butler Preserve',
        route: '/explore-sightseeing-tibet-butler-preserve',
        blurb: 'Strap on some water proof shoes to go hiking at the Tibet-Butler Preserve. Get together ten or more friends and sign up for eco-education, where you can learn about Florida plants, wildlife and conservation. Additionally free educational programs are offered on Saturdays for children and their parents.',
        website: 'http://www.orangecountyfl.net/cultureparks/parks.aspx?m=dtlvw&d=39#.X-0dWapKigR',
        prices: 'Prices - Hiking is free, programs cost between $2-8 per person',
        hours: 'Hours - Daily, 8:00am - 6:00pm',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/aRFbqu6cDfFst4MxvVb1PA/o.jpg',
        citation: 'D., Mark. Tibet-Butler Preserve Boardwalk. 2017. Yelp. https://www.yelp.com/biz_photos/tibet-butler-preserve-orlando?select=aRFbqu6cDfFst4MxvVb1PA',
        hero: tibet, //'https://media-cdn.tripadvisor.com/media/photo-w/18/11/5e/26/photo2jpg.jpg',
        heroCitation: 'Florida Hikes. Tibet-Butler Preserve. 2021. Florida Hikes, https://floridahikes.com/tibetbutler'
        
    },
    {
        title: 'Lake Eola Park',
        route: '/explore-sightseeing-lake-eola-park',
        blurb: 'Located in the heart of downtown Orlando, Lake Eola Park is a great place to get some steps in or enjoy a view of the city . A sidewalk surrounds Lake Eola and is 0.9 miles long, perfect for keeping track of mileage. You can even rent a 5-person, wheelchair accessible swan boat on the West side of the park.',
        website: 'https://www.orlando.gov/Parks-the-Environment/Directory/Lake-Eola-Park',
        prices: 'Prices - $15 for a 30 minute boat rental',
        hours: 'Hours - Daily, Boat rentals: 11:00am - 6:00pm, Park: 6am-midnight',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/RxdlAuS_9-rcOO1L1O-JIw/o.jpg',
        citation: 'L., Angel. Lake Eola Park at Night. 2020. Yelp. https://www.yelp.com/biz_photos/lake-eola-park-orlando?select=RxdlAuS_9-rcOO1L1O-JIw',
        hero: lakeEola,
        heroCitation: 'Cwolfsheep. Lake Eola park in Orlando. 2016. Wikipedia. https://en.wikipedia.org/wiki/Lake_Eola_Park#/media/File:Lakeeola_09232006_trees.jpg '
    },
    {
        title: 'Exotic Animal Experience',
        route: '/explore-sightseeing-exotic-animals',
        blurb: 'In this seven acre privately-owned zoo, you not only get to see exotic, endangered animals but can pet and hold them as well. All of the animals are raised in captivity from birth and are friendly with people. The zoo caters to your preferences and offers several experiences that vary in price and length.',
        website: 'https://www.exoticanimalexperience.net/',
        prices: 'Prices - from $150 per person to $750 per person',
        hours: 'Hours - Thursday-Sunday, 10:00am - 2:00pm (must book appointment)',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/t2SbThGWcxE2VGVi6Jj5vw/o.jpg',
        citation: 'Exotic Animal Experience. Sloths cuddling at the Exotic Animal Experience. 2017. Yelp. https://www.yelp.com/biz_photos/exotic-animal-experience- orlando?select=t2SbThGWcxE2VGVi6Jj5vw',
        hero: exoticAnimal, //'https://media-cdn.tripadvisor.com/media/photo-o/0a/e4/77/25/sweet-baby-blossom.jpg',
        heroCitation: 'USDA. Wilderness Areas.  2017. USDA Forest Service. https://www.fs.usda.gov/detail/ocala/about-forest/?cid=FSBDEV3_008628'
    },
    {
        title: 'Butler Chain of Lakes',
        route: '/explore-sightseeing-butler-chain-lakes',
        blurb: 'Enjoy the translucent beauty of lakes at the Butler Chain of Lakes. Consisting of 13 lakes that are connected via channels and canals, go for a relaxing boat journey around this spectacular habitat. Catch a ride at sunrise or sunset for something different since you can boat the entire day. Access is available either through R.D Keene Park and Boat Ramp or Lake Down across from the main entrance on Conroy-Windermere Road.',
        website: 'https://www.exoticanimalexperience.net/',
        prices: 'Prices of boat rentals vary across agencies',
        hours: 'Hours - Available 24/7',
        image: 'https://www.orangeobserver.com/sites/default/files/styles/sliders_and_planned_story_image_870x580/public/51707_standard.jpeg?itok=tyvbG1EI',
        citation: 'Nesslar, Jennifer. Lake Tibet-Butler. 2016. Orange Observer, https://www.orangeobserver.com/photo-gallery/final-piece-butler-chain-lakes#photo-5',
        hero: butler,
        heroCitation: 'Mike. Pontoon Rental on the Butler Chain of Lakes in Orlando. 2020. Get My Boat, https://www.getmyboat.com/trips/BN9pLD4K/'
    },
    {
        title: 'Kissimmee Swamp Tours',
        route: '/explore-sightseeing-kissimmee-swamp-tours',
        blurb: 'Located on Lake Kissimmee, lay eyes on the unique Florida wildlife for an adventure away from the city. Explore the Florida Everglades on 60 or 90 minute airboat rides. Engulf yourself in the serenity of nature with the guidance of a trained captain.',
        website: 'https://www.kissimmeeswamptours.com/',
        prices: 'Prices - $49 for a 60 minute tour, $64 for a 90 minute tour',
        hours: 'Hours - Daily, 8:00am - 5:00pm',
        image: 'https://media-cdn.tripadvisor.com/media/photo-w/18/a5/a5/be/kissimmee-swamp-tours.jpg',
        citation: "S., Roy. Beautiful Location. 2019. Trip Advisor, https://www.tripadvisor.com/Attraction_Review-g34337-d677214-Reviews-Kissimmee_Swamp_Tours-Kenansville_Florida.html#photos;aggregationId=101&albumid=101&filter=7&ff=413509054https://www.kissimmeeswamptours.com/",
        hero: kissimmee, //'https://s3-media0.fl.yelpcdn.com/bphoto/m5VPaO9Zz-Ai1_Etkn7AGA/o.jpg',
        heroCitation: 'Experience Kissimmee. Girl and Boy in Boat. 2021. Experience Kissimmee Florida, https://www.experiencekissimmee.com/things-to-do/outdoor-adventures-activities/kissimmee-swamp-tours'
    },
    {
        title: 'Winter Park Scenic Boat Tour',
        route: '/explore-sightseeing-winter-park-boat-tour',
        blurb: 'Sail on a one-hour, narrated, cruise to dive into the tranquility of Winter Park. On any tour, you may see cranes, fishes, and alligators with the guarantee of greenery such as palms, ferns, cypress trees, and other sub-tropical flowers.',
        website: 'https://www.scenicboattours.com/',
        prices: 'Prices - $14',
        hours: 'Hours - Daily, 10:00am - 4:00pm',
        image: 'https://images.squarespace-cdn.com/content/v1/59e75713be42d65cd8ec57f6/1514579927243-0G1R2YD6ZW2T154EM53Y/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/winter-park-scenic-boat-tour03.jpg?format=2500w',
        citation: 'Barbely, Lori. Winter Park Scenic Boat Tour. 2018. Lori Barbely, https://loribarbely.com/blog/2017/12/29/winter-park-scenic-boat-tour',
        hero: 'https://external-preview.redd.it/RkecriZInF6H0OgrnfLFVUfgauOnytVJmtQR8W28gXA.jpg?width=960&crop=smart&auto=webp&s=c03ab76f461641fb403cbd503ecc1d4a3b1f3b9c',
        heroCitation: 'Squidattacksman. Venetian Canal, Winter Park Scenic Boat Tour. 2013. Reddit, https://www.reddit.com/r/orlando/comments/1fnqvl/venetian_canal_winter_park_scenic_boat_tour/'
    },
    {
        title: 'Central Florida Zoo and Botanical Gardens',
        route: '/explore-sightseeing-wildlife-attractions',
        blurb: 'With over 500 animals in its care, you get to encounter a variety of wildlife from rhinoceros to servals. Marvel at the wonder of life through the rich display of both flora and fauna. Observe the biodiversity of nature through the eyes of a butterfly in the Butterfly Garden or the other 23 acres of native gardens accessible to the public.',
        website: 'https://www.centralfloridazoo.org/',
        prices: 'Prices - $19.50',
        hours: 'Hours - Daily, 9:00am - 5:00pm',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/gRCn7w3srUXekBsxuZrdNA/o.jpg',
        citation: 'O., Crystal. More French. 2019. Yelp, https://www.yelp.com/biz_photos/central-florida-zoo-and-botanical-gardens-sanford-3?select=ulNgS8n58167rm9L6ym2TQ',
        hero: zoo, //'https://s3-media0.fl.yelpcdn.com/bphoto/kTohZdrlDXPHiAz4pWME0g/o.jpg',
        heroCitation: 'Orlando Bride Guide Directory. Best Place to Take Photographs near Orlando --- Central Florida Zoo & Botanical Gardens. 2017. Orlando Bride Guide Directory, http://orlandobrideguide.com/best-places-take-photographs-near-orlando-central-florida-zoo-botanical-gardens/'
    }
];

export { sightseeingInputs };

/*
    {
        title: 'Harry P. Leu Gardens',
        blurb: 'Looking to get out in nature? Come explore the paths at Leu Gardens any day of the week. Pick up a guide and map at the Garden House Welcome Center to prepare for your self-guided tour of the grounds. The garden is handicap accessible, and wheelchairs are available at the welcome center.',
        website: 'https://www.leugardens.org/',
        prices: 'Prices - $10 per adult, $5 per child (ages 4-17), Free for children under 3 years',
        hours: 'Hours - Daily, 9:00am - 5:00pm',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/mukaTitS7owa18BKD3xfjg/o.jpg',
        citation: 'O., Crystal. Kopsia Fruticosa at Harry P. Leu Gardens. 2020. Yelp. https://www.yelp.com/biz_photos/harry-p-leu-gardens-orlando?select=mukaTitS7owa18BKD3xfjg'
    },
    {
        title: 'Florida Dolphin Tours/Florida Adventure Tour',
        blurb: 'Escape the city and explore the Flordian wilderness on a boat tour led by local experts. Try snorkeling in the crisp rivers and springs. Don’t forget to keep an eye out for manatees! These ECO tours last 12 hours and fill whole days with outdoor adventures.',
        website: 'https://www.floridadolphintours.com/en/florida-adventure-tour',
        prices: 'Prices - $139 per adult, $109 per child (ages 3-9), free for children under 3 years',
        hours: 'Hours - Tuesdays and Fridays, 8:00am - 8:00pm',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/N6V8IeiagxIEwpYoa9-eZw/o.jpg',
        citation: 'Florida Dolphin Tours. Swim with manatees excursion. 2014. Yelp. https://www.yelp.com/biz_photos/florida-dolphin-tours-orlando?select=N6V8IeiagxIEwpYoa9-eZw'
    },
    {
        title: 'Tibet-Butler Preserve',
        blurb: 'Strap on some water proof shoes to go hiking at the Tibet-Butler Preserve. Get together ten or more friends and sign up for eco-education, where you can learn about Florida plants, wildlife and conservation. Additionally free educational programs are offered on Saturdays for children and their parents.',
        website: 'http://www.orangecountyfl.net/cultureparks/parks.aspx?m=dtlvw&d=39#.X-0dWapKigR',
        prices: 'Prices - Hiking is free, programs cost between $2-8 per person',
        hours: 'Hours - Daily, 8:00am - 6:00pm',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/aRFbqu6cDfFst4MxvVb1PA/o.jpg',
        citation: 'D., Mark. Tibet-Butler Preserve Boardwalk. 2017. Yelp. https://www.yelp.com/biz_photos/tibet-butler-preserve-orlando?select=aRFbqu6cDfFst4MxvVb1PA'
    },
    {
        title: 'Lake Eola Park',
        blurb: 'Located in the heart of downtown Orlando, Lake Eola Park is a great place to get some steps in or enjoy a view of the city . A sidewalk surrounds Lake Eola and is 0.9 miles long, perfect for keeping track of mileage. You can even rent a 5-person, wheelchair accessible swan boat on the West side of the park.',
        website: 'https://www.orlando.gov/Parks-the-Environment/Directory/Lake-Eola-Park',
        prices: 'Prices - $15 for a 30 minute boat rental',
        hours: 'Hours - Daily, Boat rentals: 11:00am - 6:00pm, Park: 6am-midnight',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/RxdlAuS_9-rcOO1L1O-JIw/o.jpg',
        citation: 'L., Angel. Lake Eola Park at Night. 2020. Yelp. https://www.yelp.com/biz_photos/lake-eola-park-orlando?select=RxdlAuS_9-rcOO1L1O-JIw'
    },
    {
        title: 'Exotic Animal Experience',
        blurb: 'In this seven acre privately-owned zoo, you not only get to see exotic, endangered animals but can pet and hold them as well. All of the animals are raised in captivity from birth and are friendly with people. The zoo caters to your preferences and offers several experiences that vary in price and length.',
        website: 'https://www.exoticanimalexperience.net/',
        prices: 'Prices - from $150 per person to $750 per person',
        hours: 'Hours - Thursday-Sunday, 10:00am - 2:00pm (must book appointment)',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/t2SbThGWcxE2VGVi6Jj5vw/o.jpg',
        citation: 'Exotic Animal Experience. Sloths cuddling at the Exotic Animal Experience. 2017. Yelp. https://www.yelp.com/biz_photos/exotic-animal-experience- orlando?select=t2SbThGWcxE2VGVi6Jj5vw'
    },
    {
        title: 'Butler Chain of Lakes',
        blurb: 'Enjoy the translucent beauty of lakes at the Butler Chain of Lakes. Consisting of 13 lakes that are connected via channels and canals, go for a relaxing boat journey around this spectacular habitat. Catch a ride at sunrise or sunset for something different since you can boat the entire day. Access is available either through R.D Keene Park and Boat Ramp or Lake Down across from the main entrance on Conroy-Windermere Road.',
        website: 'https://www.exoticanimalexperience.net/',
        prices: 'Prices of boat rentals vary across agencies',
        hours: 'Hours - Available 24/7',
        image: 'https://www.orangeobserver.com/sites/default/files/styles/sliders_and_planned_story_image_870x580/public/51707_standard.jpeg?itok=tyvbG1EI',
        citation: 'Nesslar, Jennifer. Lake Tibet-Butler. 2016. Orange Observer, https://www.orangeobserver.com/photo-gallery/final-piece-butler-chain-lakes#photo-5'
    },
    {
        title: 'Kissimmee Swamp Tours',
        blurb: 'Located on Lake Kissimmee, lay eyes on the unique Florida wildlife for an adventure away from the city. Explore the Florida Everglades on 60 or 90 minute airboat rides. Engulf yourself in the serenity of nature with the guidance of a trained captain.',
        website: 'https://www.kissimmeeswamptours.com/',
        prices: 'Prices - $49 for a 60 minute tour, $64 for a 90 minute tour',
        hours: 'Hours - Daily, 8:00am - 5:00pm',
        image: 'https://media-cdn.tripadvisor.com/media/photo-w/18/a5/a5/be/kissimmee-swamp-tours.jpg',
        citation: "S., Roy. Beautiful Location. 2019. Trip Advisor, https://www.tripadvisor.com/Attraction_Review-g34337-d677214-Reviews-Kissimmee_Swamp_Tours-Kenansville_Florida.html#photos;aggregationId=101&albumid=101&filter=7&ff=413509054https://www.kissimmeeswamptours.com/"
    },
    {
        title: 'Winter Park Scenic Boat Tour',
        blurb: 'Sail on a one-hour, narrated, cruise to dive into the tranquility of Winter Park. On any tour, you may see cranes, fishes, and alligators with the guarantee of greenery such as palms, ferns, cypress trees, and other sub-tropical flowers.',
        website: 'https://www.scenicboattours.com/',
        prices: 'Prices - $14',
        hours: 'Hours - Daily, 10:00am - 4:00pm',
        image: 'https://images.squarespace-cdn.com/content/v1/59e75713be42d65cd8ec57f6/1514579927243-0G1R2YD6ZW2T154EM53Y/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/winter-park-scenic-boat-tour03.jpg?format=2500w',
        citation: 'Barbely, Lori. Winter Park Scenic Boat Tour. 2018. Lori Barbely, https://loribarbely.com/blog/2017/12/29/winter-park-scenic-boat-tour'
    },
    {
        title: 'Central Florida Zoo and Botanical Gardens',
        blurb: 'With over 500 animals in its care, you get to encounter a variety of wildlife from rhinoceros to servals. Marvel at the wonder of life through the rich display of both flora and fauna. Observe the biodiversity of nature through the eyes of a butterfly in the Butterfly Garden or the other 23 acres of native gardens accessible to the public.',
        website: 'https://www.centralfloridazoo.org/',
        prices: 'Prices - $19.50',
        hours: 'Hours - Daily, 9:00am - 5:00pm',
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/gRCn7w3srUXekBsxuZrdNA/o.jpg',
        citation: 'O., Crystal. More French. 2019. Yelp, https://www.yelp.com/biz_photos/central-florida-zoo-and-botanical-gardens-sanford-3?select=ulNgS8n58167rm9L6ym2TQ'
    }
    */