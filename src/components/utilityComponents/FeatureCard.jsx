import PropTypes from 'prop-types';

import { arrow_right_blue } from "../../assets/"


function FeatureCard({ icon, title, description, feature2 = false }) {
  return (
    <div className="w-[343px] flex flex-col items-center md:w-[384px] gap-4 md:gap-5">
      
      {/* Conditional rendering based on feature2 */}
      {feature2 ? (
        // Feature 2 icon div
        <div className="">
          <img className="" src={icon} alt="" />
        </div>
      ) : (
        // Feature 1 icon div
        <div className="w-[40px] h-[40px] rounded-lg border-[1px] border-[#E4E7EC] bg-[#FFFFFF] flex items-center justify-center md:w-12 md:h-12 md:rounded-[10px]">
          <img className="h-4 w-4 md:w-6 md:h-6" src={icon} alt="" />
        </div>
      )}

      <div>
        <h3 className="font-[600] text-[18px] text-center leading-7 text-[#101828] md:text-[20px] md:leading-[30px]">
          {title}
        </h3>
        <p className="font-[400] text-[16px] text-[#475467] text-center mt-[4px] leading-[24px] md:mt-2 md:text-[16px]">
          {description}
        </p>
        {feature2 && <p className='text-center text-[16px] mt-[16px] text-[#6941C6] font-[600] leading-[24px] flex items-center justify-center gap-[6px]
          md:mt-[20px] md:leading-6 md:gap-2
        '><a href="#">Learn More</a>
        <img src={arrow_right_blue} alt="" />
        </p>}
      </div>
    </div>
  );
}

// PropTypes validation
FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  feature2: PropTypes.bool,
};

export default FeatureCard;
