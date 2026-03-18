"use client";

import {useEffect, useRef} from "react";
import {easePolyInOut} from "d3-ease";
import s from "./P5Background.module.css";

const VERTEX_NUM = 3;
const PATH_NUM = 3;

export default function P5Background() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let instance: import("p5").default | null = null;

    import("p5").then((mod) => {
      const p5 = mod.default;

      const sketch = (p: import("p5").default) => {
        const trailPaths: number[][][] = [];

        p.setup = () => {
          const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
          canvas.style("display", "block");

          for (let i = 0; i < PATH_NUM; i++) {
            const path: number[][] = [];
            const points: number[][] = [];
            for (let pt = 0; pt < VERTEX_NUM; pt++) {
              points.push([p.random(0, p.width), p.random(0, p.height)]);
            }

            const handles: number[][] = [];
            for (let h = 0; h < VERTEX_NUM; h++) {
              const theta = p.random(0, p.PI);
              const r = p.random(100, 200);
              handles.push([
                r * p.cos(theta),
                r * p.sin(theta),
                -r * p.cos(theta),
                -r * p.sin(theta),
              ]);
            }

            for (let pi = 0; pi < VERTEX_NUM; pi++) {
              const x = points[pi][0];
              const y = points[pi][1];
              const hx = x + handles[pi][0];
              const hy = y + handles[pi][1];
              const nx = points[(pi + 1) % VERTEX_NUM][0];
              const ny = points[(pi + 1) % VERTEX_NUM][1];
              const nhx = nx + handles[(pi + 1) % VERTEX_NUM][2];
              const nhy = ny + handles[(pi + 1) % VERTEX_NUM][3];
              path.push([x, y, hx, hy, nhx, nhy, nx, ny]);
            }

            trailPaths.push(path);
          }

          p.noFill();
          p.stroke(28, 151, 94);
          p.strokeWeight(50);
          p.strokeJoin(p.ROUND);
          p.strokeCap(p.PROJECT);
        };

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
        };

        function getPointOnClosePath(closePath: number[][], t: number) {
          t = t % 1;
          if (t < 0) t += 1;
          const scaledT = t * VERTEX_NUM;
          const index = p.floor(scaledT);
          const targetPath = closePath[index % closePath.length];
          const localT = scaledT - index;
          const x = p.bezierPoint(
            targetPath[0],
            targetPath[2],
            targetPath[4],
            targetPath[6],
            localT,
          );
          const y = p.bezierPoint(
            targetPath[1],
            targetPath[3],
            targetPath[5],
            targetPath[7],
            localT,
          );
          return {x, y};
        }

        p.draw = () => {
          p.clear();
          p.blendMode(p.HARD_LIGHT);
          const startT = easePolyInOut((p.frameCount / 100) % 1);
          const range = 0.3;
          const detailness = 50;

          for (const closePath of trailPaths) {
            p.beginShape();
            for (let i = 0; i < detailness; i++) {
              const pt = getPointOnClosePath(
                closePath,
                startT + (range / detailness) * i,
              );
              p.vertex(pt.x, pt.y);
            }
            p.endShape();
          }
        };
      };

      instance = new p5(sketch, container);
    });

    return () => {
      instance?.remove();
    };
  }, []);

  return <div ref={containerRef} className={s.canvas} />;
}
