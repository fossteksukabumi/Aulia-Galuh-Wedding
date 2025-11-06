import React from "react";
import { useNavigate } from "react-router-dom";
import introAudioFile from "../../assets/music/netflix-intro.mp3";
import imageBG from "../../assets/backrounds/wedding-bg.webp";

export default function Splash() {
  const navigate = useNavigate();

  const handlePlay = () => {
    const audio = new Audio(introAudioFile);
    audio.play().catch(() => {
      console.log("Audio play blocked, menunggu interaksi user");
    });

    // Efek fade out sebelum pindah halaman
    document.body.style.transition = "opacity 0.6s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
      navigate("/main", { state: { playIntroMusic: true } });
      // Reset opacity biar halaman berikutnya tidak gelap
      setTimeout(() => {
        document.body.style.opacity = "1";
      }, 100);
    }, 600);
  };

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f97316 0%, #ef4444 50%, #ec4899 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Arial, sans-serif",
      backgroundImage: `url(${imageBG})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    decorative1: {
      position: "absolute",
      top: "40px",
      left: "40px",
      width: "80px",
      height: "80px",
      backgroundColor: "rgba(251, 191, 36, 0.3)",
      borderRadius: "50%",
      animation: "pulse 2s infinite",
    },
    decorative2: {
      position: "absolute",
      top: "80px",
      right: "80px",
      width: "64px",
      height: "64px",
      backgroundColor: "rgba(248, 113, 113, 0.4)",
      borderRadius: "50%",
      animation: "bounce 2s infinite",
    },
    decorative3: {
      position: "absolute",
      bottom: "80px",
      left: "25%",
      width: "48px",
      height: "48px",
      backgroundColor: "rgba(254, 215, 170, 0.5)",
      borderRadius: "50%",
    },
    flower1: {
      position: "absolute",
      top: "64px",
      right: "33%",
      fontSize: "32px",
      animation: "pulse 2s infinite",
    },
    flower2: {
      position: "absolute",
      bottom: "128px",
      right: "64px",
      fontSize: "24px",
      animation: "bounce 2s infinite",
    },
    flower3: {
      position: "absolute",
      top: "33%",
      left: "64px",
      fontSize: "24px",
      opacity: "0.7",
    },
    card: {
      backgroundColor: "rgba(0, 0, 0, 0.36)",
      backdropFilter: "blur(10px)",
      borderRadius: "24px",
      padding: "32px",
      maxWidth: "400px",
      width: "100%",
      textAlign: "center",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    },
    profileContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "16px",
      marginBottom: "24px",
    },
    profile: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "bold",
      fontSize: "18px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
    },
    profileY: {
      background: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)",
    },
    profileA: {
      background: "linear-gradient(135deg, #f472b6 0%, #db2777 100%)",
    },
    multiply: {
      color: "white",
      fontSize: "24px",
      fontWeight: "300",
    },
    logo: {
      color: "#dc2626",
      fontWeight: "bold",
      fontSize: "14px",
      letterSpacing: "2px",
      marginBottom: "8px",
    },
    title: {
      color: "white",
      fontWeight: "bold",
      fontSize: "28px",
      marginBottom: "8px",
      lineHeight: "1.2",
    },
    badgeContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      marginBottom: "24px",
    },
    badge: {
      backgroundColor: "#dc2626",
      color: "white",
      padding: "4px 12px",
      borderRadius: "4px",
      fontSize: "10px",
      fontWeight: "600",
      textTransform: "uppercase",
    },
    date: {
      color: "rgba(255, 255, 255, 0.8)",
      fontSize: "14px",
    },
    tagsContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "8px",
      marginBottom: "32px",
    },
    tag: {
      backgroundColor: "#374151",
      color: "rgba(255, 255, 255, 0.8)",
      padding: "4px 12px",
      borderRadius: "20px",
      fontSize: "10px",
    },
    playButton: {
      backgroundColor: "white",
      color: "black",
      fontWeight: "bold",
      padding: "16px 48px",
      borderRadius: "8px",
      fontSize: "18px",
      border: "none",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      margin: "0 auto",
    },
    playIcon: {
      width: "24px",
      height: "24px",
      transition: "transform 0.3s ease",
    },
    chevronContainer: {
      marginTop: "24px",
    },
    chevron: {
      width: "24px",
      height: "24px",
      color: "rgba(255, 255, 255, 0.6)",
      margin: "0 auto",
      animation: "bounce 2s infinite",
    },
  };

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-30px); }
          70% { transform: translateY(-15px); }
          90% { transform: translateY(-4px); }
        }
        button:hover {
          background-color: #f3f4f6 !important;
          transform: scale(1.05) !important;
        }
        button:hover svg {
          transform: scale(1.1) !important;
        }
      `}</style>

      <div style={styles.container}>
        <div style={styles.decorative1}></div>
        <div style={styles.decorative2}></div>
        <div style={styles.decorative3}></div>

        <div style={styles.flower1}>🌸</div>
        <div style={styles.flower2}>🌻</div>
        <div style={styles.flower3}>🌺</div>

        <div style={styles.card}>
          <div style={styles.profileContainer}>
            <div style={{ ...styles.profile, ...styles.profileA }}>A</div>
            <div style={styles.multiply}>×</div>
            <div style={{ ...styles.profile, ...styles.profileY }}>G</div>
          </div>

          <div style={styles.logo}>NETFLIX</div>

          <h1 style={styles.title}>Aulia & Galuh</h1>

          <div style={styles.badgeContainer}>
            <span style={styles.badge}>Coming Soon</span>
            <span style={styles.date}>16 November 2025</span>
          </div>

          <div style={styles.tagsContainer}>
            <span style={styles.tag}>#romantic</span>
            <span style={styles.tag}>#getmarried</span>
            <span style={styles.tag}>#family</span>
            <span style={styles.tag}>#documenter</span>
          </div>

          <button onClick={handlePlay} style={styles.playButton}>
            <svg style={styles.playIcon} fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 5v10l8-5z" />
            </svg>
            Buka Undangan
          </button>

          <div style={styles.chevronContainer}>
            <svg style={styles.chevron} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
