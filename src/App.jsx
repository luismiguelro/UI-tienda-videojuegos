
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
function App() {
 

  return (
    <div className='min-h-screen'>
     <Header />
     <main className='h-[90vh] flex p-8 gap-8 '>
      <Sidebar/>
      <div className='flex-1 h-full overflow-y-scroll'>
        {/*Portada*/}
        <div className='rounded-2xl mb-4'>
          <img className='w-full h-[500px] object-cover object-right md:object-top rounded-2xl' src="https://images4.alphacoders.com/115/thumb-1920-1151249.jpg" alt="" />
        </div>
        <div className='flex items-center justify-between flex-wrap md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <Card img='https://gmedia.playstation.com/is/image/SIEPDC/god-of-war-ragnarok-store-art-01-10sep21$ru?$native$' title='God of War: Ragnarök' category='PS5' price ='69,99'/>

          <Card img='https://i.3djuegos.com/juegos/17054/horizon_zero_dawn_2/fotos/ficha/horizon_zero_dawn_2-5596826.jpg' title='Horizon Forbidden West' category='PS5' price ='59,99'/>
          <Card img='https://i.3djuegos.com/juegos/17768/sifu/fotos/ficha/sifu-5605968.jpg' title='SIFU' category='PS5' price ='29,99'/>
          <Card img='https://e00-marca.uecdn.es/assets/multimedia/imagenes/2021/11/19/16373399566200.jpg' title='Gran Turismo 7' category='PS4' price ='69,99'/>
          <Card img="https://media.vandal.net/m/82925/call-of-duty-warzone-20203102215835_1.jpg"  title="Call of Duty: Warzone" category="PC"price="59,99"/>
            <Card img="https://image.api.playstation.com/vulcan/img/rnd/202111/0822/zDXM9K2cQiq0vKTDwF0TkAor.png" title="FIFA 22" category="Xbox Series X" price="119,99"/>
        </div>
      </div>
     </main>
    </div>
   
  )
}

export default App
