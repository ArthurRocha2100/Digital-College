import { useEffect, useState } from 'react'
import { Card, CardsList, Header, Footer, Search } from '../../components/index'
import { DevResult } from '../../api/api.props'
import { getDevs } from '../../api/api'



export const HomePage =() => {
  const [searchTerm, setSearchTerm] = useState('')
  const [cardsList, setCardsList] = useState<DevResult[]>([])
  
  const filteredList = cardsList.filter((dev) => 
  dev.name.toLowerCase().includes(searchTerm.toLowerCase()))

  useEffect(() => {
    getDevs().then(result => setCardsList(result))
  },[])

  return (
    <>
      <Header 
        search={
          <Search onFilterChange={(term) => setSearchTerm(term)}/>
        }
      />
      <CardsList>
        {filteredList.map((dev) => (
          <Card 
            imageUrl={dev.imageUrl}
            name={dev.name}
            office={dev.office}
          />
        ))}
      </CardsList>
      <Footer />
    </>
  )
}
