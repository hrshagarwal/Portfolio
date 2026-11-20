"use client";

import { useEffect, useId, useRef, useState } from "react";

/*
 * ProxZero's face matching, drawn in the space it actually happens in.
 *
 * Real embeddings live in 128 dimensions; this is a 3-D projection of that
 * space. A query face is compared against every enrolled embedding and the
 * nearest one wins only if BOTH gates pass:
 *   1. distance <= threshold          (the sphere below)
 *   2. runnerUp - nearest >= MARGIN   (confidence margin)
 *
 * Pushing the threshold out to dlib's 0.6 default swallows a look-alike,
 * which is the exact failure this project was built to avoid.
 */

const MARGIN = 0.08;
const DEFAULT_THRESHOLD = 0.42;
const AXIS_MAX = 0.8;

// The two competing candidates, placed deliberately close together.
const NEAREST = { name: "Ananya S.", distance: 0.38, theta: 0.6, phi: 1.15 };
const RUNNER_UP = { name: "Anjali S.", distance: 0.44, theta: 1.9, phi: 1.45 };

// Deterministic filler roster so server and client render identically.
function buildRoster() {
  const pts = [];
  let seed = 7;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };
  for (let i = 0; i < 34; i++) {
    pts.push({
      distance: 0.5 + rand() * 0.42,
      theta: rand() * Math.PI * 2,
      phi: Math.acos(2 * rand() - 1),
    });
  }
  return pts;
}
const ROSTER = buildRoster();

// Spherical -> cartesian, so points sit on a real shell around the query.
function toCartesian({ distance, theta, phi }) {
  return {
    x: distance * Math.sin(phi) * Math.cos(theta),
    y: distance * Math.cos(phi),
    z: distance * Math.sin(phi) * Math.sin(theta),
  };
}

const SIZE = 260;
const CENTER = SIZE / 2;
const SCALE = 112;

// Rotate about Y, then tilt slightly about X for a three-quarter view.
function project(p, yaw) {
  const cosY = Math.cos(yaw);
  const sinY = Math.sin(yaw);
  const x1 = p.x * cosY - p.z * sinY;
  const z1 = p.x * sinY + p.z * cosY;

  const tilt = 0.42;
  const y1 = p.y * Math.cos(tilt) - z1 * Math.sin(tilt);
  const z2 = p.y * Math.sin(tilt) + z1 * Math.cos(tilt);

  // Weak perspective: nearer points (larger z2) grow slightly.
  const depth = 1 / (1 + (0.7 - z2) * 0.22);
  return {
    sx: CENTER + x1 * SCALE * depth,
    sy: CENTER - y1 * SCALE * depth,
    depth,
    z: z2,
  };
}

export default function ThresholdDemo() {
  const [threshold, setThreshold] = useState(DEFAULT_THRESHOLD);
  const [yaw, setYaw] = useState(0.4);
  const [spin, setSpin] = useState(true);
  const sliderId = useId();
  const frame = useRef(null);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !spin) return;

    let last = performance.now();
    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      setYaw((y) => y + dt * 0.28);
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [spin]);

  const withinThreshold = NEAREST.distance <= threshold;
  const gap = RUNNER_UP.distance - NEAREST.distance;
  // The margin only matters once the runner-up is also acceptable — that is
  // when the two candidates genuinely compete for the same identity.
  const runnerUpCompetes = RUNNER_UP.distance <= threshold;
  const marginPasses = !runnerUpCompetes || gap >= MARGIN;

  let verdict;
  if (!withinThreshold) {
    verdict = {
      label: "No match — nobody marked present",
      detail: `Nearest embedding sits at ${NEAREST.distance.toFixed(
        2
      )}, outside the ${threshold.toFixed(2)} radius.`,
      tone: "neutral",
    };
  } else if (!marginPasses) {
    verdict = {
      label: "Ambiguous — abstained",
      detail: `Two students fall inside the sphere and are only ${gap.toFixed(
        2
      )} apart, under the ${MARGIN} margin. ProxZero refuses to guess.`,
      tone: "warn",
    };
  } else {
    verdict = {
      label: `Present — ${NEAREST.name}`,
      detail: `Nearest at ${NEAREST.distance.toFixed(
        2
      )}, clear of the runner-up by ${gap.toFixed(2)}.`,
      tone: "ok",
    };
  }

  const toneColor = {
    ok: "var(--sage-green)",
    warn: "var(--gold)",
    neutral: "var(--muted-foreground)",
  }[verdict.tone];

  // Painter's algorithm — far points drawn first so near ones overlap them.
  const candidates = [
    { ...NEAREST, role: "nearest" },
    { ...RUNNER_UP, role: "runner" },
  ];
  const drawn = [
    ...ROSTER.map((p) => ({ ...p, role: "other" })),
    ...candidates,
  ]
    .map((p) => ({ ...p, ...project(toCartesian(p), yaw) }))
    .sort((a, b) => a.z - b.z);

  const sphereR = (threshold / AXIS_MAX) * SCALE;

  return (
    <div className="w-full h-full flex flex-col justify-center gap-4 p-7 md:p-9 bg-secondary/40">
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary mb-1.5">
          128-d embedding space · try it
        </p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Every enrolled face is a point. The sphere is the distance ceiling —
          widen it to dlib&apos;s default and watch a look-alike fall inside.
        </p>
      </div>

      {/* ── Projected point cloud ─────────────────────────── */}
      <div className="flex justify-center">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="w-full max-w-[260px] h-auto cursor-grab active:cursor-grabbing touch-none"
          role="img"
          aria-label={`3-D projection of face embeddings. ${verdict.label}.`}
          onPointerDown={(e) => {
            setSpin(false);
            e.currentTarget.setPointerCapture(e.pointerId);
          }}
          onPointerUp={() => setSpin(true)}
          onPointerMove={(e) => {
            if (e.buttons !== 1) return;
            setYaw((y) => y + e.movementX * 0.012);
          }}
        >
          <defs>
            <radialGradient id={`${sliderId}-shell`} cx="38%" cy="32%">
              <stop
                offset="0%"
                stopColor="var(--primary)"
                stopOpacity="0.22"
              />
              <stop
                offset="70%"
                stopColor="var(--primary)"
                stopOpacity="0.07"
              />
              <stop
                offset="100%"
                stopColor="var(--primary)"
                stopOpacity="0.02"
              />
            </radialGradient>
          </defs>

          {/* Equator ring, squashed by the same tilt as the points */}
          <ellipse
            cx={CENTER}
            cy={CENTER}
            rx={sphereR}
            ry={sphereR * 0.41}
            fill="none"
            stroke="var(--primary)"
            strokeOpacity="0.3"
            strokeWidth="1"
            strokeDasharray="3 4"
          />

          {/* Threshold shell */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={sphereR}
            fill={`url(#${sliderId}-shell)`}
            stroke="var(--primary)"
            strokeOpacity="0.42"
            strokeWidth="1.25"
          />

          {drawn.map((p, i) => {
            const inside = p.distance <= threshold;
            const isNearest = p.role === "nearest";
            const isRunner = p.role === "runner";
            const named = isNearest || isRunner;

            let fill = "var(--muted-foreground)";
            if (isNearest) fill = "var(--sage-green)";
            else if (isRunner) fill = "var(--gold)";

            const r = (named ? 5.2 : 2.9) * p.depth;
            const opacity = named
              ? 1
              : (inside ? 0.5 : 0.26) * (0.55 + p.depth * 0.5);

            return (
              <g key={`${p.role}-${i}`}>
                <circle
                  cx={p.sx}
                  cy={p.sy}
                  r={r}
                  fill={named && !inside ? "var(--background)" : fill}
                  fillOpacity={opacity}
                  stroke={named ? fill : "none"}
                  strokeWidth={named ? 1.6 : 0}
                />
                {named && (
                  <line
                    x1={CENTER}
                    y1={CENTER}
                    x2={p.sx}
                    y2={p.sy}
                    stroke={fill}
                    strokeOpacity="0.4"
                    strokeWidth="1"
                    strokeDasharray="2 3"
                  />
                )}
              </g>
            );
          })}

          {/* Query face at the origin */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r="4"
            fill="var(--foreground)"
          />
          <circle
            cx={CENTER}
            cy={CENTER}
            r="8"
            fill="none"
            stroke="var(--foreground)"
            strokeOpacity="0.3"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-4 flex-wrap font-mono text-[10px] text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-foreground" /> query
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-sage-green" /> Ananya · 0.38
        </span>
        <span className="flex items-center gap-1.5">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "var(--gold)" }}
          />{" "}
          Anjali · 0.44
        </span>
      </div>

      {/* ── Slider ────────────────────────────────────────── */}
      <div>
        <div className="flex items-baseline justify-between mb-2">
          <label
            htmlFor={sliderId}
            className="font-mono text-[11px] text-muted-foreground"
          >
            resemblance_threshold
          </label>
          <span className="font-mono text-sm font-semibold text-primary tabular-nums">
            {threshold.toFixed(2)}
          </span>
        </div>

        <input
          id={sliderId}
          type="range"
          min={0.2}
          max={0.8}
          step={0.01}
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value))}
          aria-describedby={`${sliderId}-verdict`}
          className="w-full accent-[var(--primary)] cursor-pointer"
        />

        <div className="flex justify-between mt-1.5">
          <button
            type="button"
            onClick={() => setThreshold(DEFAULT_THRESHOLD)}
            className="font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
          >
            0.42 — shipped
          </button>
          <button
            type="button"
            onClick={() => setThreshold(0.6)}
            className="font-mono text-[10px] text-muted-foreground hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
          >
            0.60 — dlib default
          </button>
        </div>
      </div>

      {/* ── Verdict ───────────────────────────────────────── */}
      <div
        id={`${sliderId}-verdict`}
        aria-live="polite"
        className="rounded-lg border bg-black/30 px-4 py-3"
        style={{
          borderColor: `color-mix(in srgb, ${toneColor} 34%, transparent)`,
        }}
      >
        <div className="flex items-center gap-2 mb-1">
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: toneColor }}
          />
          <span
            className="font-mono text-xs font-semibold"
            style={{ color: toneColor }}
          >
            {verdict.label}
          </span>
        </div>
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          {verdict.detail}
        </p>
      </div>

      <p className="text-[11px] text-muted-foreground/80 leading-relaxed border-t border-border pt-3">
        <span className="font-semibold text-foreground/70">
          Why it ships at 0.42:
        </span>{" "}
        a false absence is a conversation; a false presence is a broken system.
      </p>
    </div>
  );
}
