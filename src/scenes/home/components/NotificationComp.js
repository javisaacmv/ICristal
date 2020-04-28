import React from "react";
import moment from "moment";
import "moment/locale/es";

const NotificationComp = ({
  id,
  title,
  description,
  deadline,
  emails,
  setOnLoading,
  deleteNotification,
  getNotifications,
}) => {
  const today = moment(new Date());
  const limit = moment(deadline);
  let notifClasses;

  if (limit.diff(today, "days") > 20) notifClasses = "is-success";
  if (limit.diff(today, "days") < 20) notifClasses = "is-info";
  if (limit.diff(today, "days") < 10) notifClasses = "is-warning";
  if (limit.diff(today, "days") < 3) notifClasses = "is-danger";
  if (limit.diff(today, "days") < 0) notifClasses = "";

  function onDelete() {
    console.log(id);
    setOnLoading(true);
    deleteNotification(id);
    setOnLoading(false);
    getNotifications();
  }

  return (
    <div className={"notification " + notifClasses} key={id}>
      <button className="delete" onClick={() => onDelete()}></button>
      <span className="">{title}</span>
      <p>{description}</p>
      {emails.length > 0 && (
        <div>
          <p>Destinatarios:</p>
          <div className="is-flex">
            {emails.map((email) => (
              <span className={"tag is-light " + notifClasses}>{email}</span>
            ))}
          </div>
        </div>
      )}

      <p>
        {limit.diff(today, "days") < 6
          ? moment(deadline).calendar()
          : moment(deadline).local("es").format(" MMMM Do YYYY")}
      </p>
    </div>
  );
};

export default NotificationComp;
