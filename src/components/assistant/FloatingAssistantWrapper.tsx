"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { FloatingAssistantButton } from "./FloatingAssistantButton";

const AssistantPanel = dynamic(() => import("./AssistantPanel").then((m) => m.AssistantPanel), {
  ssr: false,
});

export default function FloatingAssistantWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const handleOpen = () => {
    setHasOpened(true);
    setIsOpen(true);
  };

  return (
    <>
      <FloatingAssistantButton isOpen={isOpen} onClick={handleOpen} />
      {hasOpened && <AssistantPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
}
