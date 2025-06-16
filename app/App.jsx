"use client";

import Cursor from "@/components/Cursor";
import Layers from "@/components/Layers";
import OverlayComments from "@/components/OverlayComments";
import Toolbar from "@/components/Toolbar";
import Design from "@/components/design/index";

import { useFigma } from "@/context/FigmaProvider";
import { useLive } from "@/context/LiveProvider";

const Home = () => {
  const { canvasRef } = useFigma();
  const { others, myPresence, handlePointerMove, handlePointerLeave } = useLive();
  console.log("myPresence", myPresence, canvasRef);
  return (
    <main
      className="flex"
      id="app"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <Cursor
        key={myPresence.connectionId}
        color={"black"}
        type="user"
        x={myPresence.cursor?.x}
        y={myPresence.cursor?.y}
      />

      {/* {others
        .filter((other) => other.presence.cursor)
        .map(({ connectionId, presence }) => (
          <Cursor
            key={connectionId}
            color={presence.color}
            message={presence.message}
            x={presence.cursor.x}
            y={presence.cursor.y}
          />
        ))} */}

      <Toolbar />

      <section className="flex justify-between">
        {/* <Layers /> */}
        <canvas ref={canvasRef} />
        <Design />
      </section>

      {/* <OverlayComments /> */}
    </main>
  );
};

export default Home;
