type Props = {
  title: string;
  subtitle: string;
  iconElement?: React.ReactNode; // Now takes ANY JSX, not an img
  children?: React.ReactNode;
};

export default function ProofCard({
  title,
  subtitle,
  iconElement,
  children,
}: Props) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "24px",
        borderRadius: "20px",
        color: "white",
        position: "relative",
      }}
    >
      {/* Icon (Emoji) */}
      {iconElement && (
        <div
          style={{
            width: "60px",
            height: "60px",
            position: "absolute",
            top: "20px",
            right: "20px",
            borderRadius: "50px",
            background: "#400B85",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "26px",
          }}
        >
          <div
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "40px",
              background: "#A150F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {iconElement}
          </div>
        </div>
      )}

      {/* Title + Subtitle */}
      <p style={{ margin: 0, opacity: 0.8, textAlign:'start' }}>{subtitle}</p>
      <h3 style={{ margin: 0, textAlign:'start' }}>{title}</h3>

      {/* Dynamic Content */}
      <div style={{ marginTop: "20px" }}>{children}</div>
    </div>
  );
}
