import React from 'react'
import MaterialTable from 'material-table'
import '@material-ui/icons';

function plainte_table() {
    const colums = [
        { title: 'Nom', field: 'nom' },
        { title: 'Quartier', field: 'quartier' },
        { title: 'Informations', field: 'text'},
        { title: 'Type', field: 'type' },
        { title: 'Date', field: 'date' },
      ]
    
      const data = [
        { nom: 'Gatera', date:'2022-11-11', quartier: 'Ambohimanarina', text: "Ny aty aminay dia maloto be fona isanandro", type: "Polution de la terre" },
        { nom: 'Mario', date:'2022-07-07', quartier: 'Antrano', text: "Tokony anary po ny olona fa maloto be", type: "Polution de l'air" }
      ]
        return (
            <div style={{ maxWidth: '100%' }}>
              <MaterialTable
                columns={colums}
                data={data}
                grouping={true}
                title="Liste des plaintes"
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

export default plainte_table