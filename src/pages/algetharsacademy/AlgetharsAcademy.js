import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function AlgetharsAcademy() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Algethar's Academy</h1>
      <p>
        Algethar's Academy consists of 4 bosses:{" "}
        <button
          onClick={() => {
            navigate("overgrownancient");
          }}
        >
          <strong>Overgrown Ancient</strong>
        </button>
        <button
          onClick={() => {
            navigate("crawth");
          }}
        >
          <strong>Crawth</strong>
        </button>
        <button
          onClick={() => {
            navigate("vexamus");
          }}
        >
          <strong>Vexamus</strong>
        </button>
        <button
          onClick={() => {
            navigate("echoofdoragosa");
          }}
        >
          <strong>Echo of Doragosa</strong>
        </button>
      </p>
      <section>
        <Outlet />
      </section>
    </>
  );
}
