"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { ContactModal } from "./contact-modal"

type ModalVariant = "specialist" | "diagnostic"

interface ModalContextType {
  openModal: (variant: ModalVariant) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [variant, setVariant] = useState<ModalVariant>("specialist")

  function openModal(modalVariant: ModalVariant) {
    setVariant(modalVariant)
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ContactModal 
        open={isOpen} 
        onOpenChange={setIsOpen} 
        variant={variant}
      />
    </ModalContext.Provider>
  )
}
