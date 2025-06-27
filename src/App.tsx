import styles from './App.module.css'
import Form from './components/Form/Form'
import WeatherDetails from './components/WeatherDetails/WeatherDetails'
import useWeather from './hooks/useWeather'
import Spinner from './components/Spinner/Spinner'

function App() {

  const { weather, loading, fetchWeather, hasWeatherData } = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />

        {loading && <Spinner />}
        {hasWeatherData && (
          <WeatherDetails
            weather={weather}
          />
        )}
      </div>
    </>
  )
}

export default App
