import brackets from "../assets/svg/Brackets";

const Tagline = ({className,children}) => {
  return (
    <div className={`tagline flex items-center ${className} || "" `}>
      {brackets("left")}
      <div className="m-x-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  )
}

export default Tagline
