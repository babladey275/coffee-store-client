import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  const handleDeleteCoffee = (id) => {
    const remaining = coffees.filter((coffee) => coffee._id !== id);
    // console.log("Remaining coffees:", remaining);
    setCoffees(remaining);
  };

  return (
    <>
      <h1 className="text-4xl text-center text-purple-800 font-bold mb-8">
        Number of coffee: {coffees.length}
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            onDelete={handleDeleteCoffee}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
