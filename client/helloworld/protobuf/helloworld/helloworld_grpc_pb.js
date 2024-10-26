// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protobuf_helloworld_helloworld_pb = require('../../protobuf/helloworld/helloworld_pb.js');

function serialize_helloworld_HelloReply(arg) {
  if (!(arg instanceof protobuf_helloworld_helloworld_pb.HelloReply)) {
    throw new Error('Expected argument of type helloworld.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_HelloReply(buffer_arg) {
  return protobuf_helloworld_helloworld_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_HelloRequest(arg) {
  if (!(arg instanceof protobuf_helloworld_helloworld_pb.HelloRequest)) {
    throw new Error('Expected argument of type helloworld.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_HelloRequest(buffer_arg) {
  return protobuf_helloworld_helloworld_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_StreamNumbersReply(arg) {
  if (!(arg instanceof protobuf_helloworld_helloworld_pb.StreamNumbersReply)) {
    throw new Error('Expected argument of type helloworld.StreamNumbersReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_StreamNumbersReply(buffer_arg) {
  return protobuf_helloworld_helloworld_pb.StreamNumbersReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_StreamNumbersRequest(arg) {
  if (!(arg instanceof protobuf_helloworld_helloworld_pb.StreamNumbersRequest)) {
    throw new Error('Expected argument of type helloworld.StreamNumbersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_StreamNumbersRequest(buffer_arg) {
  return protobuf_helloworld_helloworld_pb.StreamNumbersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreeterService = exports.GreeterService = {
  sayHello: {
    path: '/helloworld.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: protobuf_helloworld_helloworld_pb.HelloRequest,
    responseType: protobuf_helloworld_helloworld_pb.HelloReply,
    requestSerialize: serialize_helloworld_HelloRequest,
    requestDeserialize: deserialize_helloworld_HelloRequest,
    responseSerialize: serialize_helloworld_HelloReply,
    responseDeserialize: deserialize_helloworld_HelloReply,
  },
  streamNumbers: {
    path: '/helloworld.Greeter/StreamNumbers',
    requestStream: false,
    responseStream: true,
    requestType: protobuf_helloworld_helloworld_pb.StreamNumbersRequest,
    responseType: protobuf_helloworld_helloworld_pb.StreamNumbersReply,
    requestSerialize: serialize_helloworld_StreamNumbersRequest,
    requestDeserialize: deserialize_helloworld_StreamNumbersRequest,
    responseSerialize: serialize_helloworld_StreamNumbersReply,
    responseDeserialize: deserialize_helloworld_StreamNumbersReply,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
