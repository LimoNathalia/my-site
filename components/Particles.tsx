import Particles from 'react-tsparticles';
import { loadFirePreset } from 'tsparticles-preset-fire';
import { useCallback } from 'react';
import { Engine } from 'tsparticles-engine';

const ParticlesComponent = (props: { id: string }) => {
  const options = {
    preset: 'fire',
  };

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFirePreset(engine);
  }, []);

  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
