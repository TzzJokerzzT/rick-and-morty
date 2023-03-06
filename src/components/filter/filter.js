import { useContext } from "react";
import { UseData } from "../../provider/useData";
import { Formik, Form, Field } from "formik";
import Gender from "./categories/gender";
import Species from "./categories/species";
import Status from "./categories/status";

const Filter = () => {
  const { setPage, setSearch, setStatus, setGender, setSpecies } =
    useContext(UseData);
  let clear = () => {
    setPage(1);
    setSearch("");
    setStatus("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
      <div
        style={{ cursor: "pointer" }}
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3"
      >
        {" "}
        Clear Filters{" "}
      </div>
      <div>
      <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            setSearch(values.search);
          }}
        >
          <Form className="">
            <Field
              className="field-form"
              name="search"
              placeholder="Type Here..."
              type="text"
            />
            <button className="btn btn-success btn-sm m-1" type="submit">
              Search
            </button>
          </Form>
        </Formik>
      </div>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <Status />
        <Species />
        <Gender />
      </div>
      
    </div>
  );
};

export default Filter;
