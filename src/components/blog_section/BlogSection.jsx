import BlogCard from "../utilityComponents/BlogCard";
import { card_post_1, card_post_2, card_post_3 } from "../../assets";
import user from "../../assets/images/user.png";

// Blog data extracted outside the function
const blogData = [
  {
    blogImage: card_post_1,
    blogLabel: "Design",
    blogTitle: "UX review presentations",
    blogDescription: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    authorImage: user,  // Pass the image URL directly
    authorName: "Olivia Rhye",
    postDate: "20 Jan 2024"
  },
  {
    blogImage: card_post_2,
    blogLabel: "Product",
    blogTitle: "Migrating to Linear 101",
    blogDescription: "Linear helps streamline software projects, sprints, tasks, and bug Letter spacing. Here’s how to get started.",
    authorImage: user,  // Pass the image URL directly
    authorName: "Phoenix Baker",
    postDate: "19 Jan 2024"
  },
  {
    blogImage: card_post_3,
    blogLabel: "Software Engineering",
    blogTitle: "Building your API stack",
    blogDescription: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    authorImage: user,  // Pass the image URL directly
    authorName: "Lana Steiner",
    postDate: "18 Jan 2024"
  }
];

function BlogSection() {
  return (
    <section className="py-[64px] px-[16px] md:py-[96px] md:px-[112px] w-full">
      {/* text and btn */}
      <div className="flex items-center justify-between">
        <div>
          <p className="font-[600] text-[14px] leading-5 text-[#6941C6]">Our blog</p>
          <h2 className="text-[30px] font-[600] leading-[38px] tracking-tight text-[#101828] mt-[12px] md:text-[36px] md:leading-[44px]">
            Latest blog posts
          </h2>
        </div>
        <button className="hidden md:flex w-[148px] bg-[#7F56D9] hover:bg-[#6d45c3] justify-center items-center py-3 px-2 rounded-lg font-[600] text-[16px] text-white">
          View all posts
        </button>
      </div>
      <p className="mt-[16px] text-[18px] leading-7 font-[400] text-[#475467] md:text-[20px] md:leading-[30px] md:mt-[20px] md:w-[768px]">
        Tools and strategies modern teams need to help their companies grow.
      </p>

      {/* Cards */}
      <div className="flex flex-col gap-4 mt-[48px] md:gap-8 md:mt-[64px] md:flex-row flex-wrap items-center justify-between">
        {blogData.map((item, index) => (
          <BlogCard
            key={index}
            blogImage={item.blogImage}
            blogLabel={item.blogLabel}
            blogTitle={item.blogTitle}
            blogDescription={item.blogDescription}
            authorImage={item.authorImage}
            authorName={item.authorName}
            postDate={item.postDate}
          />
        ))}
      </div>

      {/* Mobile button */}
      <button className="md:hidden mx-auto w-[325px] mt-[48px] flex bg-[#7F56D9] hover:bg-[#6d45c3] justify-center items-center py-3 px-2 rounded-lg font-[600] text-[16px] text-white">
        Get in touch
      </button>
    </section>
  );
}

export default BlogSection;
