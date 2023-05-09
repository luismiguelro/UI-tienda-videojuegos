
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
function App() {
 

  return (
    <div className='min-h-screen'>
     <Header />
     <main className='h-[90vh] flex p-8 '>
      <Sidebar/>
      <div className='bg-blue-300 flex-1 h-full overflow-y-scroll'>
      </div>
     </main>
    </div>
   
  )
}

export default App
