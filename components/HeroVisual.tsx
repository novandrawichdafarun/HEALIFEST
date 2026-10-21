"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useState } from "react";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
});

export default function HeroVisual() {
  const [isSceneReady, setIsSceneReady] = useState(false);
  const handleReady = useCallback(() => setIsSceneReady(true), []);

  return (
    <div className="relative z-1 aspect-square w-[clamp(16rem,28vw,24rem)] max-[760px]:w-72 max-[480px]:w-60">
      {/* Gambar cadangan: tampil saat 3D dimuat atau WebGL tidak tersedia. */}
      <Image
        alt=""
        className={`hero-float absolute inset-0 size-full transition-opacity duration-500 ${
          isSceneReady ? "opacity-0" : "opacity-100"
        }`}
        height={400}
        loading="eager"
        src="/images/hero-salad-3d.svg"
        unoptimized
        width={400}
      />
      <div
        className={`absolute -inset-4 transition-opacity duration-500 ${
          isSceneReady ? "opacity-100" : "opacity-0"
        }`}
      >
        <HeroScene onReady={handleReady} />
      </div>
    </div>
  );
}
