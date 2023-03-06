import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Card from "../card/card";
import Filter from "../filter/filter";
import Header from "../header/index";
import Navpage from "../Navpage/Navpage";
import { UseProvider } from "../../provider/UseProvider";



const Application =() => {
  return (
    <UseProvider>
    <Header/>
    <Navpage />
    <div className="container">
      <div className="row">
        <Filter />
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card />
          </div>
        </div>
      </div>
    </div>
    <Navpage />
  </UseProvider>
  )
}

export default Application