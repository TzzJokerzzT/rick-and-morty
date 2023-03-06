import FilterBTN from "../filterBTN";
import { useContext } from "react";
import { UseData } from "../../../provider/useData";

const Gender = () => {
  const { setGender, setPage } = useContext(UseData);
  let gender = ["Female", "Male", "Genderless", "Unknown"];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseThree"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseThree"
        >
          Gender
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingThree"
      >
        <div className="accordion-body d-flex flex-wrap gap-1">
          {gender.map((items, index) => {
            return (
              <FilterBTN
                key={index}
                name="gender"
                index={index}
                items={items}
                task={setGender}
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

export default Gender;
