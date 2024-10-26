const {
  GreeterClient,
} = require("./helloworld/protobuf/helloworld/helloworld_grpc_pb.js");

const messages = require("./helloworld/protobuf/helloworld/helloworld_pb.js");
const grpc = require("@grpc/grpc-js");

const client = new GreeterClient(
  "localhost:8080",
  grpc.credentials.createInsecure()
);

const vare = new messages.HelloRequest();
vare.setName("Artem");

client.sayHello(vare, (err, response) => {
  if (err) {
    console.error("Error:", err.message);
    return;
  }
  console.log(response.getMessage());
});

const num = new messages.StreamNumbersRequest();

num.setStart(10);
num.setEnd(50);

const call = client.streamNumbers(num);

call.on('data',function(response){
  console.log(response.getNumber());
});

call.on('end',function(){
  console.log('All numbers are displayed');
});