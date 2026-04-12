export default function App() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0A0A0A",
      color: "white",
      flexDirection: "column"
    }}>

      <img 
        src="logo.png"
        alt="logo"
        style={{ width: "140px", marginBottom: "20px" }}
      />

      <h1 style={{
        fontSize: "32px",
        background: "linear-gradient(90deg,#00F0FF,#7B61FF)",
        WebkitBackgroundClip: "text",
        color: "transparent"
      }}>
        Vinitronx
      </h1>

      <p style={{ opacity: 0.6 }}>
        Build. Earn. Automate with AI 🚀
      </p>

    </div>
  );
}
