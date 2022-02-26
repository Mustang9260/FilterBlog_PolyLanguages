import List from "../List/List";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import SearchBar from "../SearchBar/SearchBar";
import { Col } from 'reactstrap'
import React,  {createContext, useState, useEffect} from "react"


const client = new ApolloClient({
  uri: 'http://jmlflaw.local/graphql',
  cache: new InMemoryCache()
})

export const Store = createContext()


function App () {
  let params = window.location.pathname.split('/')[1];
  const [Idioma, setIdioma] = useState('EN')
 const [search, setSearch] = useState("")
 const [activeCategory, setActiveCategory] = useState("All")
 const [posts, setPosts] = useState(null)

  

 useEffect(() => {
  params === "es" ? setIdioma('es') : setIdioma('en')
  params === "es" ? setActiveCategory('Todo') : setActiveCategory('All')
 if(search === ""){

  if(!posts ){
    setPosts(null)
  }
 }
 })


console.log(search, activeCategory, posts);
  return (
    <ApolloProvider client={client}>
      <Store.Provider value={{
        search,
        setSearch,
        activeCategory,
        setActiveCategory,
        posts,
        setPosts,
        Idioma,
        setIdioma,
      }}>
      
      <SearchBar />
      <Col className="title-allBlog mb-2">
      <h3>All Blogs</h3>
      </Col>
      <List />
      </Store.Provider>
    </ApolloProvider>

  )
}

export default App
