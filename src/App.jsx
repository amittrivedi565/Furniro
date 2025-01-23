import React from 'react';
import CustomNavbar from './components/navbar/navbar';
import TopSection from './components/sections/top-section';
import FilterSection from './components/sections/filter-section';
import GridItems from './components/grid/item-grid';
import Products from "./products.json"



const App = () => {
  return (
    <div>
      <CustomNavbar/>
      <TopSection/>
      <FilterSection/>
      <GridItems Products={Products}/>
    </div>
  );
};

export default App;
