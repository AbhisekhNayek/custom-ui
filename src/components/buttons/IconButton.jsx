import PropTypes from 'prop-types';

const IconButton = ({ text, onClick, className = '', icon, ariaLabel }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel || text}
      className={`flex items-center justify-center gap-2 w-[90%] mx-[16px] rounded-[8px] p-3 text-xl font-semibold border-[1px] border-slate-600 text-slate-800 opacity-90 hover:opacity-100 bg-transparent ${className}`}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

IconButton.propTypes = {
  text: PropTypes.string.isRequired, 
  onClick: PropTypes.func.isRequired, 
  className: PropTypes.string,       
  icon: PropTypes.node,              
  ariaLabel: PropTypes.string,      
};

export default IconButton;
