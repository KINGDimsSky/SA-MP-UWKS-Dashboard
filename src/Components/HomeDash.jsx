import React from 'react'
import BoxData from './BoxData'
import { Users, Activity, Gamepad, Zap } from 'lucide-react';
import Stats from './Stats';


const HomeDash = () => {
  return (
    <div className="flex flex-col md:items-center">
       <div className="flex flex-wrap gap-6 mb-12">
         <BoxData background="bg-yellow-200" icon={Users} title="Player Info" data="102 Player"/>
         <BoxData background="bg-pink-200" icon={Activity} title="Server Status" data="Active"/>
         <BoxData background="bg-green-200" icon={Gamepad} title="Gamemode" data="Roleplay"/>
         <div className="bg-blue-900 w-[26em] flex flex-col items-center p-4">
            <h2 className='text-white font-semibold text-xl mb-4'>Server Running Fluenlty</h2>
            <Zap size={45} className='text-white'/>
         </div>
       </div>
       <div className="flex flex-col px-2 md:px-6 rounded-lg py-6 shadow-xl bg-gray-100 w-full  md:w-[75rem]">
          <div className="flex justify-between mb-8">
            <div className="flex flex-col gap-1">
             <h2 className='font-semibold'>UWKS Roleplay</h2>
             <h2 className='text-sm text-gray-500'>Reality Project V.21</h2>
            </div>
            <div className="flex gap-12">
             <Stats title="Max Players" data="1000"/>
             <Stats title="Player Count" data="102 / 1000"/>
            </div>
          </div>
          <div className="playerList bg-white p-2 h-[26.3rem] overflow-y-scroll overflow-x-hidden border border-gray-200  rounded-md">
            <h2 className='mb-2'>Testing</h2>
           <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, hic earum saepe accusamus sequi perspiciatis, nihil iure dicta officiis consequuntur a facere, numquam expedita nostrum consectetur voluptate illum totam eaque corrupti aliquam esse explicabo corporis maxime! Voluptate architecto omnis corporis tempore, suscipit reprehenderit quos quasi recusandae, sequi eveniet iste ipsam, eaque ipsa adipisci amet! Ipsa, dicta maiores! Est id optio, iure deserunt ipsa autem aliquam explicabo adipisci ipsam possimus, excepturi, facilis delectus. Dicta est distinctio delectus aliquid neque cupiditate eveniet ipsum dolorum, eos eum consectetur et perferendis sed dolorem natus eaque consequatur similique ad voluptatibus impedit ullam quo fuga nam repudiandae? Consectetur impedit cumque quidem? Excepturi earum et a sed maxime corrupti obcaecati sapiente, aperiam id, totam reprehenderit fuga quam neque aliquam laudantium atque. Porro, vitae delectus aliquam quos repellendus eius vero illum totam at minima, ratione voluptatibus quasi accusamus facilis quia in commodi nam. Quis vero, iusto corrupti vel minima omnis quibusdam similique nisi quod accusantium neque, mollitia minus dignissimos consectetur in iste numquam! In ipsam explicabo nam voluptates tempora! Vero aperiam, possimus facilis velit temporibus distinctio expedita laudantium rem tempore reiciendis obcaecati at aliquam eveniet molestiae a autem voluptatem repudiandae, adipisci minus nesciunt magnam! Dignissimos deleniti aliquid maiores reiciendis perferendis numquam deserunt voluptas nemo quis sunt quaerat exercitationem amet ad quam laborum, laboriosam cum placeat veritatis aspernatur debitis expedita molestias ex quibusdam? Animi architecto odio enim in dicta. Voluptatem architecto minus obcaecati exercitationem aspernatur impedit rerum officiis repellat vero? Adipisci, nulla veniam! Consequatur blanditiis veritatis deserunt! Doloremque soluta, dolore ipsa facere expedita ex alias voluptas laudantium debitis exercitationem magnam nobis veniam provident dignissimos non cumque corporis? Numquam libero labore suscipit quis sequi aspernatur. Adipisci officiis fuga accusamus? Corrupti velit impedit temporibus facere sequi libero ipsam ex omnis deserunt cupiditate officiis consectetur, officia quis! Ad qui perferendis explicabo iure, cum asperiores assumenda dolore voluptatibus tenetur? Iure qui minus in repellendus, laborum laboriosam perspiciatis nobis facere a provident ullam ad iste dolorem. Quos, non. Reprehenderit aperiam sed rem voluptates libero ut deserunt ipsa repudiandae explicabo, optio impedit magnam veritatis illo ratione incidunt obcaecati quidem eaque. Asperiores dolor beatae laborum sed minus neque quaerat sit, quos voluptas magni quidem minima quam id nam velit, inventore quisquam molestias possimus earum voluptatum dicta quibusdam harum! Aliquam obcaecati ullam odio. Quaerat ipsum molestiae aut voluptatum placeat, autem impedit, ex mollitia temporibus nostrum harum, itaque laboriosam alias doloribus sint pariatur qui nesciunt culpa quidem cum repudiandae et libero hic. Distinctio numquam impedit doloremque facilis quibusdam delectus beatae exercitationem repudiandae saepe, voluptatibus blanditiis minus molestiae libero deserunt tenetur totam asperiores veritatis nemo aliquam rem omnis nobis amet officiis. Quibusdam, sed molestias ullam consectetur praesentium quisquam pariatur eius illo, labore molestiae unde error, est expedita atque? A repudiandae voluptate, est, excepturi adipisci ratione tenetur suscipit aperiam voluptatum dolor ad, doloribus hic consequuntur non officiis ex repellat? Provident cupiditate blanditiis explicabo ab non, libero eveniet necessitatibus earum pariatur similique quos facilis dicta quasi ut nostrum cum. Recusandae, sapiente officiis! Incidunt tenetur ea excepturi, obcaecati nulla illum ut eos.</p>
          </div>
       </div>
    </div>
   
  )
}

export default HomeDash