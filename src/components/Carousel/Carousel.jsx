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
            <div className='w-full bg-slate-50'>
          <div className=' mx-[209.6px] py-4'>
            <h1 className='my-8 ml-4 text-3xl'>Inspriraton for your first order</h1>
            <Slider {...settings}>
            
              {items.map((item, index) => (
                <div key={index} className='h-[188px]'>
                    <img src={item.img}
                    className='w-[150px] h-[150px] rounded-full' />
                    <p className='text-[20px] pr-4 mt-[6px] text-slate-600 flex text-center justify-center'>{item.title}</p>
                </div>
              ))}
            
            </Slider>
          </div>
          </div>
        );
    };

export default Carousel