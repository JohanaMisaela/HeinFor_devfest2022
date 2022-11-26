import React from 'react'
import Navbar from '../../layouts/admins/Navbar'
import NewPostForm from './../../components/admins/Post/NewPostForm'

function Dashboard() {
  return (
    <div>
      <Navbar />
   
      <NewPostForm/>

    </div>
  )
}

export default Dashboard;
