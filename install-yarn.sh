#!/bin/bash
cd node-server/ && yarn && cd ../;
cd frontend/ && yarn && cd ../;
cp node-server/.env.model node-server/.env;
cp .env.model .env;
echo "Now run: docker-compose up";
