import React, { useEffect, useRef } from "react";
import {
  HeroWrapper,
  PosterWrapper,
  Poster,
  OverlayContent,
  Title,
  CountdownBadge,
  CountdownBadge2,
  Info,
  Meta,
  Description,
  Quote,
  Actions,
  ActionButton,
} from "./Hero.style";

import image1 from "../../assets/images/Hero.webp";
import { FaPlus, FaThumbsUp, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero({ mainAudioRef }) {
  const videoRef = useRef(null);

  const event = {
    title: "Pernikahan Aulia & Galuh",
    startDate: "20251116T090000",
    endDate: "20251116T120000",
    details:
      "Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Anda untuk menghadiri pernikahan kami.",
    location:
      "Kp. Lebakwangi Rt 012 Rw 002, Kec. Parungkuda, Kab. Sukabumi, Jawa Barat",
  };

  // Add to Calendar
  const handleAddToCalendar = () => {
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART:${event.startDate}
DTEND:${event.endDate}
DESCRIPTION:${event.details}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR
`.trim();

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wedding-aulia-galuh.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  // "I will come" button
  const handleIWillCome = () => {
    alert("Terima kasih! Kehadiranmu sudah kami catat 🤍");
  };

  // Open Google Maps
  const handleLocation = () => {
    window.open("https://maps.app.goo.gl/veBNmDwa6DUeV7Xv6", "_blank");
  };

  // Pause YouTube video if main audio plays
  useEffect(() => {
    if (!mainAudioRef?.current || !videoRef.current) return;

    const handleAudioPlay = () => {
      const iframeWindow = videoRef.current.contentWindow;
      iframeWindow.postMessage(
        JSON.stringify({ event: "command", func: "pauseVideo", args: [] }),
        "*"
      );
    };

    mainAudioRef.current.addEventListener("play", handleAudioPlay);
    return () => mainAudioRef.current.removeEventListener("play", handleAudioPlay);
  }, [mainAudioRef]);

  return (
    <HeroWrapper>
      {/* Poster & Overlay */}
      <PosterWrapper>
        <Poster src={image1} alt="Wedding Poster" />
        <OverlayContent>
          <Title>Aulia & Galuh: Season 1</Title>
          <CountdownBadge2>Coming soon</CountdownBadge2>
        </OverlayContent>
      </PosterWrapper>

      {/* YouTube Video */}
      <div
        style={{
          width: "100%",
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
        }}
      >
        <iframe
          ref={videoRef}
          src="https://www.youtube.com/embed/AQXC8eAX34U?controls=1&autoplay=1&mute=1&loop=1&playlist=AQXC8eAX34U&enablejsapi=1"
          title="Wedding Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media; clipboard-write; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>

      {/* Info Section */}
      <Info>
        <Meta>
          <span className="match">100% match</span>
          <span>2025</span>
          <span>1h 26m</span>
          <span>18+</span>
        </Meta>

        <Title>Aulia & Galuh: Season 1</Title>
        <CountdownBadge>Coming soon on Sunday, 16 November 2025</CountdownBadge>

        <Description>
          <p>
            Di sebuah sekolah di tahun 2013, dua jiwa yang berbeda secara tak
            sengaja dipertemukan saat ujian. Duduk bersebelahan, mereka mulai
            mengenal satu sama lain, berbagi tawa, rahasia, dan mimpi. Pertemuan
            sederhana itu menyalakan percikan cinta yang akan bertahan melewati
            waktu.
          </p>
          <p>
            Tahun demi tahun berlalu, hubungan mereka semakin matang. Hingga
            akhirnya, pada 13 April 2025, mereka resmi bertukar cincin
            pertunangan, menandai komitmen untuk menapaki perjalanan hidup
            bersama dengan lebih serius.
          </p>
          <p>
            Kini, kisah cinta itu mencapai puncaknya. Pada 16 November 2025,
            mereka akan melangkah ke pelaminan, menyatukan dua hati menjadi satu
            di hadapan keluarga dan sahabat. Sebuah perjalanan dari pertemuan
            sederhana hingga janji seumur hidup, mengajarkan bahwa cinta sejati
            terkadang dimulai dari momen yang paling tak terduga.
          </p>
        </Description>

        <Quote>
          "Segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat
          (kebesaran Allah)" <br /> (Q.S Az-Zariyah: 49)
        </Quote>

        <Actions>
          <ActionButton onClick={handleAddToCalendar}>
            <FaPlus />
            <span>Tambah Ke Kalender</span>
          </ActionButton>
          <ActionButton onClick={handleIWillCome}>
            <FaThumbsUp />
            <span>I will come!</span>
          </ActionButton>
          <ActionButton onClick={handleLocation}>
            <FaMapMarkerAlt />
            <span>Lokasi</span>
          </ActionButton>
        </Actions>
      </Info>
    </HeroWrapper>
  );
}
