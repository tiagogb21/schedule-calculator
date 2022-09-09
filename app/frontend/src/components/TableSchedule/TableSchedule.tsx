import React from 'react';
import {
  DataGrid,
} from '@mui/x-data-grid';
import { useAppSelector } from '../../redux/store/hooks';
import { columns } from '../../data/data';

const TableSchedule: React.FC = () => {
  const { schedules } = useAppSelector((state) => state.table);

  return (
    <div style={{ height: 350, width: '90%' }}>
      <DataGrid
        columns={ columns }
        rows={ schedules }
        pageSize={ 5 }
        rowsPerPageOptions={[5, 10, 15]}
        checkboxSelection
      />
    </div>
  );
}

export default TableSchedule;