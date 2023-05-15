APP_NAME=blog-next-medium-clone
DOCKERFILE=./Dockerfile
PORT=4040
NETWORK=

.PHONY: build run run-n log stop rm-container rm-image clean

# Build the Docker image
build:
	docker build -t $(APP_NAME) . -f $(DOCKERFILE)

# Start a Docker container
run:
	docker run -d --rm --name $(APP_NAME) -p $(PORT):3000 $(APP_NAME)

run-n:
	docker run -d --rm --name $(APP_NAME) --network $(NETWORK) -p $(PORT):3000 $(APP_NAME)

# Show a Docker logs
log:
	docker logs $(APP_NAME) || true

# Stop the Docker container
stop:
	docker stop $(APP_NAME) || true

# Remove the Docker container
rm-container:
	docker rm $(APP_NAME) || true

# Remove the Docker image
rm-image:
	docker rmi $(APP_NAME) || true

# Stop, remove container and image
clean: stop rm-container rm-image
