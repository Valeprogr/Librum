
interface CTAButton {
    cssProps?: string;
    children: React.ReactNode;
    clickEvent?: () => void
}

const CTAButton = ({ cssProps, children, clickEvent }: CTAButton) => {

  return (
    <button onClick={clickEvent} className={`rounded-lg font-bold text-card p-2 px-4 bg-dark border-none shadow-md hover:bg-hover ${cssProps}`}>{children}</button>
  )
}

export default CTAButton