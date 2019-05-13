#!/bin/bash

database="zerenitydb"

echo "Configuring database: $database"

dropdb -U node_user zerenitydb
createdb -U node_user zerenitydb

psql -U node_user zerenitydb < ./bin/sql/services.sql
psql -U node_user zerenitydb < ./bin/sql/appointments.sql
psql -U node_user zerenitydb < ./bin/sql/images.sql

echo "$database configured"