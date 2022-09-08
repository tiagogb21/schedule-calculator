import React from 'react';
import {
  DataGrid,
  GridColDef,
} from '@mui/x-data-grid';
import { useAppSelector } from '../../redux/store/hooks';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'created by', headerName: 'CRIADO POR', width: 170 },
  { field: 'client', headerName: 'CLIENTE', width: 150 },
  { field: 'value', headerName: 'VALOR', width: 130 },
  { field: 'status', headerName: 'STATUS', width: 150 },
];

const TableSchedule: React.FC = () => {
  const { schedules } = useAppSelector((state) => state.table);

  return (
    <div style={{ height: 350, width: '90%' }}>
      <DataGrid
        rows={ schedules }
        columns={ columns }
        pageSize={ 5 }
        rowsPerPageOptions={[5, 10, 15]}
        checkboxSelection
      />
    </div>
  );
}

export default TableSchedule;