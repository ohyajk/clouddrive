import { create } from "zustand"

export const useImgNumState = create((set) => ({
    imgNum: 0,
    setNum: (n) => set({ imgNum: n }),
    addOneNum: () => set((state) => ({ imgNum: state.imgNum + 1 })),
    remOneNum: () => set((state) => ({ imgNum: state.imgNum - 1 })),
}))
