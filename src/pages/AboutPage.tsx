
const AboutPage = () => {
  return (
    <div className="flex items-center justify-center">
    <div className="md:max-w-[700px] lg:max-w-[900px] flex flex-col justify-start items-center md:px-20 pt-6">
        <h2 className="text-center md:text-left w-full text-2xl md:text-3xl font-bold">About us</h2>
        <img src='../about/girl-reading.jpg' alt='girl reading' className="bg-cover bg-center md:w-[700px] lg:w-[900px]  w-full py-4 " />
        <h3 className="px-6 md:px-0 text-xl font-[500] pb-1 text-left w-full">Reading is a gift</h3>
        <p className="text-dark/80 px-6 md:px-0">
        Reading is an experience. Books make the world understandable. And our imagination drives us. Inspired by constant new impulses from the world of books, we at Thalia create future-oriented reading worlds and seamlessly interlinked shopping experiences with a unique mix of personal advice, inspiring product ranges and innovative digital solutions. So that our customers can find the right reading material – anytime, anywhere.
        </p>
        <img src='../about/books.jpg' alt='girl reading' className="bg-cover bg-center md:w-[700px] lg:w-[900px]  w-full py-4 aspect-[16/8]" />
        <h3 className="px-6 md:px-0 text-xl font-[500] pb-1 text-left w-full">Diversity, Equity and Inclusion</h3>
        <p className="text-dark/80 px-6 md:px-0">We offer educational sessions and share information to equip our colleagues to be able to bring their whole selves to work and be effective allies. We see ourselves like our range of books - diverse and richly full of stories, which help us as we learn both from each other and from our customers. We advocate equity to always provide a place for marginalised voices and recognise there is always more to do and learn.
</p>
    </div>
    </div>
  )
}

export default AboutPage