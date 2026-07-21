import { useNavigate } from "react-router-dom";
import { assets, roomsDummyData } from "../assets/assets";
import { StarXIcon } from "lucide-react";
import StarRating from "../components/StarRating";

const AllRooms = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32 mb-15">
            <div>
                <div className="flex flex-col items-start">
                    <h1 className="font-playfair text-4xl md:text-[40px]">
                        Hotel Rooms
                    </h1>

                    <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-2xl">
                        Take advantage of our limited-time offers and enjoy a comfortable
                        stay at the best prices.
                    </p>
                </div>

                {roomsDummyData.map((room) => (
                    <div
                        key={room._id}
                        className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 mt-10"
                    >
                        {/* Room Image */}
                        <img
                            src={room.images[0]}
                            alt={room.hotel.name}
                            title="View Room Details"
                            className="w-full md:w-[340px] h-64 rounded-xl object-cover cursor-pointer"
                            onClick={() => {
                                navigate(`/rooms/${room._id}`);
                                scrollTo(0, 0);
                            }}
                        />

                        {/* Room Details */}
                        <div className="flex flex-col justify-between flex-1">
                            <div>
                                <p className="text-sm text-gray-500">{room.hotel.city}</p>

                                <h2
                                    className="mt-1 text-3xl font-playfair text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
                                    onClick={() => {
                                        navigate(`/rooms/${room._id}`);
                                        scrollTo(0, 0);
                                    }}
                                >
                                    {room.hotel.name}
                                </h2>

                                <div className="flex items-center gap-2 mt-3">
                                    <StarRating />
                                    <p className="text-sm text-gray-500">200+ Reviews</p>
                                </div>

                                <div className="flex items-center gap-2 mt-4 text-gray-500">
                                    <img
                                        src={assets.locationIcon}
                                        alt=""
                                        className="w-4 h-4"
                                    />
                                    <span className="text-sm">{room.hotel.address}</span>
                                </div>

                                <p className="mt-5 text-gray-600 leading-7">
                                    {room.description}
                                </p>
                            </div>

                            <div className="flex items-end justify-between mt-8">
                                <div>
                                    <p className="text-gray-500 text-sm">Starting from</p>
                                    <p className="text-3xl font-semibold text-gray-900">
                                        ${room.pricePerNight}
                                        <span className="text-lg font-normal text-gray-500">
                                            {" "}
                                            /night
                                        </span>
                                    </p>
                                </div>

                                <button
                                    onClick={() => {
                                        navigate(`/rooms/${room._id}`);
                                        scrollTo(0, 0);
                                    }}
                                    className="bg-black text-white px-6 py-3 rounded-lg ml-5 hover:bg-gray-800 transition-all"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filter */}
            <div>
            </div>
        </div>
    );
};

export default AllRooms;