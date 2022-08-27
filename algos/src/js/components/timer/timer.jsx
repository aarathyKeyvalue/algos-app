import './styles.css';
import seperator from '../../../assets/vehicles/Separator.svg'
import { useState } from 'react';
const Timer=(props)=>{
    const { subTexts, sub, setSub, label, onChangeValue}=props;
    return(
<div>
<div className="classlabel">{label}</div>
<div className='wrapping'>
<div>
<input className="time1" onChange={(e)=>onChangeValue('hrs', e?.target?.value)} />
</div>
<div className='sepimg'>
    <img src={seperator} alt="" />
</div>
<div>
<input className="time2" onChange={(e)=>onChangeValue('min', e?.target?.value)} />
</div>
<div>
{(subTexts?.map((subval) => (
<div >
    <button
      className={(subval === sub && 'time3') || 'time4'} 
      onClick={()=>setSub(subval)}>{subval}</button>
</div>
))) || (
    <button
      className={'time4'}>HR</button>
)}
</div>
</div>
</div>
);
};
export default Timer;