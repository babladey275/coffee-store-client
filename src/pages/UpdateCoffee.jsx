import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo, price } =
    coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
      price,
    };
    console.log(updatedCoffee);

    //send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully!",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div>
        <a
          href="/"
          className="hover:underline inline-block md:text-2xl text-[#374151] font-semibold pl-2 md:pl-0 md:py-8 py-4"
        >
          &larr; Back to Home
        </a>
      </div>
      <div className="bg-[#F4F3F0] shadow-lg rounded-lg py-6 md:py-12 md:px-16 px-4 w-full">
        <h2 className="md:text-4xl text-2xl font-bold text-center mb-4">
          Update Existing Coffee Details
        </h2>
        <p className="text-center text-gray-600 md:mb-6 mb-4">
          Give your coffee a fresh new look! Update the name, chef, taste, and
          other details to make it stand out. Make sure every detail reflects
          the essence of your coffee masterpiece!
        </p>
        <form onSubmit={handleUpdateCoffee} className="grid grid-cols-2 gap-4">
          <div className="form-control col-span-2 md:col-span-1">
            <label className="label">
              <span className="label-text text-xl font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              placeholder="Enter coffee name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-2 md:col-span-1">
            <label className="label">
              <span className="label-text text-xl font-semibold">Chef</span>
            </label>
            <input
              type="text"
              name="chef"
              defaultValue={chef}
              placeholder="Enter coffee chef"
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-2 md:col-span-1">
            <label className="label">
              <span className="label-text text-xl font-semibold">Supplier</span>
            </label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Enter coffee supplier"
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-2 md:col-span-1">
            <label className="label">
              <span className="label-text text-xl font-semibold">Taste</span>
            </label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              placeholder="Enter coffee taste"
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-2 md:col-span-1">
            <label className="label">
              <span className="label-text text-xl font-semibold">Category</span>
            </label>
            <input
              type="text"
              name="category"
              defaultValue={category}
              placeholder="Enter coffee category"
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-2 md:col-span-1">
            <label className="label">
              <span className="label-text text-xl font-semibold">Details</span>
            </label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Enter coffee details"
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-2 md:col-span-1">
            <label className="label">
              <span className="label-text text-xl font-semibold">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-2 md:col-span-1">
            <label className="label">
              <span className="label-text text-xl font-semibold">Price</span>
            </label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              placeholder="Enter coffee price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control col-span-2">
            <button className="bg-[#D2B48C] hover:bg-[#bfa07a] text-black font-semibold py-2 px-4 rounded w-full mt-4 shadow-md border-2 border-[#331a15]">
              Update Coffee Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
