import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, Linking } from 'react-native';
import { Picker } from '@react-native-picker/picker';

type City = {
  name: string;
  temperature: number;
  description: string;
  img?: any;
};

const Weather: React.FC = () => {
  const cities: City[] = [
    { name: "Brasilia", temperature: 25, description: "rainy", img: require('./assets/brasilia.png') },
    { name: "Yerevan", temperature: 3, description: "clear sky", img: require('./assets/yerevan.png') },
    { name: "Moscow", temperature: 0, description: "snowy", img: require('./assets/moscow.png') },
    { name: "Beijing", temperature: 10, description: "clear sky", img: require('./assets/beijing.png') },
    { name: "Paris", temperature: 20, description: "overcast clouds", img: require('./assets/paris.png') },
    { name: "Tokyo", temperature: 15, description: "rainy", img: require('./assets/tokyo.png') },
  ];
  const [selectedCity, setSelectedCity] = useState<string>("Brasilia");
  const [currentCity, setCurrentCity] = useState<City | null>(null);

  const fetchWeather = async () => {
    console.log(`Fetching weather for ${selectedCity}`);
    try {
      const res = await fetch(`http://10.0.2.2:3000/api/weather/${selectedCity}`);
      const resData = await res.json();
      const cityMeta = cities.find(city => city.name === selectedCity);
      setCurrentCity({
        name: selectedCity,
        temperature: resData.data.main.temp,
        description: resData.data.weather[0].description,
        img: cityMeta?.img || '',
      });
    } catch (error) {
      console.error('Could not retrieve weather info', error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [selectedCity]);

  const openSite = () => {
    Linking.openURL('https://www.accuweather.com');
  };

  return (
    <View>
      <View style={styles.container}>

        <Picker
          selectedValue={selectedCity}
          onValueChange={(value) => setSelectedCity(value)}
          style={{ width: 200 }}
        >
          {cities.map(city => (
            <Picker.Item key={city.name} label={city.name} value={city.name} />
          ))}
        </Picker>

        {currentCity && (
          <>
            <Text style={styles.city}>{currentCity.name}</Text>
            <Text style={styles.temp}>{currentCity.temperature}°C</Text>
            <Text style={styles.desc}>{currentCity.description}</Text>
            <Image source={currentCity.img} style={styles.image} />
          </>
        )}

        <Button title="Open AccuWeather" onPress={openSite} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 20,
    color: '#00796b',
  },
  desc: {
    fontSize: 16,
    marginVertical: 8,
    color: '#555',
  },
  image: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Weather;
