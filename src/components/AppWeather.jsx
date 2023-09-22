import { useWeather } from "../hooks/useWeather"
import Form from "./Form"
import NoResult from "./NoResult"
import Spinner from "./Spinner"
import WResponse from "./WResponse"

const AppWeather = () => {
  const { result, loading, noResult } = useWeather()

  return (
    <main className="two-columns">
      <Form />

      {
        loading ? <Spinner /> :
        result?.name ? <WResponse /> :
        noResult && <NoResult />
      }

    </main>
  )
}

export default AppWeather
