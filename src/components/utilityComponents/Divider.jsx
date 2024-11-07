import PropTypes from 'prop-types';

function Divider({className}) {
  return (
    <div className={`w-full h-[1px] bg-[#E4E7EC] ${className}`}>
      
    </div>
  )
}
Divider.propTypes = {
    className: PropTypes.string,  
  };
export default Divider
