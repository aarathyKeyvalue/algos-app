import React, { useState } from "react";
import Timer from "../../components/timer";
import Button from "../../components/button/Button";
import './styles.css';

const CargoTimerWrapper = (props) => {
  const { setDetails, selectedDate = new Date(), details, setSuccess } = props;
  const [timeSub, setTimeSub] = useState('AM');
  const [time, setTime] = useState('00:00');
  const [waitTime, setWaitTime] = useState({ min: 0, hrs: 0});

  const onChangeValue = (type, val, valType) => {
    if (valType === 'time') {
      let timeVal = time.split(':');
      if (type === 'hrs') timeVal[0] = (val?.length > 1 && val) || '0' + val;
      if (type === 'min') timeVal[1] = (val?.length > 1 && val) || '0' + val;
      setTime(timeVal[0] + ':' + timeVal[1]);
    } else if (valType === 'wait') {
      let waitVal = waitTime;
      waitVal[type] = val;
      setWaitTime(waitVal);
    }
  }

  const onSubmit = () => {
    let timeVal = time.split(':');
    const driverAvailableStartTime = new Date(selectedDate);
    driverAvailableStartTime.setHours(Number(timeVal[0]));
    driverAvailableStartTime.setMinutes(Number(timeVal[1]));
    const driverAvailableEndTime = new Date(driverAvailableStartTime);
    driverAvailableEndTime.setHours(driverAvailableEndTime.getHours() + Number(waitTime.hrs) + 10);
    driverAvailableEndTime.setMinutes(driverAvailableEndTime.getMinutes() + Number(waitTime.min));
    setDetails({ ...details,
      driverAvailableEndTime,
      driverAvailableStartTime,
      time: time + ' ' + timeSub,
      waitTime: Number(waitTime?.hrs) * 60 + Number(waitTime?.min)
    });
    setSuccess(false);
  }
  return (
    <div className="cargoTimerWrapper">
      <div className="starter" />
      <Timer
        subTexts={['AM', 'PM']}
        setSub={setTimeSub}
        sub={timeSub}
        onChangeValue={(type, val) => onChangeValue(type, val, 'time')}
        label="SELECT TIME"
      />
      <Timer
        onChangeValue={(type, val) => onChangeValue(type, val, 'wait')}
        label="SELECT WAITING PERIOD"
      />
      <div className="cargoTimerButtonGroup">
        <div
          style={{ width: '50%' }}
        >
          <Button
            type="blackOutline"
            label="Cancel"
            handleClick={() => setSuccess(false)}
          />
        </div>
        <div
          style={{ width: '50%' }}
        >
          <Button
            type="fill"
            label="Confirm"
            handleClick={onSubmit}
          />
        </div>
      </div>
    </div>
  )
};

export default CargoTimerWrapper;