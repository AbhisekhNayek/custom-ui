import PropTypes from 'prop-types';

const SecondaryBtn = ({ children, onClick, className = '' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-[90%] mx-[16px] rounded-[8px] p-3 text-xl font-semibold border-[1px] border-slate-600 text-slate-800 opacity-90 hover:opacity-100 bg-transparent ${className}`}
    >
      {children}
    </button>
  );
};

SecondaryBtn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default SecondaryBtn;
