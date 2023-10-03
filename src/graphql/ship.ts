import { gql } from "../__generated__";

export const GET_SHIP = gql(`
  query ShipData {
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
`);
