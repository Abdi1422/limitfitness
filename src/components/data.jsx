import "./data.scss"

const Data=({name,equipment,instructions,img})=>{
    return(
        <div className="container">
            <div className="dataimgdiv">
               <img className="dataimg" src={img} ></img>
            </div>
            <div className="datatext" >
               <h2 className="dataname">{name}</h2>
               <p className="equip">{equipment}</p>
               <p className="inst">{instructions}</p>
            </div>
        </div>
    )
}
export default Data;