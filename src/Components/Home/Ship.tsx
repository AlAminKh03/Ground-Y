const Ship = ({ ship }: any) => {
  return (
    <div className="my-20 grid grid-cols-12 ">
      <div className="col-span-8">
        <img
          src={ship.image!}
          alt={ship.name!}
          className="w-[700px] h-[500px]"
        />
      </div>
      <div className="font-mono col-span-4 flex flex-col items-start justify-center">
        <p className="text-xl">{ship.name}</p>
        <div className="pl-3">
          <p>Model:{ship.model}</p>
          <p>
            Roles: <span className="text-blue-500">{ship.roles}</span>{" "}
          </p>
          <p>Type:{ship.type} 🌊</p>
          <p>Built in: {ship.year_built} 🚀</p>
          <p>Mission Name: {ship.missions?.name}</p>
          <p>Flight: {ship.missions?.flight}</p>
          <p
            className={`p-1 border ${
              ship.active
                ? "border-green-300 text-green-500"
                : "border-red-300 text-red-500"
            } rounded-md flex justify-center items-center mt-5 text-sm`}
          >
            <span className="text-center">
              {ship.active ? "Active" : "Inactive"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ship;
