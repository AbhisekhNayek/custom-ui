
import PropTypes from 'prop-types';
import { light_mode_logo } from "../../assets";
import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import PrimaryButton from '../buttons/PrimaryBtn';
import SecondaryBtn from '../buttons/SecondaryBtn';


function MobileMenu({ onClose }) {
  return (
    <div className="w-full h-screen bg-white absolute top-0 left-0 overflow-x-hidden sm:hidden z-50">
      {/* Header */}
      <div
        id="header"
        className="h-[72px] px-[16px] py-[20px] flex items-center justify-between"
      >
        {/* logo */}
        <img id="logo" className="" src={light_mode_logo} alt="logo" />
        {/* cross */}
        <RxCross2 className="h-[24px] w-[24px] cursor-pointer" onClick={onClose} />
      </div>
       
       {/* Other menu Items */}
      <div id="menuitems" className="mt-4">
        <ul>
          <li className="px-[16px] text-xl font-semibold py-[16px] hover:bg-gray-100"><a href="#">Home</a></li>
          <li className="px-[16px] text-xl font-semibold flex w-full items-center justify-between py-[16px] hover:bg-gray-100"><a href="#">Products</a>
            <div className="icon"><IoIosArrowDown /></div>
          </li>
          <li className="px-[16px] text-xl font-semibold flex w-full items-center justify-between py-[16px] hover:bg-gray-100"><a href="#">Resources</a>
            <div className="icon"><IoIosArrowDown /></div>
          </li>
          <li className="px-[16px] text-xl font-semibold py-[16px] hover:bg-gray-100"><a href="#">Pricing</a></li>
        </ul>
        <hr />
        <ul className="px-[16px] mt-8 w-full flex items-center justify-between">
          <div className="left w-[50%] flex items-start justify-start gap-2 flex-col">
            <li className="text-xl font-semibold hover:opacity-80"><a href="#">About Us</a></li>
            <li className="text-xl font-semibold hover:opacity-80"><a href="#">Press</a></li>
            <li className="text-xl font-semibold hover:opacity-80"><a href="#">Careers</a></li>
            <li className="text-xl font-semibold hover:opacity-80">Legal</li>
          </div>
          <div className="right w-[50%] flex items-start justify-start gap-2 flex-col">
            <li className="text-xl font-semibold hover:opacity-80"><a href="#">Support</a></li>
            <li className="text-xl font-semibold hover:opacity-80"><a href="#">Contact</a></li>
            <li className="text-xl font-semibold hover:opacity-80"><a href="#">Site</a></li>
            <li className="text-xl font-semibold hover:opacity-80"><a href="#">Legal</a></li>
          </div>
        </ul>
      </div>
    </div>
  );
}

// PropTypes validation
MobileMenu.propTypes = {
  onClose: PropTypes.func.isRequired,  
};

export default MobileMenu;
