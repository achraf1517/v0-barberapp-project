-- Crear un usuario admin con todos los permisos sobre la base de datos barberapp
CREATE USER IF NOT EXISTS 'admin'@'localhost' IDENTIFIED BY 'admin1234';
GRANT ALL PRIVILEGES ON barberapp.* TO 'admin'@'localhost';
FLUSH PRIVILEGES;

-- Verificar si las columnas existen antes de intentar crearlas
SET @dbname = 'barberapp';
SET @tablename = 'users';

-- Para rol
SELECT COUNT(*) INTO @exists 
FROM information_schema.columns 
WHERE table_schema = @dbname 
    AND table_name = @tablename 
    AND column_name = 'rol';

SET @query = IF(@exists = 0,
    'ALTER TABLE users ADD COLUMN rol ENUM("cliente", "barbero", "admin") DEFAULT "cliente"',
    'SELECT "Column rol already exists"');
PREPARE stmt FROM @query;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Para estado
SELECT COUNT(*) INTO @exists 
FROM information_schema.columns 
WHERE table_schema = @dbname 
    AND table_name = @tablename 
    AND column_name = 'estado';

SET @query = IF(@exists = 0,
    'ALTER TABLE users ADD COLUMN estado ENUM("activo", "inactivo") DEFAULT "activo"',
    'SELECT "Column estado already exists"');
PREPARE stmt FROM @query;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;

-- Para creado_en
SELECT COUNT(*) INTO @exists 
FROM information_schema.columns 
WHERE table_schema = @dbname 
    AND table_name = @tablename 
    AND column_name = 'creado_en';

SET @query = IF(@exists = 0,
    'ALTER TABLE users ADD COLUMN creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
    'SELECT "Column creado_en already exists"');
PREPARE stmt FROM @query;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
