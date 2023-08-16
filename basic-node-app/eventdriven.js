/**
 * Event-Driven Architecture and the Event Loop
 * 
 */

console.log('Start');

setTimeout(() => {
    /**
     * the setTimeout function schedules a callback to be executed after 2 seconds. 
     * However, Node.js doesn't block the execution while waiting for the timeout to complete. 
     * Instead, it continues executing the remaining code. This demonstrates the non-blocking behavior 
     * of the event loop.
     * 
     */
  console.log('Inside setTimeout callback');
}, 2000);

console.log('End');



/**
 * Event-Driven Architecture Example: 
 * 
 * Let's create a simple event-driven architecture using the built-in EventEmitter class in Node.js. 
 * We'll simulate a scenario where a temperature sensor emits events when the temperature changes, and 
 * an event listener reacts to these changes.
 * 
 */

const EventEmitter = require('events');

class TemperatureSensor extends EventEmitter {
  constructor() {
    super();
    this.temperature = 0;
  }

  setTemperature(temperature) {
    this.temperature = temperature;
    this.emit('temperatureChanged', this.temperature);
  }
}

const sensor = new TemperatureSensor();

// Event listener
sensor.on('temperatureChanged', (temperature) => {
  console.log(`Temperature changed: ${temperature}°C`);
});

// Simulate temperature changes
sensor.setTemperature(25);
sensor.setTemperature(28);


// Emit the event
myEmitter.emit('myEvent', 'Hello, Event-Driven Architecture!');
