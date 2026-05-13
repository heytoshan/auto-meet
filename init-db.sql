-- Initialize Auto-Meet Database
CREATE DATABASE IF NOT EXISTS automeet;

-- Create user if not exists
DO $$
BEGIN
    IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'automeet_user') THEN
        CREATE ROLE automeet_user WITH LOGIN PASSWORD 'automeet_password';
    END IF;
END
$$;

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE automeet TO automeet_user;
GRANT ALL PRIVILEGES ON SCHEMA public TO automeet_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO automeet_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO automeet_user;
