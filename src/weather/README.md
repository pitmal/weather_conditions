# Weather Data Model

This document describes the structure of the weather data model used in the application.

## Schema Structure

### Position
- **type**: Point (GeoJSON)
- **coordinates**: [longitude, latitude]

### Air Temperature
- **value**: Number
- **quality**: String

### Dew Point
- **value**: Number
- **quality**: String

### Pressure
- **value**: Number
- **quality**: String

### Visibility
- **distance**
  - value: Number
  - quality: String
- **variability**
  - value: String
  - quality: String

### Sky Condition
- **cavok**: String (Yes/No indicator)

### Precipitation Estimated Observation
- **discrepancy**: String
- **estimatedWaterDepth**: Number

### Sky Condition Observation
- **totalCoverage**
  - value: String
  - opaque: String
  - quality: String
- **lowestCloudCoverage**
  - value: String
  - quality: String
- **lowCloudGenus**
  - value: String
  - quality: String
- **lowestCloudBaseHeight**
  - value: Number
  - quality: String
- **midCloudGenus**
  - value: String
  - quality: String
- **highCloudGenus**
  - value: String
  - quality: String

### Atmospheric Pressure Change
- **tendency**
  - code: String
  - quality: String
- **quantity3Hours**
  - value: Number
  - quality: String
- **quantity24Hours**
  - value: Number
  - quality: String

### Sea Surface Temperature
- **value**: Number
- **quality**: String

### Wave Measurement
- **waves**
  - period: Number
  - height: Number
  - quality: String
- **seaState**
  - code: String
  - quality: String
- **method**: String

### Station Information
- **st**: String (Station identifier)
- **ts**: Date (Timestamp)
- **elevation**: Number
- **callLetters**: String
- **qualityControlProcess**: String
- **dataSource**: String
- **type**: String
- **sections**: Array of Strings

### Weather Observations
#### Past Weather Observation Manual
Array of:
- **atmosphericCondition**
  - value: String
  - quality: String
- **period**
  - value: Number
  - quality: String

#### Present Weather Observation Manual
Array of:
- **condition**: String
- **quality**: String

## Example Data

```javascript
{
    "position": {
        "type": "Point",
        "coordinates": [11.8, 68.4]
    },
    "airTemperature": {
        "value": 2,
        "quality": "1"
    },
    "dewPoint": {
        "value": -2,
        "quality": "1"
    },
    "pressure": {
        "value": 999.3,
        "quality": "1"
    },
    "visibility": {
        "distance": {
            "value": 4000,
            "quality": "1"
        },
        "variability": {
            "value": "N",
            "quality": "9"
        }
    },
    "skyCondition": {
        "cavok": "N"
    },
    "precipitationEstimatedObservation": {
        "discrepancy": "2",
        "estimatedWaterDepth": 2
    },
    "skyConditionObservation": {
        "totalCoverage": {
            "value": "08",
            "opaque": "99",
            "quality": "1"
        },
        "lowestCloudCoverage": {
            "value": "08",
            "quality": "1"
        },
        "lowCloudGenus": {
            "value": "09",
            "quality": "1"
        },
        "lowestCloudBaseHeight": {
            "value": 450,
            "quality": "1"
        },
        "midCloudGenus": {
            "value": "99",
            "quality": "9"
        },
        "highCloudGenus": {
            "value": "99",
            "quality": "9"
        }
    },
    "atmosphericPressureChange": {
        "tendency": {
            "code": "2",
            "quality": "1"
        },
        "quantity3Hours": {
            "value": 1.3,
            "quality": "1"
        },
        "quantity24Hours": {
            "value": 99.9,
            "quality": "9"
        }
    },
    "seaSurfaceTemperature": {
        "value": 6,
        "quality": "9"
    },
    "waveMeasurement": {
        "waves": {
            "period": 6,
            "height": 3.5,
            "quality": "9"
        },
        "seaState": {
            "code": "99",
            "quality": "9"
        },
        "method": "M"
    },
    "st": "x+68400+011800",
    "ts": "1984-03-05T15:00:00.000Z",
    "elevation": 9999,
    "callLetters": "LAQU",
    "qualityControlProcess": "V020",
    "dataSource": "4",
    "type": "FM-13",
    "sections": [
        "AG1",
        "AY1",
        "GF1",
        "MD1",
        "MW1",
        "SA1",
        "UA1"
    ],
    "pastWeatherObservationManual": [
        {
            "atmosphericCondition": {
                "value": "8",
                "quality": "1"
            },
            "period": {
                "value": 3,
                "quality": "1"
            }
        }
    ],
    "presentWeatherObservationManual": [
        {
            "condition": "26",
            "quality": "1"
        }
    ]
}
```

## Quality Indicators
- Quality values are typically strings where:
  - "1" indicates good quality
  - "9" indicates missing or questionable data

## Notes
- All timestamps are stored in UTC
- Coordinates follow the GeoJSON Point format
- Most numeric measurements include quality indicators
- The schema includes automatic timestamps for creation and updates
