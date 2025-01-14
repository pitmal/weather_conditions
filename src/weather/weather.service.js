const Weathers = require('./weather.model');

const service = {
    async getAllWeather() {
        try {
            console.log('WeatherService: Fetching all weather data');
            console.log('Database:', Weathers.db?.name);
            console.log('Collection:', Weathers.collection?.collectionName);
            
            const data = await Weathers.find().sort({ ts: -1 });
            
            if (!data || data.length === 0) {
                console.log('No weather data found in database');
            } else {
                console.log(`Found ${data.length} weather records`);
            }
            
            return data;
        } catch (error) {
            console.error('Error in getAllWeather:', error);
            throw new Error(`Failed to fetch weather data: ${error.message}`);
        }
    },

    async getWeatherById(id) {
        try {
            console.log(`WeatherService: Fetching weather record with id: ${id}`);
            return await Weathers.findById(id);
        } catch (error) {
            console.error(`Error in getWeatherById: ${error}`);
            throw new Error(`Failed to fetch weather record: ${error.message}`);
        }
    },

    async createWeather(weatherData) {
        try {
            console.log('WeatherService: Creating new weather record');
            const weather = new Weathers(weatherData);
            return await weather.save();
        } catch (error) {
            console.error('Error in createWeather:', error);
            throw new Error(`Failed to create weather record: ${error.message}`);
        }
    },

    async updateWeather(id, weatherData) {
        try {
            console.log(`WeatherService: Updating weather record with id: ${id}`);
            // const weather = await Weathers.findById(id);
            // if (!weather) return null;
            
            // Object.assign(weather, weatherData);
            // return await weather.save();

            const weather = await Weathers.findByIdAndUpdate(id,{$set:{...weatherData}},{new:true})
            return weather
            
        } catch (error) {
            console.error(`Error in updateWeather: ${error}`);
            throw new Error(`Failed to update weather record: ${error.message}`);
        }
    },

    async deleteWeather(id) {
        try {
            console.log(`WeatherService: Deleting weather record with id: ${id}`);
            const weather = await Weathers.findById(id);
            if (!weather) return null;
            
            await weather.deleteOne();
            return weather;
        } catch (error) {
            console.error(`Error in deleteWeather: ${error}`);
            throw new Error(`Failed to delete weather record: ${error.message}`);
        }
    },

    async getWeatherByLocation(location) {
        try {
            console.log(`Searching for weather data near location: ${location}`);
            const data = await Weathers.find({ 
                location: { $regex: new RegExp(location, 'i') }
            }).sort({ ts: -1 });
            console.log(`Found ${data.length} records near location`);
            return data;
        } catch (error) {
            console.error('Error in getWeatherByLocation:', error);
            throw new Error(`Failed to fetch weather by location: ${error.message}`);
        }
    },

    async getLatestWeather() {
        try {
            console.log('Fetching latest weather record...');
            const data = await Weathers.findOne().sort({ ts: -1 });
            if (data) {
                console.log('Found latest record from:', data.ts);
            } else {
                console.log('No weather records found');
            }
            return data;
        } catch (error) {
            console.error('Error in getLatestWeather:', error);
            throw new Error(`Failed to fetch latest weather: ${error.message}`);
        }
    }
};

module.exports = service;
