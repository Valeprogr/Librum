
interface CTAButton {
    cssProps?: string;
    children: React.ReactNode;
    value?: string;
    clickEvent?: (e : React.MouseEvent<HTMLElement>) => void | undefined;
  
}

const CTAButton  = ({ cssProps, children, clickEvent ,value}: CTAButton) => {

  return (
    <button type="button"  value={`${value}`} onClick={clickEvent}   className={`rounded-lg font-bold text-card p-2 px-4 bg-dark border-none shadow-md hover:bg-hover ${cssProps}`}>{children}</button>
  )
}

export default CTAButton