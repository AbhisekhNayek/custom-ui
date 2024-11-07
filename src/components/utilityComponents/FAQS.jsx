// Faq.jsx
import  { useState } from 'react';
import PropTypes from 'prop-types';
import { plus_icon, minus_icon } from '../../assets';


const FaqItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full  border-b border-gray-300 ">
      <button
        className="flex justify-between items-center w-full py-4 px-2 text-left hover:bg-gray-100 transition"
        onClick={toggleFaq}
      >
        <span className="font-medium">{title}</span>
        {isOpen ? <img src={minus_icon} alt="minus_icon" /> : <img src={plus_icon} alt="plus_icon" /> }
      </button>
      {isOpen && <div className="px-4 py-2 text-gray-700">{content}</div>}
    </div>
  );
};

// Prop validation for FaqItem
FaqItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const Faq = ({ data }) => {
  return (
    <div className="w-full  md:w-[768px] mx-auto mt-4">
      {data.map((item, index) => (
        <FaqItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

// Prop validation for Faq
Faq.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Faq;
