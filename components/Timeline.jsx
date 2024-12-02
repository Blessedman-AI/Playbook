export const TimelineItem = ({
  direction = 'left',
  title,
  duration,
  paragraph,
  secondParagraph,
}) => {
  return (
    <div className="relative flex items-center w-full">
      {/* Timeline Connector Line */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 
                     w-0 border-l-2 border-gray-400 border-dashed h-full 
                     hidden sm:block"
      ></div>

      {/* Item Positioning */}
      <div
        className={`w-full flex items-center 
                    ${direction === 'left' ? 'flex-row' : 'flex-row-reverse'}`}
      >
        {/* Content */}
        <div
          className={`relative p-6  shadow-md 
                      bg-gradient-to-br from-gradientFrom to-gradientTo 
                      rounded-md flex flex-col justify-center sm:justify-between shrink-0 
                      ${
                        direction === 'left'
                          ? 'lg:mr-auto lg:ml-8'
                          : 'lg:ml-auto lg:mr-8'
                      } gap-8 lg:w-[43%] w-full`}
        >
          <div className="flex items-center justify-between">
            <h4>{title}</h4>
            <h5>{duration}</h5>
          </div>
          <p className="text-[14px]">{paragraph}</p>
          <p className="text-[14px] bg-gray1 rounded-md p-6">
            {secondParagraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Timeline = ({ children }) => {
  return <div className="space-y-8 py-4 relative">{children}</div>;
};
