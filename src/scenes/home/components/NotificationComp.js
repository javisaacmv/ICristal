import React from "react";
import moment from "moment";
import "moment/locale/es";

const NotificationComp = ({ id, title, description, deadline }) => {
  const today = moment(new Date());
  const limit = moment(deadline);
  let notifClasses;

  if (limit.diff(today, "days") > 20) notifClasses = "is-success";
  if (limit.diff(today, "days") < 20) notifClasses = "is-info";
  if (limit.diff(today, "days") < 10) notifClasses = "is-warning";
  if (limit.diff(today, "days") < 3) notifClasses = "is-danger";
  if (limit.diff(today, "days") < 0) notifClasses = "";

  return (
    <div className={"notification " + notifClasses} key={id}>
      <button className="delete"></button>
      <span className="">{title}</span>
      <p>{description}</p>
      <span>
        {limit.diff(today, "days") < 6
          ? moment(deadline).calendar()
          : moment(deadline).local("es").format(" MMMM Do YYYY")}
      </span>
    </div>
  );
};

export default NotificationComp;
