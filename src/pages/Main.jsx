import { useEffect, useRef } from "react";
import Hero from "../components/Hero/Hero";
import Countdown from "../components/Countdown/Countdown";
import Gallery from "../components/Gallery/Gallery";
import Wishes from "../components/Wishes/Wishes";
import mainAudioFilePath from "../assets/music/IU.mp3";

export default function MainPage() {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(mainAudioFilePath);
      audioRef.current.loop = true;
      audioRef.current.play().catch(() => {
        console.log("Audio play blocked, menunggu interaksi user");
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <>
     
      <Hero mainAudioRef={audioRef} />
      <Countdown />
      <Gallery />
      <Wishes />
    </>
  );
}
