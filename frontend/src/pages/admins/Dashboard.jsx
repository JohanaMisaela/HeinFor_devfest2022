import React, {useEffect} from 'react'
import Navbar from '../../layouts/admins/Navbar'
import PostItem from './../../components/admins/postItem';
import * as AOS from 'aos';

function Dashboard() {
  useEffect(()=>{
    AOS.init()
  },[])

  return (
    <div>
      <Navbar />
      <div data-aos="fade-up">
      <PostItem />
      </div>
    </div>
  )
}

export default Dashboard;
