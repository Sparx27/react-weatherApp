import { useState } from "react"
import { useWeather } from "../hooks/useWeather"

const Form = () => {
  const [error, setError] = useState('')
  const { search, handleSearch, handleAPI } = useWeather()
  const { city, country } = search

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(search).includes('')) {
      setError('Both fields are required')
      setTimeout(() => {
        setError('')
      }, 2500)
    } else {
      handleAPI(search)
    } 
  }

  return (
    <div className="container">
      {
        error && <p className="error">{error}</p>
      }
      <form
        onSubmit={handleSubmit}
      >

        <div className="field">
          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            name="city"
            onChange={handleSearch}
            value={city}
          />
        </div>
        <div className="field">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            onChange={handleSearch}
            value={country}
          >
            <option value="">Select Country</option>
            <option value="UY">Uruguay</option>
            <option value="AU">Australia</option>
            <option value="US">United States</option>
            <option value="AR">Argentina</option>
            <option value="MX">Mexico</option>
            <option value="CO">Colombia</option>
            <option value="ES">Spain</option>
          </select>
        </div>

        <input
          type="submit"
          value="check the weather"
        />

      </form>
    </div>
  )
}

export default Form
