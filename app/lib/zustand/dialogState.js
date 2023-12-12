import { create } from "zustand"

export const useDialogState = create((set) => ({
    state: false,
    data: {},
    open: (data) => set({ state: true, data }),
    close: () => set({ state: false, data: {} }),
}))
