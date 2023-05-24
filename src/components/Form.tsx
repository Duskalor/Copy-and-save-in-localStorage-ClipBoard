import { useState } from 'react';
import { useStore } from '../store/store';
import { v4 } from 'uuid';

export const Form = () => {
  const addData = useStore((store) => store.addData);
  const [textInput, setTextInput] = useState('');

  const handleReadClipboard = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      if (textInput === '' || textInput === null) return;
      const text = await navigator.clipboard.read();
      if (text === null || text === undefined) return;
      const ver = text[0];

      console.log(typeof ver);
      addData({ id: v4(), nombre: textInput, clip: text[0] });
      setTextInput('');
    } catch (err) {
      console.error('Error al leer el portapapeles: ', err);
    }
  };

  return (
    <form className='border-t border-black'>
      <div className='flex gap-4 px-4 py-2 flex-col'>
        <label htmlFor='text' className='flex justify-center'>
          Nombre
        </label>
        <input
          value={textInput}
          type='text'
          id='text'
          className='outline-none px-2 py-1'
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        />
      </div>
      <div className='flex justify-center  '>
        <button
          onClick={(e) => {
            handleReadClipboard(e);
          }}
          className='p-2 mt-2 font-bold rounded-sm border bg-bottons-200 border-bottons-400'
        >
          Guardar
        </button>
      </div>
    </form>
  );
};
