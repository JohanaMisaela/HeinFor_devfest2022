import React, { useState,useEffect, forwardRef } from 'react';
import { useParams } from 'react-router-dom';
import MaterialTable from 'material-table';
import {Checkbox} from '@material-ui/core';
import Select from 'react-select';
import AOS from 'aos';
import "aos/dist/aos.css";
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import axios from 'axios';
import { PlayCircleFilled} from '@material-ui/icons';
import logoEsti from "../assets/imgs/esti.png";
import useFetchTable from '../Service/useFetchTable';

const ModelCahier = ({ empList }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  
      const {id} = useParams()
      
      const {data: modulesList} = useFetchTable('http://localhost:8000/api/liste-module')
      const modules = modulesList
      
      const tableIcons = {
        Demarrer: forwardRef((props, ref) => <PlayCircleFilled {...props} ref={ref} />),
      }
  
      const [filteredData,setFilteredData]=useState(empList)
      const [filter, setFilter]=useState(true)
      const columns = [
        /////////////////////////////////test editable///////////////////////////
          { title: "Date", field:"date", type:"date", editable: "never"},
          { title: "Heure de début", field:"heure_debut", type:"time", editable: "never"},
          { title: "Heure de fin", field: "heure_fin", type:"time", editable: "never"},
          { title: "Durée", field: "duree"},
          { title: "Code Module", field: "module",
          editComponent: ({ value, onChange }) => (
            <Select
              options={modules}
              name="moduleSelect"
              onChange={(selectedOption) => onChange(selectedOption.value)}
              value={value ? value.value : value}
              placeholder="Choisir le module"
            />
          ), editable: "never"
          },
          { title: "Activité", field: "activite" , editable: "never"},
          { title: "Abscence", field : "abscence", editable: "never"},
          { title: "Classe", field : "classe", editable: "never"},
          { title: "Prof", field : "prof", editable: "never"},
      ]
      const [selectedRow, setSelectedRow] = useState(null);
  
      const handleChange=()=>{
          setFilter(!filter)
      }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const update = async (rowData, id) => {
      const update = await axios.put(`http://localhost:8000/api/cahier/${id}`, rowData)
      if(update.status === 200){
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Mis à jour avec succès'
        })
      }  
      else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Une erreur s\'est produite. Verifier votre serveur!'
        })
      } 
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const startOrStop = async(rowData,id) => {
      
        swal({
          title: "Débuter le cours?",
          text: "Ce cours va débuter",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then( async function (isOkay) {
            if (isOkay) {
                const res = await axios.put(`http://localhost:8000/api/check/${id}`,{id})
                if(res.status === 200){
                  Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Le cours a bel et bien débuté'
                })
                setTimeout(()=>{window.location.reload(false)},1000)
                }  else{
                  Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Une erreur s\'est produite. Verifier votre serveur!'
                  })
              } 
            }
          });
    }
    //////////////////////////////////////////////////////////////////////////////////////////////
  return (
          
          <div data-aos="flip-up" style={{backgroundColor:"rgb(243, 243, 243)"}}>
              
              <h1 align="center"><img src={logoEsti} alt="" style={{width:'100px', heigth:'150px'}} /></h1>
              <h4 align='center'>Cahier de Texte</h4>
              
              
              <MaterialTable style={{backgroundColor: "rgb(243, 243, 243)"}}
                onRowClick={(evt, selectedRow) =>
                    setSelectedRow(selectedRow.tableData.id)
                }          
                  title=""
                  data={filteredData}
                  columns={columns}
                  editable={{   
                      onRowUpdate: (newData, oldData) => {
                        return new Promise((resolve, reject) => {
                          setTimeout(() => {
                            const dataUpdate = [...filteredData];
                            // In dataUpdate, find target
                            const target = dataUpdate.find(
                              (el) => el.id === oldData.id
                            );
                            const index = dataUpdate.indexOf(target);
                            dataUpdate[index] = newData;
                            setFilteredData([...dataUpdate]);
                            console.log(newData)
                            update(newData, oldData.id)
                            resolve();
                          }, 1000);
                        });
                      }   
                  }}
                  options={{
                      paging:true,
                      pageSize:filteredData.length+1,
                      pageSizeOptions:[filteredData.length],
                      filtering:filter,
                      headerStyle: {
                            backgroundColor: "#00CCCC",
                            color: "#FFF",
                            fontSize: "17px",
                            textAlign: "center",
                            fontWeight: "bold"
                      },
                      exportButton: true,
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
                  actions={[
                    rowData => ({
                      icon:  tableIcons.Demarrer,
                      tooltip: 'Démarrer le cours',
                      onClick: (event, rowData) => startOrStop(rowData,rowData.id),
                    }),
                  {
                      icon:()=><Checkbox
                      checked={filter}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                  />,
                  tooltip:"Hide/Show Filter option",
                  isFreeAction:true
                  },
                  ]}
              />
          </div>
      );
}

export default ModelCahier;