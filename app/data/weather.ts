export type WeatherDataType = {
  date: string
  dateLabel: string
  telop: string
}

export const requestWeather = async () => {
  const weather = await fetch(
    "https://weather.tsukumijima.net/api/forecast/city/400040"
  ).then((res) => res.json())

  if (!weather["forecasts"]) return
  return weather["forecasts"].map((forecast: any) => {
    return {
      date: forecast.date,
      dateLabel: forecast.dateLabel || "日付不明",
      telop: forecast.telop || "天候不明",
    }
  })
}
