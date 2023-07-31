import React from "react";
import CustomList from "../../components/CustomList";

export default function HackclawsWarBand() {
  return (
    <>
      <h2>Hackclaw's War Band</h2>
      <p>
        The Hackclaw's War Band Encounter starts when you have freed 5 tuskarr
        from their cages.
      </p>
      <CustomList>
        <li>
          The Hackclaw's consist of three gnolls: <strong>Rira Hackclaw</strong>
          , <strong>Gashtooth</strong>, and <strong>Tricktotem</strong>.
        </li>
        <li>
          When any one of the gnolls reaches 15% HP, Tricktotem will cast{" "}
          <strong>Bloodfrenzy</strong> which will increase the haste and damage
          of all gnolls by 30% until the end of the encounter.
        </li>
        <li>
          Rira has a resource that fills up as the fight progresses. Once it
          reaches 100% Rira will cast <strong>Savage Charge</strong>, Gashtooth
          will cast <strong>Decayed Senses</strong>, and Tricktotem will cast{" "}
          <strong>Hextrick Totem</strong> in combination.
        </li>
        <li>
          Rira casts <strong>Bladestorm</strong> and travel in towards random
          players.
        </li>
        <li>
          Gashtooth casts <strong>Gash Frenzy</strong> and will teleport to
          random players dealing damage and inflicting a bleed.
        </li>
        <li>
          Gashtooth will cast <strong>Marked for Butchery</strong> which fixates
          on a player and hits them with relentless swings.
        </li>
        <li>
          Tricktotem casts <strong>Greater Healing Rapids</strong> which will
          heal one of her allies and leave a heal over time on them.
        </li>
      </CustomList>
    </>
  );
}
