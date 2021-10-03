import React from 'react';
import styled from 'styled-components';
import { DataGrid, ruRU } from '@material-ui/data-grid';
import styleClasses from './table-components.module.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    '& .super-app-theme--cell': {
      color: '#1a3e72',
    },
    '& .super-app.negative': {
      color: '#D12A5C',
    },
    '& .super-app.positive': {
      color: '#408263',
    },
  },
});
const StyledDataGrid = styled(DataGrid)`
.MuiDataGrid-row.MuiDataGrid-row.Mui-selected{
  background-color: #E3E7EE;
  color: #2C3E50; 
}
.MuiDataGrid-row.MuiDataGrid-row:hover{
  background-color:  #F5F5F5;
  color: #2C3E50; 
  
}
.MuiDataGrid-row.MuiDataGrid-row.Mui-selected:hover{
  background-color: #E3E7EE;
}
`;



const TableMaterialUI = (props) => {

  const columns = [
    { field: 'id', headerName: 'Идектификатор', width: 100, hide: true },
    {
      field: 'FlagURL',
      headerName: 'Страна',
      width: 100,
      editable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <strong className={styleClasses.iconItemTable}>
          {<img src={params.value} height="50px" width="50px" alt="" />}
        </strong>
      ),
      renderHeader: (params) => (
        <strong>
          {'Страна'}
        </strong>
      ),
    },
    {
      field: 'CharCode',
      headerName: 'Символьный код',
      width: 75,
      editable: false,
      type: 'string',
      headerAlign: 'left',
      disableColumnMenu: true,
      disableSelectionOnClick: true,
      renderHeader: (params) => (
        <strong>
          {'Код'}
        </strong>
      ),
    },
    {
      field: 'Name',
      headerName: 'Наименование',
      width: 323,
      editable: false,
      type: 'string',
      headerAlign: 'left',
      disableColumnMenu: true,
      renderHeader: (params) => (
        <strong>
          {'Наименование'}
        </strong>
      ),
    },
    {
      field: 'NumCode',
      headerName: 'Цифровой код',
      width: 80,
      editable: false,
      type: 'string',
      headerAlign: 'left',
      hide: true,
      disableColumnMenu: true,
      renderHeader: (params) => (
        <strong>
          {'Код'}
        </strong>
      ),
    },
    {
      field: 'Nominal',
      headerName: 'Номинал',
      width: 115,
      editable: false,
      type: 'number',
      headerAlign: 'right',
      disableColumnMenu: true,
      renderHeader: (params) => (
        <strong>
          {'Номинал'}
        </strong>
      ),
    },
    {
      field: 'Value',
      headerName: 'Курс в рублях',
      width: 155,
      editable: false,
      type: 'number',
      headerAlign: 'right',
      disableColumnMenu: true,
      renderHeader: (params) => (
        <strong>
          {'Курс в рублях'}
        </strong>
      ),
    },
    {
      field: 'Delta',
      headerName: 'Изменение, %',
      width: 150,
      editable: false,
      type: 'number',
      headerAlign: 'right',

      cellClassName: (params) =>
      clsx('super-app', {
        negative: params.value < 0,
        positive: params.value > 0,
      }),


    valueFormatter: (params) => {
      const valueFormatted = Number(params.value * 100).toLocaleString();
      return `${valueFormatted} %`;
    },

    renderHeader: (params) => (
      <strong>
        {'Изменение, %'}
      </strong>
    ),

    },

  ];
const arr = []
Object.values(props.valuteState).map((element, index) => (
  arr.push({
    id: index, NumCode: element.NumCode,
    CharCode: element.CharCode, Nominal: element.Nominal,
    Name: element.Name, Value: element.Value.toFixed(2), Previous: element.Previous,
    Delta: (((element.Value / element.Previous) - 1)).toFixed(4), FlagURL: element.FlagURL
  })
)
)

const rows = arr;

const classes = useStyles();

return (

  <div className={styleClasses.table} style={{ width: '100%' }}>
    <h3 className={styleClasses.title}>Курсы валют по состоянию на сегодня</h3>
    <div style={{ display: 'flex', height: '100%' }}>
      <div className={classes.root} style={{ flexGrow: 1 }}>
        <StyledDataGrid 
        hideFooter="true" rows={rows} columns={columns} localeText={ruRU.props.MuiDataGrid.localeText} autoHeight {...arr} />
      </div>
    </div>
  </div>

)
}
export default TableMaterialUI;