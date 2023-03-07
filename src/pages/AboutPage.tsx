
const AboutPage = () => {
  return (
    <div className="flex items-start min-w-full justify-center -z-10">
        <div className="flex flex-col items-center w-full justify-center max-w-[1300px] pt-2 ">
        <h2 className="text-left w-full max-w-[700px] px-[24px] md:px-0 pt-4 text-3xl font-[500] pb-4">About us </h2>
        <img src='../girl-reading.jpg' alt='girl reading' className=" w-full max-w-[700px] aspect-[16/7] mdd:rounded-lg shadow-lg" />

        <div className="flex flex-col gap-2 pt-2 px-[24px] md:px-0 max-w-[700px]">
            <h2 className="text-xl font-[500]">We want, that reading in life of people remains present</h2>
<p className="text-dark/80">
Reading is an experience. Books make the world understandable. And our imagination drives us. Inspired by constant new impulses from the world of books, we at Thalia create future-oriented reading worlds and seamlessly interlinked shopping experiences with a unique mix of personal advice, inspiring product ranges and innovative digital solutions. So that our customers can find the right reading material – anytime, anywhere.  
</p>
    <h2 className="pt-2 text-xl font-[500]">Our Mission</h2>
    <p className="text-dark/80">As a traditional, medium-sized family company, we always have the well-being of the next generation in mind. That is why values such as sustainability, environmental awareness and provision for generations are important to us. At the former headquarters of the publishing house in Nördlingen, there is not only the publishing house's own print shop, but also the delivery department. This saves unnecessary transport routes - thus CO2 emissions - and enables fast delivery to our customers. The publisher compensates 100 percent of the CO2 emissions caused by the print production of books and advertising material by financing a climate protection project that enables CO2 savings of the same amount.</p>
        </div>
    
        </div>
    </div>
  )
}

export default AboutPage