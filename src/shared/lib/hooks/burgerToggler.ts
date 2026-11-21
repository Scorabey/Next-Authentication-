import { create } from 'zustand'

interface IBurgerToggle {
    open: boolean;
    toggle: () => void;
    setOpen: (value: boolean) => void;
    close: () => void;
}

export const useBurgerToggle = create<IBurgerToggle>()((set) => ({
    open: false,
    toggle: () => set((state) => ({ open: !state.open })),
    setOpen: (value) => set({ open: value }),
    close: () => set({ open: false }),
}));