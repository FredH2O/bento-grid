const FirstBox = () => {
  return (
    <div className="grid grid-flow-col place-items-center grid-cols-3 grid-rows-2 p-3 gap-4 border-2 border-red-600">
      {/* div 1 */}
      <div className="col-span-1 grid-rows-1 bg-violet-600 text-center rounded-lg place-items-center p-5">
        <h1 className="text-6xl mb-5 mt-10 text-white text-center">
          Social Media <span className="text-orange-200">10x</span>{" "}
          <i>Faster</i> with AI
        </h1>
        <img
          className="w-44 h-7"
          src="/illustration-five-stars.webp"
          alt="Five Stars"
        />
        <p className="text-white mt-2 mb-10 text-xl">
          Over 4,000 5-star reviews
        </p>
      </div>

      {/*div 2*/}

      <div className="grid grid-cols-2 grid-rows-1 col-span-2 border-2 border-blue-700">
        <div className="col-span-1 border-2 border-red-500 rounded-lg p-2 m-3">
          <img
            src="/illustration-multiple-platforms.webp"
            alt="Multiple Platforms"
            className="object-none w-auto"
          />
          <h2 className="text-4xl">Manage multiple accounts and platforms.</h2>
        </div>
        {/*div 3*/}
        <div className="col-span-1">
          <h2 className="text-4xl">Maintain a consistent posting schedule.</h2>
          <img src="/illustration-consistent-schedule.webp" />
        </div>
      </div>

      <div className="col-span-1 border-2 row-span-2 grid-rows-subgrid border-blue-600">
        Schedule to social media.
        <img src="/illustration-schedule-posts.webp" /> Optimize post timings to
        publish content at the perfect time for your audience.
      </div>
    </div>
  );
};

export default FirstBox;
