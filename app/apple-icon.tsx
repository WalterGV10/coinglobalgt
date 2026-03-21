import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Coin Global Guatemala Apple Icon";
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#060a14",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="6" r="3" fill="#f0d078" />
          <circle cx="6" cy="24" r="3" fill="#f0d078" />
          <circle cx="26" cy="24" r="3" fill="#f0d078" />
          <circle cx="16" cy="16" r="2.5" fill="#f0d078" />
          <line
            x1="16"
            y1="9"
            x2="16"
            y2="13.5"
            stroke="#f0d078"
            strokeWidth="1.2"
          />
          <line
            x1="8.5"
            y1="22.5"
            x2="13.5"
            y2="17"
            stroke="#f0d078"
            strokeWidth="1.2"
          />
          <line
            x1="23.5"
            y1="22.5"
            x2="18.5"
            y2="17"
            stroke="#f0d078"
            strokeWidth="1.2"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
