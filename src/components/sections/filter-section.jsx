import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import { ReactComponent as FilterIcon } from '../../assets/svgs/filter/filter.svg';
import { ReactComponent as GridIcon } from '../../assets/svgs/filter/grid.svg';
import { ReactComponent as ListIcon } from '../../assets/svgs/filter/list.svg';
import { ReactComponent as Line } from '../../assets/svgs/filter/line.svg';

const FilterSection = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to toggle popup visibility
  const [productDetails, setProductDetails] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    discounted_price: '',
    image: '',
    discount: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddProductClick = () => {
    setIsPopupVisible(true);
  };

  const handleSubmit = async () => {
    const endpoint = 'http://localhost:4000/api/products'; // Replace with your backend endpoint
    try {
      const response = await axios.post(endpoint, productDetails);
      console.log('Product added successfully:', response.data);
      alert('Product added successfully!');
      setIsPopupVisible(false); // Close the popup after submission
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. Please try again.');
    }
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <div className="container-fluid py-3" style={{ backgroundColor: '#F9F1E7' }}>
        <div className="row align-items-center justify-content-center justify-content-md-center">
          <div className="col-auto d-flex align-items-center gap-2 mb-2 mb-md-0">
            <FilterIcon />
            <span>Filter</span>
          </div>
          <div className="col-auto d-flex align-items-center gap-2 mb-2 mb-md-0">
            <GridIcon />
          </div>
          <div className="col-auto d-flex align-items-center gap-2 mb-2 mb-md-0">
            <ListIcon />
          </div>
          <div className="col-auto d-flex align-items-center mb-2 mb-md-0">
            <Line />
          </div>
          <div className="col-auto d-flex align-items-center mb-2 mb-md-0">
            <span style={{ fontSize: '16px' }}>Showing 1-16 of 32 results</span>
          </div>
          <div className="col-auto d-flex align-items-center mb-2 mb-md-0">
            <button
              className="btn btn-light"
              style={{ width: '200px', height: '50px', color: '#B88E2F', fontSize: '16px' }}
              onClick={handleAddProductClick}
            >
              Add Product
            </button>
          </div>
          <div className="col-auto d-flex align-items-center mb-2 mb-md-0" style={{ fontSize: '16px' }}>
            Show&nbsp;
            <button className="btn btn-light" style={{ width: '50px', height: '50px' }}>
              16
            </button>
          </div>
          <div className="col-auto d-flex align-items-center mb-2 mb-md-0" style={{ fontSize: '16px' }}>
            Sort by&nbsp;
            <button
              className="btn btn-light"
              style={{ width: '200px', height: '50px', color: 'grey' }}
            >
              Default
            </button>
          </div>
        </div>
      </div>

      {isPopupVisible && (
        <div
          className="popup-container"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1050, // Ensures the popup is above all other elements
          }}
        >
          <div
            className="popup-card"
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              width: '400px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
            }}
          >
            <h3>Add Product</h3>
            <form>
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={productDetails.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label>Category</label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  value={productDetails.category}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label>Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  value={productDetails.price}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label>Discounted Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="discounted_price"
                  value={productDetails.discounted_price}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label>Image</label>
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  value={productDetails.image}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label>Discount</label>
                <input
                  type="text"
                  className="form-control"
                  name="discount"
                  value={productDetails.discount}
                  onChange={handleInputChange}
                />
              </div>
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleClosePopup}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterSection;
