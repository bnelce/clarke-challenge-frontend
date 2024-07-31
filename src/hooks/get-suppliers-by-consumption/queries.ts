import { gql } from "@apollo/client";

export const GET_SUPPLIERS_BY_CONSUMPTION = gql`
  query ($consumption: Int!) {
    suppliers'(consumption: $consumption) {
      id
      name
      logo
      state
      costPerKwh
      minKwh
      totalClients
      avgRating
    }
  }
`;
