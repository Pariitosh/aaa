import create from 'zustand';

const useStore = create((set) => ({
  counter: 5870,
  increment1: () => set((state) => ({ counter: state.counter + 1190 })),
  decreament1:() => set((state) => ({counter:state.counter-1190})),
  increment2: () => set((state) => ({ counter: state.counter + 1100 })),
  decreament2:() => set((state) => ({counter:state.counter-1100})),
  increment3: () => set((state) => ({ counter: state.counter + 1290 })),
  decreament3:() => set((state) => ({counter:state.counter-1290}))
}));

export default useStore;