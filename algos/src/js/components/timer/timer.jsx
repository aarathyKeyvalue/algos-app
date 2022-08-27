import './styles.css';
import seperator from '../../../assets/vehicles/Separator.svg'
import { useState } from 'react';
const Timer=(props)=>{
    const {className,type,label,handleClick}=props;
    const [time,setTime]=useState("")
    const onChangeValue=()=>{
        
    }
    return(
<div>
   
<div className="classlabel">{label}</div>
<div className='wrapping'>
<div>
<input className="time1"></input>
</div>
<div className='sepimg'>
<img src={seperator}/>
</div>
<div>
<input className="time2" onChange={()=>onChangeValue()}></input>
</div>
<div>
<div >
<button className="time3"  onClick={()=>handleClick()}>AM</button>
</div>
<div>
<button className="time4"  onClick={()=>handleClick()}>PM</button>
</div>
</div>
</div>
</div>
);
};
export default Timer;