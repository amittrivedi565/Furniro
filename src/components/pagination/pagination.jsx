import React, { useState } from "react";
import "./pagination.css";

const Pagination = () => {
  // Maintain a state for the active page
  const [activePage, setActivePage] = useState(1);

  // Function to handle page change
  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <div
        style={{
          height: "75px"
        }}
        className="container d-flex justify-content-center align-items-center gap-5"
      >
        {/* Button 1 */}
        <button
          style={{
            backgroundColor: activePage === 1 ? "#B88E2F" : "#F9F1E7"
          }}
          onClick={() => handlePageChange(1)} // Set active page to 1
          className="box"
        >
          1
        </button>

        {/* Button 2 */}
        <button
          style={{
            backgroundColor: activePage === 2 ? "#B88E2F" : "#F9F1E7"
          }}
          onClick={() => handlePageChange(2)} // Set active page to 2
          className="box"
        >
          2
        </button>

        {/* Button 3 */}
        <button
          style={{
            backgroundColor: activePage === 3 ? "#B88E2F" : "#F9F1E7"
          }}
          onClick={() => handlePageChange(3)} // Set active page to 3
          className="box"
        >
          3
        </button>

        {/* Next Button */}
        <button className="next">Next</button>
      </div>
    </>
  );
};

export default Pagination;
