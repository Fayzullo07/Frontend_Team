import React from "react";

const Timer = () => {
  return (
    <div className="col-12">
      <div className="count-down">
        <h5>
          Your cart will be expired in{" "}
          <span className="count-timer theme-color" id="timer">15 : 00</span>
          {" "}minutes !
        </h5>
        <button
          type="button"
          onclick="location.href = 'checkout.html';"
          className="btn btn-solid-default btn-sm fw-bold"
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Timer;
