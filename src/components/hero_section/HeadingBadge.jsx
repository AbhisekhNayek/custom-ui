import { arrow_right } from "../../assets"
import FeatureBadge from "./FeatureBadge"

function HeadingBadge() {
  return (
    <div className="w-[320px] h-[30px] rounded-[10px] border-[1px] border-[#D0D5DD] p-[4px] flex items-center gap-[8px] bg-white sm:w-[365px]">
      <FeatureBadge/>
      <p className="ml-2 text-[12px] font-[500] tracking-tighter text-[#344054] sm:text-[14px]">Check out the team dashboard</p>
      <img src={arrow_right} alt="" />
    </div>
  )
}

export default HeadingBadge
