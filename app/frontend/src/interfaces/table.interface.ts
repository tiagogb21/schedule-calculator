export interface ITable {
  id?: number | string;
  createdBy?: string;
  client?: string;
  status?: string;
  value?: string;
  date?: string;
}

export type TableState = {
  schedules: ITable[],
};

export type TableAction = {
  type: string;
  table: ITable;
};
