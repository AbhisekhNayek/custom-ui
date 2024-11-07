const FreeTrial = () => {
    return (
        <section className="w-full mt-12 py-8 bg-[#F9FAFB] rounded-2xl mx-auto max-w-screen-lg">

            {/* Text section */}
            <header className="text-center">
                <h2 className="font-semibold text-[24px] sm:text-[28px] md:text-[32px] leading-tight text-[#101828]">
                    Start your free trial
                </h2>
                <p className="font-normal text-[12px] sm:text-[14px] md:text-[16px] leading-snug text-[#475467] mt-2">
                    Join over 4,000+ startups already growing with Untitled.
                </p>
            </header>

            {/* Buttons container */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full mt-6">
                {/* Learn More Button */}
                <button
                    className="flex w-full sm:w-auto bg-[#7F56D9] hover:bg-[#6d45c3] justify-center items-center py-3 px-4 rounded-lg font-semibold text-[14px] sm:text-[16px] text-white transition duration-200"
                    aria-label="Learn more about starting your free trial">
                    Learn More
                </button>

                {/* Get Started Button */}
                <button
                    className="flex w-full sm:w-auto bg-[#f0ba64] hover:bg-[#c3ac45] justify-center items-center py-3 px-4 rounded-lg font-semibold text-[14px] sm:text-[16px] text-white transition duration-200"
                    aria-label="Get started with the free trial">
                    Get Started
                </button>
            </div>

        </section>
    );
};

export default FreeTrial;
