# Machine Learning Components in Warehouse Management

## Expiry Time Prediction
### Description
This model predicts the approximate expiry time of perishable goods by taking real-time environmental parameters like 
+ Temperature (Farenheit)
+ Humidity (relative humidity - %)
+ Ice (0/1)
+ Water Sprinkled (0/1)
+ Carbon Dioxide Levels (ppm)
+ Oxygen Levels (ppm)
+ Ethylene Concentration (ppm)

## Ethylene Controller
### Description
+ Most of the food products, especially fruits, produce an organic compound called Ethylene 
+ It helps in the ripening of the fruit 
+ The level of ethylene and rate of ripening is a variety-dependent process
+ It is very hard to control during logistics and storage.

The model takes real-time environmental parameters like 
+ Temperature (Farenheit)
+ Humidity (relative humidity - %)
+ Ice (0/1)
+ Water Sprinkled (0/1)
+ Carbon Dioxide Levels (ppm)
+ Oxygen Levels (ppm)

The recommended Ethylene level (which is predicted) and the real-time data from the sensor is compared. If the conditions is unfavorable, signals are sent to ventilation systems until the level of Ethylene is reduced. 

## Setup

+ Install Jupyter Notebooks from [here](https://jupyter.org/)
+ Else, use [Google Colab](https://colab.research.google.com/)

## Run
+ Open Jupyter
+ Run the notebooks