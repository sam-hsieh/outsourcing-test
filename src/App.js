import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='content'>
          <h1>Gift <br />Guide</h1>
          <div className="button-group flex flex-wrap w-10/12 mx-auto pt-[5vh]">
            <div className='basis-1/2 text-center pl-1 pr-2 py-2'>
              <a href='/' className=' inline-block w-full rounded-full bg-black bg-opacity-30 border border-white text-white px-6 py-3'>驚喜寶庫</a>
            </div>
            <div className='basis-1/2 text-center pl-1 pr-2 py-2'>
              <a href='/' className=' inline-block w-full rounded-full bg-black bg-opacity-30 border border-white text-white px-6 py-3'>閃亮佳節</a>
            </div>
            <div className='basis-1/2 text-center pl-1 pr-2 py-2'>
              <a href='/' className=' inline-block w-full rounded-full bg-black bg-opacity-30 border border-white text-white px-6 py-3'>旅遊之樂</a>
            </div>
            <div className='basis-1/2 text-center pl-1 pr-2 py-2'>
              <a href='/' className=' inline-block w-full rounded-full bg-black bg-opacity-30 border border-white text-white px-6 py-3 '>活力旅程</a>
            </div>
          </div>
          <div className='button-footer flex divide-x my-4 w-10/12 mx-auto'>
            <div className='basis-1/2 text-center flex justify-center items-center py-4'>
              <a href='/' className='inline-block text-white'>首頁</a>
            </div>
            <div className='basis-1/2 text-center flex justify-center items-center py-4'>
              <a href='/' className='inline-block text-white'>個人化服務</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
