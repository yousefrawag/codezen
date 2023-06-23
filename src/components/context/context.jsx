import React from 'react'
import { createContext, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'


export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const {t} = useTranslation()
  const data = t("Projects" , {returnObjects:true})
  const [myData , setMyData] = useState([...data])
  const unique_Data = ["All" , ...new Set(data.map((item) => item.category))]
  const [bageid, setbageid] = useState(null)
  const [catgery_active , setcatgery_active] = useState('All')
  const FilterateItems = (catgery) => {
    setcatgery_active(catgery)
    if(catgery === "All") {
    return  setMyData([...data]);
    } 
    const newItems = data.filter((item) => item.category === catgery)
    return setMyData(newItems)

  }

  return (
    <AppContext.Provider value={{ bageid, 
    setbageid,
    myData,
    FilterateItems,
    catgery_active,
    unique_Data
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}