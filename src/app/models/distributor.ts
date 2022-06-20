export class Distributor {
  public Name: String = "";
  public Orders: Order[] = [];
}

export class Order {
  public ID: String = "";
  public Title: String = "";
  public Status: Status = Status.Open;
}

export enum Status {
  Open = 0,
  InProgress = 1,
  Completed = 2
}
