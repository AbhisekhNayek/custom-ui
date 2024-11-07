import FooterElements from './FooterElements'; // Assuming FooterElements is in the same folder
import { light_mode_logo } from "../../assets/"
import Divider from '../utilityComponents/Divider';
function Footer() {
  let data = [
    {
      title: "Product",
      links: [
        { text: "Overview", link: "#" },
        { text: "Features", link: "#" },
        { text: "Solutions", link: "#" },
        { text: "Tutorials", link: "#" },
        { text: "Pricing", link: "#" },
        { text: "Releases", link: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About us", link: "#" },
        { text: "Careers", link: "#" },
        { text: "Press", link: "#" },
        { text: "News", link: "#" },
        { text: "Media kit", link: "#" },
        { text: "Contact", link: "#" },
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Blog", link: "#" },
        { text: "Contact", link: "#" },
        { text: "Newsletter", link: "#" },
        { text: "Help center", link: "#" },
        { text: "Tutorials", link: "#" },
        { text: "Support", link: "#" },
      ]
    },
    {
      title: "Use cases",
      links: [
        { text: "Startups", link: "#" },
        { text: "Enterprise", link: "#" },
        { text: "Government", link: "#" },
        { text: "SaaS center", link: "#" },
        { text: "Marketplaces", link: "#" },
        { text: "Ecommerce", link: "#" },
      ]
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", link: "#" },
        { text: "LinkedIn", link: "#" },
        { text: "Facebook", link: "#" },
        { text: "GitHub", link: "#" },
        { text: "AngelList", link: "#" },
        { text: "Dribbble", link: "#" },
      ]
    },
    {
      title: "Legal",
      links: [
        { text: "Terms", link: "#" },
        { text: "Privacy", link: "#" },
        { text: "Cookies", link: "#" },
        { text: "Licenses", link: "#" },
        { text: "Settings", link: "#" },
        { text: "Contact", link: "#" },
      ]
    },
  ];

  return (
    <div className="mt-[64px] md:mt-[96px] pb-[64px] md:pb-[96px] mx-[16px] flex flex-wrap gap-[24px] items-center justify-center  content-between md:w-full md:px-[112px] md:gap[32px] ">
      {data.map((item, index) => (
        <FooterElements key={index} title={item.title} links={item.links} showBadge={index === 0} />
      ))}

      <div className='w-full mt-[80px] md:ml-[35px] flex items-center justify-between gap-[24px]'>
        <img src={light_mode_logo} alt="Logo" />
        <p className='font-[400] text-[16px] leading-[24px] text-[#667085] text-right'>© 2077 Untitled UI. All rights reserved.</p>
      </div>


    </div>
  );
}

export default Footer;
