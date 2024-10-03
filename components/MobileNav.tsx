import React, { FC, useState } from 'react';
import FullscreenModal from './FullscreenModal';

interface Props {
  open: boolean;
  setOpen: (p: boolean) => void;
}

const MobileNav: FC<Props> = ({ open = false, setOpen }) => {
  const [showCopied, setShowCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default mailto behavior
    const email = 'denniskbamfo@gmail.com';
    navigator.clipboard.writeText(email); // Copy email to clipboard

    setShowCopied(true); // Show "Email copied!" message
    setTimeout(() => {
      setShowCopied(false); // Hide the message after 2 seconds
    }, 2000);
  };

  return (
    <FullscreenModal open={open} onClose={() => setOpen(false)}>
      <div className="flex justify-center h-full monument font-black text-2xl tracking-widest uppercase">
        <ul className="w-full flex flex-col justify-center items-center">
          <li className="my-3">
            <a href="mailto:denniskbamfo@gmail.com" onClick={handleEmailClick}>
              Email
            </a>
          </li>
          <li className="my-3">
            <a href="/resume.pdf">Resume</a>
          </li>
        </ul>
      </div>

      {showCopied && (
        <div className="fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg text-xl font-semibold tracking-wider">
          Email copied!
        </div>
      )}
    </FullscreenModal>
  );
};

export default MobileNav;
