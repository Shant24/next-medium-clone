APP_NAME=blog-next-medium-clone
DOCKERFILE=./Dockerfile

.PHONY: build run log stop remove image-remove clean

# Build the Docker image
build:
	docker build -t $(APP_NAME) . -f $(DOCKERFILE)

# Start a Docker container
run:
	docker run -d --rm --name $(APP_NAME) -p 4040:3000 $(APP_NAME)

# Show a Docker logs
log:
	docker logs $(APP_NAME) || true

# Stop the Docker container
stop:
	docker stop $(APP_NAME) || true

# Remove the Docker container
remove:
	docker rm $(APP_NAME) || true

# Remove the Docker image
image-remove:
	docker rmi $(APP_NAME) || true

# Stop, remove container and image
clean:
	docker stop $(APP_NAME) || true
	docker rm $(APP_NAME) || true
	docker rmi $(APP_NAME) || true
