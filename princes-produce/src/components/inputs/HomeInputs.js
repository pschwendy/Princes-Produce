import {
  Button,
  Carousel
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/CarouselSection.css';
import '../css/main.css';

import transportation from '../pages/assets/transportation_carousel.jpg';
import sightseeing from '../pages/assets/sightseeing_carousel.jpg';
import food from '../pages/assets/food_carousel.jpg';
import attractions from '../pages/assets/attractions_carousel.jpg';
let carouselItemHeight = 100;

//JSON storing carousel info
const carouselInputs = [
  {
    image: transportation,
      //'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/SunRail_train_leaving_Winter_Park_Station.JPG/1920px-SunRail_train_leaving_Winter_Park_Station.JPG',
    height: carouselItemHeight,
    title: 'Getting Around',
    captionText: 'Compare some options and find the most convenient way to travel around the metropolis.',
    button: 'See Options',
    ref:'#/explore-transportation/',
    citation: 'Artystyk386. A southbound SunRail train leaving Winter Park Station, en route to downtown Orlando. 2014. Wikipedia, https://en.wikipedia.org/wiki/SunRail#/media/File:SunRail_train_leaving_Winter_Park_Station.JPG'
  },
  {
    image: sightseeing,
      //'https://108pkt40d39i1mdq4v41ganb-wpengine.netdna-ssl.com/wp-content/uploads/2017/08/best-cities-for-nurses-orlando.jpg',
    height: carouselItemHeight,
    title: 'Sightseeing',
    captionText: 'Experience Orlando to the fullest, and immerse yourself in the real city experience.',
    button: 'See Options',
    ref:'#/explore-sightseeing/',
    citation: 'MAS Medical Staffing. Orlando. 2017. MAS Medical Staffing, https://www.masmedicalstaffing.com/2017/08/22/best-cities-for-nurses-to-work/'
  },
  {
    image: food,
      //'https://1.bp.blogspot.com/-N9ZvPlmBjZM/WVq3H5bZWBI/AAAAAAABJBA/vR5uST6xsvYWOlYM1nkhGKStdTbxsYAgACLcBGAs/s1600/Belgian%2BWaffle%2Barrangement.jpg',
    height: carouselItemHeight,
    title: 'Local Food',
    captionText: 'Orlando offers one of the most multicultural food scenes in the world. Pick any choice from Italian to Ethiopian.',
    button: 'See Options',
    ref:'#/explore-food/',
    citation: 'Eating Orlando. Desserts. 2017. Eating Orlando, http://eatingorlando.blogspot.com/2017/07/seaworld-orlando-announces-new.html'
  },
  {
    image: attractions, /*searched orlando attractions for image*/
      // 'https://cdn.newsday.com/polopoly_fs/1.11408063.1454597559!/httpImage/image.jpeg_gen/derivatives/display_960/image.jpeg',
    height: carouselItemHeight,
    title: 'Attractions',
    captionText: 'Orlando is known for its many exciting attractions. Learn about the best places to visit from the unique Museum of Art to the amazing Universal Theme Park.',
    button: 'See Options',
    ref:'#/explore-attractions/',
    citation: 'Capital Gazette. Mako at SeaWorld Orlando. 2021. Capital Gazette, https://www.capitalgazette.com/orl-seaworld-pg-photogallery.html'
  },
];

const carouseloutputs = [];
carouselInputs.forEach((element) =>
  carouseloutputs.push(
    <Carousel.Item>
      <div className="head-hero">
          <div className="">
              <img className="img-fluid d-block w-100 carousel-image" alt={element.title} src={element.image} />
          </div>
          <div className="carousel-citation">{element.citation}</div>
        <div className="carousel-heading bg-transparent overflow-hidden py-4 py-md-5 h-100">
          <div class="container-fluid mx-auto py-4 py-md-5">
            <div class="row d-flex align-items-md-center justify-content-between">
              <div></div>
              <div className="col-md text-center text-md-left px-4" style={{ top: '35%' }}>
                <header className="display-md-2 display-4" id="carousel-title">{element.title}</header>
                <p className="carousel-description">{element.captionText}</p>
                <div className="">
                  <a href={element.ref}>
                    <Button>{element.button}</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Carousel.Item>
  )
);
/*<Carousel.Item interval={element.interval}>

</Carousel.Item>*/
export { carouseloutputs };
/*
<HeroSection image={element.image} alt={element.title} filter={element.carouselFilter}>
        <div className='child' style={{ top: '35%' }}>
          <header className='header'>{element.title}</header>
        </div>
      </HeroSection>

    
*/