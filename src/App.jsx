import React from 'react';
import CustomNavbar from './components/navbar/navbar';
import ShopSection from './components/sections/top-section';
import FilterSection from './components/sections/filter-section';

const App = () => {
  return (
    <div>
      <CustomNavbar />
      <ShopSection />
      <FilterSection/>
    </div>
  );
};

export default App;
