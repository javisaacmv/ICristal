import React from "react";
import Modal from "../../components/Modal/Modal";
import Calendar from "../../components/CalendarComponent";
import moment from "moment";

const NewNotificationComponent = ({
  saveNotification,
  getNotifications,
  setOnAdd,
}) => {
  const [modalIsActive, setModalIsActive] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [title, setTitle] = React.useState({ value: "", error: "" });
  const [description, setDescription] = React.useState({
    value: "",
    error: "",
  });

  const onDone = () => {
    if (!title.value) {
      setTitle({ ...title, error: "Introduzca un titulo" });
      return;
    }
    if (!description.value) {
      setDescription({ ...description, error: "Introduzca una descripción" });
      return;
    }
    setOnAdd(true);

    saveNotification({
      title: title.value,
      description: description.value,
      deadline: moment(date),
    });
    setOnAdd(false);

    getNotifications();
    setModalIsActive(false);
  };

  return (
    <div className="button-group field ">
      <p className="control is-pulled-right">
        <button
          className="button is-primary"
          onClick={() => setModalIsActive(true)}
        >
          <span className="icon">
            <i className="fas fa-plus"></i>
          </span>
          <span>Recordatorio</span>
        </button>
      </p>
      <Modal isActive={modalIsActive} cancel={setModalIsActive} card={true}>
        <header className="modal-card-head">
          <p className="modal-card-title">Nuevo Recordatorio</p>
        </header>
        <section className="modal-card-body">
          <div className="field">
            <div className="control">
              <input
                className="input "
                type="text"
                placeholder="Titulo"
                value={title.value}
                onChange={(e) =>
                  setTitle({ ...title, value: e.currentTarget.value })
                }
              />
            </div>
            {title.error && <p className="help">{title.error}</p>}
          </div>
          <br />
          <div className="field">
            <div className="control">
              <input
                className="textarea "
                type="text"
                placeholder="Descripción"
                value={description.value}
                onChange={(e) =>
                  setDescription({
                    ...description,
                    value: e.currentTarget.value,
                  })
                }
              />
            </div>
            {description.error && <p className="help">{description.error}</p>}
          </div>
          <br />
          <div className="field -label" label="Fecha limite">
            <label className="label">Fecha limite</label>
            <div className="control">
              <Calendar date={date} setDate={setDate} />
            </div>
          </div>
        </section>
        <div className="modal-card-foot">
          <button className="button is-primary" onClick={() => onDone()}>
            Guardar
          </button>
          <button className="button" onClick={() => setModalIsActive(false)}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default NewNotificationComponent;
