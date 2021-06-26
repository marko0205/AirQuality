
var amqp = require('amqplib');
var asciichart = require ('asciichart')

var data = new Array();

function stampa(val){
  console.log ("     ------------------------------------------------------ MONITOR ------------------------------------------------------\n")
  x = parseInt(val);
  data.push(x);
  data.push(x);
  data.push(x);
  console.log (asciichart.plot(data))
} 

amqp.connect('amqp://guest:guest@localhost:5672').then(function(conn) {
  process.once('SIGINT', function() { conn.close(); });
  return conn.createChannel().then(function(ch) {

    var ok = ch.assertQueue('iot/graph', {durable: false});

    ok = ok.then(function(_qok) {
      return ch.consume('iot/graph', function(msg) {
       // console.log("[x] Received '%s'", msg.content.toString());
        console.log('\033[2J');
        stampa(msg.content.toString());
        
      }, {noAck: true});
    });

    return ok.then(function(_consumeOk) {
      console.log(' [*] Waiting for messages. To exit press CTRL+C');
    });
  });
}).catch(console.warn);

