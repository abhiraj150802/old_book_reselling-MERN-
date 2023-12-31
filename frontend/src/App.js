
// import './App.css';
import React from 'react';

//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import DetailView from './components/details/DetailView';


const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
           <Routes>
             <Route path='/' element={ <Home />}/>
             <Route path='/product/:id' element={<DetailView/>}/>
           </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
