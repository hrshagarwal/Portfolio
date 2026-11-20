"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/*
 * PodShip's real request path, drawn as a live pipeline:
 *   repo URL -> API server -> ECS Fargate build (Docker) -> S3 -> reverse proxy -> subdomain
 * with the build-log side channel: Fargate -> Redis Pub/Sub -> Socket.IO -> browser.
 * "Watch demo" swaps the diagram for the YouTube walkthrough.
 */

const C = {
  lime: "#D9FF43",
  teal: "#2EE6D6",
  pink: "#FF5FA2",
  amber: "#FFB547",
  violet: "#A78BFA",
  blue: "#4DA3FF",
};

const NODES = [
  { id: "repo", x: 20, y: 50, label: "GitHub repo", sub: "URL in", color: C.lime },
  { id: "api", x: 215, y: 50, label: "API server", sub: "Express", color: C.blue },
  { id: "ecs", x: 410, y: 50, label: "ECS Fargate", sub: "Docker build", color: C.amber },
  { id: "s3", x: 410, y: 190, label: "Amazon S3", sub: "build output", color: C.teal },
  { id: "proxy", x: 215, y: 190, label: "Reverse proxy", sub: "streams from S3", color: C.violet },
  { id: "site", x: 20, y: 190, label: "app.podship", sub: "own subdomain", color: C.lime },
  { id: "redis", x: 410, y: 320, label: "Redis Pub/Sub", sub: "per project", color: C.pink },
  { id: "io", x: 215, y: 320, label: "Socket.IO", sub: "room per project", color: C.pink },
  { id: "you", x: 20, y: 320, label: "Browser", sub: "live logs", color: C.pink },
];

const W = 170;
const H = 58;

const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));

// Edge path between two nodes (horizontal or vertical neighbours).
function edge(a, b) {
  const A = byId[a];
  const B = byId[b];
  // Log channel skips past S3: out the right side of ECS, down, into Redis.
  if (a === "ecs" && b === "redis") {
    const x = A.x + W + 12;
    return `M${A.x + W} ${A.y + H / 2} L${x} ${A.y + H / 2} L${x} ${B.y + H / 2} L${B.x + W} ${B.y + H / 2}`;
  }
  if (A.y === B.y) {
    const y = A.y + H / 2;
    return A.x < B.x
      ? `M${A.x + W} ${y} L${B.x} ${y}`
      : `M${A.x} ${y} L${B.x + W} ${y}`;
  }
  const x = A.x + W / 2;
  return A.y < B.y
    ? `M${x} ${A.y + H} L${x} ${B.y}`
    : `M${x} ${A.y} L${x} ${B.y + H}`;
}

const EDGES = [
  { from: "repo", to: "api", color: C.lime },
  { from: "api", to: "ecs", color: C.blue },
  { from: "ecs", to: "s3", color: C.amber },
  { from: "s3", to: "proxy", color: C.teal },
  { from: "proxy", to: "site", color: C.violet },
  { from: "ecs", to: "redis", color: C.pink, dashed: true },
  { from: "redis", to: "io", color: C.pink, dashed: true },
  { from: "io", to: "you", color: C.pink, dashed: true },
];

export default function PodShipArch({ project }) {
  const [playing, setPlaying] = useState(false);
  const videoId = project?.youtube;

  if (playing && videoId) {
    return (
      <div className="relative w-full h-full min-h-[300px] lg:min-h-[420px] bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title="PodShip demo video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-[420px] flex flex-col justify-center gap-4 p-5 md:p-7">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-sage-green">
        Request path · live
      </p>

      <svg
        viewBox="0 0 600 400"
        className="w-full h-auto"
        role="img"
        aria-label="PodShip architecture: GitHub repo to API server to ECS Fargate build, output to S3, served by a reverse proxy on a subdomain; build logs flow through Redis Pub/Sub and Socket.IO to the browser."
      >
        <defs>
          <filter id="ps-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* lane labels */}
        <text x="20" y="34" fill="#95A0BD" fontSize="11" fontFamily="var(--font-code)">
          build
        </text>
        <text x="20" y="174" fill="#95A0BD" fontSize="11" fontFamily="var(--font-code)">
          serve
        </text>
        <text x="20" y="304" fill="#95A0BD" fontSize="11" fontFamily="var(--font-code)">
          logs
        </text>

        {EDGES.map((e) => (
          <g key={`${e.from}-${e.to}`}>
            <path d={edge(e.from, e.to)} stroke={e.color} strokeOpacity="0.18" strokeWidth="6" fill="none" />
            <path
              d={edge(e.from, e.to)}
              stroke={e.color}
              strokeWidth="2"
              fill="none"
              className="flow-line"
              filter="url(#ps-glow)"
              style={e.dashed ? { strokeDasharray: "2 7" } : undefined}
            />
          </g>
        ))}

        {NODES.map((n) => (
          <g key={n.id}>
            <rect
              x={n.x}
              y={n.y}
              width={W}
              height={H}
              rx="10"
              fill={n.color}
              fillOpacity="0.08"
              stroke={n.color}
              strokeOpacity="0.75"
              strokeWidth="1.3"
            />
            <circle cx={n.x + 14} cy={n.y + 20} r="3.5" fill={n.color} filter="url(#ps-glow)" />
            <text
              x={n.x + 26}
              y={n.y + 24}
              fill="#E8ECF7"
              fontSize="14"
              fontWeight="600"
              fontFamily="var(--font-body)"
            >
              {n.label}
            </text>
            <text
              x={n.x + 26}
              y={n.y + 43}
              fill={n.color}
              fontSize="11"
              fontFamily="var(--font-code)"
            >
              {n.sub}
            </text>
          </g>
        ))}
      </svg>

      {videoId && (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="self-start btn-brut bg-lime text-ink"
        >
          <Play className="w-4 h-4 fill-current" />
          Watch demo video
        </button>
      )}
    </div>
  );
}
