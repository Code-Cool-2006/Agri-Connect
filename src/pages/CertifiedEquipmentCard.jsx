import React from "react";

export default function Certificate({
  equipment = "Tractor Model X1",
  standardLabel = "National Agricultural Standards",
  standardCode = "NAS-2025",
  validityFrom = 2025,
  validityTo = 2027,
  authority = "Agri-Board of India",
}) {
  return (
    <div
      style={{
        border: "6px double #2c3e50",
        padding: "40px",
        maxWidth: "700px",
        margin: "20px auto",
        fontFamily: "Georgia, serif",
        background: "#fffefc",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      {/* Certificate Header */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "28px",
          textTransform: "uppercase",
          marginBottom: "5px",
          letterSpacing: "2px",
        }}
      >
        Certificate of Verification
      </h1>
      <p style={{ textAlign: "center", fontSize: "14px", marginTop: 0 }}>
        Issued under official agricultural equipment standards
      </p>

      <hr style={{ margin: "25px 0", border: "1px solid #2c3e50" }} />

      {/* Certified Content */}
      <p style={{ fontSize: "16px", lineHeight: "1.8", textAlign: "justify" }}>
        This is to certify that the equipment{" "}
        <strong style={{ fontSize: "18px" }}>{equipment}</strong> has been
        officially verified in accordance with{" "}
        <strong>
          {standardLabel} ({standardCode})
        </strong>
        . The equipment is valid for certified use during the period{" "}
        <strong>
          {validityFrom} – {validityTo}
        </strong>
        .
      </p>

      <p style={{ fontSize: "16px", lineHeight: "1.8", textAlign: "justify" }}>
        Verification has been carried out by the <strong>{authority}</strong>,
        ensuring compliance with agricultural operational and safety standards.
      </p>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "60px",
          paddingTop: "20px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "14px" }}>
            <img src="src/assets/Signature.png" alt="Sign"></img>
          </p>
          <p style={{ fontSize: "14px" }}>Authorized Signatory</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "14px" }}>Issued by</p>
          <p style={{ fontWeight: "bold", fontSize: "15px" }}>{authority}</p>
        </div>
      </div>
    </div>
  );
}
