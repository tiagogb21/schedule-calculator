import { useMediaQuery } from '@mui/material';
import React, { CSSProperties } from 'react';
import Aside from '../../components/Aside/Aside';
import MainTop from '../../components/MainTopSchedule/MainTopSchedule';
import TableSchedule from '../../components/TableSchedule/TableSchedule';
import { useAppSelector } from '../../redux/store/hooks';
import scheduleHomeStyles from './ScheduleHome.styles';

const ScheduleHome: React.FC = () => {
  const { isAsideOpen } = useAppSelector((state) => state.aside);
  const matches = useMediaQuery('(min-width:600px)');
  const verifyMediaSizeContainer = () => !matches ?
    {
      ...scheduleHomeStyles.container,
      ...scheduleHomeStyles.containerCell
    }
    : {
      ...scheduleHomeStyles.container,
      ...scheduleHomeStyles.containerDesk
    };
  
  return (
    <main style={ verifyMediaSizeContainer() as CSSProperties }>
      {
        isAsideOpen && <Aside />
      }
      <section style={ scheduleHomeStyles.mainBox as CSSProperties }>
        <MainTop />
        <TableSchedule />
      </section>
    </main>
  );
}

export default ScheduleHome;