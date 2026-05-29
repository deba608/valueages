import { ImageResponse } from "next/og";

export const alt = "Valueages — India Enterprise GTM Advisory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const TEAL = "#109B82";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #f8faf9 0%, #edf7f4 52%, #f8faf9 100%)",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 22px",
              borderRadius: 999,
              border: `1px solid ${TEAL}40`,
              background: `${TEAL}14`,
              color: TEAL,
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 1.4,
            }}
          >
            <div
              style={{
                width: 9,
                height: 9,
                borderRadius: 999,
                background: TEAL,
              }}
            />
            UNIFYAPPS INDIA PARTNER
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 24,
            }}
          >
            <div style={{ width: 40, height: 4, background: TEAL }} />
            <div
              style={{
                color: TEAL,
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: 2.5,
              }}
            >
              INDIA ENTERPRISE GTM ADVISORY
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Georgia, serif",
              fontSize: 78,
              fontWeight: 800,
              color: "#0f172a",
              lineHeight: 1.05,
            }}
          >
            <span>Expand Into India</span>
            <span>with Confidence</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 26,
              fontWeight: 500,
              color: "#475569",
            }}
          >
            Direct CXO access · BFSI, GCC & GSI networks · Fractional sales
            leadership
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              fontSize: 26,
              fontWeight: 800,
              color: "#0f172a",
              letterSpacing: 0.6,
            }}
          >
            VALUEAGES
          </div>
          <div style={{ width: 1, height: 28, background: "#cbd5e1" }} />
          <div style={{ fontSize: 19, fontWeight: 500, color: "#64748b" }}>
            valueages.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
