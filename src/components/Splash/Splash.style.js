import styled from "styled-components"

export const SplashWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* Netflix-style dramatic splash background */
  background: 
    radial-gradient(circle at 30% 70%, rgba(229, 9, 20, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 70% 30%, rgba(229, 9, 20, 0.2) 0%, transparent 50%),
    linear-gradient(135deg, #000000 0%, #141414 50%, #1a1a1a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: netflixSplashIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @keyframes netflixSplashIn {
    0% {
      opacity: 0;
      transform: scale(1.1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  /* Netflix-style film grain effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(255,255,255,0.02) 1px, transparent 1px),
      radial-gradient(circle at 75% 75%, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.6;
    animation: grain 3s infinite linear;
    pointer-events: none;
  }

  @keyframes grain {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(-1px, 1px) rotate(0.5deg); }
    50% { transform: translate(1px, -1px) rotate(-0.5deg); }
    75% { transform: translate(-1px, -1px) rotate(0.25deg); }
  }
`

export const PlayButton = styled.button`
  position: relative;
  z-index: 1;
  padding: 24px 48px;
  font-size: 1.6rem;
  font-weight: 900;
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  border: 3px solid rgba(255, 255, 255, 0.8);
  border-radius: 60px;
  cursor: pointer;
  /* Enhanced Netflix-style play button with better animations */
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.6),
    0 5px 15px rgba(229, 9, 20, 0.4);
  backdrop-filter: blur(10px);
  overflow: hidden;

  /* Netflix play icon */
  &::after {
    content: '▶';
    margin-left: 8px;
    font-size: 1.2em;
  }

  &:hover {
    background: #f40612;
    transform: scale(1.15) translateY(-5px);
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.8),
      0 10px 30px rgba(229, 9, 20, 0.6);
    border-color: var(--color-primary);
  }

  &:active {
    transform: scale(1.1) translateY(-3px);
  }

  /* Netflix-style shimmer effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.6s;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 480px) {
    padding: 20px 40px;
    font-size: 1.3rem;
    letter-spacing: 1px;
  }
`
