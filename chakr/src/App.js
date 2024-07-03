import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import DataTable from "./components/Datatable";
import './App.css';
import ProfilePage from './components/ProfilePage';
import Taskbar from './components/Taskbar';
import PeopleTable from './components/PeopleTable';

function App() {
  return (
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Navbar />
          <div style={{ padding: '20px' }}>
            
          <Routes>
            <Route path="/settings" element={<ProfilePage />} />
            <Route path="/companies" element={<DataTable />} />
            <Route path="/tasks" element={<Taskbar/>} />
            <Route path="/people" element={<PeopleTable/>}/>
          </Routes>
          </div>         
        </div>
      </div>
  );
}

export default App;
