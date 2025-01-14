const service = require('./weather.service');

const controller = {
    async getAllWeather(req, res) {
        try {
            console.log('GET / - Fetching all weather data');
            const data = await service.getAllWeather();
            res.json(data);
        } catch (err) {
            console.error('Error in getAllWeather controller:', err);
            res.status(500).json({ message: err.message });
        }
    },

    async getWeatherById(req, res) {
        try {
            const { id } = req.params;
            console.log(`GET /${id} - Fetching single record`);
            const weather = await service.getWeatherById(id);
            
            if (weather) {
                res.json(weather);
            } else {
                res.status(404).json({ message: 'Weather record not found' });
            }
        } catch (err) {
            console.error('Error in getWeatherById controller:', err);
            res.status(500).json({ message: err.message });
        }
    },

    async createWeather(req, res) {
        try {
            console.log('POST / - Creating new record:', req.body);
            const newWeather = await service.createWeather(req.body);
            console.log('Successfully created record:', newWeather._id);
            res.status(201).json(newWeather);
        } catch (err) {
            console.error('Error in createWeather controller:', err);
            res.status(400).json({ message: err.message });
        }
    },

    async updateWeather(req, res) {
        try {
            const { id } = req.params;
            console.log(`PUT /${id} - Updating record:`, req.body);

            //########### create service here ###########

            res.status(501).json({ message:"Create service here" })
          
        } catch (err) {
            console.error('Error in updateWeather controller:', err);
            res.status(400).json({ message: err.message });
        }
    },

    async deleteWeather(req, res) {
        try {
            const { id } = req.params;
            console.log(`DELETE /${id} - Deleting record`);
            const weather = await service.deleteWeather(id);
            
            if (weather) {
                console.log('Successfully deleted record');
                res.json({ message: 'Weather record deleted' });
            } else {
                res.status(404).json({ message: 'Weather record not found' });
            }
        } catch (err) {
            console.error('Error in deleteWeather controller:', err);
            res.status(500).json({ message: err.message });
        }
    }
};

module.exports = controller;
