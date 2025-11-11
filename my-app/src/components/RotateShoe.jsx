import dynamic from "next/dynamic";
import { Suspense, useEffect, useMemo, useState, useCallback } from "react";

// Canvas and drei must be client-side
const Canvas = dynamic(() => import("@react-three/fiber").then(m => m.Canvas), { ssr: false });
const OrbitControls = dynamic(() => import("@react-three/drei").then(m => m.OrbitControls), { ssr: false });
const Environment = dynamic(() => import("@react-three/drei").then(m => m.Environment), { ssr: false });
const useGLTF = (await import("@react-three/drei")).useGLTF;

function ShoeModel({ url = "/models/shoe.glb" }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function Sprite360({ framesBasePath = "/frames", frames = 36 }) {
  const [index, setIndex] = useState(1);
  const [isDragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const padded = useCallback((i) => String(i).padStart(2, "0"), []);
  const src = useMemo(() => `${framesBasePath}/frame_${padded(index)}.webp`, [framesBasePath, index, padded]);

  const onDown = (e) => {
    setDragging(true);
    setStartX("touches" in e ? e.touches[0].clientX : e.clientX);
  };
  const onMove = (e) => {
    if (!isDragging) return;
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const delta = x - startX;
    if (Math.abs(delta) > 8) {
      const step = delta > 0 ? -1 : 1;
      setIndex((prev) => {
        let next = prev + step;
        if (next < 1) next = frames;
        if (next > frames) next = 1;
        return next;
      });
      setStartX(x);
    }
  };
  const onUp = () => setDragging(false);

  return (
    <div
      className="relative mx-auto mt-10 flex h-[420px] w-full max-w-4xl select-none items-center justify-center"
      onMouseDown={onDown}
      onMouseMove={onMove}
      onMouseUp={onUp}
      onMouseLeave={onUp}
      onTouchStart={onDown}
      onTouchMove={onMove}
      onTouchEnd={onUp}
    >
      <img src={src} alt="360 sprite frame" className="h-full w-auto object-contain" />
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/5 px-3 py-1 text-xs text-black/60">
        Drag to rotate
      </div>
    </div>
  );
}

export default function RotateShoe() {
  const [hasModel, setHasModel] = useState(false);
  useEffect(() => {
    let cancelled = false;
    fetch("/models/shoe.glb", { method: "HEAD" })
      .then((r) => {
        if (!cancelled) setHasModel(r.ok);
      })
      .catch(() => {
        if (!cancelled) setHasModel(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="mx-auto my-20 w-full max-w-7xl px-6 md:px-12">
      <div className="overflow-hidden rounded-2xl bg-white px-6 py-12 md:px-12 md:py-16">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-brand-gray">360‑Degree</h2>
          <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-brand-red" />
        </div>
        {hasModel ? (
          <>
            <div className="mt-10 h-[420px] w-full">
              <Canvas camera={{ position: [3, 2, 4], fov: 50 }}>
                <ambientLight intensity={0.6} />
                <Suspense fallback={null}>
                  <Environment preset="city" />
                  <group position={[0, -0.6, 0]}>
                    <ShoeModel />
                  </group>
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
              </Canvas>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500">Use mouse to rotate</p>
          </>
        ) : (
          <>
            <Sprite360 framesBasePath="/frames" frames={36} />
            <p className="mt-2 text-center text-xs text-gray-500">
              Tip: add 36 images at public/frames/frame_01.webp … frame_36.webp
            </p>
          </>
        )}
      </div>
    </section>
  );
}

// Preload hook if model exists; ignored if not present
// Suppress error if GLB not yet provided
try {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  useGLTF?.preload?.("/models/shoe.glb");
} catch {}

