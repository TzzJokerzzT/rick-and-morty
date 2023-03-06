import FilterBTN from "../filterBTN";
import { useContext } from "react";
import { UseData } from "../../../provider/useData";

const Status = () => {
  const { setStatus, setPage } = useContext(UseData);
  let status = ["Alive", "Dead", "Unknow"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseOne"
        >
          Status
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingOne"
      >
        <div className="accordion-body d-flex flex-wrap gap-1">
          {status.map((items, index) => {
            return (
              <FilterBTN
                key={index}
                name="status"
                index={index}
                items={items}
                task={setStatus}
                setPage={setPage}
                input={items}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Status;

<div className="accordion" id="accordionExample"></div>;
