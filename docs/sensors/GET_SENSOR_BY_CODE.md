# Sensors Resources

    GET v1/public/sensors/:code

## Description
Returns the sensor of reference code.

## Request Parameters

- **code** _(required)_ — string

***

## Example
**Request URI**

    http://localhost:8000/v1/public/sensors/sensor-1

**Request Response**
``` json
{
    "service": "sensor",
    "msg": "Sensor found !",
    "sensor": {
        "_id": "5d76d8491c9d440000d40308",
        "code": "sensor-1",
        "value": 952
    }
}
```