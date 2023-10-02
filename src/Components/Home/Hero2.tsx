import { useQuery } from "@apollo/client";

import { GET_SHIP } from "../../graphql/ship";
import Navbar from "./Navbar";
import Ship from "./Ship";

type Props = {};

const Hero2 = (props: Props) => {
  const { loading, error, data } = useQuery(GET_SHIP);
  if (loading) <p>Loading....</p>;
  if (error) <p>"error"</p>;
  console.log(data);
  return (
    <div className="Hero">
      <Navbar />
      <div className="my-20">
        <p className="font-extrabold text-5xl text-center ">
          ✨{" "}
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-green-400 to-blue-600 tracking-tighter italic">
            To become a <span className="underline"> pirates</span>...
          </span>{" "}
          🚢
        </p>
      </div>
      {data?.ships?.slice(6, 20).map((ship) => (
        <div key={ship?.id}>
          <Ship ship={ship} />
        </div>
      ))}
    </div>
  );
};

export default Hero2;
