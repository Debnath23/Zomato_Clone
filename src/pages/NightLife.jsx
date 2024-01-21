import Category from '../components/Main/Category'
import Footer from '../components/Main/Footer'
import SearchBar from '../components/Main/SearchBar'
import FilterButton from "../components/Main/FilterButton";
import CollectionsCarousel from "../components/Main/CollectionsCarousel";
import { NightLifeImage } from "../components/Products/Products";
import { Products } from "../components/Products/Products";
import Card from "../components/Card/Card";

function NightLife() {
  return (
    <div>
      <SearchBar />
      <Category />
      <div>
        <CollectionsCarousel items={NightLifeImage}/>
      </div>

      <div className="flex mx-12">
        <FilterButton>
          <svg className="w-[18px] h-[18px] mr-1">
            <path d="M2.14 6.42h7.26c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h2.96c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001h-2.94c-0.341-1.226-1.447-2.11-2.76-2.11s-2.419 0.885-2.755 2.090l-0.005 0.020h-7.26c-0.343 0.059-0.6 0.355-0.6 0.71s0.257 0.651 0.596 0.709l0.004 0.001zM12.16 4.28c0.776 0.011 1.4 0.643 1.4 1.42 0 0.784-0.636 1.42-1.42 1.42-0.777 0-1.409-0.624-1.42-1.399l-0-0.001c-0-0.006-0-0.013-0-0.020 0-0.784 0.636-1.42 1.42-1.42 0.007 0 0.014 0 0.021 0l-0.001-0zM17.86 13.58h-7.24c-0.328-1.245-1.443-2.148-2.77-2.148s-2.442 0.903-2.766 2.128l-0.004 0.020h-2.94c-0.036-0.006-0.077-0.010-0.12-0.010-0.398 0-0.72 0.322-0.72 0.72s0.322 0.72 0.72 0.72c0.042 0 0.084-0.004 0.124-0.011l-0.004 0.001h2.96c0.353 1.207 1.45 2.074 2.75 2.074s2.397-0.867 2.745-2.054l0.005-0.020h7.26c0.343-0.059 0.6-0.355 0.6-0.71s-0.258-0.651-0.596-0.709l-0.004-0.001zM7.84 15.72c-0.776-0.011-1.4-0.643-1.4-1.42 0-0.784 0.636-1.42 1.42-1.42 0.777 0 1.409 0.624 1.42 1.399l0 0.001c0 0.006 0 0.013 0 0.020 0 0.784-0.636 1.42-1.42 1.42-0.007 0-0.014-0-0.021-0l0.001 0z"></path>
          </svg>
          <p>Filters</p>
        </FilterButton>
        <FilterButton>
          <img
            src="https://b.zmtcdn.com/data/o2_assets/577bf55ff265ae45e11cfe6911d176941687789024.png"
            className="w-[18px] h-[18px] mr-1"
            alt="gold icon"
          />
          <p>Gold</p>
        </FilterButton>
        <FilterButton>Rating: 4.0+</FilterButton>
        <FilterButton>Pubs & Bars</FilterButton>
      </div>

      <div className="mx-12">
        <img src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"
        className=""
        alt="banner" />
      </div>

      <div className="text-[30px] mt-[10px] mb-8 mx-12">Trending dining restaurants in your City</div>

      <div>
        <div className="grid gap-x-4 gap-y-3 px-[30px] grid-cols-3">
          {Products.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default NightLife