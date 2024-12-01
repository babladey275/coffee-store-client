/* eslint-disable react/prop-types */
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const CoffeeCard = ({ coffee }) => {
  return (
    <div className="bg-[#F5F4F1] shadow-lg rounded-lg p-4 flex items-center justify-between space-x-4">
      <div className="flex items-center">
        {/* Image Section */}
        <img
          src={coffee.photo}
          alt="Coffee Cup"
          className="w-44 h-56 object-cover rounded-md"
        />

        {/* Details Section */}
        <div className="space-y-3">
          <p className="text-sm">
            <span className="font-semibold">Name:</span>{" "}
            <span className="text-gray-600">{coffee.name}</span>
          </p>
          <p className="text-sm">
            <span className="font-semibold">Chef:</span>{" "}
            <span className="text-gray-600">{coffee.chef}</span>
          </p>
          <p className="text-sm">
            <span className="font-semibold">Price:</span>{" "}
            <span className="text-gray-600">{coffee.price} Taka</span>
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col space-y-2">
        <button className="flex items-center justify-center w-8 h-8 bg-[#D2B48C] rounded-md hover:bg-[#c4b49f]">
          <FaEye className="text-gray-700" />
        </button>
        <button className="flex items-center justify-center w-8 h-8 bg-black rounded-md hover:bg-gray-800">
          <FaEdit className="text-white" />
        </button>
        <button className="flex items-center justify-center w-8 h-8 bg-red-500 rounded-md hover:bg-red-600">
          <FaTrash className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;