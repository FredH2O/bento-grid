const FirstBox = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2  gap-4 border-2 border-red-600">
      <div className="col-span-1 border-2 border-blue-300">
        <h1>Social Media 10x Faster with AI</h1>
        <img src="/illustration-five-stars.webp" alt="Five Stars" />
        Over 4,000 5-star reviews
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
