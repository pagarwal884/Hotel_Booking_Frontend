import { assets, cities } from "../assets/assets";
import heroImage from "../assets/heroImage.png";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-5 py-24 sm:px-8 md:px-12 lg:px-20 xl:px-32">
        <div className="w-full">
          {/* Badge */}
          <p className="inline-block rounded-full bg-sky-500/30 px-4 py-2 text-sm font-medium backdrop-blur-md text-white/70">
            The Ultimate Hotel Experience
          </p>

          {/* Heading */}
          <h1 className="mt-6 max-w-4xl font-playfair text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-white">
            Discover Your Perfect Gateway Destination
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Unparalleled luxury and comfort await at the world's most exclusive
            hotels and resorts. Start your journey today.
          </p>

          {/* Search Box */}
          <form className="mt-12 rounded-2xl bg-white/10 p-6 backdrop-blur-xl border border-white/20 shadow-2xl">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5">

              {/* Destination */}
              <div className="flex flex-col">
                <label
                  htmlFor="destinationInput"
                  className="mb-2 flex items-center gap-2 text-sm font-medium"
                >
                  <img
                    src={assets.locationIcon || assets.calenderIcon}
                    alt=""
                    className="h-5 w-5"
                  />
                  Destination
                </label>

                <input
                  list="destinations"
                  id="destinationInput"
                  type="text"
                  placeholder="Where are you going?"
                  required
                  className="h-12 rounded-lg border border-white/20 bg-white/15 px-4 text-white placeholder:text-gray-300 outline-none transition-all duration-300 focus:border-sky-400 focus:bg-white/20"
                />

                <datalist id="destinations">
                  {cities.map((city, index) => (
                    <option key={index} value={city} />
                  ))}
                </datalist>
              </div>

              {/* Check In */}
              <div className="flex flex-col">
                <label
                  htmlFor="checkIn"
                  className="mb-2 flex items-center gap-2 text-sm font-medium"
                >
                  <img
                    src={assets.calenderIcon}
                    alt=""
                    className="h-5 w-5"
                  />
                  Check In
                </label>

                <input
                  id="checkIn"
                  type="date"
                  className="h-12 rounded-lg border border-white/20 bg-white/15 px-4 text-white outline-none transition-all duration-300 focus:border-sky-400 focus:bg-white/20"
                />
              </div>

              {/* Check Out */}
              <div className="flex flex-col">
                <label
                  htmlFor="checkOut"
                  className="mb-2 flex items-center gap-2 text-sm font-medium"
                >
                  <img
                    src={assets.calenderIcon}
                    alt=""
                    className="h-5 w-5"
                  />
                  Check Out
                </label>

                <input
                  id="checkOut"
                  type="date"
                  className="h-12 rounded-lg border border-white/20 bg-white/15 px-4 text-white outline-none transition-all duration-300 focus:border-sky-400 focus:bg-white/20"
                />
              </div>

              {/* Guests */}
              <div className="flex flex-col">
                <label
                  htmlFor="guests"
                  className="mb-2 text-sm font-medium"
                >
                  Guests
                </label>

                <input
                  id="guests"
                  type="number"
                  min="1"
                  max="10"
                  defaultValue={1}
                  className="h-12 rounded-lg border border-white/20 bg-white/15 px-4 text-white outline-none transition-all duration-300 focus:border-sky-400 focus:bg-white/20"
                />
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-sky-500 font-semibold transition-all duration-300 hover:bg-sky-600 hover:scale-[1.02] active:scale-95"
                >
                  <img
                    src={assets.searchIcon}
                    alt=""
                    className="h-5 w-5"
                  />
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;