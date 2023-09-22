import { useWeather } from "../hooks/useWeather"

const WResponse = () => {
  const { result } = useWeather()
  const { main } = result
  const kelvin = 273.15
  const imgUrl = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`

  return (
    <div className="container-weather">
      <h2>Currently in {result.name}</h2>
      
      <div className="current">
        <p className="temp-current">
          {parseInt(main.temp - kelvin)} <span>&#8451;</span>
        </p>

        <img src={imgUrl} alt="wheather-icon" />
      </div>

      <div className="temp-min-max">
        <p>
          Min: {parseInt(main.temp_min - kelvin)} <span>&#8451;</span>
        </p>

        <p>
          Max: {parseInt(main.temp_max - kelvin)} <span>&#8451;</span>
        </p>
      </div>

    </div>
  )
}

export default WResponse
