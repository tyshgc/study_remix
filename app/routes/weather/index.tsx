import { useLoaderData } from "remix"
import { WeatherDataType, requestWeather } from "~/data/weather"

export const loader = (): Promise<WeatherDataType[]> => {
  return requestWeather()
}

export default function Weather() {
  const weathers = useLoaderData() as WeatherDataType[]

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {weathers.map((weather, index) => (
          <li key={index}>
            {weather.dateLabel}:{weather.telop}
          </li>
        ))}
      </ul>
    </div>
  )
}
