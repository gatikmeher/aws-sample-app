#!/bin/bash
sudo killall -9 node
echo 'Backend Server Killed'
node server.js >/dev/null 2>&1 < /dev/null &
echo 'Backend Server Started'