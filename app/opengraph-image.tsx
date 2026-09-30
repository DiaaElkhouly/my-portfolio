import { ImageResponse } from "next/og";

export const alt = "Diaa Elkhouly - Freelance Full-Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 76px",
          backgroundColor: "#0a0a0f",
          color: "#f0f0f5",
          border: "2px solid #22d3ee",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 23, color: "#22d3ee" }}>
            PORTFOLIO / EGYPT
          </div>
          <div
            style={{
              width: 68,
              height: 68,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 16,
              backgroundColor: "#22d3ee",
              color: "#0a0a0f",
              fontSize: 27,
              fontWeight: 700,
            }}
          >
            DK
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 700 }}>Diaa Elkhouly</div>
          <div style={{ marginTop: 16, fontSize: 32, color: "#22d3ee" }}>
            Freelance Full-Stack Web Developer
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 20,
            borderTop: "1px solid #34343c",
            fontSize: 20,
            color: "#a0a0b0",
          }}
        >
          <div>React | Next.js | TypeScript | Laravel | Prisma</div>
          <div>diaaelkhouly.vercel.app</div>
        </div>
      </div>
    ),
    size,
  );
}