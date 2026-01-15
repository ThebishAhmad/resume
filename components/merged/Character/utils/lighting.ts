import * as THREE from "three";
import { RGBELoader } from "three-stdlib";
import { animate } from "framer-motion";

const setLighting = (scene: THREE.Scene) => {
  const directionalLight = new THREE.DirectionalLight(0xc7a9ff, 0);
  directionalLight.intensity = 0;
  directionalLight.position.set(-0.47, -0.32, -1);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;
  scene.add(directionalLight);

  const pointLight = new THREE.PointLight(0xc2a4ff, 0, 100, 3);
  pointLight.position.set(3, 12, 4);
  pointLight.castShadow = true;
  scene.add(pointLight);

  new RGBELoader()
    .setPath("/models/")
    .load("char_enviorment.hdr", function (texture) {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = texture;
      scene.environmentIntensity = 0;
      scene.environmentRotation.set(5.76, 85.85, 1);
    });

  function setPointLight(screenLight: any) {
    if (screenLight.material.opacity > 0.9) {
      pointLight.intensity = screenLight.material.emissiveIntensity * 20;
    } else {
      pointLight.intensity = 0;
    }
  }

  function turnOnLights() {
    animate(0, 0.64, {
      duration: 2,
      ease: "easeInOut",
      onUpdate: (latest) => {
        scene.environmentIntensity = latest;
      }
    });

    animate(0, 1, {
      duration: 2,
      ease: "easeInOut",
      onUpdate: (latest) => {
        directionalLight.intensity = latest;
      }
    });

    // animating DOM element .character-rim if it exists, or is it a 3D object? 
    // The original code targeted ".character-rim" string. 
    // This implies it's a DOM element overlaid on the canvas?
    // GSAP can animate CSS selectors. Framer Motion's animate can too.

    // Check if element exists to avoid errors
    if (document.querySelector(".character-rim")) {
      animate(".character-rim", { y: "55%", opacity: 1 }, { delay: 0.2, duration: 2 });
    }
  }

  return { setPointLight, turnOnLights };
};

export default setLighting;
