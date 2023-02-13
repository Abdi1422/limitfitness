import "./exercises.scss"
import { Typography } from "@mui/material";
import Data from "../components/data";
import Footer from "../components/footer";

const Exercises =({loop,dataimg})=>{
    return(
      <>
      <section className="exersection">
        <h1 className="exerh1">Exercises</h1>
        <div className="exermain">
        {loop.map((lop)=>{
          return(
            <>
              <Data name={lop.name} equipment={lop.equipment} instructions={lop.instructions} img={dataimg} />
            </>
          )})}     
        </div>
      </section>
      <Footer/>
      </>
    )
}
export default Exercises;