import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carousel({items}) {
        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 3,
          };
      
        return (
            <div className='w-full'>
          <div className='mx-[209.6px] py-4 my-10'>
            <h1 className='my-8 ml-[6px] text-3xl'>Top brands for you</h1>
            <Slider {...settings}>
            
              {items.map((item, index) => (
                <div key={index} className='h-[188px]'>
                    <img src={item.img}
                    className='w-[150px] h-[150px] rounded-full' />
                    <p className='text-[16px] pr-8 mt-[10px] text-slate-900 flex text-center justify-center'>{item.title}</p>
                    <p className='text-[14px] pr-8 my-[4px] text-slate-600 flex text-center justify-center'>{item.time} min</p>
                </div>
              ))}
            
            </Slider>
          </div>
          </div>
        );
    };

export default Carousel