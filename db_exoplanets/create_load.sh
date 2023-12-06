#!/usr/bin/env bash

mysqladmin ping -u root -pmysql --wait=30 -v
mysql -u root -pmysql sys < /home/mysql/create_load.sql