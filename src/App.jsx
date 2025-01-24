import React from 'react';
import CustomNavbar from './components/navbar/navbar';
import TopSection from './components/sections/top-section';
import FilterSection from './components/sections/filter-section';
import GridItems from './components/grid/item-grid';
import Pagination from './components/pagination/pagination';
import Footer from "./components/footer/footer"
import Products from "./products.json"



const App = () => {
  return (
    <div>
      <CustomNavbar/>
      <TopSection/>
      <FilterSection/>
      <GridItems Products={Products}/>
      <Pagination/>
      <Footer/>
    </div>
  );
};

export default App;
