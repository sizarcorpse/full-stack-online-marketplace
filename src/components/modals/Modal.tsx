"use client";

import { Button } from "@/components/";
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleOnClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleOnSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }
    secondaryAction();
  }, [disabled, secondaryAction]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-neutral-800/70 focus:outline-none">
        <div className="relative w-full my-6 mx-auto md:w-4/6 md:h-auto lg:w-3/6 xl:2/5">
          {/* Content */}
          <div
            className={`translate duration-300 h-full ${
              showModal ? "translate-y-0" : "translate-y-full"
            } ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className="relative flex flex-col w-full h-full border-0 rounded-lg bg-white outline-none translate focus:outline-none md:h-auto lg:h-auto">
              {/* Header */}
              <div className="relative flex items-start justify-between p-6 border-b-[1px] rounded-t">
                <button
                  title="Model Close"
                  className="absolute p-1 border-0 left-9 transition hover:opacity-70"
                >
                  <IoMdClose size={18} onClick={handleOnClose} />
                </button>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              {/* Body */}
              <div className="relative flex-auto p-6">{body}</div>
              {/* Footer */}
              <div className="flex items-center justify-end p-6 border-t-[1px] rounded-b">
                <div className="flex flex-row items-center gap-4 w-full">
                  {secondaryAction && secondaryActionLabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionLabel}
                      onClick={handleSecondaryAction}
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleOnSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
