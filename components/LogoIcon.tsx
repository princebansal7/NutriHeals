export default function LogoIcon({
  className = 'w-8 h-8',
}: {
  className?: string
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 220"
      className={className}
      fill="none"
    >
      {/* TOP OUTER ARC */}
      <path
        d="M42 122 C46 30 96 4 170 34"
        stroke="#145238"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* INNER ARC */}
      <path
        d="M54 122 C58 44 100 14 145 46"
        stroke="#145238"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* MEDICAL CROSS */}
      <rect x="102" y="46" width="16" height="42" rx="1" fill="#B3872D" />
      <rect x="89" y="59" width="42" height="16" rx="1" fill="#B3872D" />

      {/* LEFT BACK LEAF */}
      <path
        d="
          M18 126
          C24 98 48 84 80 92
          C62 114 60 144 78 170
          C44 168 22 150 18 126
          Z
        "
        fill="#145238"
      />

      {/* BOWL — perfect ellipse arc, rx=60 ry=84, magic number 0.5523 */}
      {/* Left:  (76,106) CP(76,152) CP(103,190) (136,190) */}
      {/* Right: (136,190) CP(169,190) CP(196,152) (196,106) — exact mirror */}
      <path
        d="M 76 106 C 76 152 103 190 136 190 C 169 190 196 152 196 106 Z"
        fill="#145238"
      />

      {/* WHITE RIM */}
      <ellipse
        cx="136"
        cy="106"
        rx="62"
        ry="14"
        fill="white"
      />

      {/* INNER OPENING */}
      <ellipse
        cx="136"
        cy="109"
        rx="46"
        ry="9"
        fill="#145238"
      />

      {/* PESTLE */}
      <line
        x1="166"
        y1="60"
        x2="154"
        y2="110"
        stroke="#145238"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* PESTLE BALL */}
      <circle cx="170" cy="52" r="12" fill="#145238" />

      {/* BOTTOM SWOOSH — drawn before front leaves so leaves appear on top */}
      <path
        d="M34 172 C78 202 154 202 202 164"
        stroke="#145238"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* LEFT FRONT LEAF — slanted left, drawn in front of bowl */}
      <path
        d="
          M86 178
          C58 154 58 116 84 90
          C100 74 122 82 132 108
          C142 134 128 166 106 182
          C98 186 90 184 86 178
          Z
        "
        fill="#97BB3D"
        transform="rotate(-14 104 130)"
      />

      {/* LEFT LEAF VEIN */}
      <path
        d="M104 176 C98 140 92 114 84 96"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.75"
        transform="rotate(-14 104 130)"
      />

      {/* RIGHT FRONT LEAF — slanted right, drawn in front of bowl */}
      <path
        d="
          M126 178
          C114 156 116 126 132 104
          C144 88 162 94 168 116
          C174 138 164 166 146 182
          C140 186 132 184 126 178
          Z
        "
        fill="#B5CC42"
        transform="rotate(12 144 138)"
      />

      {/* RIGHT LEAF VEIN */}
      <path
        d="M142 178 C142 146 144 122 148 108"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.75"
        transform="rotate(12 144 138)"
      />
    </svg>
  )
}
