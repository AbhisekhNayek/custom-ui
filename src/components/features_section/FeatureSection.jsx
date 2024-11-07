import FeatureCard from "../utilityComponents/FeatureCard.jsx"
import {
    share_team_icon,
    deliver_instant_icon,
    manage_your_team_icon,
    connect_with_customers_Icon,
    connect_the_tools_icon,
    our_people_Icon

} from "../../assets/index.js"
let data = [
    {
        icon: share_team_icon,
        title: "Share team inboxes",
        description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
    },
    {
        icon: deliver_instant_icon,
        title: "Deliver instant answers",
        description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
    },
    {
        icon: manage_your_team_icon,
        title: "Manage your team with reports",
        description: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
    },
    {
        icon: connect_with_customers_Icon,
        title: "Connect with customers",
        description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
    },
    {
        icon: connect_the_tools_icon,
        title: "Connect the tools you already use",
        description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
    },
    {
        icon: our_people_Icon,
        title: "Our people make the difference",
        description: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
    },

]
function FeatureSection() {
  return (
    <div className="mt-[64px] flex flex-col items-center">
      <p className="
      font-[600] text-[14px] text-center text-[#6941C6] leading-5 md:text-[16px] md:leading-6
      ">Features</p>
      <h2
      className="
      text-[30px] font-[600] leading-[38px] tracking-tight text-center text-[#101828]  mt-[12px] md:text[36px] md:leading-[44px]
      "
      >Analytics that feels like it’s from the future</h2>
      <p className="
      mt-[16px] text-[18px] leading-7 text-center font-[400] text-[#475467] md:text-[20px] md:leading-[30px] md:mt-[20px]  md:w-[768px]
      ">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>

      {/* feacture cards */}

    <div className="mt-[48px] flex flex-col gap-10 items-center justify-center flex-wrap mb-[64px] md:flex-row md:gap-8 md:mx-4 md:mb-[96px]">
        {data.map((item, index) => (
            <FeatureCard key={index} icon={item.icon} title={item.title} description={item.description} />
        ))}
    </div>

    </div>
  )
}

export default FeatureSection
