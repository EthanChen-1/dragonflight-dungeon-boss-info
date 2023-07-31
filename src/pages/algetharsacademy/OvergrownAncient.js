import React from "react";
import CustomList from "../../components/CustomList";

export default function OvergrownAncient() {
  return (
    <>
      <h2>Overgrown Ancient</h2>
      <p>
        The Overgrown Ancient encounter will start when all three Vile Lashers
        surrounding the boss are slain.
      </p>
      <CustomList>
        <li>
          Overgrown Ancient has a resource that builds up over the course of the
          fight. Once the resource reaches 100% he will cast{" "}
          <strong>Burst Forth</strong> which will cause dormant lashers to
          awaken and start attacking players.
        </li>
        <li>
          Overgrown Ancient casts <strong>Germinate</strong> which summon
          swirlies below players. When the swirlies go off they will leave
          behind a dormant lasher on the ground.
        </li>
        <li>
          Overgrown Ancient casts <strong>Branch Out</strong> where he will pick
          a spot to throw a branch. Once the branch is thrown it will apply
          stack of <strong>Splinterbark</strong> on all players leaving a bleed.
          The branch will become an Ancient Branch gaining a cast called{" "}
          <strong>Healing Touch</strong> and upon death will cast{" "}
          <strong>Abundance</strong> leaving behind a pool of life energy which
          heals players and removes the bleed debuff.
        </li>
      </CustomList>
    </>
  );
}
