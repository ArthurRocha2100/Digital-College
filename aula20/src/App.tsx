import { useState } from 'react'
import { Card, CardsList, Header, Footer, Search } from './components/index'


const cardList = [
  {
      imageUrl: 'https://i.pravatar.cc/150?img=1',
      name: 'Fulano',
      office: 'Full Stack'
  },
  {
      imageUrl: 'https://i.pravatar.cc/150?img=2',
      name: 'Tião',
      office: 'Font-End'
  },  
  {
      imageUrl: 'https://i.pravatar.cc/150?img=3',
      name: 'Zé',
      office: 'Back-End'
  },    
  {
      imageUrl: 'https://i.pravatar.cc/150?img=4',
      name: 'Ana',
      office: 'QA'
  },
  {
      imageUrl: 'https://i.pravatar.cc/150?img=5',
      name: 'Luiz',
      office: 'Técnico de redes'
  },
  {
      imageUrl: 'https://i.pravatar.cc/150?img=6',
      name: 'Chico',
      office: 'Puxador de cabo'
  },
  {imageUrl: 'https://i.pravatar.cc/150?img=7',
      name: 'Mundico',
      office: 'UX'
  },
  {
      imageUrl: 'https://i.pravatar.cc/150?img=8',
      name: 'Cicrano',
      office: 'DevOps'
  },
  {
      imageUrl: 'https://i.pravatar.cc/150?img=9',
      name: 'Tux',
      office: 'A Lenda'
  },
]

function App() {

  const [searchTerm, setSearchTerm] = useState('')

  const filteredList = cardList.filter((dev) => dev.name.toLowerCase().includes(searchTerm.toLowerCase()))


  return (
    <>
      <Header 
        search={
          <Search onFilterCharge={(term) => setSearchTerm(term)}/>
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

export default App
