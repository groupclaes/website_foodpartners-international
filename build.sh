#!/bin/bash
docker_tag="latest"
docker_company="fpi"
docker_reg="docker-registry.groupclaes.be"
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')
PACKAGE_NAME=$(cat package.json \
  | grep name \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

echo "building docker images ${docker_reg}/${docker_company}_${PACKAGE_NAME}:${docker_tag} and ${docker_reg}/${docker_company}_${PACKAGE_NAME}:${PACKAGE_VERSION}"

docker build -t "${docker_reg}/${docker_company}_${PACKAGE_NAME}:${docker_tag}" -t "${docker_reg}/${docker_company}_${PACKAGE_NAME}:${PACKAGE_VERSION}" -f Dockerfile . && docker push "${docker_reg}/${docker_company}_${PACKAGE_NAME}:${docker_tag}" && docker push "${docker_reg}/${docker_company}_${PACKAGE_NAME}:${PACKAGE_VERSION}"

echo "Last runtime: $(date)"

docker image prune --filter label="stage=build" --force
echo "removed build stage image"