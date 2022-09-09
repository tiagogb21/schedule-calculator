import React, { CSSProperties, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { Formik, Form } from "formik";
import { formatedDate, mainTopScheduleInitialState } from '../../data/data';
import useFormValidation from '../../FormValidation/useFormValidation';
import { IMainTopSchedule } from '../../interfaces/mainTopSchedule.interface';
import { Button } from '../../stories/Button/Button';
import TextInput from '../../stories/TextInput/TextInput';
import mainTopScheduleStyles from './MainTopSchedule.styles';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { insertDataInSchedule } from '../../redux/reducers/tableReducers';
import { useNavigate } from 'react-router-dom';
import { getAxiosClient } from '../../services/axios/api';
import IClientRegister from '../../interfaces/clientregister.interface';

const MainTopSchedule: React.FC = () => {
  const [mainTopScheduleData, setMainTopScheduleData] = useState(mainTopScheduleInitialState);
  const [clientsData, setClientsData] = useState([]);

  const { validateError, handleErrorMessage } = useFormValidation<IMainTopSchedule>("register");

  const navigate = useNavigate();

  const { schedules } = useAppSelector((state) => state.table);

  const dispatch = useAppDispatch();

  const matches = useMediaQuery('(min-width:600px)');

  const verifyMediaSize = () => !matches ?
    mainTopScheduleStyles.cardContainerDesk
    : mainTopScheduleStyles.cardContainerCell;

  const verifyMediaSizeInputBox = () => !matches ?
    { ...mainTopScheduleStyles.boxInput, ...mainTopScheduleStyles.boxInputCell }
    : { ...mainTopScheduleStyles.boxInput, ...mainTopScheduleStyles.boxInputDesk };

  const verifyMediaSizeTitleBox = () => !matches ?
    { ...mainTopScheduleStyles.boxTitle, ...mainTopScheduleStyles.boxTitleCell }
    : { ...mainTopScheduleStyles.boxTitle, ...mainTopScheduleStyles.boxTitleDesk };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMainTopScheduleData({
      ...mainTopScheduleData,
      [name]: value,
    });
  }

  useEffect(() => {
    const getClients = async () => {
      const getAxiosInfo = await getAxiosClient();
      console.log(getAxiosInfo.data);
      const clientsName = getAxiosInfo.data.map((data: IClientRegister) => {
        return data.client;
      });
      console.log(clientsName)
      setClientsData(clientsName);
    };
    getClients();
  }, []);

  console.log(clientsData)

  const handleClick = async () => {
    // const result = await validateError(mainTopScheduleData);
    const getUserFromLocalStorage = localStorage.getItem('user');
    if(!getUserFromLocalStorage) return;
    const getUser = JSON.parse(getUserFromLocalStorage);
    const { name } = getUser;
    const data = {
      id: schedules.length,
      createdBy: name,
      patient: mainTopScheduleData.pacient,
      value: mainTopScheduleData.value,
      status: mainTopScheduleData.status,
      date: formatedDate(),
    }
    dispatch(insertDataInSchedule(data))
  }

  return (
    <section style={{ display: 'flex', justifyContent:'center' }}>
      <Formik
          initialValues={ mainTopScheduleInitialState }
          onSubmit={ () => console.log() }
        >
          <Form style={ {
              ...mainTopScheduleStyles.cardContainer as CSSProperties,
              ...verifyMediaSize() as CSSProperties,
            } }
          >
            <article style={ verifyMediaSizeTitleBox() }>
              <h3 style={{ color: '#1ea7fd', fontSize: '25px' }}>Atendimento</h3>

              <Button
                primary
                label="CONCLUIR"
                type="submit"
                style={ !matches ?
                  mainTopScheduleStyles.buttonCellConc
                  : mainTopScheduleStyles.buttonDeskConc
                }
                onClick={ handleClick }
              />
            </article>
            <article style={ verifyMediaSizeInputBox() as CSSProperties }>
              <TextInput
                id="maintopschedule-pacient-name"
                label="Nome do Paciente"
                name="pacient"
                value={ mainTopScheduleData.pacient }
                onChange={ handleChange }
                style={{ width: '80%' }}
                { ...handleErrorMessage('pacient') }
              />

              <TextInput
                id="maintopschedule-value"
                label="Valor"
                name="value"
                value={ mainTopScheduleData.value }
                onChange={ handleChange }
                style={{ width: '80%' }}
                { ...handleErrorMessage('value') }
              />

              <TextInput
                id="maintopschedule-status"
                label="Status"
                name="status"
                value={ mainTopScheduleData.status }
                onChange={ handleChange }
                style={{ width: '80%' }}
                { ...handleErrorMessage('status') }
              />

              <Button
                label="adicionar"
                type="submit"
                style={ !matches ?
                  mainTopScheduleStyles.buttonCell
                  : mainTopScheduleStyles.buttonDesk
                }
                onClick={ handleClick }
              />
            </article>
          </Form>
        </Formik>
    </section>
  );
}

export default MainTopSchedule;
