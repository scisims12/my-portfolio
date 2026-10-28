import { memo, useRef, useState } from "react";
import "./glass-code.css";

function ScrollingImages() {
  const sceneRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const resetTilt = () => {
    sceneRef.current?.style.setProperty("--pointer-x", "0deg");
    sceneRef.current?.style.setProperty("--pointer-y", "0deg");
  };

  const tiltScene = (event) => {
    if (paused || event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    sceneRef.current?.style.setProperty("--pointer-x", `${-y * 10}deg`);
    sceneRef.current?.style.setProperty("--pointer-y", `${x * 14}deg`);
  };

  return (
    <div className="scrolling-images-container glass-hero">
      <div
        ref={sceneRef}
        className="glass-scene"
        data-paused={paused}
        onPointerMove={tiltScene}
        onPointerLeave={resetTilt}
      >
        <div className="glass-halo" aria-hidden="true" />
        <div className="glass-scene-tilt" aria-hidden="true">
          <div className="glass-orbit glass-orbit-back"><i /></div>
          <div className="glass-art-float">
            <img
              className="glass-code-art"
              src="/glass-code-hero.webp"
              alt=""
              width="1254"
              height="1254"
              fetchPriority="high"
              decoding="async"
              draggable="false"
            />
          </div>
          <div className="glass-orbit glass-orbit-front"><i /></div>
          {["one", "two", "three"].map((cube) => (
            <div className={`glass-cube-position glass-cube-${cube}`} key={cube}>
              <div className="glass-cube">
                {["front", "back", "left", "right", "top", "bottom"].map((face) => (
                  <span className={`glass-cube-face glass-face-${face}`} key={face} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          className="glass-motion-control"
          aria-pressed={paused}
          aria-label="Pause decorative 3D animation"
          onClick={() => {
            resetTilt();
            setPaused((current) => !current);
          }}
        >
          {paused ? "Resume motion" : "Pause motion"}
        </button>
      </div>
    </div>
  );
}

export default memo(ScrollingImages);
