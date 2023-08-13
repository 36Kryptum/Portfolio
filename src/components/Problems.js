import {TiTrash} from 'react-icons/ti'
import {BiUnlink, BiTrendingDown} from 'react-icons/bi'
import {GiPayMoney} from 'react-icons/gi'

export default function Problems() {
    return (
        <div className="max-w-screen-xl mx-auto px-4 text-center">
   <h2 className="text-center text-primary dark:text-white my-2 text-3xl font-semibold mb-10">Folgende Probleme machen dir zu schaffen?</h2>
   <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="border bg-white border-zinc-400 dark:border-white rounded p-4 hover:scale-105 duration-300">
         <TiTrash size={35} className='text-accent dark:text-primary mx-auto'/>
         <h3 className="text-center text-primary my-2 text-xl font-bold">Deine Website ist veraltet und das Design ist nicht mehr ansprechend</h3>
      </div>
      <div className="border bg-white border-zinc-400 dark:border-white rounded p-4 hover:scale-105 duration-300">
      <BiUnlink size={35} className='text-accent dark:text-primary mx-auto'/>
         <h3 className="text-center text-primary my-2 text-xl font-bold">Inhalte und Fotos der Website spiegeln nicht mehr dein Angebot wider</h3>
      </div>
      <div className="border bg-white border-zinc-400 dark:border-white rounded p-4 hover:scale-105 duration-300">
      <GiPayMoney size={35} className='text-accent dark:text-primary mx-auto'/>
         <h3 className="text-center text-primary my-2 text-xl font-bold">Du möchtest keinen hohen Fixpreis für deine Website zahlen</h3>
      </div>
      <div className="border bg-white border-zinc-400 dark:border-white rounded p-4 hover:scale-105 duration-300">
      <BiTrendingDown size={35} className='text-accent dark:text-primary mx-auto'/>
         <h3 className="text-center text-primary my-2 text-xl font-bold">Konkurrenz aus dem Internet nimmt immer mehr zu</h3>

      </div>
   </div>
</div>
    )
}

