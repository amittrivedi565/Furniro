import { ReactComponent as FilterIcon } from '../../assets/svgs/filter-icon.svg';
import { ReactComponent as GridIcon } from '../../assets/svgs/grid-icon.svg';
import { ReactComponent as FlipIcon } from '../../assets/svgs/flip-icon.svg';

const FilterSection = () => {
  return (
    <div className="container-fluid" style={{ height: '100px', backgroundColor: "#F9F1E7" }}>
      <div className="row d-flex justify-content-start align-items-center">
        <div className="col-5 d-flex flex-row align-items-start">
          <a href="#filter-icon" className="d-flex align-items-center">
            <FilterIcon/>
            Filter
          </a>
          <a href="#grid-icon" className="d-flex align-items-center">
            <GridIcon/>
          </a>
          <a href="#flip-view" className="d-flex align-items-center">
            <FlipIcon/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
