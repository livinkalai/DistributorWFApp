import { Status } from "../models/distributor";

export const sampleDistributorsData = [
  {
    Name: "Distributor1", OrdersInfo: [
      { ID: 1, Status: Status.InProgress },
      { ID: 2, Status: Status.Open },
      { ID: 3, Status: Status.Completed }
    ]
  },
  {
    Name: "Distributor2", OrdersInfo: [
      { ID: 1, Status: Status.InProgress },
      { ID: 2, Status: Status.Open },
      { ID: 7, Status: Status.Completed }

    ]
  },
  {
    Name: "Distributor3", OrdersInfo: []
  },
  {
    Name: "Distributor4", OrdersInfo: []
  },
  {
    Name: "Distributor5", OrdersInfo: []
  },
  {
    Name: "Distributor6", OrdersInfo: []
  }
];
