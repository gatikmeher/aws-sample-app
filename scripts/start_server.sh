#!/bin/bash

# Kill all node server
sudo killall -9 node

# Start backend server
cd /home/ec2-user/backend
sudo chmod 755 start_backend.sh
sudo ./start_backend.sh
#nohup npm start &

# Serve frontend build files
cd /home/ec2-user/frontend
#nohup npx serve -s . &
sudo chmod 755 start_frontend.sh
sudo ./start_frontend.sh

