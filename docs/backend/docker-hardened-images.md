# Docker Hardened Images (dhi)

We've already gone through quite the journey when it comes to containers.
Starting with distro based container images and installing all the dependencies ourselves, to using the official images that match the environment that we need.
Now it's time to have even more focus on securing things by using hardened images.
Hardening in terms of software typically means that special attention was paid to making sure that the software does not contain serious security flaws.
For more information on hardening, see: https://en.wikipedia.org/wiki/Hardening_(computing).

## What are Docker Hardened Images?

Taken from the FAQ on https://www.docker.com/products/hardened-images/ :

> "Docker Hardened Images are near-zero CVE, secure-by-default, minimal container images designed to serve as a trusted, verifiable upstream for modern software supply chains. Each image is continuously rebuilt from source, reducing attack surface while patching known CVEs as fixes become available rather than on a manual schedule.
> 
> The catalog includes thousands of production-ready images spanning runtimes, frameworks, databases, and infrastructure components, with open-source free and commercial tiers available.

So they help us with keeping the runtime of our projects secure. These images do often work a little different from what we are used to at the moment.

For example with the Python image there is a runtime image and a dev image that are supposed to be used in a multistage build. There is a guide available that explains the concept and how to migrate: https://hub.docker.com/hardened-images/catalog/dhi/python/guides.

Now it might be necessary to install/copy some libraries or dependencies from other images or using the package manager of the underlying distro. We need to be careful with that, because it can and likely will degrade security in some way.
So if possible, install or build dependencies in the dev stage and copy them to the runtime stage, and only pull them from other hardened images. 

### What about `uv`?

There is a guide for that: https://hub.docker.com/hardened-images/catalog/dhi/uv/guides.
By following it we can prevent degraded security because we are copying our dependency from another secure trusted source.

## What is the standard?
The standard is to use hardened images in our projects.

## When and for whom is this standard?
This standard is for all projects of vakgroep softwareontwikkeling.

## How to apply this standard?
Use the hardened images in a multistage build and make sure any dependencies originate from a secure source image. Verify the result using https://trivy.dev/.

## Considerations
The Docker hardened images are a good option for us as opposed to solutions like the bitnami catalog because we already have a subscription with Docker for one, which makes it relatively accessible. Furthermore it's free and open under the Apache 2.0 license.
There are also options available to move to tiers with even more support, etc should we need that in the future.
