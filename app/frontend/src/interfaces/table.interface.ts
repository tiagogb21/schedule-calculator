export interface ITable {
  id: number | string;
  createdBy: string;
  patient: string;
  value: string;
  status: string;
}

export type TableState = {
  schedules: ITable[],
};

export type TableAction = {
  type: string;
  table: ITable;
};
