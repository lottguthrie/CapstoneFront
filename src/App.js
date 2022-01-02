import React, {useEffect, useState} from 'react';
import './App.css';
import UserLogin from './components/UserLogin/UserLogin';
import UserRegistration from './components/UserRegistration/UserRegistration';
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import HomeScreen from './components/HomeScreen/HomeScreen';
import OfficerHome from './components/OfficerHome/OfficerHome';
import SupervisorHome from './components/SupervisorHome/SupervisorHome';
import axios from 'axios';
import OfficerDetails from './components/OfficerDetails/OfficerDetails';
import Modal from 'react-modal'






Modal.setAppElement('#root')



function App() {

  // Hooks

  const [officerDetailsList, setOfficerDetailsList] = useState("")
  const [userInfo, setUserInfo] = useState("")
  const [allOfficers, setAllOfficers] = useState("")
  const [officerInfo, setOfficerInfo] = useState('')
  const [loadData, setLoadData]= useState(false)
  const [officerAdmin, setOfficerAdmin]= useState("")
  const [allOfficerAdmin, setAllOfficerAdmin]= useState("")


  // Use Effects

  useEffect(() => {
    getOfficerDetails()
    getAllOfficers()
    setLoadData()
    viewAllOfficerAdmin()
    
  } ,[userInfo])

  useEffect(() =>{
    getAllOfficers()
    
  
  }, [loadData])


 


 // Gets all details for officers
  const getOfficerDetails = async () => {

    const jwt = localStorage.getItem('token');

    let response = await axios.get('http://127.0.0.1:8000/supervisors/officerroles/', { headers: {Authorization: 'Bearer ' + jwt}})
    console.log(response.data)
    setOfficerDetailsList(response.data)
  }


  //Gets all Officers
  const getAllOfficers = async () => {

    let response = await axios.get(`http://127.0.0.1:8000/api/auth/officerlist/${userInfo.user_name}`)
    setAllOfficers(response.data)
  },

  //Delete Employee

  deleteOfficer = async (officer) => {

    const jwt = localStorage.getItem('token');
    console.log(officer)

    let response = await axios.delete(`http://127.0.0.1:8000/api/auth/userdata/${officer}/`, { headers: {Authorization: 'Bearer ' + jwt}})

  }



  //
  // for employees
  //

  const viewOfficerDetails = async (officer) => {

    const jwt = localStorage.getItem('token');

    let response = await axios.get(`http://127.0.0.1:8000/officers/officerdetails/${officer}/`, { headers: {Authorization: 'Bearer ' + jwt}})
    setUserInfo(response.data)

  }

  const viewAllOfficerAdmin = async (officer) => {

    const jwt = localStorage.getItem('token');

    let response = await axios.get("http://127.0.0.1:8000/officers/admin/", { headers: {Authorization: 'Bearer ' + jwt}})
    console.log(response.data)
    setAllOfficerAdmin(response.data)

  }

  const viewOfficerAdmin = async (officer) => {

    const jwt = localStorage.getItem('token');

    let response = await axios.get(`http://127.0.0.1:8000/officers/officer/${officer}/`, { headers: {Authorization: 'Bearer ' + jwt}})
    console.log(response.data)
    setOfficerAdmin(response.data)

  }





    




  const logOut = ()=>{
    
    setUserInfo({})    
    setAllOfficers({})
    setUserInfo({})
    setLoadData({})
    localStorage.removeItem("token");
    console.log("logged user out")
  }


  

  return (
    <div className='App'>   
        <NavBar logOutUser={logOut} />
        <Routes>       
          <Route path="/" element= {<HomeScreen /> } />
          <Route path="/Registration" element= {<UserRegistration /> } />
          <Route path="/Login" element= {<UserLogin userData={setUserInfo}/> } />              
          <Route path="/Supervisor/Home" element = {<SupervisorHome loggedInUser={userInfo}    listOfOfficers={allOfficers} officerDetailList= {viewOfficerDetails} officerAdminList={viewOfficerAdmin} loadData={loadData}/> } />
          <Route path="/Employee/Home" element = {<OfficerHome officerInfo={OfficerDetails} loggedInUser={userInfo}  />} />
          <Route path="/OfficerDetails" element = {<OfficerDetails  officerDetailsList={OfficerDetails} removeOfficer={deleteOfficer} loadData={loadData}  setLoadData={setLoadData}  supervisorInfo={officerInfo}/>} />
        </Routes>
        
    </div>
  );
}

export default App;
