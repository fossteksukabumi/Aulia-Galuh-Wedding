// src/components/Hero/Hero.style.js
import styled from "styled-components";

export const HeroWrapper = styled.section`
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/* Wrapper untuk poster agar bisa dipasangi overlay */
export const PosterWrapper = styled.div`
  position: relative;
  width: 100%;
`;

/* Gambar poster */
export const Poster = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  transition: all 0.3s ease-in-out;

  /* Desktop besar */
  @media (min-width: 1200px) {
    max-height: 550px;
  }

  /* Tablet landscape */
  @media (max-width: 1024px) {
    max-height: 450px;
  }

  /* Tablet portrait */
  @media (max-width: 768px) {
    /* gunakan height jika ingin paksa tinggi pada tablet */
    height: 420px;
  }

  /* Mobile (ukuran kecil) */
  @media (max-width: 480px) {
    /* paksa tinggi mobile — ubah sesuai kebutuhan */
    height: 380px;
    border-radius: 8px;
    object-position: center top;
  }

  /* Mobile mini (misal iPhone SE) */
  @media (max-width: 360px) {
    height: 320px;
    max-height: none;
  }
`;


export const OverlayContent = styled.div`
  position: absolute;
  bottom: 25px;
  left: 25px;
  z-index: 2;
  color: #fff;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 768px) {
    bottom: 18px;
    left: 18px;
  }

  @media (max-width: 480px) {
    bottom: 12px;
    left: 12px;
    right: 12px;
    align-items: left;
    text-align: left;
  }
`;

/* Judul (dipakai baik overlay maupun di Info bawah) */
export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

/* Countdown badge (dipakai overlay & bawah) */
export const CountdownBadge = styled.div`
  background: rgba(220, 38, 38, 0.95); /* merah solid */
  color: white;
  font-weight: 700;
  padding: 0.4rem 0.9rem;
  border-radius: 6px;
  display: inline-block;
  font-size: 0.9rem;
`;

export const CountdownBadge2 = styled.div`
  background: rgba(220, 38, 38, 0.95); 
  color: white;
  font-weight: 700;
  padding: 0.4rem 0.5rem;
  border-radius: 6px;
  display: inline-block;
  font-size: 0.9rem;
  width: 120px;
`;

/* Info section bawah poster */
export const Info = styled.div`
  padding: 1rem;
  max-width: 900px;
  width: 100%;
  text-align: left;
`;

/* Meta row */
export const Meta = styled.div`
  display: flex;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #aaa;

  .match {
    color: #46d369;
    font-weight: bold;
  }
`;

export const Description = styled.div`
  margin-top: 20px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #ddd;

  p {
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

export const Quote = styled.blockquote`
  font-style: italic;
  font-size: 0.85rem;
  color: #ccc;
  margin-bottom: 1.5rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;

  svg { font-size: 1.1rem; }

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    color: #ff4d4d;
  }
`;
