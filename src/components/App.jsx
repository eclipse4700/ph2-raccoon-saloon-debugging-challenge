import { useState, useEffect } from 'react'
import RaccoonsContainer from './RaccoonsContainer'
import RaccoonForm from './RaccoonForm'

function App() {

  const [ lightMode, setLightMode ] = useState( false )
  const [ audioOn, setAudioOn ] = useState( true )

  const [ raccoonsArr, setRaccoonsArr ] = useState( [] )
  // const [ raccoonsArr, setRaccoonsArr ] = useState( '' )

  function handleLightModeClick(event) {
    setLightMode( !lightMode )
    // setLightMode( lightMode )
  }

  useEffect( () => {

    fetch("http://localhost:5555/raccoons")
    // fetch("http://localhost:5555/racons")
    .then( res => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Unable to fetch data!')
      }
    })
    .then( data => setRaccoonsArr(data) )
    .catch(err => alert(err))

  }, [])

  return (
    <div className={lightMode ? "App lightmode" : "App darkmode"}>

      {/* Header */}

      <header>

        <button className="light-mode-button" onClick={ handleLightModeClick }>
          { lightMode ? "Switch to Dark Mode" : "Switch to Light Mode" }
        </button>

        <button className="audio-on-button" onClick={ () => setAudioOn(prev => !prev) } >
          { audioOn ? "🔊" : "🙉" }
        </button>

        <h1 className="site-title">Raccoon Saloon</h1>

        <h2 className="site-subtitle">All Raccoons All The Time 🦝</h2>

      </header>

      {/* Main Container */}

      <main>

        <RaccoonsContainer raccoonsArr={raccoonsArr} audioOn={audioOn} />

        <RaccoonForm setRaccoonsArr={setRaccoonsArr} raccoonsArr={raccoonsArr} />
        {/* <RaccoonForm raccoonsArr={raccoonsArr} /> */}

      </main>


    </div>
  )

}

export default App;