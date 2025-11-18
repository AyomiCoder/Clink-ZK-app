import img1 from '../assets/Frame 24.png';
import img2 from '../assets/frame 2.png';

export const ProofData1 = (
  <div
    style={{
      position: "relative",
      padding: "20px",
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: "16px",
      backdropFilter: "blur(0px)",
      WebkitBackdropFilter: "blur(0px)",
      border: "1px solid rgba(255,255,255,0.15)",
      pointerEvents: "none",
    }}
  >
    <div style={{ display: "flex", flexDirection: "column", gap: "14px", textAlign:'start'}}>
      <div>
        <label style={{ color: "white", fontSize: "13px"}}>Date of birth</label>
        <input
          placeholder="22/03/2000"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            background: "rgba(255,255,255,0.3)",
            color: "white",
            opacity: "40%",
          }}
        />
      </div>

      <div>
        <label style={{ color: "white", fontSize: "13px" }}>Blood Type</label>
        <input
          placeholder="A+"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            background: "rgba(255,255,255,0.3)",
            color: "white",
            opacity: "40%",
          }}
        />
      </div>

      <div>
        <label style={{ color: "white", fontSize: "13px" }}>Genotype name</label>
        <input
          placeholder="AA"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
            border: "none",
            background: "rgba(255,255,255,0.3)",
            color: "white",
            opacity: "40%",
          }}
        />
      </div>
    </div>

    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0, 0, 0, 0.15)",
        borderRadius: "16px",
        backdropFilter: "blur(100px)",
        WebkitBackdropFilter: "blur(100px)",
        pointerEvents: "none",
      }}
    />
  </div>
);

export const proofCardData2 = (
  <img src={img1} style={{ width: "100%", borderRadius: "12px"}} />
);

export const proofCardData3 = (
  <img src={img2} style={{ width: "100%", borderRadius: "12px" }} />
);
