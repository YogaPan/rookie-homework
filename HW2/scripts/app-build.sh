#!/bin/bash

set -ex

DIR=$(dirname "$0")
DOCKER_COMPOSEPATH="${DIR}/../docker-compose.yml"

docker-compose -f $DOCKER_COMPOSEPATH build
