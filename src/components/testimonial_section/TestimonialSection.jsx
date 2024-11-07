import { Company_logo_6 } from "../../assets/";
import user from "../../assets/images/user.png";

function TestimonialSection() {
  return (
    <div className="w-full py-[64px] px-[16px] flex flex-col items-center bg-[#F9FAFB] gap-8 
    md:py-[96px] md:px-[112px] md:gap-8
    ">
      <img
        className="
      
      "
        src={Company_logo_6}
        alt=""
      />
      <h2
        className="
      font-[500] text-[30px] leading-[38px] text-center text-[#101828]
      md:text-[48px] md:leading-[60px] tracking-tight
      "
      >
        We’ve been using Untitled to kick start every new project and can’t
        imagine working without it.
      </h2>
      {/* profile */}
      <div className="flex flex-col items-center gap-4">
        <img
          className="h-[60px] w-[60px] rounded-full border-[0.75px] border-black"
          src={user} alt="" />
        {/* text */}
        <div className="flex flex-col gap-1">
          <p className=" font-[600] text-[18px] text-center leading-7 text-[#101828]
       
       "
          >Candice Wu</p>
          <p className=" font-[400] text-[16px] leading-4 text-[#475467] md:leading-6
      ">Product Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
