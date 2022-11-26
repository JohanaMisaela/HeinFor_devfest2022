import React from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'

function events_table() {
    return (
        <div style={{ maxWidth: '100%' }}>
          <MaterialTable
            columns={[
              { title: 'Adı', field: 'name' },
              { title: 'Soyadı', field: 'surname' },
              { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
              { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
            ]}
            data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
            title="Demo Title"
            options={{
              paging:true,
              pageSize:10,
              pageSizeOptions:10,
              filtering: true,
              exportButton: true,
              headerStyle: {
                backgroundColor: "#00CCCC",
                color: "#FFF",
                fontSize: "17px",
                textAlign: "center",
                fontWeight: "bold"
              },
              rowStyle: rowData => {
                if(rowData.envoieEvaluation === '') {
                  return {backgroundColor: '#FC5F5F'};
                }
              },
              cellStyle: {textAlign:'center'},
              filterCellStyle: {
                textAlign: "center"},
              grouping: true,
              }}
          />
        </div>
      )
}

export default events_table;