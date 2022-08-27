
import lcv from "../../../assets/main/LCV.svg";
import trailer from "../../../assets/main/trailer.svg";
import truck from "../../../assets/main/Truck.svg";
import container from "../../../assets/main/container.svg";
import "./styles.css";
const Vehicleselection=()=>{
return(
<div className="row">

    <div className="backgroundclass">
    <div className='lcvtruck'>
    </div>
    <div className="namediv">
    LCV
    </div>
    </div>

    <div className="backgroundclass">
    <div className='truckvan'>
    </div>
    <div className="namediv">
    Truck
    </div>
    </div>
    <div className="backgroundclass">
    <div className='hyvatruck'>
    </div>
    <div className="namediv">
    Hyva
    </div>
    </div>
    
    
    <div className="backgroundclass">
    <div className='loadtruck'>
    </div>
    <div className="namediv">
    Container
    </div>
    </div>
    <div className="backgroundclass">
    <div className='trailer'>
    </div>
    <div className="namediv">
    Trailer
    </div>
    </div>

</div>
)
};
export default Vehicleselection;