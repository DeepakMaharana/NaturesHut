"use client";
import { useState } from "react";
import Shimer from "../shimer";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import villaList, { cardInfo } from "../../utils/mockData";
import {
  Label,
  Modal,
  Button,
  Select,
  Carousel,
  Datepicker,
  Card
} from "flowbite-react";
import {
  FaFireExtinguisher,
  FaFan,
  FaUserFriends,
  FaBed,
  FaBath,
  FaUtensils,
  FaSwimmingPool,
  FaWifi,
  FaLeaf,
} from "react-icons/fa";
import { LuRefrigerator } from "react-icons/lu";
import { FaMattressPillow } from "react-icons/fa6";
// import { CgGames } from "react-icons/cg";
import { TbAirConditioning } from "react-icons/tb";
import { MdBeachAccess, MdGames } from "react-icons/md";
// import { MdOutlineToys, MdOutlineToysFan, MdAcUnit } from "react-icons/md";
import { GiHeatHaze, GiBarbecue, GiToothbrush, GiTowel } from "react-icons/gi";
import { BsSnow2 } from "react-icons/bs";
import CardSpecSlider from "./CardSpecSlider";
import MealImage from "../../assets/meals_image1.jpg";
import CustomBreadcrumb from "../Breadcrumbs/CustomBreadcrumb";

export function BookingCard() {
  return (
    <Card className="max-w-sm">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Check In" />
          </div>
          <input type="date" className="w-full" name="" id="" />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Check Out" />
          </div>
          <input type="date" className="w-full" name="" id="" />
        </div>

        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="room_count" value="No. of Rooms" />
          </div>
          <select id="room_count" className="w-full" required>
            <option>1 (min)</option>
            <option>2 Rooms</option>
            <option>3 Rooms</option>
          </select>
        </div>

        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="guest_count" value="Guest" />
          </div>
          <select id="guest_count" className="w-full" required>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <Button type="submit" className="w-full bg-yellow-900 focus:bg-yellow-950">Check Availability</Button>
      </form>
    </Card>
  );
}

export const PropertyDetails = () => {
  return (
    <div className="border-b pb-4 mb-4">
      <h2 className="text-2xl font-bold">Casa Simoes - Candolim</h2>
      <p className="text-gray-500 border-b-2 pb-1 border-[#795436]">Goa</p>
      <div className="flex flex-wrap items-center mt-4 space-x-4">
        <div className="flex items-center">
          <FaUserFriends className="mr-2 text-blue-500" />
          <span>Up to 7 Guests</span>
        </div>
        <div className="flex items-center">
          <FaBed className="mr-2 text-blue-500" />
          <span>3 Rooms</span>
        </div>
        <div className="flex items-center">
          <FaBath className="mr-2 text-blue-500" />
          <span>3 Baths</span>
        </div>
        <div className="flex items-center">
          <FaUtensils className="mr-2 text-blue-500" />
          <span>Meals Available</span>
        </div>
      </div>
      <p className="mt-2 text-gray-700 font-semibold">
        Great for: Senior Citizens
      </p>
    </div>
  );
};


export const AmenitiesSection = () => {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <div className="flex items-center">
        <FaSwimmingPool className="mr-2 text-green-500" />
        <span>Swimming Pool</span>
      </div>
      <div className="flex items-center">
        <FaLeaf className="mr-2 text-green-500" />
        <span>Lawn</span>
      </div>
      <div className="flex items-center">
        <MdBeachAccess className="mr-2 text-green-500" />
        <span>Beach View</span>
      </div>
      <div className="flex items-center">
        <FaUtensils className="mr-2 text-green-500" />
        <span>Meals Available</span>
      </div>
      <div className="flex items-center">
        <FaWifi className="mr-2 text-green-500" />
        <span>WiFi</span>
      </div>
      <a href="#" onClick={(e)=>{
        e.stopPropagation();
        
      }} className="text-blue-500 underline">
        +20 Amenities
      </a>
    </div>
  );
};

export const ActionButtons = () => {
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const handleClick = ()=>{
    setOpenModal(!openModal);
  }
  return (
    <>
        <Modal show={openModal} onClose={() => setOpenModal(false)} popup>
    <Modal.Header className="border-b-2  border-[#795436] items-center px-6 py-3">Contact Us</Modal.Header>
    <Modal.Body>
      <div className="flex justify-center items-center bg-white">
        <div className="bg-white w-full">
          {/* <h2 className="text-xl font-semibold mb-4">Contact Us</h2> */}
          <p className="mb-6">When are you planning to visit us and with how many guests?</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name and Last Name */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm w-full"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="w-1/2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm w-full"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm w-full"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email ID */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Terms and Privacy */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreed"
                name="agreed"
                className="h-4 w-4  rounded"
                checked={formData.agreed}
                onChange={handleChange}
              />
              <label htmlFor="agreed" className="ml-2 block text-sm text-gray-900">
                I agree with <a href="#" className="text-blue-600 underline">Terms</a> and <a href="#" className="text-blue-600 underline">Privacy Policies</a>
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={!formData.agreed}
                className={`w-full py-2 px-4 rounded-md font-medium text-white ${
                  formData.agreed ? 'bg-yellow-900 hover:bg-yellow-950' : 'bg-gray-400 cursor-not-allowed'
                }`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal.Body>
  </Modal>
      <div className="flex justify-between items-center mt-4">
        <button className="bg-red-800 text-white px-4 py-2 rounded shadow-md hover:bg-red-900 transition duration-200">
          View Brochure
        </button>
        <button className="bg-green-800 text-white px-4 py-2 rounded shadow-md hover:bg-green-900 transition duration-200" onClick={handleClick}>
          Request Callback
        </button>
      </div>
    </>

  );
};

export const VillaAmenities = () => {
  const amenitiesList = [
    { name: "Towels", icon: <GiTowel className="text-xl text-[#795436]" /> },
    {
      name: "Toiletries",
      icon: <GiToothbrush className="text-xl text-[#795436]" />,
    },
    { name: "BBQ", icon: <GiBarbecue className="text-xl text-[#795436]" /> },
    { name: "Gazebo", icon: <FaFan className="text-xl text-[#795436]" /> },
    { name: "Geyser", icon: <GiHeatHaze className="text-xl text-[#795436]" /> },
    {
      name: "Extra Mattress",
      icon: <FaMattressPillow className="text-xl text-[#795436]" />,
    },
    {
      name: "Indoor/Outdoor Games",
      icon: <MdGames className="text-xl text-[#795436]" />,
    },
    {
      name: "Fire Extinguisher",
      icon: <FaFireExtinguisher className="text-xl text-[#795436]" />,
    },
    {
      name: "Refrigerator",
      icon: <LuRefrigerator className="text-xl text-[#795436]" />,
    },
    {
      name: "Water Purifier",
      icon: <BsSnow2 className="text-xl text-[#795436]" />,
    },
    {
      name: "AC",
      icon: <TbAirConditioning className="text-xl text-[#795436]" />,
    },
    { name: "WiFi", icon: <FaWifi className="text-xl text-[#795436]" /> },
  ];

  return (
    <div className="mt-2">
      <h3 className="text-2xl font-semibold mb-4 border-b-2 pb-1 border-[#795436]">
        Villa Amenities
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {amenitiesList.map((amenity, index) => (
          <div
            key={index}
            className="flex justify-start items-center space-x-2 py-3 px-1 rounded-sm bg-white bg-opacity-80"
          >
            <div className="">{amenity.icon}</div>
            <span className="text-sm font-medium">{amenity.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Highlights = () => {
  return (
    <div className="mt-2">
      {/* Section Title */}
      <h3 className="text-2xl font-semibold mb-4 border-b-2 pb-1 border-[#795436]">
        Highlight
      </h3>

      <p className="space-y-2 text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat
        corrupti facere laborum est dolorem facilis inventore dolorum dolore
        atque optio, quibusdam eos nisi explicabo similique veniam nam
        voluptatem excepturi distinctio alias maiores molestiae sint. Recusandae
        autem veniam, sint eum qui dolor animi rerum molestiae consectetur
        cupiditate optio culpa itaque id nisi libero quod adipisci! Perferendis,
        officiis! Porro ipsam blanditiis, minima accusantium molestias ducimus
        impedit atque amet deleniti incidunt deserunt neque provident iusto sed
        possimus illo nihil dolor, totam temporibus? Asperiores nesciunt, eum
        cum voluptatibus labore repellat pariatur. Sit necessitatibus ab
        doloremque earum dolorem dolore consectetur quasi est praesentium
        blanditiis.
      </p>
    </div>
  );
};

export const MealsSection = () => {
  return (
    <div className="mt-2">
      {/* Section Title */}
      <h3 className="text-2xl font-semibold mb-4 border-b-2 pb-1 border-[#795436]">
        Meals
      </h3>

      {/* Image/Video Thumbnail */}
      <div className="relative">
        <img
          src={MealImage} // Placeholder image, replace with actual image URL
          alt="Meals"
          className="w-full h-56 object-cover rounded-md"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* <FaPlayCircle className="text-white text-4xl cursor-pointer opacity-75 hover:opacity-100" /> */}
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-4">
        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full shadow hover:bg-gray-300 focus:outline-none">
          View More
        </button>
      </div>

      {/* Meal Details */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
          <li>All rates are on a per person, per day basis.</li>
          <li>A barbeque grill can also be arranged.</li>
        </ul>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
          <li>Please inform us of your meal preference in advance.</li>
          <li>Allow us a minimum 72hrs notice prior to your check-in date.</li>
        </ul>
      </div>
    </div>
  );
};

export const VideoDetails = ({ movieId }) => {
  let trailerId = "hXzcyx9V0xw";

  return (
    <div className="w-full aspect-video overflow-hidden">
      <iframe
        className="w-[100%] aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerId +
          "?si=3NSUFeOP6BY9oPc9&amp;controls=0&autoplay=1&mute=1&rel=0&loop=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export function DetailsTab() {
  return (
    <Tabs className="w-full p-2 bg-white" defaultValue="overview">
      <TabsList className="w-full bg-white flex flex-wrap justify-center sm:justify-start h-max">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="highlights">Highlights</TabsTrigger>
        <TabsTrigger value="spaces">Spaces</TabsTrigger>
        <TabsTrigger value="amenities">Amenities</TabsTrigger>
        <TabsTrigger value="meals">Meals</TabsTrigger>
        <TabsTrigger value="location">Location</TabsTrigger>
        <TabsTrigger value="video">Video</TabsTrigger>

      </TabsList>
      <TabsContent value="overview">
        <div className="w-full">
          <PropertyDetails />
          <AmenitiesSection />
          <ActionButtons />
        </div>
      </TabsContent>
      <TabsContent value="highlights">
        <Highlights />
      </TabsContent>

      <TabsContent value="spaces">
        <CardSpecSlider villaList={villaList} heading={"Specs"} />
      </TabsContent>

      <TabsContent value="amenities">
        <VillaAmenities />
      </TabsContent>

      <TabsContent value="meals">
        <MealsSection />
      </TabsContent>
      <TabsContent value="location">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos alias corrupti tempore aliquam ullam. Quisquam veniam eveniet quod non. Quibusdam minima quia quasi, delectus, quam earum consequuntur error quo aperiam laborum neque labore quaerat optio doloremque libero molestiae saepe sunt debitis iusto tempora inventore similique eius unde. Consequuntur excepturi animi, eos aperiam architecto officia obcaecati odio nobis praesentium. Optio vitae hic pariatur culpa. Officiis iure suscipit numquam reiciendis, nulla assumenda porro similique velit sed vel commodi aliquid qui perferendis maxime ipsum repellat magni est amet possimus in nobis cum nesciunt impedit quis. Beatae similique in cupiditate exercitationem amet, molestias nam.
        </div>
      </TabsContent>
      <TabsContent value="video">
        <VideoDetails />
      </TabsContent>
    </Tabs>
  );
}

export function ImageSlider() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="hidden md:flex h-56 sm:h-64 md:h-96 xl:h-[500px] gap-1 relative">
        <div className="w-[70%] bg-[#795436] bg-opacity-70 rounded-sm">
          <img
            src={
              "https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg"
            }
            className="w-full h-full cover rounded-sm"
            alt=""
          />
        </div>
        <div className="flex flex-col w-[30%] gap-1">
          <div className="bg-[#4f3420] bg-opacity-70 h-[50%] rounded-sm">
            <img
              src={
                "https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg"
              }
              className="w-full h-full cover rounded-sm"
              alt=""
            />
          </div>
          <div className="bg-[#DFA878] bg-opacity-70 h-[50%] rounded-sm">
            <img
              src={
                "https://t4.ftcdn.net/jpg/03/70/64/43/360_F_370644357_MDF4UXLAXTyyi2OyuK66tWW9cA2f8svL.jpg"
              }
              className="w-full h-full cover rounded-sm"
              alt=""
            />
          </div>
        </div>

        <button
          className="bg-[#614027] bg-opacity-75 border-2 text-white border-[#614027] hover:bg-opacity-85 absolute bottom-3 right-2 rounded-lg py-1 px-3"
          onClick={() => setOpenModal(true)}
        >
          View Photos
        </button>

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Terms of Service</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="md:hidden h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 1
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 2
          </div>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            Slide 3
          </div>
        </Carousel>
      </div>
    </>
  );
}

const CardDetails = () => {
  const resId = useParams();
  const [showIndex, setShowIndex] = useState(0);

  if (cardInfo.length === 0) {
    return <Shimer />;
  } else {
    console.log("Card Data", cardInfo);

    return (
      <div className="md:container md:mx-auto p-4">
        <CustomBreadcrumb/>

        <ImageSlider />
        <div className="flex flex-col md:flex-row gap-4 my-4 ">
          <div className=" w-full md:w-9/12">
            <DetailsTab />
          </div>
          <div className="w-full md:w-3/12">
            <BookingCard />
          </div>
        </div>
      </div>
    );
  }
};

export default CardDetails;
