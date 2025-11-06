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

  const handleIWillCome = () => {
    alert("Terima kasih! Kehadiranmu sudah kami catat 🤍");
  };

  const handleLocation = () => {
    window.open("https://maps.app.goo.gl/veBNmDwa6DUeV7Xv6", "_blank");
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch((err) => console.log("Autoplay diblokir:", err));

    video.onended = () => {
      if (mainAudioRef?.current) {
        mainAudioRef.current.play().catch(() => {});
      }
    };
  }, [mainAudioRef]);

  const handleVolumeChange = () => {
    const video = videoRef.current;
    if (!video || !mainAudioRef?.current) return;

    if (video.muted === false) {
      mainAudioRef.current.pause();
    } else {
      mainAudioRef.current.play().catch(() => {});
    }
  };

  return (
    <HeroWrapper>
      <PosterWrapper>
        <Poster src={image1} alt="Wedding Poster" />
        <OverlayContent>
          <Title>Aulia & Galuh: Season 1</Title>
          <CountdownBadge2>Coming soon</CountdownBadge2>
        </OverlayContent>
      </PosterWrapper>

   
    <div style={{ width: "100%" }}>
      <video
        ref={videoRef}
        width="100%"
        autoPlay
        muted
        loop
        controls
        playsInline
        preload="auto"
        onVolumeChange={handleVolumeChange}
      >
        <source
          src="https://drive.google.com/uc?export=download&id=1AGi-6QX_lyW_5AYb70Cor_X9-GwShFyu"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>


      
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
         <p> Di sebuah sekolah di tahun 2013, dua jiwa yang berbeda secara tak sengaja dipertemukan saat ujian. Duduk bersebelahan, mereka mulai mengenal satu sama lain, berbagi tawa, rahasia, dan mimpi. Pertemuan sederhana itu menyalakan percikan cinta yang akan bertahan melewati waktu.</p>

          <p>Tahun demi tahun berlalu, hubungan mereka semakin matang. Hingga akhirnya, pada 13 April 2025, mereka resmi bertukar cincin pertunangan, menandai komitmen untuk menapaki perjalanan hidup bersama dengan lebih serius.</p>

          <p>Kini, kisah cinta itu mencapai puncaknya. Pada 16 November 2025, mereka akan melangkah ke pelaminan, menyatukan dua hati menjadi satu di hadapan keluarga dan sahabat. Sebuah perjalanan dari pertemuan sederhana hingga janji seumur hidup, mengajarkan bahwa cinta sejati terkadang dimulai dari momen yang paling tak terduga.</p>
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
