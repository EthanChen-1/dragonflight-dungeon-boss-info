import React from "react";
import CustomList from "../../components/CustomList";
import { Link } from "react-router-dom";
import CustomDescription from "../../components/CustomDescription";

export default function EchoOfDoragosa() {
  return (
    <>
      <h3>Echo Of Doragosa</h3>
      <CustomDescription>
        The Echo of Doragosa encounter will only be available when{" "}
        <Link to="../overgrownancient">
          <strong>Overgrown Ancient</strong>
        </Link>
        ,{" "}
        <Link to="../crawth">
          <strong>Crawth</strong>
        </Link>
        , and{" "}
        <Link to="../vexamus">
          <strong>Vexamus</strong>
        </Link>{" "}
        are slain
      </CustomDescription>
      <CustomList>
        <li>
          Echo of Doragosa will apply <strong>Overwhelming Power</strong> which
          is a debuff that is applied from all her arcane abilities. This debuff
          will make players take 5% more damage from her and every third
          application will leave behind an <strong>Arcane Rift</strong>.
        </li>
        <li>
          Arcane Rift inflicts damage to players within it and will release{" "}
          <strong>Uncontrolled Energy</strong> which are arcane orbs that fire
          out from the rifts and deal damage to players that are hit by it.
        </li>
        <li>
          Echo of Doragosa will cast <strong>Astral Breath</strong> which will
          deal damage in a cone infront of her.
        </li>
        <li>
          Echo of Doragosa will use <strong>Power Vacuum</strong> which is a two
          part ability where she pulls players in, and summons a large arcane
          rift that blasts players back.
        </li>
        <li>
          Echo of Doragosa has <strong>Arcane Missles</strong> which will target
          a random player.
        </li>
        <li>
          Echo of Doragosa will mark a player with <strong>Energy Bomb</strong>{" "}
          which is a debuff that explode after 6 seconds.
        </li>
      </CustomList>
    </>
  );
}
