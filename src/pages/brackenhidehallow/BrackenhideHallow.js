import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function BrackenhideHallow() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Brackenhide Hallow</h1>
      <p>
        Brackenhide Hallow consists of 4 bosses:{" "}
        <button
          onClick={() => {
            navigate("hackclawswarband");
          }}
        >
          <strong>Hackclaw's War Band</strong>
        </button>
        <button
          onClick={() => {
            navigate("treemouth");
          }}
        >
          <strong>Treemouth</strong>
        </button>
        <button
          onClick={() => {
            navigate("gutshot");
          }}
        >
          <strong>Gutshot</strong>
        </button>
        <button
          onClick={() => {
            navigate("decatriarchwratheye");
          }}
        >
          <strong>Decatriarch Wratheye</strong>
        </button>
      </p>
      <section>
        <Outlet />
      </section>
    </>
  );
}
