#!/bin/bash
npm install --prefix ./node-server/;
npm install --prefix ./frontend/;
cp node-server/.env.model node-server/.env;
cp .env.model .env;
echo "Now run: docker-compose up";
