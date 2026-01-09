const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={220} height={56}>
    <defs>
      <linearGradient id="a" x1="0%" x2="100%" y1="0%" y2="0%">
        <stop offset="0%" stopColor="#99e39e" />
        <stop offset="50%" stopColor="#2ebe7b" />
        <stop offset="100%" stopColor="#76da44" />
      </linearGradient>
    </defs>
    <path fill="url(#a)" d="m28 8 14 8v24l-14 8-14-8V16z" />
    <rect width={14} height={3.5} x={21} y={23} fill="#fff" rx={1.8} />
    <rect
      width={20}
      height={3.5}
      x={18}
      y={28}
      fill="#fff"
      opacity={0.9}
      rx={1.8}
    />
    <rect
      width={10}
      height={3.5}
      x={23}
      y={33}
      fill="#fff"
      opacity={0.8}
      rx={1.8}
    />
    <text
      x={54}
      y={35}
      fill="#FFFFFF"
      fontFamily="Inter, SF Pro Display, system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
      fontSize={22}
      fontWeight={600}
    >
      {"\n    Coin"}
      <tspan fill="url(#a)" fontStyle="italic">
        {"Stream"}
      </tspan>
    </text>
  </svg>
)

export default Logo
