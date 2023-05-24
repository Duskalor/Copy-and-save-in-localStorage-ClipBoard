import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ClipboardReader from './components/ClipboardReader';
import { Form } from './components/Form';
import { useEffect } from 'react';
import { useStore } from './store/store';

function App() {
  const loadData = useStore((store) => store.loadData);
  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <BrowserRouter>
      <div className='flex flex-col mx-auto h-[250px] w-[300px]  bg-fondo-500 app tracking-widest border border-black '>
        <h1 className='flex justify-center py-3 font-bold text-2xl'>
          Copiar Datos
        </h1>
        <div className='flex justify-between  py-0 border-t border-black'>
          <Link
            to='/form'
            className='flex justify-center p-2 w-full border-r border-black font-bold '
          >
            Agregar
          </Link>
          <Link to='/' className='flex justify-center p-2 w-full font-bold'>
            Lista
          </Link>
        </div>
        <Routes>
          {/* <Route path='/' element={<Test1 />} /> */}
          <Route path='/' element={<ClipboardReader />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
