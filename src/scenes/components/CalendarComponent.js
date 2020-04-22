import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "moment/locale/es";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import es from "date-fns/locale/es";

const Calendar = ({ date, setDate }) => {
  registerLocale("es", es);
  const ExampleCustomInput = ({ value, onClick }) => (
    <button className="button is-primary" onClick={onClick}>
      {moment(value)
        .local("es")
        .format(" MMMM Do YYYY")}
    </button>
  );

  return (
    <DatePicker
      selected={date}
      locale="es"
      onChange={date => setDate(date)}
      customInput={<ExampleCustomInput />}
    />
  );
};
export default Calendar;
