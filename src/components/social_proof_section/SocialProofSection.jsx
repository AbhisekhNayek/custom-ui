import { 
    Company_logo_0,
    Company_logo_1,
    Company_logo_2,
    Company_logo_3,
    Company_logo_4,
    Company_logo_5,
    } from "../../assets/"
function SocialProofSection() {
  return (
    <div className="w-full px-4 mt-[64px]
    
    ">
        <p className="text-center text-[16px] leading-[24px] font-[500] text-[#475467]
        ">Join 4,000+ companies already growing</p>

        {/* logos */}
        <div className="flex flex-wrap gap-4 justify-center items-center content-start mt-[32px] md:h-[48px] md:gap-6">
            <img className="h-[36px]" src={Company_logo_0} alt="" />
            <img className="h-[36px]" src={Company_logo_1} alt="" />
            <img className="h-[36px]" src={Company_logo_2} alt="" />
            <img className="h-[36px]" src={Company_logo_3} alt="" />
            <img className="h-[36px]" src={Company_logo_4} alt="" />
            <img className="h-[36px]" src={Company_logo_5} alt="" />
            
        </div>

        {/* divider */}
        <div className="md:hidden mt-4 w-full h-[1px] bg-[#E4E7EC]"></div>

      
    </div>
  )
}

export default SocialProofSection
