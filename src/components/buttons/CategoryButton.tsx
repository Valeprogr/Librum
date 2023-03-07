
interface CB {
    children: React.ReactNode
}
const CategoryButton = ({children}: CB) => {
  return (
    <div className="p-2 rounded-lg bg-dark mt-4 text-card w-full hover cursor-pointer">{children}</div>
  )
}

export default CategoryButton