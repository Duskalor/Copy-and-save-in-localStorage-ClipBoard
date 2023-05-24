import { useStore } from '../store/store';

function ClipboardReader() {
  const store = useStore((store) => {
    return store.AllDataClipBoard;
  });

  const deleteOne = useStore((store) => {
    return store.deleteOne;
  });

  const handleWriteClipboard = async (clip: Uint8Array) => {
    try {
      const arrayBuffer = new Uint8Array(clip).buffer;

      // Crear un Blob a partir del ArrayBuffer y el tipo de Blob
      const blob = new Blob([arrayBuffer], { type: 'text/html' });
      const item = new ClipboardItem({ 'text/html': blob });
      if (clip) await navigator.clipboard.write([item]);
    } catch (err) {
      console.error('Error al leer el portapapeles: ', err);
    }
  };

  const Eliminar = (id: string) => {
    deleteOne(id);
  };

  return (
    <div className='flex justify-center border-t border-black pt-3'>
      <table className='w-[95%] border-collapse border border-black '>
        <thead className='border border-black'>
          <tr>
            <td className=' font-bold border-r border-black text-center'>
              Nombre
            </td>
            <td className='flex justify-center font-bold'>Acciones</td>
          </tr>
        </thead>
        <tbody>
          {store?.map((sto) => {
            return (
              <tr key={sto.id} className='border border-black'>
                <td className='justify-center border border-black text-center'>
                  {sto.nombre}
                </td>
                <td className='flex justify-around '>
                  <button
                    className='w-[80%] border-r border-black'
                    onClick={() => {
                      handleWriteClipboard(sto.clip);
                    }}
                  >
                    Copiar
                  </button>
                  <button
                    className='w-[20%]'
                    onClick={() => {
                      Eliminar(sto.id);
                    }}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ClipboardReader;
