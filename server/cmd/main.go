package main

import (
	"context"
	"fmt"
	"grpc-server/internal/helloworld"
	"log"
	"net"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type HelloWorldService struct {
	helloworld.UnimplementedGreeterServer
}

func NewHelloWorldService() *HelloWorldService {
	return new(HelloWorldService)
}

func (s *HelloWorldService) SayHello(
	ctx context.Context, request *helloworld.HelloRequest,
) (*helloworld.HelloReply, error) {
	log.Printf("recieved request with name: %s", request.GetName())

	if request.GetName() == "" {
		log.Printf("error: name cannot be empty: %s", request.GetName())
		return nil, status.Error(codes.InvalidArgument, "name cannot be empty")
	}

	return &helloworld.HelloReply{
		Message: fmt.Sprintf("Hello, %s!", request.GetName()),
	}, nil
}

func (s *HelloWorldService) StreamNumbers(
	request *helloworld.StreamNumbersRequest,
	stream grpc.ServerStreamingServer[helloworld.StreamNumbersReply],
) error {
	requestStart := request.GetStart()
	requestEnd := request.GetEnd()

	log.Printf("recieved request with start (%d) and end (%d)", requestStart, requestEnd)

	if requestStart >= requestEnd {
		log.Printf("error: start (%d) cannot be bigger than end (%d)", requestStart, requestEnd)
		return status.Error(codes.InvalidArgument, "start cannot be bigger than end")
	}

	for i := requestStart; i < requestEnd; i++ {
		reply := &helloworld.StreamNumbersReply{Number: i}
		if err := stream.Send(reply); err != nil {
			return nil
		}

		time.Sleep(1 * time.Second)
	}

	return nil
}

func main() {
	listener, err := net.Listen("tcp", "127.0.0.1:8080")
	if err != nil {
		log.Printf("failed to open server: %v", err)
		return
	}

	server := grpc.NewServer()
	helloworld.RegisterGreeterServer(server, NewHelloWorldService())

	log.Println("server is started")
	if err := server.Serve(listener); err != nil {
		log.Printf("failed to serve: %v", err)
		return
	}
}
