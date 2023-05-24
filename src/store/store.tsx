import { create } from 'zustand';
export interface dataClipBoard {
  id: string;
  nombre: string;
  clip: any;
}

interface Alldata {
  AllDataClipBoard: dataClipBoard[];
  addData: (data: dataClipBoard) => void;
  loadData: () => void;
  deleteOne: (id: string) => void;
}

export const useStore = create<Alldata>((set, get) => ({
  AllDataClipBoard: [],
  addData: async (data) => {
    const { clip } = data;

    const clipToSave = await clip.getType('text/html');

    function operacionAsincrona() {
      return new Promise((resolve) => {
        const reader = new FileReader();

        reader.onload = function (event) {
          const arrayBuffer = event?.target?.result;
          const setClip = Array.from(
            new Uint8Array(arrayBuffer as ArrayBufferLike)
          );
          resolve(setClip);
        };
        reader.readAsArrayBuffer(clipToSave);
      });
    }

    operacionAsincrona().then((clip) => {
      set((state) => {
        const Newdata = [...state.AllDataClipBoard, { ...data, clip }];
        console.log({ AllDataClipBoard: Newdata });
        localStorage.setItem('clipData', JSON.stringify(Newdata));
        return { AllDataClipBoard: Newdata };
      });
    });
  },

  loadData: () => {
    const clip = localStorage.getItem('clipData');
    if (!clip) return;
    const data = JSON.parse(clip);
    set({ AllDataClipBoard: data });
  },
  deleteOne: (id) => {
    const store = get().AllDataClipBoard;
    set(() => {
      const newData = store.filter((sto) => sto.id !== id);
      localStorage.setItem('clipData', JSON.stringify(newData));
      return { AllDataClipBoard: newData };
    });
  },
}));
