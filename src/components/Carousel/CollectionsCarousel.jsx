import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CollectionsCarousel({ items }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full bg-slate-50">
      <div className=" mx-[209.6px] pb-7">
        <h1 className="text-[30px] mb-[26px]">Collections</h1>
        <p className="my-3 text-[18px] text-slate-500">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          your City, based on trends
        </p>
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="h-auto bg-collImg">
              <img src={item} className="w-[260px] h-[320px] rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
