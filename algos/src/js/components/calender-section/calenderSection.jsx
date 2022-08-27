import React from "react";
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, utils } from "@hassanmojab/react-modern-calendar-datepicker";
import Button from "../../components/button/Button";
import './styles.css';

const CalenderSection = (props) => {
  const { setIsCalenderOpen, value, onChange, onConfirmCalenderSelection } = props;
  return (
    <div className="calenderAndButtonWrapper">
      <div className="starterDivWrapper">
        <div className="starterDiv" />
      </div>
      <div classname="calenderWrapper">
        <Calendar
        value={value}
        minimumDate={utils().getToday()}
        onChange={onChange}
        />
      </div>
      <div className="calenderButtonWrapper">
      <Button
          label="Cancel"
          type="outline-secondary"
          width="158px"
          handleClick={() => setIsCalenderOpen(false)}
        />
        <Button
          label="Confirm"
          type="fill" 
          width="158px"
          handleClick={onConfirmCalenderSelection}
        />
      </div>
    </div>
  )
};

export default CalenderSection;