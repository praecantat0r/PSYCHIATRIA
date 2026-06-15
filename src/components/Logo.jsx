/* CUV monogram — organic orange seal, serif letters */
export default function Logo({ size = 42 }) {
  return (
    <svg
      className="header__logo"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role="img"
      aria-label="Centrum u Velických"
    >
      <path
        d="M24 2.5 C 34 1.5, 45 8, 45.7 20 C 46.4 31.5, 39.5 44.5, 26 45.7 C 13.5 46.8, 3.4 39, 2.4 26.5 C 1.4 14, 13 3.5, 24 2.5 Z"
        fill="#ffb84d"
      />
      <text
        x="24"
        y="29.5"
        textAnchor="middle"
        fontFamily="Fraunces, Georgia, serif"
        fontWeight="500"
        fontSize="13.5"
        letterSpacing="0.4"
        fill="#35190f"
      >
        CUV
      </text>
      <path
        d="M33.5 9.2 C 31.6 11.2, 30.5 12.7, 30.5 14.2 a 3 3 0 0 0 6 0 C 36.5 12.7, 35.4 11.2, 33.5 9.2 Z"
        fill="#35190f"
        opacity="0.4"
      />
    </svg>
  )
}
