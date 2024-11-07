import { dot } from "../../assets"

function FeatureBadge() {
  return (
    <div className="flex items-center gap-1 rounded-[6px] border-[1px]  border-[#D0D5DD] w-[95px] h-[22px] px-[6px] py-[2px] sm:w-[112px] sm:px-[6px]">
      <img className="h-2 w-2" src={dot} alt="" />
      <p className="font-[500]  text-nowrap text-[10px] text-[#344054] sm:text-[14px]">New Feature</p>
    </div>
  )
}

export default FeatureBadge
