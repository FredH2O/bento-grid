const FirstBox = () => {
  return (
    <div className="grid place-items-center grid-cols-3 grid-rows-2 p-3 gap-4 border-2 border-red-600">
      <div className="col-span-1 bg-violet-600 text-center rounded-lg place-items-center p-5">
        <h1 className="text-6xl mb-5 mt-10 text-white text-center">
          Social Media <span className="text-orange-200">10x</span>{" "}
          <i>Faster</i> with AI
        </h1>
        <img
          className="w-60 h-10"
          src="/illustration-five-stars.webp"
          alt="Five Stars"
        />
        <p className="text-white mt-2 mb-10">Over 4,000 5-star reviews</p>
      </div>

      <div className="grid grid-cols-2 col-span-2 border-2 border-blue-700">
        <div className="col-span-1">
          <img
            src="/illustration-multiple-platforms.webp"
            alt="Multiple Platforms"
          />
          Manage multiple accounts and platforms.
        </div>

        <div className="col-span-1">
          Maintain a consistent posting schedule.
          <img src="/illustration-consistent-schedule.webp" />
        </div>
      </div>

      <div className="col-span-1 border-2 border-blue-600">
        Schedule to social media.
        <img src="/illustration-schedule-posts.webp" /> Optimize post timings to
        publish content at the perfect time for your audience.
      </div>
    </div>
  );
};

export default FirstBox;
