"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

type HeroSceneProps = {
  onReady?: () => void;
};

/* ---------- Ukuran mangkuk (satuan bebas) ---------- */
const BOWL_RADIUS = 1.95;
const BOWL_HEIGHT = 1.25;
const BOWL_FOOT = 0.12;
const BOWL_WALL = 0.09;
const BOWL_MAX_ANGLE = 1.42;

/* Tinggi gundukan salad pada jarak (x, z) dari pusat mangkuk. */
function moundHeight(x: number, z: number) {
  const rho = Math.min(Math.hypot(x, z) / 1.7, 1);
  return 1.0 + 0.55 * (1 - rho * rho) + 0.18;
}

/* Pengacak deterministik supaya susunan salad selalu sama. */
function createRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------- Mangkuk keramik ---------- */
function createBowl() {
  const outer = (phi: number) =>
    new THREE.Vector2(
      BOWL_RADIUS * Math.sin(phi),
      BOWL_FOOT + BOWL_HEIGHT * (1 - Math.cos(phi)),
    );
  const inner = (phi: number) =>
    new THREE.Vector2(
      (BOWL_RADIUS - BOWL_WALL) * Math.sin(phi),
      BOWL_FOOT + 0.06 + (BOWL_HEIGHT - 0.04) * (1 - Math.cos(phi)),
    );

  const startAngle = 0.445;
  const steps = 28;
  const profile: THREE.Vector2[] = [
    new THREE.Vector2(0, 0),
    new THREE.Vector2(0.78, 0),
    new THREE.Vector2(0.84, 0.04),
    new THREE.Vector2(0.84, BOWL_FOOT),
  ];

  for (let i = 0; i <= steps; i++) {
    profile.push(
      outer(startAngle + ((BOWL_MAX_ANGLE - startAngle) * i) / steps),
    );
  }

  const outerTop = outer(BOWL_MAX_ANGLE);
  const innerTop = inner(BOWL_MAX_ANGLE);
  profile.push(new THREE.Vector2(outerTop.x + 0.012, outerTop.y + 0.018));
  profile.push(
    new THREE.Vector2(
      (outerTop.x + innerTop.x) / 2,
      Math.max(outerTop.y, innerTop.y) + 0.03,
    ),
  );
  profile.push(new THREE.Vector2(innerTop.x - 0.012, innerTop.y + 0.004));

  for (let i = steps; i >= 0; i--) {
    profile.push(inner((BOWL_MAX_ANGLE * i) / steps));
  }

  const group = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.LatheGeometry(profile, 96),
    new THREE.MeshPhysicalMaterial({
      color: 0xf7fbf8,
      roughness: 0.25,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      side: THREE.DoubleSide,
    }),
  );
  group.add(body);

  /* Garis hijau khas HEALIFEST di badan mangkuk. */
  const bands: Array<{ phi: number; tube: number; color: number }> = [
    { phi: 1.0, tube: 0.05, color: 0x176b50 },
    { phi: 1.12, tube: 0.02, color: 0x2a8a5c },
  ];
  for (const band of bands) {
    const point = outer(band.phi);
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(point.x + 0.012, band.tube, 16, 128),
      new THREE.MeshPhysicalMaterial({
        color: band.color,
        roughness: 0.35,
        clearcoat: 0.6,
      }),
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = point.y;
    group.add(ring);
  }

  return group;
}

/* ---------- Daun selada bergelombang ---------- */
function createLeafGeometry(
  random: () => number,
  radius: number,
  ruffle: number,
) {
  const segments = 22;
  const geometry = new THREE.PlaneGeometry(2, 2, segments, segments);
  const position = geometry.attributes.position;
  const phase = random() * Math.PI * 2;

  for (let i = 0; i < position.count; i++) {
    const sx = position.getX(i);
    const sy = position.getY(i);
    /* petakan persegi menjadi lingkaran */
    const x = sx * Math.sqrt(1 - (sy * sy) / 2);
    const y = sy * Math.sqrt(1 - (sx * sx) / 2);
    const rho = Math.hypot(x, y);
    const theta = Math.atan2(y, x);
    const edgeWave = 1 + 0.1 * rho * rho * Math.sin(7 * theta + phase);
    const cup = 0.33 * rho * rho * radius;
    const crinkle =
      ruffle * Math.pow(rho, 3) * Math.sin(9 * theta + phase * 1.3) * radius;

    position.setXYZ(
      i,
      x * radius * edgeWave,
      y * radius * edgeWave * 0.78,
      cup + crinkle * 0.12,
    );
  }

  geometry.computeVertexNormals();
  return geometry;
}

function createLeaves(random: () => number) {
  const group = new THREE.Group();
  const dark = new THREE.Color(0x1f7a52);
  const light = new THREE.Color(0x8fd49a);
  const total = 20;
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  /* Alas hijau gelap supaya tidak ada celah di bawah daun. */
  const filler = new THREE.Mesh(
    new THREE.SphereGeometry(1.7, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshStandardMaterial({ color: 0x1f6f4d, roughness: 0.85 }),
  );
  filler.scale.y = 0.55;
  filler.position.y = 0.95;
  group.add(filler);

  for (let i = 0; i < total; i++) {
    const theta = i * goldenAngle;
    const rho = 0.15 + 1.4 * Math.sqrt((i + 0.5) / total);
    const x = Math.cos(theta) * rho;
    const z = Math.sin(theta) * rho;
    const y = moundHeight(x, z) - 0.2 + random() * 0.1;
    const height = THREE.MathUtils.clamp(
      (y - 1.0) / 0.7 + (random() - 0.5) * 0.35,
      0,
      1,
    );

    const leaf = new THREE.Mesh(
      createLeafGeometry(random, 0.68 + random() * 0.25, 0.5 + random() * 0.6),
      new THREE.MeshStandardMaterial({
        color: dark.clone().lerp(light, height),
        roughness: 0.55,
        side: THREE.DoubleSide,
      }),
    );
    leaf.rotation.x = -Math.PI / 2;

    const pivot = new THREE.Object3D();
    pivot.position.set(x, y, z);
    pivot.rotation.set(
      0.15 + 0.5 * (rho / 1.55) + random() * 0.2,
      Math.PI / 2 - theta + (random() - 0.5) * 0.5,
      (random() - 0.5) * 0.5,
      "YXZ",
    );
    pivot.add(leaf);
    group.add(pivot);
  }

  return group;
}

/* ---------- Topping ---------- */
function createTomato(radius: number) {
  const group = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.SphereGeometry(radius, 40, 28),
    new THREE.MeshPhysicalMaterial({
      color: 0xe8452c,
      roughness: 0.32,
      clearcoat: 0.7,
      clearcoatRoughness: 0.2,
    }),
  );
  body.scale.y = 0.92;
  group.add(body);

  const calyx = new THREE.Mesh(
    new THREE.SphereGeometry(radius * 0.36, 16, 8),
    new THREE.MeshStandardMaterial({ color: 0x2a8a5c, roughness: 0.6 }),
  );
  calyx.scale.y = 0.28;
  calyx.position.y = radius * 0.86;
  group.add(calyx);

  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.05, radius * 0.06, radius * 0.22, 8),
    new THREE.MeshStandardMaterial({ color: 0x2a8a5c, roughness: 0.6 }),
  );
  stem.position.y = radius * 0.98;
  group.add(stem);

  return group;
}

function createCucumber() {
  const group = new THREE.Group();
  const layers: Array<{ radius: number; height: number; color: number }> = [
    { radius: 0.36, height: 0.1, color: 0x3f9a5a },
    { radius: 0.31, height: 0.104, color: 0xcfe9b2 },
    { radius: 0.15, height: 0.108, color: 0xe6f4d2 },
  ];

  for (const layer of layers) {
    const mesh = new THREE.Mesh(
      new THREE.CylinderGeometry(layer.radius, layer.radius, layer.height, 48),
      new THREE.MeshStandardMaterial({ color: layer.color, roughness: 0.4 }),
    );
    group.add(mesh);
  }

  const seedGeometry = new THREE.SphereGeometry(0.035, 10, 8);
  const seedMaterial = new THREE.MeshStandardMaterial({
    color: 0xf3fadf,
    roughness: 0.4,
  });
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const seed = new THREE.Mesh(seedGeometry, seedMaterial);
    seed.scale.set(1, 0.5, 1.5);
    seed.position.set(Math.cos(angle) * 0.22, 0.052, Math.sin(angle) * 0.22);
    seed.rotation.y = -angle;
    group.add(seed);
  }

  return group;
}

function createAvocado() {
  const group = new THREE.Group();

  const skin = new THREE.Mesh(
    new THREE.SphereGeometry(0.4, 32, 24),
    new THREE.MeshStandardMaterial({ color: 0x2f6f3e, roughness: 0.5 }),
  );
  skin.scale.set(0.82, 1.1, 0.34);
  group.add(skin);

  const flesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.4, 32, 24),
    new THREE.MeshStandardMaterial({ color: 0xd9e68a, roughness: 0.35 }),
  );
  flesh.scale.set(0.72, 0.99, 0.34);
  flesh.position.z = 0.03;
  group.add(flesh);

  const pit = new THREE.Mesh(
    new THREE.SphereGeometry(0.19, 24, 18),
    new THREE.MeshPhysicalMaterial({
      color: 0x7a4a2a,
      roughness: 0.3,
      clearcoat: 0.6,
    }),
  );
  pit.position.set(0, -0.06, 0.12);
  group.add(pit);

  return group;
}

function createToppings() {
  const group = new THREE.Group();

  const place = (
    object: THREE.Object3D,
    x: number,
    z: number,
    lift: number,
    rotation: [number, number, number],
  ) => {
    object.position.set(x, moundHeight(x, z) + lift, z);
    object.rotation.set(rotation[0], rotation[1], rotation[2], "YXZ");
    group.add(object);
  };

  place(createTomato(0.38), 0.7, 0.55, 0.12, [0, 0, 0]);
  place(createTomato(0.3), -0.95, 0.35, 0.05, [0, 0, 0]);
  place(createTomato(0.3), 0.15, -0.75, 0.08, [0, 0, 0]);

  place(createCucumber(), -0.3, 0.8, 0.1, [1.05, 0.3, 0.15]);
  place(createCucumber(), 1.0, -0.2, 0.0, [0.9, -0.9, 0.25]);
  place(createCucumber(), -0.35, -0.35, 0.18, [0.75, 0.8, -0.2]);

  place(createAvocado(), -0.1, 1.15, 0.0, [0.95, 0.2, 0.1]);

  return group;
}

/* ---------- Bayangan kontak di lantai ---------- */
function createContactShadow() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext("2d");
  if (context) {
    const gradient = context.createRadialGradient(128, 128, 10, 128, 128, 128);
    gradient.addColorStop(0, "rgba(18, 63, 50, 0.42)");
    gradient.addColorStop(0.55, "rgba(18, 63, 50, 0.16)");
    gradient.addColorStop(1, "rgba(18, 63, 50, 0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(5.6, 5.6),
    new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
    }),
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = -0.01;

  return { mesh, texture };
}

export default function HeroScene({ onReady }: HeroSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      /* WebGL tidak tersedia: gambar SVG cadangan tetap tampil. */
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.toneMapping = THREE.NeutralToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.domElement.style.cssText =
      "display:block;width:100%;height:100%;";
    renderer.domElement.setAttribute("aria-hidden", "true");
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const pmrem = new THREE.PMREMGenerator(renderer);
    const environmentScene = new RoomEnvironment();
    const environmentTarget = pmrem.fromScene(environmentScene, 0.04);
    scene.environment = environmentTarget.texture;

    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.set(0, 4.0, 9.4);
    camera.lookAt(0, 1.0, 0);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
    keyLight.position.set(3, 6, 5);
    scene.add(keyLight);
    scene.add(new THREE.HemisphereLight(0xffffff, 0xcfe8d9, 0.5));

    const random = createRandom(2026);
    const salad = new THREE.Group();
    salad.add(createBowl());
    salad.add(createLeaves(random));
    salad.add(createToppings());
    scene.add(salad);

    const shadow = createContactShadow();
    scene.add(shadow.mesh);

    function resize() {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      if (prefersReducedMotion) renderer.render(scene, camera);
    }

    const pointer = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };
    function handlePointerMove(event: PointerEvent) {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
    }

    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    intersectionObserver.observe(container);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    let frame = 0;
    if (prefersReducedMotion) {
      salad.rotation.set(0.04, -0.6, 0);
      renderer.render(scene, camera);
    } else {
      window.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });
      renderer.setAnimationLoop((time: number) => {
        if (!isVisible) return;
        const seconds = time / 1000;
        eased.x += (pointer.x - eased.x) * 0.05;
        eased.y += (pointer.y - eased.y) * 0.05;
        salad.rotation.y = seconds * 0.28 + eased.x * 0.5;
        salad.rotation.x = eased.y * 0.1;
        salad.position.y = Math.sin(seconds * 1.2) * 0.05;
        renderer.render(scene, camera);
      });
    }

    frame = window.requestAnimationFrame(() => onReady?.());

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      renderer.setAnimationLoop(null);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      shadow.texture.dispose();
      environmentTarget.dispose();
      if (
        "dispose" in environmentScene &&
        typeof environmentScene.dispose === "function"
      ) {
        environmentScene.dispose();
      }
      pmrem.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [onReady]);

  return <div className="size-full" ref={containerRef} />;
}
