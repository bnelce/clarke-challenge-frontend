import { gql } from "@apollo/client";

export const GET_SUPPLIERS_BY_CONSUMPTION = gql`
  query ($consumption: Int!) {
    suppliers(consumption: $consumption) {
      id
      name
      logo
      state
      cost_per_kwh
      min_kwh
      total_clients
      average_rating
    }
  }
`;
