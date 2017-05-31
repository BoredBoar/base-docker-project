psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
  CREATE USER new_user;
  ALTER ROLE new_user PASSWORD 'new_pass';
  CREATE DATABASE new_db;
  GRANT ALL PRIVILEGES ON DATABASE new_db TO new_user;
EOSQL
