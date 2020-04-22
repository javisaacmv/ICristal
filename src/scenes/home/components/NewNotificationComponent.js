import React from "react";
import Modal from "../../components/Modal/Modal";
import Calendar from "../../components/CalendarComponent";

const NewNotificationComponent = () => {
  const [modalIsActive, setModalIsActive] = React.useState(false);
  const [date, setDate] = React.useState(new Date());

  return (
    <div className="button-group field ">
      <p className="control is-pulled-right">
        <button
          className="button is-primary"
          onClick={() => setModalIsActive(true)}
        >
          <span class="icon">
            <i class="fas fa-plus"></i>
          </span>
          <span>Recordatorio</span>
        </button>
      </p>
      <Modal isActive={modalIsActive} cancel={setModalIsActive} card={true}>
        <header className="modal-card-head">
          <p className="modal-card-title">Nuevo Recordatorio</p>
        </header>
        <section className="modal-card-body">
          <div class="field">
            <div class="control">
              <input class="input " type="text" placeholder="Titulo" />
            </div>
          </div>
          <br />
          <div class="field">
            <div class="control">
              <input class="textarea " type="text" placeholder="Descripción" />
            </div>
          </div>
          <br />
          <div class="field -label" label="Fecha limite">
            <label className="label">Fecha limite</label>
            <div class="control">
              <Calendar date={date} setDate={setDate} />
            </div>
          </div>
        </section>
        <div className="modal-card-foot">
          <button className="button is-primary">Guardar</button>
          <button className="button" onClick={() => setModalIsActive(false)}>
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default NewNotificationComponent;
