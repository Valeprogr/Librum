import CategoryButton from "../components/buttons/CategoryButton"

const BooksListPage = () => {
  return (
    <div className="flex  items-start min-w-full justify-center">
        <div className="flex flex-col items-center  w-full justify-center max-w-[1300px] pt-2 relative">
        <h2 className="text-left w-full max-w-[700px] px-[24px] md:px-0 pt-4 text-3xl font-[500] pb-4">Book's List </h2>
        <div className="flex items-center max-w-[700px] justify-center w-full h-full gap-4 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
          <CategoryButton>Category</CategoryButton>
          <CategoryButton>Category</CategoryButton>
          <CategoryButton>Category</CategoryButton>
          <CategoryButton>Category</CategoryButton>
          <CategoryButton>Category</CategoryButton>
          <CategoryButton>Category</CategoryButton>
          <CategoryButton>Category</CategoryButton>
        </div>
    </div>
    </div>
  )
}

export default BooksListPage