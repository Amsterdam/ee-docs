# Docker Standard for Internal Application Development and Deployment
> This page was last reviewed 10th October 2024. It needs to be reviewed again on the 10th April 2025.
## What is the standard for Docker?
Use Docker for containerization in the development, testing, and production of applications within the Municipality. Developers must use Dockerfiles that meet the minimum requirements outlined below. Dockerfiles are stored in the application repository in **GitHub**, while the compiled Docker images are stored in **Azure Container Registry (ACR)**.

## When and for whom is this standard applicable?
This guideline applies to all developers (front-end and back-end), IT administrators, and DevOps teams within the Municipality. It applies to all projects. Projects that started before September 2024 with a different configuration must be adapted to this standard.

## What is required when using Docker?

- **Dockerfile**: A Dockerfile is mandatory and must meet the following minimum requirements:
    - [ ] **Base Image**: Use well-known and well-maintained base images and make sure that the version number is the latest, otherwise -2/-3 of the latest version. In addition, it is of high importance that the version number should **never** explicitly state `latest`. The most commonly used images are: Alpine, NGINX, Node.js, PHP, Postgres, Python and Ubuntu.
    - [ ] **Minimal Installations**: Limit the installation of additional packages to what is strictly necessary to keep the image lightweight and secure.
    - [ ] **Version Control**: Explicitly specify the versions of all dependencies to ensure consistency.
- **Docker Image Storage**: Dockerfiles must be stored in the application repository in **GitHub**. The compiled Docker images must be stored in **ACR**. Only in cases where an image is shared across multiple teams or other municipalities may **Docker Hub** be used.

## Standard ADO Pipelines

For building and pushing images to **ACR**, you can refer to the standard ADO pipelines available at:
[ADO Pipelines for building and pushing images to ACR](https://github.com/Amsterdam/common-azure-pipelines)

### Example steps for deploying a Docker image to ACR:

```bash
az acr login --name <acr_name>
docker build -t <acr_name>.azurecr.io/<image_name>:<tag> .
docker push <acr_name>.azurecr.io/<image_name>:<tag>
```

- **Security**: The use of environment variables is mandatory for safely managing sensitive data. Avoid hard-coded sensitive information in Dockerfiles. If additional security is required, consider using **Docker Secrets** or other tools such as **GitHub Secrets**, **Azure Key Vault**, or **ADO Secrets**, depending on the application and the sensitivity of the data.

### Example of using environment variables:

```dockerfile
# Set the environment variable for the database password
ENV DB_PASSWORD=${DB_PASSWORD}

# Run the Python application using the environment variable
CMD ["python", "app.py"]
```

### Example of using Docker Secrets (only available with Docker Swarm):

```bash
# Docker Secrets are only available when using Docker Swarm
# Create a Docker secret for the database password
echo "mysecretpassword" | docker secret create db_password -

# Use the secret to create a Docker service (Docker Swarm required)
docker service create --name myapp --secret db_password myapp:latest
```

- **Regular Updates**: Docker images must be updated regularly to apply security patches and performance improvements. Establishing a minimum update frequency, such as monthly or quarterly, provides a clear framework for maintaining up-to-date images.

## What to avoid?

- Do not use unofficial or uncertified Docker images.
- Avoid building different images for DTAP/OTAP-environments.

## Considerations

- **Compatibility with Existing Systems**: Thoroughly test Docker images to ensure compatibility with existing infrastructure before they are deployed to production.

## Further Reading

- [Docker Official Documentation](https://docs.docker.com/)
- [Azure Container Registry Documentation](https://docs.microsoft.com/en-us/azure/container-registry/)
