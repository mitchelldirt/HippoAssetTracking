import {create} from 'zustand'
import {devtools, persist} from 'zustand/middleware'
import type {} from '@redux-devtools/extension' // required for devtools typing

interface BearState {
    displaySidebar: boolean
    sidebarToggled: boolean
    toggleSidebar: () => void
}

const useHippoStore = create<BearState>()(
    devtools(
        persist(
            (set) => ({
                displaySidebar: window.innerWidth > 640,
                sidebarToggled: false,
                toggleSidebar: () => set((state) => (
                    {displaySidebar: !state.displaySidebar,
                    sidebarToggled: true
                    })),
            }),
            {
                name: 'hippo-storage',
            }
        )
    )
)

// const useHippoStorePersist = create<BearState>()(
//     devtools(
//         persist(
//             (set) => ({
//                 displaySidebar: window.innerWidth > 640,
//                 toggleSidebar: () => set((state) => ({displaySidebar: !state.displaySidebar})),
//             }),
//             {
//                 name: 'hippo-storage',
//             }
//         )
//     )
// )

export default useHippoStore;
