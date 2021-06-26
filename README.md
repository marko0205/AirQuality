# Air Quality Meter
University project for serverless course

Have you ever wondered about the quality of the air you are breathing, or maybe, why you sometimes feel sleepy in the office or tired in the morning even after sleeping all night? Poor air quality can lead to many negative health effects as well as can cause tiredness, headaches, loss of concentration, increased heart rate and so on. Monitoring the quality of the air may actually be more important than you realize. 

In this IoT project, a sensor will detect Co2 values and send them to a queue of the RabbitMQ message broker. Then the monitor will read the message, and classifies the Co2 values as "Low", "Normal" or "High" and then send a message to 2 different queues: one where is a listening a FanSystem which will decrease or increase the speed of the fans, and another to a monitor for do a simple live graph of the data.

# Requirements

- Ubuntu 20.04
- Docker and Docker Compose 
- Nuclio
- RabbitMQ
- nodeJS
- [asciichart](https://github.com/kroitor/asciichart)



## Installation
Install nodeJS and all the needed library:

```bash
sudo apt install nodejs

npm install amqplib

npm install mqtt

npm install asciichart
```

## Usage


Start [Nuclio](https://github.com/nuclio/nuclio) using a docker container.

```sh
docker run -p 8070:8070 -v /var/run/docker.sock:/var/run/docker.sock -v /tmp:/tmp nuclio/dashboard:stable-amd64
```
Start [RabbitMQ](https://www.rabbitmq.com) instance with MQTT enabled using docker.

```sh
docker run -p 9000:15672  -p 1883:1883 -p 5672:5672  cyrilix/rabbitmq-mqtt 
```
Now you can import the functions into Nuclio dashboard and run them from there or with the provided script.

Don't forget to start the two scripts for show the outputs
```sh
node monitor.js
node log.js
```

 



