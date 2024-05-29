#!/bin/bash
sudo killall -9 node-18
echo 'Frontend server killed'
cd build
sudo npx serve -s . >/dev/null 2>&1 < /dev/null &
echo 'Frontend Server Started'
sudo service nginx status
echo 'Nginx stopped'
sudo service nginx start
echo 'Nginx started'