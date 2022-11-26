import React from 'react'
import MaterialTable from 'material-table'
import '@material-ui/icons';

function events_table() {
  const colums = [
    { title: 'Date', field: 'date' },
    { title: 'Quartier', field: 'quartier' },
    { title: 'Informations', field: 'text'},
    { title: 'Type', field: 'type' }
  ]

  const data = [
    { date: '2022-11-11', quartier: 'Ambohimanarina', text: "Ny atao dia andeha akany andafy de iaina fiainanan milamina apres le reboisements", type: "Reboisement" },
    { date: '2022-11-12', quartier: 'Antrano', text: "Ario ny fako", type: "Fanarimpakp" }
  ]
    return (
        <div style={{ maxWidth: '100%' }}>
          <MaterialTable
            columns={colums}
            data={data}
            grouping={true}
            title="Liste des evenements"
            options={{
              paging:true,
              pageSize:10,
              grouping:true,
              pageSizeOptions:10,
              filtering: true,
              exportButton: true,
              headerStyle: {
                backgroundColor: "green",
                color: "#FFF",
                fontSize: "17px",
                textAlign: "center",
                fontWeight: "bold"
              },
              cellStyle: {textAlign:'center'},
              filterCellStyle: {
                textAlign: "center"},
              }}
          />
        </div>
      )
}

export default events_table;