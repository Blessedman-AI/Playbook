const TimelineHeader = () => {
  return (
    <div className=" flex items-center justify-around">
      <div
        className="bg-gradient-to-br
       from-gradientFrom to-gradientTo px-8 py-[12px] flex items-center
       justify-center gap-4 rounded-md"
      >
        <div className="bg-secondary h-8 w-8 rounded-md"></div>
        <p className="font-bold">You</p>
      </div>
      <div
        className="bg-gradient-to-br
       from-gradientFrom to-gradientTo px-8 py-[12px]  flex items-center
       justify-center gap-4 rounded-md"
      >
        <div className="bg-gray1 h-8 w-8 rounded-md"></div>
        <p className="font-bold">Your EA</p>
      </div>
    </div>
  );
};

export default TimelineHeader;
