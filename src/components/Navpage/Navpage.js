import { useContext } from "react";
import { UseData } from "../../provider/useData";
import ReactPaginate from "react-paginate";

const Navpage = () => {
  const { page, setPage, info } = useContext(UseData);
  return (
    <ReactPaginate
      className="pagination d-flex justify-content-center mt-3 gap-1 col-lg-12 col-md-6 col-sm-6 col-12"
      forcePage={page === 1 ? 0 : page - 1}
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="btn btn-outline-success"
      previousClassName="btn btn-outline-success"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
      onPageChange={(data) => {
        setPage(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
};

export default Navpage;
