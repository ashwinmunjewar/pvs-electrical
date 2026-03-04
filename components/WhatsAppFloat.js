import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    box-shadow: 0 8px 20px rgba(37, 211, 102, 0.35);
  }
  50% {
    box-shadow: 0 8px 26px rgba(37, 211, 102, 0.55);
  }
  100% {
    box-shadow: 0 8px 20px rgba(37, 211, 102, 0.35);
  }
`;

const FloatButton = styled.a`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 999;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  background: #25d366;
  color: #fff;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.35);
  transition: transform 0.2s ease, background 0.2s ease;
  animation: ${pulse} 2.2s ease-in-out infinite;

  &:hover {
    background: #20ba59;
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
    flex: 0 0 20px;
  }

  @media (max-width: 640px) {
    right: 0.75rem;
    bottom: 0.75rem;
    padding: 0.72rem;

    span {
      display: none;
    }
  }
`;

const WHATSAPP_NUMBER = '919765712208';
const WHATSAPP_TEXT = 'Hi, I want a free solar consultation for my home/business.';

export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

  return (
    <FloatButton
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.45 1.64 6.34L3 29l6.87-1.6A12.93 12.93 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.7c-1.95 0-3.76-.57-5.28-1.55l-.38-.24-4.08.95.98-3.98-.25-.41A10.63 10.63 0 0 1 5.3 16C5.3 10.1 10.1 5.3 16 5.3S26.7 10.1 26.7 16 21.9 26.7 16 26.7zm5.87-7.89c-.32-.16-1.9-.94-2.2-1.04-.29-.11-.5-.16-.72.16-.21.31-.83 1.04-1.01 1.25-.19.21-.38.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.31-.02-.48.14-.64.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.98-2.39-.26-.62-.53-.53-.72-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.31c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.68.77.24 1.47.21 2.03.13.62-.09 1.9-.77 2.16-1.51.27-.74.27-1.38.19-1.51-.08-.13-.29-.21-.61-.37z"
        />
      </svg>
      <span>Chat on WhatsApp</span>
    </FloatButton>
  );
}
