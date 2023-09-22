import axios from "axios"
import { useState, createContext } from "react"

const WeatherContext = createContext()

const WeatherProvider = ({ children }) => {
  const [search, setSearch] = useState({
    city: '',
    country: ''
  })
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)
  const [noResult, setNoResult] = useState('')

  const handleSearch = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const handleAPI = async (data) => {
    setLoading(true)
    try {
      const { city, country } = data
      const appId = import.meta.env.VITE_API_KEY

      const geoCall = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
      const { data: geoRes } = await axios(geoCall)
      const { lat, lon } = geoRes.coord

      const weatherCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
      const { data: weather } = await axios(weatherCall)

      setLoading(false)
      setNoResult('')
      setResult(weather)
    } catch (error) {
      setLoading(false)
      setResult({})
      setNoResult('Place Not Found')
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        search,
        handleSearch,
        handleAPI,
        result,
        loading,
        noResult
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export {
  WeatherContext
}
export default WeatherProvider
