import React from "react";
import CustomList from "../../components/CustomList";

export default function Crawth() {
  return (
    <>
      <h2>Crawth</h2>
      <p>
        The Crawth encounter will start when all bird mobs are slain and the
        three balls are thrown into the hoop
      </p>
      <CustomList>
        <li>
          Crawth will cast <strong>Play Ball</strong> which will allow players
          to score goals on either the{" "}
          <strong>Goal of the Searing Blaze Post</strong> or the{" "}
          <strong>Goal of the Rushing Winds Post</strong>
        </li>
        <li>
          If The Goal of the Searing Blaze is activated, the field will be
          covered in a <strong>Fire Storm</strong>. This will cause fire motes
          to spawn in locations all around the boss arena inflicting massive
          damage and stunning players for 3 seconds if hit. During this time the
          boss will be stunned and will take 75% more damage for 12 seconds.
        </li>
        <li>
          If the Goal of the Rushing Winds is activated the field will be
          engulfed by <strong>Gale Force</strong> pushing players back, and{" "}
          <strong>Roving Cyclones</strong> which will spin you off the arena if
          hit. Wind motes will spawn during this time, collecting one will
          increase haste by 45% and movement speed by 50% and grants immunity to
          the push back from Gale Force
        </li>
        <li>
          Crawth will face a certain player and cast{" "}
          <strong>Overpowering Gust</strong> in which Crawth will flap her wings
          and knock players back and deal damage.
        </li>
        <li>
          Crawth will cast <strong>Deafining Screech</strong> which will
          interrupt casts, silence players, and deal damage.
        </li>
        <li>
          Crawth will use <strong>Savage Peck</strong> does massive damage and
          applies a DOT effect.
        </li>
      </CustomList>
    </>
  );
}
