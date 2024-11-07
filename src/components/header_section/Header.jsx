import  {  useState } from 'react'; 
import { light_mode_logo, menu, } from "../../assets";
import user from "../../assets/images/user.png";
import MobileMenu from "./MobileMenu";
import PrimaryButton from '../buttons/PrimaryBtn';
import SecondaryBtn from '../buttons/SecondaryBtn';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative w-full h-[72px]  p-[16px] py-[20px] flex items-center justify-between sm:h-[80px] sm:py-[18px]">
    {/* left */}
     <div className='flex items-center'>
       {/* logo */}
       <img id="logo" className="" src={light_mode_logo} alt="logo" />
       <ul className='hidden ml-10 sm:flex sm:item-center gap-[16px] md:gap-[32px]  text-[#475467] font-semibold '>
        <li className='text-[#7F56D9]'><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Pricing</a></li>
       </ul>
     </div>

    {/* Desktop menu */}
    <div className="sm:flex sm:items-center hidden gap-3 ">
    <img
          src={user}
          alt="User Avatar"
          className="w-[40px] h-[40px] rounded-full cursor-pointer"
        />
    </div>


      {/* mobile menu */}
      <img
        id="menu"
        className="block h-[24px] w-[24px] sm:hidden cursor-pointer"
        src={menu}
        alt="Menu Icon"
        onClick={handleMenuToggle}
      />
      {/* Open mobile menu */}
      {isMenuOpen && <MobileMenu onClose={handleCloseMenu} />}



    </div>
  );
}

export default Header;
