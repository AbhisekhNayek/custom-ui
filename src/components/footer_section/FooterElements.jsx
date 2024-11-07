import PropTypes from 'prop-types';

function FooterElements({ title, links, showBadge }) {
  return (
    <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
      <p className="font-[600] text-[16px] sm:text-[18px] md:text-[20px] text-[#000000] leading-[20px]">{title}</p>
      <ul className="flex flex-col items-start justify-start gap-[12px]">
        {links.map((item, index) => (
          <li key={index} className="font-[600] text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] text-[#475467] flex items-center">
            <a href={item.link}>{item.text}</a>
            {/* Show badge if the conditions are met */}
            {showBadge && index === 2 && (
              <span className="h-[20px] py-[2px] border-[1px] border-[#18828a] flex items-center ml-3 rounded-md justify-center bg-[#5af178] px-[6px] font-[300] text-[8px] sm:text-[10px] md:text-[12px] leading-[14px] text-[#ffffff]">New</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

FooterElements.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  showBadge: PropTypes.bool, 
};

export default FooterElements;