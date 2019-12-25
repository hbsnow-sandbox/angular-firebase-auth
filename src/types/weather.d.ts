export type weather = {
  "coord": {
    "lon": number,
    "lat": number
  },
  "weather": [
    {
      "id": number,
      "main": "Thunderstorm" | "Drizzle" | "Rain" | "Mist" | "Smoke" | "Haze" | "Dust" | "Fog" | "Sand" | "Dust" | "Ash" | "Squall" | "Tornado",
      "description": string,
      "icon": "01d" | "01n" | "02d" | "02n" | "03d" | "03n" | "04d" | "04n" | "09d" | "09n" | "10d" | "10n" | "11d" | "11n" | "13d" | "13n" | "50d" | "50n"
    }
  ],
  "base": string,
  "main": {
    "temp": number,
    "pressure": number,
    "humidity": number,
    "temp_min": number,
    "temp_max": number,
    "sea_level": number,
    "grnd_level": number
  },
  "wind": {
    "speed": number,
    "deg": number
  },
  "rain": {
    "3h": number
  },
  "clouds": {
    "all": number
  },
  "dt": number,
  "sys": {
    "message": number,
    "country": string,
    "sunrise": number,
    "sunset": number
  },
  "id": number,
  "name": string,
  "cod": number
}
