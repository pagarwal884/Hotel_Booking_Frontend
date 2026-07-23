import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  const { id } = useParams();

  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const foundRoom = roomsDummyData.find(
      (room) => room._id.toString() === id
    );

    if (foundRoom) {
      setRoom(foundRoom);
      setMainImage(foundRoom.images[0]);
    }
  }, [id]);

  return room && (
    <div className="py-28 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 max-w-7xl mx-auto">

      {/* Room Details */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair leading-tight">
            {room.hotel.name}
            <span className="font-inter text-base md:text-lg ml-2 text-gray-600">
              ({room.roomType})
            </span>
          </h1>

          {/* Room rating */}
          <div className="flex items-center gap-2">
            <StarRating />
            <p className="text-gray-600">200+ Reviews</p>
          </div>

          {/* Room Address */}
          <div className="flex items-center gap-2 text-gray-500">
            <img src={assets.locationIcon} alt="" className="w-4 h-4" />
            <span>{room.hotel.address}</span>
          </div>
        </div>

        <p className="text-xs font-inter py-2 px-4 text-white bg-orange-500 rounded-full self-start md:self-center whitespace-nowrap">
          20% OFF
        </p>
      </div>

      {/* Room Images */}
      <div className="flex flex-col lg:flex-row mt-8 gap-5">
        <div className="lg:w-1/2 w-full">
          <img
            src={mainImage}
            alt=""
            className="w-full h-65 sm:h-95 md:h-120 lg:h-130 rounded-2xl shadow-lg object-cover transition-all duration-300"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {room?.images.length > 1 &&
            room.images.map((image, index) => (
              <img
                onClick={() => setMainImage(image)}
                key={index}
                src={image}
                alt=""
                className={`w-full h-31.25 sm:h-45 md:h-58.75 lg:h-62.5 rounded-2xl shadow-md object-cover cursor-pointer transition-all duration-300 hover:scale-[1.02] ${mainImage === image
                    ? "outline-4 outline-orange-500"
                    : ""
                  }`}
              />
            ))}
        </div>
      </div>

      {/* Room Highlights */}
      <div className="flex flex-col md:flex-row md:justify-between mt-10">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-playfair">Experience Luxury Like Never Before</h1>
          <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
            {room.amenities.map((item, index) => (
              <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
                <img src={facilityIcons[item]} alt="" className="h-5 w-5" />
                <p className="text-xs">{item}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Room Price */}
        <p className="text-2xl font-medium">
            ${room.pricePerNight} /night
        </p>
      </div>

      {/* checkIn checkOut Form */}

      
    </div>
  );
};

export default RoomDetails;