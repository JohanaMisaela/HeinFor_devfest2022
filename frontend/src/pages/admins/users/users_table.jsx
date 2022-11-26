import React, { useState } from 'react'
import MaterialTable from 'material-table'
import '@material-ui/icons';
import { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import reboisement from '../../../assets/reboisement-removebg-preview.png'
import nettoyage from '../../../assets/nettoyage-removebg-preview.png';
import triDechet from '../../../assets/triDechet-removebg-preview.png';
import recyclage from '../../../assets/recyclage-removebg-preview.png';
import './user.css';
import { NavLink } from 'react-router-dom';
function Plainte_table() {
    const link = "http://localhost:5000/api/user/getUsers/"
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        axios.get(link).then(
            res => {
                setUsers(res.data.users)
                console.log(res.data.users)
            }
        )

    }
    const openBadgePopup = () => {
        Swal.fire({
            title: 'Badges 🤩',
            text: 'Voici la listes des badges de cet utilisateur',
            showCancelButton: true,
            showLoader: true,
            html:`<div className='badges shadow rounded'>
            <div className="text-center">
            <div className="">
            Reboisement
            <div className="row">
                <div className="col">
                <img className='img-icon' src=${reboisement} alt="reboisement" />
                </div>
                <div className="col nbr">12</div>
            </div>
            </div>
            <div className="">
            Trie Dechets
            <div className="row">
                <div className="col">
                <img className='img-icon' src=${triDechet} alt="triDechet" />
                </div>
                <div className="col nbr">12</div>
            </div>
            </div>
            <div className="">
            Nettoyage
            <div className="row">
                <div className="col">
                <img className='img-icon' src=${nettoyage} alt="nettoyage" />
                </div>
                <div className="col nbr">12</div>
            </div>
            </div>
            <div className="">
            Recyclage
            <div className="row">
                <div className="col">
                <img className='img-icon' src=${recyclage} alt="recyclage" />
                </div>
                <div className="col nbr">12</div>
            </div>
            </div>
            </div>
        </div>`
        })
    }
    // reboisement,
    // recyclage,
    // trieDechet,
    // nettoyage,
    useEffect(()=>{
        getUsers()
    },[])

    // "idBadge": [],
    //   "votes": [],
    //   "_id": "6382c4012648aae337a167b8",
    //   "name": "Ea error aut unde su",
    //   "firstname": "Culpa consequatur i",
    //   "age": 0,
    //   "email": "xyva@mailinator.com",
    //   "picture": "../../../frontend/public/images/profiles/noImage.png",
    //   "quartier": "Illum soluta ipsa ",
    //   "sexe": false,
    //   "status": false,
    //   "likes": [],
    //   "followed": [],
    //   "createdAt": "2022-11-27T01:57:21.497Z",
    //   "updatedAt": "2022-11-27T01:57:21.497Z",
    //   "__v": 0
    const colums = [
        { title: 'Nom', field: 'name' },
        { title: 'Prenom', field: 'firstname' },
        { title: 'Quartier', field: 'quartier' },
        { title: 'Genre', render:(rowData)=><div>{rowData.sexe ? "Homme" : "Femme"}</div> },
        { title: 'Age', field: 'age' },
        { title: 'Email', field: 'email' },
        { title: 'Votes', render:(rowData)=><div>{rowData.votes.length}</div> },
        // { title: 'Date', field: 'createdAt' },
      ]
    
      const data = [
        { nom: 'Gatera', date:'2022-11-11', quartier: 'Ambohimanarina', text: "Ny aty aminay dia maloto be fona isanandro", type: "Polution de la terre" },
        { nom: 'Mario', date:'2022-07-07', quartier: 'Antrano', text: "Tokony anary po ny olona fa maloto be", type: "Polution de l'air" }
      ]
        return (
            // reboisement,
            // recyclage,
            // trieDechet,
            // nettoyage,
            <><div className='badges shadow rounded'>
                <div className="text-center">
                <div className="">
                Reboisement
                <div className="row">
                    <div className="col">
                    <img className='img-icon' src={reboisement} alt="reboisement" />
                    </div>
                    <div className="col nbr">12</div>
                </div>
                </div>
                <div className="">
                Trie Dechets
                <div className="row">
                    <div className="col">
                    <img className='img-icon' src={triDechet} alt="triDechet" />
                    </div>
                    <div className="col nbr">12</div>
                </div>
                </div>
                <div className="">
                Nettoyage
                <div className="row">
                    <div className="col">
                    <img className='img-icon' src={nettoyage} alt="nettoyage" />
                    </div>
                    <div className="col nbr">12</div>
                </div>
                </div>
                <div className="">
                Recyclage
                <div className="row">
                    <div className="col">
                    <img className='img-icon' src={recyclage} alt="recyclage" />
                    </div>
                    <div className="col nbr">12</div>
                </div>
                </div>
                </div>
            </div>
            <div className="p-3">
                <div style={{ maxWidth: '100%' }} className='p-3'>
                    <MaterialTable
                        columns={colums}
                        data={users}
                        grouping={true}
                        title="Liste des users"
                        options={{
                            paging: true,
                            pageSize: 10,
                            grouping: true,
                            pageSizeOptions: 10,
                            filtering: true,
                            exportButton: true,
                            headerStyle: {
                                backgroundColor: "green",
                                color: "#FFF",
                                fontSize: "17px",
                                textAlign: "center",
                                fontWeight: "bold"
                            },
                            cellStyle: { textAlign: 'center' },
                            filterCellStyle: {
                                textAlign: "center"
                            },
                        }}
                        detailPanel={[
                            {
                                tooltip: "Show Name",
                                render: (rowData) => {
                                    return (
                                        <div id='details'
                                            style={{
                                                fontSize: 25,
                                                color: "white",
                                                backgroundColor: "tranparent",
                                            }}
                                        >
                                            {
                                                rowData.idBadge && rowData.idBadge.length > 0 &&  <div><button id='button' onClick={openBadgePopup} style={{ textDecoration: 'none', border: "none" }}><span className="btn btn-warning btn-sm"><i class="fa-regular fa-badge-sheriff"></i>Badge</span></button>{' '}<NavLink id='button' to={`/addBadge/${rowData.idBadge}`} style={{ textDecoration: 'none', border: "none" }}><span className="btn btn-warning btn-sm"><i class="fa-regular fa-badge-sheriff"></i>Attrib Badge</span></NavLink>{' '}</div>
                                            }
                                            {
                                                (!rowData.idBadge || rowData.idBadge.length === 0) &&  <div><NavLink id='button' to={`/attribBadge/${rowData._id}`} style={{ textDecoration: 'none', border: "none" }}><span className="btn btn-warning btn-sm"><i class="fa-regular fa-badge-sheriff"></i>Premier Badge</span></NavLink>{' '}</div>
                                            }
                                            {/* <button id='button' onClick={openBadgePopup} style={{ textDecoration: 'none', border: "none" }}><span className="btn btn-warning btn-sm"><i class="fa-regular fa-badge-sheriff"></i>Badge</span></button>{' '} */}
                                        </div>
                                    );
                                }
                            }
                        ]} />
                </div>
            </div></>
          )
}

export default Plainte_table