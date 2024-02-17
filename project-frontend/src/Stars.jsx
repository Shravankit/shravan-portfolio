import React from 'react';
import * as THREE from 'three';

const Stars = ({ count }) => {
  let group = new THREE.Group();

  for (let i = 0; i < count; i++) {
    let star = new THREE.Vector3();
    star.x = THREE.MathUtils.randFloatSpread(1000); // Spread stars across x-axis
    star.y = THREE.MathUtils.randFloatSpread(1000); // Spread stars across y-axis
    star.z = THREE.MathUtils.randFloatSpread(1000); // Spread stars across z-axis

    group.add(new THREE.Mesh(
      new THREE.SphereGeometry(0.1, 24, 24), // Size of the star
      new THREE.MeshBasicMaterial({ color: 0xffffff }) // White color
    ));

    group.children[i].position.set(star.x, star.y, star.z);
  }

  return <primitive object={group} />;
};

export default Stars;
