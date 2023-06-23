// import { useTranslation } from 'react-i18next'
// import {HiOutlineLightBulb} from 'react-icons/hi'
// import {FaWarehouse, FaAudioDescription, FaSlideshare, FaMobileAlt, FaLaptopCode} from 'react-icons/fa'
// import'./services.scss';

// const Servies = () => {
//   const icons = [
//     {
//       id:1,
//       icon:<FaLaptopCode />
//     },
//     {
//       id:2,
//       icon:<FaMobileAlt />
   
//     },
//     {
//       id:3,
//       icon:<HiOutlineLightBulb />
   
//     },
//     {
//       id:4,
//       icon:<FaWarehouse />
   
//     },
//     {
//       id:5,
//       icon:<FaSlideshare />
   
//     },
//     {
//       id:6,
//       icon:<FaAudioDescription />
   
//     }

//   ]
//   const {t} = useTranslation()
//   const servies = t('servies' ,{returnObjects:true})
//   return (
// <section className='servies'>
//     <div className="container">
      
//             <h1 className='text-center heda-center'> {t("servies_header")}</h1>
//             <p className='text-center txt-services'>{t("servies_text")}</p>
//             <div className="our-servies">
//                 <div className="row">
//                 {
//                       servies.map((item) => {
//                         const icon = icons.find((i) => i.id === item.id)
//                         return (
//                           <div key={item.id} className="col-6">
//                           <div className="item">
//                           <div className="gap">
//                             <div className="row">
//                             <div className="col-2">
//                               <div className="icon">{icon && <span>{icon.icon}</span>}</div>
//                               </div>
//                               <div className="col-10">
//                                 <div className="content">
//                                 <h4> {item.header}</h4>
//                                   <p>{item.text}</p>
//                                 </div>
//                               </div>
//                             </div>

//                           </div>
//                           </div>
                      
//                       </div>
//                         )
//                       })
//                     }
//                 </div>
               
            
//             </div>
        
//         </div>
    

 

// </section>
//   )
// }

// export default Servies
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Singleitem from './Singleitem.jsx'
import './services.scss'

const Services = () => {
  const { t } = useTranslation()
  const services = t('servies', { returnObjects: true })
  const unque_headers = [...new Set(services.map((serv) => serv.header))]
const [index , setindex] = useState(0)

  return (
    <div className='servies'>
        <div className="container">
        <div className="servies_container">

                  <div className="row">
                      <div className="col-4">
                          <div className="catgerys">
                                {
                                  unque_headers.map((header, i) => {
                                    return (
                                      <button  onClick={() => setindex(i)} className= { index === i ? ' catge-headers active_catgery ' : 'catge-headers'} key={header}> {header}</button>
                                    )
                                  })
                                }
                          </div>
                      </div>
                      <Singleitem  services = {services} index = {index}/>
                
                </div>
        
        
        </div>
         
        
        </div>
      
    </div>
  )
}

export default Services
