export const formatDateToLocal = (
  dateStr: string | number,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    dateStyle: 'full',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const formatTimeToLocal = (
  dateStr: string | number,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    timeStyle: 'long',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const metersPerSecondToMilesPerHour = (
  metersPerSecond: number,
): number => {
  return metersPerSecond * 2.23694;
};

export const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};

export const hectoPascalsToInchesOfMercury = (hectoPascals: number): number => {
  return hectoPascals * 0.02953;
};

export const unixToIsoString = (unixTime: number): string => {
  return new Date(unixTime * 1000).toISOString();
};

export const unixToTimeSince = (unixTime: number): string => {
  const currentTime = Math.floor(new Date().getTime() / 1000);
  const delta = currentTime - unixTime;
  // Future time
  if (delta < 0) {
    const absDelta = Math.abs(delta);
    if (absDelta < 60) {
      return `in ${absDelta} seconds`;
    } else if (absDelta < 3600) {
      return `in ${Math.floor(absDelta / 60)} minutes`;
    } else {
      return `in ${Math.floor(absDelta / 3600)} hours`;
    }
  }
  // Past time
  if (delta < 60) {
    return `${delta} seconds ago`;
  } else if (delta < 3600) {
    return `${Math.floor(delta / 60)} minutes ago`;
  } else {
    return `${Math.floor(delta / 3600)} hours ago`;
  }
};

export const unixTo12HourTime = (unixTime: number): string => {
  const date = new Date(unixTime * 1000);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const strMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${strMinutes} ${ampm}`;
};

export const getFinalUnit = (type: WeatherType, units: Units) => {
  const unitMapMetric = {
    temperature: '°C',
    humidity: '%',
    pressure: 'hPa',
    wind: 'm/s',
  };
  const unitMapImperial = {
    temperature: '°F',
    humidity: '%',
    pressure: 'inHg',
    wind: 'mph',
  };
  return units === 'metric' ? unitMapMetric[type] : unitMapImperial[type];
};

export const getFinalValue = (
  type: 'temperature' | 'wind' | 'pressure' | 'humidity',
  value: number | string,
  units: Units,
): number | string => {
  let finalValue;
  switch (type) {
    case 'temperature':
      finalValue =
        units === 'imperial'
          ? celsiusToFahrenheit(Number(value)).toFixed(2)
          : value;
      break;
    case 'wind':
      finalValue =
        units === 'imperial'
          ? metersPerSecondToMilesPerHour(Number(value))
          : value;
    case 'pressure':
      finalValue =
        units === 'imperial'
          ? hectoPascalsToInchesOfMercury(Number(value))
          : value;
    default:
      finalValue = value;
      break;
  }
  return finalValue;
};

import { ISO31661AssignedEntry, iso31661 } from 'iso-3166/1';
import { Irradiance, IrradianceDaily, IrradianceHourly, SolarIrradianceDataResponse, Units, WeatherType } from './types';

export const getCountryName = (alpha2: string): string | undefined => {
  const countryData = iso31661.find(
    (country: ISO31661AssignedEntry) => country.alpha2 === alpha2,
  );
  return countryData?.name;
};

export const getGreenTip = () => {
  const tips = [
    "Use public transportation to reduce your carbon footprint.",
    "Consider using energy-efficient appliances.",
    "Utilize natural light as much as possible during the day to save energy on lighting.",
    "Collect rainwater to water your garden and reduce the use of tap water.",
    "Adjust your thermostat by one degree warmer in summer and cooler in winter to save on energy bills.",
    "Practice the 3Rs: Reduce waste, reuse resources, and recycle materials to minimize your environmental impact.",
    "Incorporate more plant-based meals into your diet to reduce carbon and water footprints.",
    "Bike, walk, or use public transit instead of driving to reduce your carbon emissions.",
    "Run your dishwasher and washing machine only when they are fully loaded to save water and energy.",
    "Buy local and organic produce to support sustainable agriculture and reduce transportation emissions.",
    "Conduct a home energy audit to find ways to improve energy efficiency and reduce power consumption.",
    "Choose products with minimal packaging and those made from recycled or sustainable materials.",
    "Plant trees and other vegetation around your home to improve air quality and provide natural cooling.",
    "Reduce your use of single-use plastics by opting for reusable bags, bottles, and containers.",
    "Keep your car's tires properly inflated to improve gas mileage and reduce tire wear.",
    "Go digital whenever possible to reduce paper usage; think before you print.",
    "Dress according to the weather to minimize the need for heating or air conditioning.",
    "Unplug electronic devices when not in use to save energy.",
    "Use cold water for washing clothes to reduce energy consumption.",
    "Install rain barrels to collect water for outdoor use.",
    "Use mulch in your garden to help retain moisture and reduce water usage.",
    "Opt for showers over baths to conserve water.",
    "Replace old light bulbs with LED bulbs to reduce energy use.",
    "Seal windows and doors to improve home insulation and reduce heating and cooling costs.",
    "Start a compost pile to reduce food waste and enrich your garden soil.",
    "Support renewable energy projects in your community or consider investing in solar panels.",
    "Use a programmable thermostat to better control heating and cooling in your home.",
    "Participate in local clean-up events to help keep your community green and clean.",
    "Educate others about the importance of sustainability and how they can contribute.",
    "Advocate for environmental policies at local and national levels to promote green initiatives."
  ];
  const today = new Date().getDate();
  const tipOfTheDay = tips[(today - 1) % tips.length];
  return tipOfTheDay;
}

export function getAQIRecommendation(aqi: number): string {
  if (aqi === 1) {
      return "Air quality is good. Enjoy your usual outdoor activities.";
  } else if (aqi === 2) {
      return "Air quality is fair. Unusually sensitive individuals should consider limiting prolonged outdoor exertion.";
  } else if (aqi === 3) {
      return "Air quality is moderate. Sensitive individuals should limit prolonged outdoor exertion.";
  } else if (aqi === 4) {
      return "Air quality is unhealthy. Everyone should limit prolonged outdoor exertion.";
  } else if (aqi === 5) {
      return "Air quality is very unhealthy. Everyone should avoid all outdoor exertion.";
  } else {
      return "Invalid AQI value provided.";
  }
}

// Agricultural planning
export function recommendAgriculturalStrategies(irradianceData: Irradiance): string {
  // Assuming we are calculating the average GHI from daily clear sky data
  const avgGHI = irradianceData.daily.reduce((sum: number, dailyData: IrradianceDaily) => sum + dailyData.clear_sky.ghi, 0) / irradianceData.daily.length;

  let cropRecommendation: string;
  if (avgGHI > 5000) {
      cropRecommendation = "high-light crops such as maize and sunflowers";
  } else if (avgGHI > 3000) {
      cropRecommendation = "moderate-light crops such as wheat and soybeans";
  } else {
      cropRecommendation = "low-light crops such as lettuce and spinach";
  }

  return `Your region has an average GHI of ${avgGHI.toFixed(2)}, it is recommended to plant ${cropRecommendation}. Consider using shade structures for lower light tolerance crops during peak sunlight hours.`;
}

// Building an Urban Planning
export function recommendBuildingDesign(irradianceData: Irradiance, latitude: number) {
  const maxDNI = Math.max(...irradianceData.hourly.map(data => data.clear_sky.dni));
  const orientation = latitude > 0 ? "south-facing" : "north-facing";

  let windowAdvice;
  if (maxDNI > 8000) {
      windowAdvice = "installing reflective or smaller windows to reduce heat gain";
  } else {
      windowAdvice = "large windows to maximize natural light intake";
  }

  return `For building designs at a latitude of ${latitude}, it is advised to have ${orientation} windows. Given the peak DNI of ${maxDNI}, consider ${windowAdvice}. Additionally, incorporating overhangs or external shades during summer months can optimize indoor climate control.`;
}

export function analyzeEnvironmentalImpact(irradianceData: Irradiance) {
  const changes = irradianceData.hourly.map((data, index: number, array) => {
      if (index === 0) return 0;
      return data.clear_sky.ghi - array[index - 1].clear_sky.ghi;
  });
  const increasing = changes.filter(change => change > 0).length;
  const decreasing = changes.length - increasing;

  let environmentalImpact;
  if (increasing > decreasing) {
      environmentalImpact = "potential increase in evapotranspiration and faster ecosystem dynamics";
  } else {
      environmentalImpact = "reduced photosynthetic activity and possible cooling effects on microclimates";
  }

  return `Based on solar irradiance trends, there is a ${environmentalImpact}. Monitoring these trends is crucial for predicting changes in local biodiversity and water resource management.`;
}

export function calculateSolarPowerGeneration(sunlightHours: number, cloudPercentage: number, panelArea: number, panelEfficiency: number): number {
  const solarIrradiance: number = 1; // kW/m² per hour

  // Adjust irradiance based on cloud cover
  // Assuming cloud cover linearly decreases solar irradiance
  const effectiveIrradiance: number = solarIrradiance * (1 - cloudPercentage / 100);

  // Total energy generated in one day, considering sunlight hours and reduced irradiance by cloud cover
  const dailyEnergy: number = effectiveIrradiance * sunlightHours * panelArea * panelEfficiency;

  return dailyEnergy; // Returns the energy in kWh
  // return `Today, your solar panels generated ${dailyEnergy.toFixed(2)} kWh of energy. This amount reflects the total electrical power your solar system was able to produce under today's weather conditions. Monitoring this daily output helps assess whether your solar power meets your energy needs, and it guides energy management and system performance evaluation.`
}

export function calculateSunlightHours(sunrise: number, sunset: number): string {
  // Convert Unix timestamps from seconds to milliseconds by multiplying by 1000
  const sunriseDate = new Date(sunrise * 1000);
  const sunsetDate = new Date(sunset * 1000);

  // Calculate the duration in hours between sunrise and sunset
  const daylightDuration = (sunsetDate.getTime() - sunriseDate.getTime()) / 3600000; // Convert milliseconds to hours

  // Return the duration formatted to two decimal places
  return daylightDuration.toFixed(2);
}


export function estimateCloudPercentage(actualGHI: any, clearSkyGHI: any) {
  if (clearSkyGHI === 0) return 0; // Avoid division by zero
  const reduction = (1 - (actualGHI / clearSkyGHI)) * 100;
  return reduction.toFixed(2); // Return the percentage of cloud cover
}

// const sunlightHours = calculateSunlightHours(dayData.sunrise, dayData.sunset);
// const cloudPercentage = estimateCloudPercentage(dayData.irradiance.cloudy_sky.ghi, dayData.irradiance.daily[0].clear_sky.ghi);