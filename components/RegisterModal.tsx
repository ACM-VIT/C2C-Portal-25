import React from "react";
import ReactDOM from "react-dom";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { InteractiveHoverButton } from "@/app/components/landing/ui/cta-button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  url?: string;
  redirectUrl?: string;
  className?: string;
}

export const RegisterModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title = "lorem ipsum bla bla bla",
  url = "gravitas.vit.ac.in",
  redirectUrl = "https://gravitas.vit.ac.in",
  className,
}) => {
  const handleGoNow = () => {
    if (redirectUrl) {
      window.open(redirectUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div 
      className="fixed inset-0 z-[999999] bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
      style={{ 
        zIndex: 999999,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
    >
      <div 
        className={cn(
          "relative bg-gradient-to-br from-slate-400 to-slate-500 rounded-2xl shadow-2xl overflow-hidden",
          "transform transition-all duration-300 ease-out",
          "animate-in fade-in-0 zoom-in-95 duration-300",
          "z-[999999]",
          // Responsive width constraints
          "w-[95vw] max-w-[380px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px]",
          className
        )}
        onClick={(e) => e.stopPropagation()}
        style={{ 
          zIndex: 999999,
          maxHeight: '90vh',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[999999] p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 text-white hover:text-gray-100"
          aria-label="Close modal"
          style={{ zIndex: 999999 }}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="px-6 py-8 sm:px-8 sm:py-10 text-center">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight mb-6 sm:mb-8">
            {title}
          </h2>

          {/* URL Link */}
          <div className="mb-6 sm:mb-8">
            <a
              href={redirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base sm:text-lg font-medium text-purple-200 hover:text-purple-100 transition-colors duration-200 underline decoration-purple-300 hover:decoration-purple-200 underline-offset-4"
            >
              {url}
            </a>
          </div>

          {/* Go Now Button */}
          <div className="flex justify-center">
            <InteractiveHoverButton
              onClick={handleGoNow}
              variant="default"
              className="text-sm sm:text-base px-6 py-2.5 sm:px-8 sm:py-3"
            >
              Go Now
            </InteractiveHoverButton>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export const useModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    console.log("[OPENING MODAL]");
    setIsOpen(true);
  }
  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    openModal,
    closeModal,
  };
};
