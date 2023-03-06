const FilterBTN = ({ name, index, items, task, input, setPage }) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #1a790d;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>
      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
          onClick={() => {
            setPage(1);
            task(items);
          }}
        />
        <label className="btn btn-outline-success" htmlFor={`${name}-${index}`}>
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
