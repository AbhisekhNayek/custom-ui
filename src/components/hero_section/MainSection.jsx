import HeadingBadge from "./HeadingBadge"
import PrimaryButton from "../buttons/PrimaryBtn"
import IconButton from "../buttons/IconButton"
import { play_circle } from "../../assets"

const MainSection = () => {
  return (
    <div className="mt-[64px] h-[402px] w-full flex flex-col items-center">
        <HeadingBadge/>
        <h1 className="text-center text-[36px] font-[600] leading-[44px] tracking-tight text-[#101828] mx-[14px] my-[16px] md:text-[55px] md:leading-[72px]">Beautiful analytics to grow smarter</h1>
        <p className="font-[400] text-[18px] leading-[28px] tracking-tight text-center text-[#475467]  md:text-[20px] md:leading-[30px] md:w-[768px]">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
        
        <div className="btndiv w-full px-[16px] mt-[32px] md:flex md:flex-row-reverse md:items-center md:justify-center md:gap-3">
          <PrimaryButton onClick={()=>{console.log("Sign up clicked")}} childern={"Sign up"} className={"w-[100%] md:w-[114px] px-[16px] py-[14px] text-[18px] font-[600] md:mx-0"} />
          <IconButton
            icon={<img src={play_circle} alt="circle icon"/>}  
          text="Demo"
          onClick={() => { console.log("Watch demo"); }}
          className="w-[100%] mt-3 md:w-[133px] px-[16px] py-[12px] text-[18px] font-[600] md:mx-0 md:mt-0"
      />
        </div>
    </div>
  )
}

export default MainSection
