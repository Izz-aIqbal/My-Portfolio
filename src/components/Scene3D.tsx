"use client";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Scene3D() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shapes: Element[] = Array.from(
      sceneRef.current?.querySelectorAll(".shape, .glow") ?? []
    );

    const triggers = shapes.map((el, i) => {
      return gsap.to(el, {
        y: () => (i % 2 === 0 ? -60 : 60),
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
        ease: "none",
        defaults: { overwrite: "auto" },
      });
    });

    return () => {
      triggers.forEach((t) => {
        if (t.scrollTrigger) t.scrollTrigger.kill();
        t.kill();
      });
    };
  }, []);

  return (
    <div className="scene3d" ref={sceneRef} aria-hidden="true">
      <div
        className="glow"
        style={{
          top: "-8%",
          left: "0%",
          width: "420px",
          height: "420px",
          background:
            "radial-gradient(circle, rgba(217,119,6,0.4), transparent 70%)",
        }}
      />
      <div
        className="glow"
        style={{
          top: "50%",
          left: "70%",
          width: "520px",
          height: "520px",
          background:
            "radial-gradient(circle, rgba(91,110,88,0.35), transparent 70%)",
          animationDuration: "28s",
        }}
      />
      <div
        className="glow"
        style={{
          top: "82%",
          left: "10%",
          width: "360px",
          height: "360px",
          background:
            "radial-gradient(circle, rgba(217,119,6,0.3), transparent 70%)",
          animationDuration: "19s",
        }}
      />

      <div className="shape" style={{ top: "6%", left: "4%" }}>
        <div className="cube">
          <div className="face f1"></div>
          <div className="face f2"></div>
          <div className="face f3"></div>
          <div className="face f4"></div>
          <div className="face f5"></div>
          <div className="face f6"></div>
        </div>
      </div>

      <div className="shape" style={{ top: "58%", left: "84%" }}>
        <div className="ring3d" style={{ width: "180px", height: "180px" }} />
      </div>

      <div className="shape" style={{ top: "16%", left: "76%" }}>
        <div className="cube">
          <div className="face f1"></div>
          <div className="face f2"></div>
          <div className="face f3"></div>
          <div className="face f4"></div>
          <div className="face f5"></div>
          <div className="face f6"></div>
        </div>
      </div>

      <div className="shape" style={{ top: "76%", left: "8%" }}>
        <div className="ring3d" style={{ width: "130px", height: "130px" }} />
      </div>

      <div className="shape" style={{ top: "38%", left: "44%", opacity: 0.14 }}>
        <div className="ring3d" style={{ width: "170px", height: "170px" }} />
      </div>

      <div className="shape" style={{ top: "34%", left: "20%" }}>
        <div className="ring3d" style={{ width: "90px", height: "90px" }} />
      </div>

      <div className="shape" style={{ top: "4%", left: "60%" }}>
        <div className="ring3d" style={{ width: "110px", height: "110px" }} />
      </div>

      <div className="shape" style={{ top: "70%", left: "36%", transform: "scale(0.6)" }}>
        <div className="tri"></div>
      </div>
    </div>
  );
}
