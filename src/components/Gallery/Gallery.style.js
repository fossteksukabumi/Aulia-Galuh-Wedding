import styled, { keyframes } from "styled-components";

// 🎞️ Animasi fade-in lembut
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const GalleryWrapper = styled.section`
  padding: 2rem 1rem;
  background: #000;
  color: #fff;
`;

export const GalleryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const GalleryRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;
  justify-items: center;
  animation: ${fadeIn} 0.8s ease-in-out;

  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const GalleryItem = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: #141414;
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: ${fadeIn} 0.8s ease-in-out both;
  animation-delay: ${({ $index }) => $index * 0.1}s;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    img {
      height: 220px;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  backdrop-filter: blur(4px);
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const ModalImg = styled.img`
  max-width: 90%;
  max-height: 85%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255,255,255,0.2);
`;

export const ModalClose = styled.span`
  position: absolute;
  top: 20px; right: 40px;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #ffcccc;
  }
`;
