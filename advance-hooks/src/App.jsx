import { useEffect, useState, useMemo,useRef, useCallback } from 'react'
import Counter from './components/Counter'
import './App.css'
import ListItems from './components/ListItems'

function App() {

  const [theme, setTheme] = useState('light')
  const [showCounter, setShowCounter] = useState(true)
  const [listSize, setListSize] = useState(5)
  const prevSize = useRef(listSize)

  const manyTimes = useRef(0)

  const themeStyles = useMemo(() => {
    return {
      main: {
        backgroundColor: theme === 'light' ? 'white' : '#313131',
        color: theme === 'light' ? 'black' : 'white'
      },
      code: {
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#191919',
      },
      input: {
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#191919',
        color: theme === 'light' ? 'black' : 'white'
      }
    }
  }, [theme])


  useEffect(() => {
    //console.log('New Theme: ', themeStyles)
  }, [themeStyles])

  const getListItems = useCallback((params) => {
    console.log('getList')
    return Array.from({ length: listSize }).map((value, index) => {
      return index
    })
  },[listSize])
  
  const handleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const showCounterHandler = () => {
    setShowCounter(!showCounter)
  }

  const handleListSize = (e) => {
    prevSize.current = listSize
    setListSize(e.target.value)
  }

  return (
    <main style={themeStyles.main}>
      <section >
        <h1>Advance Hooks</h1>
        <input style={themeStyles.input} type="number" value={listSize} onChange={handleListSize} />
        <button onClick={handleTheme}>Change theme</button>
        <button onClick={showCounterHandler}>{showCounter ? 'Show RandomList' : 'Show Counter'}</button>
        {showCounter ? <Counter themeStyles={themeStyles} theme={theme} /> :
          <ListItems listSize={listSize} getListItems={getListItems} />
        }
        <p>Prev List Size: {prevSize.current} new List Size: {listSize}</p>
      </section>
    </main>
  )

}


export default App
