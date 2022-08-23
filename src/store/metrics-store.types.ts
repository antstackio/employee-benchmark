import { axes } from "../definitions/employee-metrics";

export interface IEmployeeMetricsStoreData {
  name: string;
  [axes.TECHNOLOGY]: number;
  [axes.SYSTEM]: number;
  [axes.PEOPLE]: number;
  [axes.PROCESS]: number;
  [axes.INFLUENCE]: number;
}

export interface IStore {
  metrics: IEmployeeMetricsStoreData[];
}
