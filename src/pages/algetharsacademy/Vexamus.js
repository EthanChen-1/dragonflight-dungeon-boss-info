import React from "react";
import CustomList from "../../components/CustomList";

export default function Vexamus() {
  return (
    <>
      <h2>Vexamus</h2>
      <p>
        The Vexamus encounter starts when the mobs on his platform are slain and
        Professor Maxdormu summons Vexamus.
      </p>
      <CustomList>
        <li>
          Vexamus has a resource bar that fills as he collects arcane orbs. At
          100 energy he casts <strong>Arcane Fissure</strong>. Vexamus will
          cause an AOE explosion to all players knocking them back and causing
          fissures to erupt beneath players.
        </li>
        <li>
          Throughout the fight <strong>Arcane Orbs</strong> will be summoned and
          head toward Vexamus, if they touch Vexamus he will gain 20 energy and
          send out an AOE pulse.
        </li>
        <li>
          Vexamus will use <strong>Mana Bombs</strong> which targets 3 players
          with a debuff that does a damage overtime and upon expiration leaves a
          explosive arcane bomb that explodes into a pool of{" "}
          <strong>Corrupted Mana</strong>.
        </li>
        <li>
          Vexamus has a frontal called <strong>Arcane Expulsion</strong> which
          does massive damage in a cone in front of him.
        </li>
      </CustomList>
    </>
  );
}
