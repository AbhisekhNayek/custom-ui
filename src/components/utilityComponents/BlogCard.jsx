import PropTypes from 'prop-types';
import { arrow_up_right } from "../../assets";

function BlogCard({
  blogImage,
  blogLabel,
  blogTitle,
  blogDescription,
  authorImage,
  authorName,
  postDate
}) {
  return (
    <div className="w-full md:w-[384px]">
      <img className="w-full" src={blogImage} alt="blog image" />
      <p className="mt-[20px] font-[600] text-[14px] leading-[20px] text-[#6941C6]">{blogLabel}</p>
      <div className="mt-[8px] flex w-full items-center justify-between">
        <h2 className="text-[20px] font-[600] leading-[30px] text-[#101828] md:text-[24px] md:leading-[32px]">
          {blogTitle}
        </h2>
        <img src={arrow_up_right} alt="arrow up right" />
      </div>
      <p className="mt-[8px] font-[400] text-[16px] leadiing-[24px] text-[#475467]">
        {blogDescription}
      </p>

      <div className="flex items-center gap-3 mt-[24px]">
        <img className="w-[40px] h-[40px] object-cover rounded-full" src={authorImage} alt="author image" />
        <div>
          <h3 className="font-[600] text-[14px] leading-[20px] text-[#101828]">{authorName}</h3>
          <p className="font-[400] text-[14px] leading-[20px]">{postDate}</p>
        </div>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  blogImage: PropTypes.any.isRequired,
  blogLabel: PropTypes.string.isRequired,
  blogTitle: PropTypes.string.isRequired,
  blogDescription: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired, 
  authorName: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired
};

export default BlogCard;
