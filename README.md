# full cycle 3.0

## docker
some **very** basic docker commands :smile:

### run, rm and exec
* docker run -it --rm `container` `command` ::: executes the command and autoremove the container afterwards.
* docker run -p 8080:80 `container` ::: redirects the port 8080 from host to port 80 from container.
* docker run -d `container` ::: run the container detached from host, releasing the host terminal, for instance.
* docker run --name `name` `container` ::: give a name to the container.

* docker rm [-f] `container` ::: removes the container, -f allways the things the rough!
* docker rm $(docker ps -a -q) -f ::: mind blowing to remove all containers :smile:.

* docker exec [-it] `container` `comamand` ::: executes the command inside the container. 

### mount, bind, volume
* local paths
  * docker run -v `/path/to/local/folder:/path/to/container/folder` ::: binds a local folder to a container folder.

  * docker run --mount type=bind,source=/path/to/local/folder,target=/path/to/container/folder ::: binds a local folder to a container folder.
    > hint : it's possible to use some shell commands, e.g.: source="$(pwd)"/folder.

* volumes
  * docker volume create `volume-name`.
  * docker volume inspect `volume-name`.
  * docker volume prune.
  
  * docker run -v `volume-name:/path/to/container/folder` ::: binds a volume to a container folder.

  * docker run --mount type=volume,source=`volume-name`,target=target=/path/to/container/folder ::: binds a volume to a container folder.

### images
* basic
  * docker images ::: list all local images on host.
  * docker rmi ::: remove images

* build
  * Docker file example on /docker/Dockerfile
  * docker build -t `container-registry-username-or-path/image-name:tag /path/to/local/Dockerfile` ::: builds an image based on Docker file and tag it (-t) with the followed options.
  * 

