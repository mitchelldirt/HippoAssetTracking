import {create} from 'zustand'
import {devtools, persist} from 'zustand/middleware'
import type {} from '@redux-devtools/extension' // required for devtools typing
interface BearState {
    displaySidebar: boolean
    currentPath: string
    toggleSidebar: () => void
    updateCurrentPath: (newPath: string) => void
}

const useHippoStore = create<BearState>()(
    devtools(
        persist(
            (set) => ({
                currentPath: '/',
                updateCurrentPath: (newPath: string) => set({currentPath: newPath}),
                displaySidebar: window.innerWidth > 640,
                toggleSidebar: () => set((state) => (
                    {displaySidebar: !state.displaySidebar
                    })),
            }),
            {
                name: 'hippo-storage',
            }
        )
    )
)

export default useHippoStore;
