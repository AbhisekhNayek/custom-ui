
import PropTypes from 'prop-types';

const PrimaryButton = ({ childern, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-[90%] mx-[16px] rounded-[8px] p-3 text-xl font-semibold text-white bg-[#7F56D9] hover:bg-[#6d45c3] ${className}`}
    >
      {childern}
    </button>
  );
};

// PropTypes validation
PrimaryButton.propTypes = {
  childern: PropTypes.string.isRequired,  
  onClick: PropTypes.func.isRequired,  
  className: PropTypes.string,         
};

export default PrimaryButton;
