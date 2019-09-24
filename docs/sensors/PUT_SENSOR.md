# Sensors Resources

    PUT v1/public/sensors/:code

## Description
Edit and return the sensor of reference code.

## Request Parameters

- **code** _(required)_ — string

## Request Body

- **sensor** _(required)_ — object
    - **code** _(required)_ — string
    - **value** _(required)_ — number

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