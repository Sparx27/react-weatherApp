import AppWeather from "./components/AppWeather"
import WeatherProvider from "./context/WeatherContext"

function App() {

  return (
    <WeatherProvider>
      <header>
        <h1>Weather Search</h1>
      </header>
      <AppWeather />
    </WeatherProvider>
  )
}

export default App
