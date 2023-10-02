import { useQuery, gql } from "@apollo/client";
import Ship from "./Ship";
import Navbar from "./Navbar";

interface MissionType {
  name: string;
  flight: number;
}
export interface ShipType {
  id?: string | null;
  image?: string | null;
  imo?: number | null;
  model?: string | null;
  name?: string | null;
  roles?: (string | null)[];
  type?: string | null;
  year_built?: number | null;
  status?: string | null;
  missions?: MissionType | null;
  active?: boolean | null;
}

const Hero = () => {
  const getShipInformation = gql`
    query Ship {
      ships {
        id
        image
        imo
        model
        name
        roles
        type
        year_built
        status
        missions {
          name
          flight
        }
        active
      }
    }
  `;
  const { loading, error, data } = useQuery(getShipInformation);
  console.log(data);
  if (loading) return <p className="loading">Shipping...</p>;
  if (error) return <p className="loading">{error.message}</p>;
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
      {data.ships.slice(6, 20).map((ship: ShipType) => (
        <div>
          <Ship ship={ship} />
        </div>
      ))}
    </div>
  );
};

export default Hero;
