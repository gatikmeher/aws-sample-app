#!/bin/bash
# Install dependencies for backend
cd /home/ec2-user/backend
npm install

# Install dependencies for frontend
cd /home/ec2-user/frontend
npm install
npm run build
