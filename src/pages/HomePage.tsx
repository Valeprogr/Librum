import Carousel from "../components/Carousel";
import Searchbar from "../components/spinner/Searchbar";
const HomePage = () => {
  return (
    <div className="h-auto w-auto px-[24px] md:px-20">
      <div className="flex flex-col lg:flex-row lg:justify-between container mx-10 lg:mx-auto py-3 border-b border-gray-300">
        <Searchbar />
        <div className="flex">
          <div className="w-24 px-2 font-semibold cursor-pointer">CUPON30%</div>
          <div className="w-24 px-2 font-semibold text-red-600 cursor-pointer">SALE</div>
        </div>  
      </div>

      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <Carousel />
      </div>
    </div>
  )
}

export default HomePage