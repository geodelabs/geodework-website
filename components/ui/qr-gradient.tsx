export const qrGradientId = "qr-gradient"

export function QRGradient() {
  return (
    <svg width="0" height="0">
      <defs>
        <linearGradient id={qrGradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#627EEA" />
          <stop offset="33%" stopColor="#8A92FF" />
          <stop offset="66%" stopColor="#78D1F1" />
          <stop offset="100%" stopColor="#40E0D0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
