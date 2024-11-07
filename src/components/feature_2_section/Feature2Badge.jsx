import PropTypes from 'prop-types';

function FeatureBtn({ text, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-[79px] md:w-[83px] font-[500] text-[14px] leading-[20px] text-center text-[#6941C6]
        bg-[#F9F5FF] border-[1px] border-[#E9D7FE] rounded-2xl
        hover:bg-[#E9D7FE] hover:text-[#4B297B] transition duration-200 ${className}`}
    >
      {text}
    </button>
  );
}

FeatureBtn.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func, 
};

export default FeatureBtn;
