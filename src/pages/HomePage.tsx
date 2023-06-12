import Carousel from "../components/Carousel";
import Searchbar from "../components/Searchbar";

const image = "../home/home.png";
const style: object = {
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  height: '800px',
  with: "100%",
  position: "relative",
  textAlign: "left",
  color: "white"
}
const HomePage = () => {
  return (
    <div className="h-auto w-auto px-[24px] md:px-20 ">
      <div className="flex flex-col lg:flex-row lg:justify-between container lg:mx-10 py-3 border-b border-gray-300">
        <Searchbar />
        <div className="flex mt-2">
          <div className="w-24 px-2 font-semibold cursor-pointer">CUPON30%</div>
          <div className="w-24 px-2 font-semibold text-red-600 cursor-pointer">SALE</div>
        </div>  
      </div>
      <div style={style}>
        <div className="absolute w-auto xl:w-[500px] bg-black opacity-80 xl:bg-transparent lg:opacity-100  xl:right-6 2xl:right-32  top-20  right-0 border border-white p-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to Librum</h1>
          <p className="leading-7">Librum is a platform created to resell second-hand paper books in excellent condition. 
Here you can find a wide selection of books from novels to thrillers and there are really all varieties.
We all know buying a new book is not always eco-sustainable and we at Librum Team care a lot about our planet and that`s exactly why we give the opportunity to resell old editions or books you don´t want to have anymore.</p>
          <p className="text-xl font-mono mt-4">Knowledge is power</p>
          <p className="text-l font-mono">Sir Francis Bacon</p>
        </div>

      </div>

      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
        <Carousel />
      </div>
    </div>
  )
}

export default HomePage