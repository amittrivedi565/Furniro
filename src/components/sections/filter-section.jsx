import { ReactComponent as FilterIcon } from '../../assets/svgs/filter/filter.svg';
import { ReactComponent as GridIcon } from '../../assets/svgs/filter/grid.svg';
import { ReactComponent as ListIcon } from '../../assets/svgs/filter/list.svg';
import { ReactComponent as Line } from '../../assets/svgs/filter/line.svg';
const FilterSection = () => {
  return (
    <div className="container-fluid py-3" style={{backgroundColor:"#F9F1E7"}}>
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
          <Line/>
        </div>
        <div className="col-auto d-flex align-items-center mb-2 mb-md-0">
          <span style={{ fontSize: '16px' }}>Showing 1-16 of 32 results</span>
        </div>
        <div className="col-auto d-flex align-items-center mb-2 mb-md-0">
          <button
            className="btn btn-light"
            style={{ width: '200px', height: '50px', color: '#B88E2F', fontSize: '16px' }}
          >
            Add Product
          </button>
        </div>
        <div className="col-auto d-flex align-items-center mb-2 mb-md-0" style={{ fontSize: '16px' }}>
          Show
          &nbsp;
          <button
            className="btn btn-light"
            style={{ width: '50px', height: '50px' }}
          >
            16
          </button>
        </div>
        <div className="col-auto d-flex align-items-center mb-2 mb-md-0" style={{ fontSize: '16px' }}>
          Sort by
          &nbsp;
          <button
            className="btn btn-light"
            style={{ width: '200px', height: '50px', color: 'grey' }}
          >
            Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
