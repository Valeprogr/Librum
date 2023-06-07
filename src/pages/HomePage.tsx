import Carousel from "../components/Carousel";
import Searchbar from "../components/Searchbar";

const image = "../home/home.png";
const style:any = {
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  height: '100vh',
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
        <div className="flex">
          <div className="w-24 px-2 font-semibold cursor-pointer">CUPON30%</div>
          <div className="w-24 px-2 font-semibold text-red-600 cursor-pointer">SALE</div>
        </div>  
      </div>
      <div style={style}>
        <div className="absolute w-full lg:w-[500px] bg-black opacity-80 lg:bg-transparent lg:opacity-100 lg:right-[28px] 2xl:right-52 top-1/4 border border-white p-10">
          <h1 className="text-5xl font-bold mb-4">Welcome to Librum</h1>
          <p className="leading-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis fugiat architecto veritatis ab! Odio maxime eum minus odit distinctio nam ut explicabo. Numquam error obcaecati distinctio magni reprehenderit, explicabo ipsum! Dolorum nobis quae aliquid earum provident ipsam nemo ea quia, quos in.</p>
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