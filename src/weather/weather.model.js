const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    position: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    airTemperature: {
        value: Number,
        quality: String
    },
    dewPoint: {
        value: Number,
        quality: String
    },
    pressure: {
        value: Number,
        quality: String
    },
    visibility: {
        distance: {
            value: Number,
            quality: String
        },
        variability: {
            value: String,
            quality: String
        }
    },
    skyCondition: {
        cavok: String
    },
    precipitationEstimatedObservation: {
        discrepancy: String,
        estimatedWaterDepth: Number
    },
    skyConditionObservation: {
        totalCoverage: {
            value: String,
            opaque: String,
            quality: String
        },
        lowestCloudCoverage: {
            value: String,
            quality: String
        },
        lowCloudGenus: {
            value: String,
            quality: String
        },
        lowestCloudBaseHeight: {
            value: Number,
            quality: String
        },
        midCloudGenus: {
            value: String,
            quality: String
        },
        highCloudGenus: {
            value: String,
            quality: String
        }
    },
    atmosphericPressureChange: {
        tendency: {
            code: String,
            quality: String
        },
        quantity3Hours: {
            value: Number,
            quality: String
        },
        quantity24Hours: {
            value: Number,
            quality: String
        }
    },
    seaSurfaceTemperature: {
        value: Number,
        quality: String
    },
    waveMeasurement: {
        waves: {
            period: Number,
            height: Number,
            quality: String
        },
        seaState: {
            code: String,
            quality: String
        },
        method: String
    },
    st: String,
    ts: Date,
    elevation: Number,
    callLetters: String,
    qualityControlProcess: String,
    dataSource: String,
    type: String,
    sections: [String],
    pastWeatherObservationManual: [{
        atmosphericCondition: {
            value: String,
            quality: String
        },
        period: {
            value: Number,
            quality: String
        }
    }],
    presentWeatherObservationManual: [{
        condition: String,
        quality: String
    }]
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});



module.exports = mongoose.model('Weathers', weatherSchema);
