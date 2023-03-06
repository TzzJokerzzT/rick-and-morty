import FilterBTN from "../filterBTN";
import { useContext } from "react";
import { UseData } from "../../../provider/useData";

const Species = () => {
  const { setSpecies, setPage } = useContext(UseData);
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseTwo"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingTwo"
      >
        <div className="accordion-body d-flex flex-wrap gap-1">
          {species.map((items, index) => {
            return (
              <FilterBTN
                key={index}
                name="species"
                index={index}
                items={items}
                task={setSpecies}
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

export default Species;
