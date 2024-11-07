import user from "../../assets/images/user.png";

const ProfileStack = () => {
  return (
    <div className="
      w-full mt-[48px] py-[32px] bg-[#F9FAFB] rounded-2xl md:mx-[112px] md:w-[1216px] flex flex-col items-center gap-[24px] md:gap-[32px]
    ">
      {/* Image stack */}
      <div className="relative flex items-center justify-center space-x-1"> 
        <img
          className="w-[48px] h-[48px] rounded-full object-cover border-[0.75px] opacity-80 border-black"
          src={user}
          alt="Profile image 1"
        />
        <img
          className="w-[56px] h-[56px] z-10 border-[1.5px] border-white rounded-full object-cover"
          src={user}
          alt="Profile image 2"
        />
        <img
          className="w-[48px] h-[48px] rounded-full object-cover border-[0.75px] opacity-80 border-black"
          src={user}
          alt="Profile image 3"
        />
      </div>

      {/* Text section */}
      <div className="text-center">
        <h3 className="font-[600] text-[20px] leading-[30px] text-[#101828]">
          Still have questions?
        </h3>
        <p className="font-[400] text-[16px] leading-[24px] text-[#475467] md:text-[18px] md:leading-[28px] mt-[8px]">
          Can’t find the answer you’re looking for? Please chat to our friendly team.
        </p>
      </div>

      {/* Button */}
      <button className="flex w-[148px] bg-[#7F56D9] hover:bg-[#6d45c3] justify-center items-center py-3 px-2 rounded-lg font-[600] text-[16px] text-white">
        Get in touch
      </button>
    </div>
  );
};

export default ProfileStack;
