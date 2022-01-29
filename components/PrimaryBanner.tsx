const PrimaryBanner = () => (
  <div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
    <div className="px-10 space-y-5">
      <h1 className="text-6xl max-w-xl font-serif">
        <span className="underline decoration-black decoration-4">Medium</span>
        {' '}
        is a place to write, read, and connect
      </h1>
      <h2 className="">
        It's easy and free to post your thinking on any topic and connect with millions of readers.
      </h2>
    </div>

    <img
      className="h-32 lg:h-full hidden md:inline-flex "
      src="https://res.cloudinary.com/kuhqmsx0ca/image/upload/v1642977217/projects/next-medium/Medium-logo_e8velk.png"
      alt=""
    />
  </div>
);

export default PrimaryBanner;
