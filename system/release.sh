#!/usr/bin/env bash
set -euo pipefail

IMAGE_TAG=$1
docker buildx build --push \
  --tag jajcoszek/viennacalling-frontend:${IMAGE_TAG} \
  --tag jajcoszek/viennacalling-frontend:latest \
  --platform linux/amd64,linux/arm64 \
  .

cd deploy
../kustomize edit set image jajcoszek/viennacalling-frontend=jajcoszek/viennacalling-frontend:${IMAGE_TAG}
