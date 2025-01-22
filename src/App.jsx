import React from 'react';
import CustomNavbar from './components/navbar/navbar';
import TopSection from './components/sections/top-section';
import FilterSection from './components/sections/filter-section';

const App = () => {
  return (
    <div>
      <CustomNavbar/>
      <TopSection/>
      <FilterSection/>
    </div>
  );
};

export default App;
