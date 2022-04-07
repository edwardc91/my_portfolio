
import React from "react";
import { Particles as ReactParticles }from "react-tsparticles";
import { makeStyles } from "@material-ui/core/styles";

const Particles = () => {

  return (
    <ReactParticles
        params={{
          fpsLimit: 60,
          particles: {
            color: {
              value: "#000"
            },
            links: {
              enable: true,
              color: "#000",
              distance: 150
            },
            move: {
              enable: true
            }
          }
        }}
      />
  );
};

export default Particles;