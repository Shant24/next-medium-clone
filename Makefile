APP_NAME=blog-next-medium-clone
DOCKERFILE=./Dockerfile
BUILD_DIR=./
PORT=4040:3000
RESTART_POLICY=always # no, on-failure, on-failure[:max-retries], unless-stopped, always

.PHONY: ls create-network build run log stop rm-container rm-image clear rebuild

# Show help
ls:
	grep '^[a-zA-Z0-9_-]*:' Makefile

# Check if Docker Network does not exist and create it
create-network:
	docker network ls|grep $(NETWORK) > /dev/null \
		|| docker network create --driver $(NETWORK_DRIVER) $(NETWORK) || true

# Build the Docker image
build:
	docker build -t $(APP_NAME) ${BUILD_DIR} -f $(DOCKERFILE)

# Start a Docker container
run:
	docker run -d \
		--name $(APP_NAME) \
		--restart $(RESTART_POLICY) \
		-p $(PORT) \
		$(APP_NAME)

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
clear: stop rm-container rm-image

# Stop, remove container, remove image and build again
rebuild: clear build
