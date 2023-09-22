import { useWeather } from "../hooks/useWeather"

const NoResult = () => {
  const { noResult } = useWeather()

  return (
    <div className="container-no-result">
      <h2>{noResult}</h2>
    </div>
  )
}

export default NoResult
